import { useState, useRef, useEffect, forwardRef } from "react";
import Calendar from "./Calendar";
// import Popup from '../components/Popup';

const Service = forwardRef((props, ref) => {
    //Update the rooms being allocated in schedule

    const serviceId = ref;

    const [serviceList, setServiceList] = useState([]);
    //The list of add on services the user can choose from
    const [addOnList, setAddOns] = useState([]);
    //This is used to measure when the prior state variable is ready
    const [checkAddOns, setCheckAddOns] = useState(false);
    //This is used to signify the end of the inventory fetch request
    const [wait, setWait] = useState(true);


    const [specialRequests, setSpecialRequests] = useState("");
    //Loads the rates for one services
    const [loadOptions, setOptions] = useState([]);
    //This is used to measure when the prior state variable is ready
    const [checkOptions, setCheckOptions] = useState(false);

    //Service State Variables:
    const [serviceType, setServiceType] = useState("");
    const [serviceClient, setServiceClient] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    //Service add on variables
    const [addOnOne, setAddOnOne] = useState(["", 0]);
    const [addOnTwo, setAddOnTwo] = useState(["", 0]);
    const [addOnCount, setAddOnCount] = useState(1);
    //The default value 1 is set because item category 1 is where the main services are located
    const [serviceItemCategory, setServiceItemCategory] = useState(1);
    const [serviceDuration, setServiceDuration] = useState("");
    const [serviceTimeSlots, setServiceTimeSlots] = useState([]);
    const [serviceDate, setServiceDate] = useState("");
    const [room, setRoom] = useState("");

    const calendarId = useRef(null);

  //   useEffect(() => {
  //     props.handleChange({ref: serviceId.current, serviceType, serviceClient, servicePrice, addOnOne, addOnTwo})
  // }, [serviceType, serviceClient, servicePrice, addOnOne[0], addOnTwo[0]])

    useEffect(() => {
      let receipt = localStorage.getItem("receipt");
      
      receipt == null ? receipt = {} : receipt = JSON.parse(receipt);
      const keys = ["serviceone", "servicetwo", "servicethree", "servicefour", "servicefive"];

      let addOnData = [];
      //Checks the add on service values to see if the user selected them
      if(addOnOne[0] != "") {
        const addOnOneObj = {addition: addOnOne[0], price: addOnOne[1]};
        addOnData.push(addOnOneObj);
      }
      
      if(addOnTwo[0] != "") {
        const addOnTwoObj = {addition: addOnTwo[0], price: addOnTwo[1]}
        addOnData.push(addOnTwoObj);
      }

      let servicedata = {type: serviceType, client: serviceClient, price: servicePrice};

      //If the user added any add on services then they are added to the reservation request body
      addOnData.length > 0 ? servicedata.addons = addOnData : null;
    
      receipt[keys[props.keynumber - 1]] = servicedata;
      localStorage.setItem("receipt", JSON.stringify(receipt));

      props.refreshReceipt(true);

    }, [serviceType, serviceClient, servicePrice, addOnOne[0], addOnTwo[0], serviceDuration])

    useEffect(() => {
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `inventory/`;

        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const serviceCategories = data.filter((itemList) => itemList.ItemCategory == 1 || itemList.ItemCategory == 2);
            let listOfServices = [];
            for (let i=0; i < serviceCategories.length; i++) {
                let itemCategoryNum = serviceCategories[i];
                let orgList = serviceCategories
                let list = orgList[i].Items.map((serviceObj) => {return {Item: serviceObj.Item, Prices: serviceObj.Prices, ItemCategory: itemCategoryNum.ItemCategory}});
                listOfServices = [...listOfServices, ...list];
            }
            setServiceList([...listOfServices]);
            
            const addOnServices = data.filter((itemList) => itemList.ItemCategory == 4);
            setAddOns(addOnServices[0].Items);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, []);

    useEffect(() => {
        serviceList.length > 0 ? setWait(false) : null;
    }, [serviceList])

    useEffect(() => {
      addOnList.length > 0 ? setCheckAddOns(true) : null;
    }, [addOnList])

    useEffect(() => {
      addOnCount == 1 ? setAddOnTwo(["", 0]) : null;
  }, [addOnCount])

    // useEffect(() => {
    //     const preSelected = localStorage.getItem("service");
    //     preSelected ? checkServiceInfo(preSelected) : null;
    // }, [])

    useEffect(() => {
        //Set the service price when the duration has been selected
        if (serviceDuration !== "" && checkOptions) {
            let currentRate = loadOptions.filter((rate) => Number(rate.time) == Number(serviceDuration));
            setServicePrice(currentRate[0].cost);
        }
  }, [serviceDuration])


  //Updates the service's type, item category, rates (setOptions state variable), and resets the duration
  const checkServiceInfo = (event) => {
    //Duration and Price are updated to reset Calendar and Schedule as well as to update local storage values
    setServiceDuration("");
    setServicePrice("")

    //Maps through service list data for the inventory number associated with the serviceType and service price rates
    serviceList.map((service) => {
        if(service.Item == event.target.value) {
            setServiceItemCategory(Number(service.ItemCategory));
            // console.log("Item Category", serviceItemCategory);
            //Sets the service's price rates
            setOptions(service.Prices);
        }
    })
    setServiceType(event.target.value);
    setCheckOptions(true);
  }

  const updateDateAndTime = (calendarData) => {
    // console.log(calendarData.loadTimeSlots, "updateDateAndTime");

    setRoom(calendarData.room);
    setServiceTimeSlots(JSON.parse(`[${calendarData.loadTimeSlots}]`));
    const date = `${calendarData.loadMonth} ${calendarData.loadDay}, ${calendarData.loadYear}`;
    setServiceDate(date);
  }

  const updateServicePrice = (serviceDuration) => {
    const currentRate = loadOptions.filter((rate) => Number(rate.time) == Number(serviceDuration));
    currentRate.length > 0 ? setServicePrice(currentRate[0].cost) : null;
  }

  const handleAddOnService = (event, addOnNumber) => {
    if(addOnNumber == 1) {
      const newAddOnOne = [event.target.value, event.target.selectedOptions[0].getAttribute("price")];
      setAddOnOne(newAddOnOne)
    }

    if(addOnNumber == 2) {
      const newAddOnTwo = [event.target.value, event.target.selectedOptions[0].getAttribute("price")];
      setAddOnTwo(newAddOnTwo)
    }
  }
    

  return (
    <div ref={serviceId} service-key={props.keynumber} type={serviceType} client={serviceClient} price={servicePrice} itemcategory={serviceItemCategory} duration={serviceDuration} timeslots={serviceTimeSlots} servicedate={serviceDate} specialrequest={specialRequests} room={room} addonone={addOnOne} addontwo={addOnTwo}>
        <div className="formInputDiv">
          <select className="reservationFormFields" title="service" name="type" value={serviceType} onChange={(e) => {checkServiceInfo(e)}}>
            <option  value="" disabled>-Select Massage-</option>
            { !wait ? serviceList.map((item) => {
                return(<option key={item.Item} value={item.Item} itemcategory={item.itemCategory}>{item.Item}</option>)
            }) : null}
          </select>

          {checkOptions ? 
          <select className="reservationFormFields" title="duration" name="type" value={serviceDuration} price={servicePrice} onChange={(e) => {setServiceDuration(e.target.value); updateServicePrice(e.target.value)}}>
            <option value="" disabled>-Select Duration-</option>
            {loadOptions.map((choice) => {
                return(<option key={choice.time} value={choice.time} price={choice.cost}>{choice.time} Minutes</option>)
            })}
          </select>
            : null}

          {checkAddOns ? 
          <select className="reservationFormFields" title="addon" name="type" value={addOnOne[0]} price={addOnOne[1]} onChange={(e) => {handleAddOnService(e, 1)}}>
            <option value="" price={0}>Add On: -None-</option>
            {addOnList.map((choice) => {
                return(<option key={choice.Item} value={choice.Item} price={choice.Prices[0].cost}>Add On: {choice.Item} Service</option>)
            })}
          </select>
            : null}

          {addOnCount > 1 ?
          <select className="reservationFormFields" title="addon" name="type" value={addOnTwo[0]} price={addOnTwo[1]} onChange={(e) => {handleAddOnService(e, 2)}}>
          <option value="" price={0}>Add On: -None-</option>
          {addOnList.map((choice) => {
              return(<option key={choice.Item} value={choice.Item} price={choice.Prices[0].cost}>Add On: {choice.Item} Service</option>)
          })}
          </select>
            : null}

          { addOnCount < 2 ? <button type="button" onClick={() => {setAddOnCount(addOnCount + 1)}}>Create Add On</button> : null}
          { addOnCount > 1 ? <button type="button" onClick={() => {setAddOnCount(addOnCount - 1)}}>Remove Add On</button> : null}
          
          <input className="reservationFormFields" type="text" placeholder="Client for Service" autoComplete="off" value={serviceClient} onChange={(e) => {setServiceClient(e.target.value)}} />
          
        </div>

        <div>
          <input className="reservationFormFields" type="text" placeholder="Special Requests" autoComplete="off" value={specialRequests} onChange={(e) => {setSpecialRequests(e.target.value)}} />
        </div>

        {serviceDuration ? <div duration={serviceDuration} itemcategory={serviceItemCategory}>
          <Calendar ref={calendarId} year="" month="" day="" timeslots="" duration={serviceDuration} itemcategory={serviceItemCategory} schedule="true" handleChange={(e) => {updateDateAndTime(e)}} />
          <p className="errorTxt hide">Please choose an available appointment time</p>
        </div> : null}
      </div>
  );
});

export default Service;
