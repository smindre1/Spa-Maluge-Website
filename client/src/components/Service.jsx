import { useState, useRef, useEffect, forwardRef } from "react";
import Calendar from "./Calendar";
import shopCheck from "../../utils/shopCheck";
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
    const [serviceDate, setServiceDate] = useState("");
    const [serviceTimeSlots, setServiceTimeSlots] = useState([]);
    const [room, setRoom] = useState("");
    //Variables to check error status
    const [duplicateError, setDuplicateError] = useState(false);
    const [serviceTypeError, setServiceTypeError] = useState(false);
    const [serviceDurationError, setServiceDurationError] = useState(false);
    const [serviceTimeSlotsError, setServiceTimeSlotsError] = useState(false);
    const [serviceDateError, setServiceDateError] = useState(false);
    

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
      // localStorage.setItem("receipt", JSON.stringify(receipt));

      props.refreshReceipt(true);

    }, [serviceType, serviceClient, servicePrice, addOnOne[0], addOnTwo[0], serviceDuration])

    useEffect(() => {
      setServiceList(props.items);
      setAddOns(props.additions);
    }, [props.items, props.additions])

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

  const inputsFilled = () => {
    //Checks if all required service inputs are filled
    if(serviceType != "" && serviceType != null) {
      setServiceTypeError(false);
    } else {
      setServiceTypeError(true);
      return false;
    }

    if(serviceDuration != "" && serviceDuration != null) {
      serviceTypeError === false ? setServiceDurationError(false) : null;
    } else {
      setServiceDurationError(true);
      return false
    }

    if(serviceDate != "" && serviceDate != null) {
      serviceTypeError === false && serviceDurationError === false ? setServiceDateError(false) : null;
    } else {
      setServiceDateError(true);
      return false;
    }

    if(serviceTimeSlots.length > 0 && serviceTimeSlots != null) {
      serviceTypeError === false && serviceDurationError === false && serviceDateError == false ? setServiceTimeSlotsError(false) : null;
    } else {
      setServiceTimeSlotsError(true)
      return false;
    }
    return true;
  }

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
    
  //Will record the service to local storage and reset variables
  const addService = () => {
    let list = localStorage.getItem("spa_maluge_cart");
    list === null ? list = [] : list = JSON.parse(list);
    
    //Key For Local Storage variables:
    //type: pro, client: cl, price: pr, itemcategory: cat, duration: dur, timeslots: app, servicedate: day, specialrequest: req, room: ro, addonone: a_i, addontwo: a_ii
    const serviceObj = {pro:serviceType, cl:serviceClient, pr:servicePrice, cat:serviceItemCategory, dur:serviceDuration, app:serviceTimeSlots, day:serviceDate, req:specialRequests, ro:room, a_i:addOnOne, a_ii:addOnTwo};
    
    let duplicate = shopCheck.checkDouble(list, serviceObj);
    duplicate ? setDuplicateError(true) : setDuplicateError(false);
    
    

    if(!duplicate && inputsFilled()) {
      list.push(serviceObj);
      localStorage.setItem("spa_maluge_cart", JSON.stringify(list));

      //Reset Service Values
      setServiceType("");
      setServiceClient("");
      setServicePrice("");
      setAddOnOne(["", 0]);
      setAddOnTwo(["", 0]);
      setAddOnCount(1);
      setServiceItemCategory(1);
      setServiceDuration("");
      setServiceTimeSlots([]);
      setServiceDate("");
      setSpecialRequests("");
      setRoom("");
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
          {serviceTypeError ? <p className="errorTxt">*Please select a service</p> : null}

          {checkOptions ? 
          <select className="reservationFormFields" title="duration" name="type" value={serviceDuration} price={servicePrice} onChange={(e) => {setServiceDuration(e.target.value); updateServicePrice(e.target.value)}}>
            <option value="" disabled>-Select Duration-</option>
            {loadOptions.map((choice) => {
                return(<option key={choice.time} value={choice.time} price={choice.cost}>{choice.time} Minutes</option>)
            })}
          </select>
            : null}
          {serviceDurationError ? <p className="errorTxt">*Please select the service's duration</p> : null}

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

          { addOnCount < 2 ? <button type="button" className="resBtn" onClick={() => {setAddOnCount(addOnCount + 1)}}>Create Add On</button> : null}
          { addOnCount > 1 ? <button type="button" className="resBtn" onClick={() => {setAddOnCount(addOnCount - 1)}}>Remove Add On</button> : null}
          
          <input className="reservationFormFields" type="text" placeholder="Client for Service" autoComplete="off" value={serviceClient} onChange={(e) => {setServiceClient(e.target.value)}} />
          
        </div>

        <div>
          <input className="reservationFormFields" type="text" placeholder="Special Requests" autoComplete="off" value={specialRequests} onChange={(e) => {setSpecialRequests(e.target.value)}} />
        </div>

        {serviceDuration ? <div duration={serviceDuration} itemcategory={serviceItemCategory}>
          <Calendar ref={calendarId} year="" month="" day="" timeslots="" duration={serviceDuration} itemcategory={serviceItemCategory} schedule="true" handleChange={(e) => {updateDateAndTime(e)}} />
          {duplicateError ? <p className="errorTxt">*Duplicate timeslot conflict<br></br>*Please select either another room (if available) or another timeslot to avoid scheduling conflicts</p>: null}
          {serviceDateError ? <p className="errorTxt">*Please choose an available date</p> : null}
          {serviceTimeSlotsError ? <p className="errorTxt">*Please choose an available appointment time</p> : null}
        </div> : null}
        <button type="button" onClick={() => {addService()}}>Add To Cart</button>
        
    </div>
  );
});

export default Service;
