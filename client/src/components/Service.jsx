import { useState, useRef, useEffect } from "react";
import Calendar from "./Calendar";
// import Popup from '../components/Popup';

const Service = (props) => {
    //Update the rooms being allocated in schedule

    const [serviceList, setServiceList] = useState([]);
    const [inventories, setInventories] = useState([]);
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
    //The default value 1 is set because item category 1 is where the main services are located
    const [serviceItemCategory, setServiceItemCategory] = useState(1);
    const [serviceDuration, setServiceDuration] = useState("");
    const [serviceTimeSlots, setServiceTimeSlots] = useState([]);
    const [serviceDate, setServiceDate] = useState("");


    const calendarId = useRef(null);


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
            list = serviceCategories[i].map((serviceObj) => {return {Item: serviceObj.Item, Prices: serviceObj.Prices, ItemCategory: itemCategoryNum}});
            listOfServices = [...listOfServices, ...list];
        }
        setServiceList(listOfServices);
        setInventories(data);
        setWait(false);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    }, []);

  // useEffect(() => {
  //     const preSelected = localStorage.getItem("service");
  //     preSelected ? checkServiceInfo(preSelected) : null;
  // }, [])

    useEffect(() => {
        //Set the service price when the duration has been selected
        if (serviceDuration =! "" && checkOptions) {
            const currentRate = loadOptions.filter((rate) => Number(rate.time) == Number(serviceDuration));
            setServicePrice(currentRate[0].cost);
        }
  }, [serviceDuration])


  //Updates the service's type, item category, rates (setOptions state variable), and resets the duration
  const checkServiceInfo = (event) => {
    //Duration is updated to reset Calendar and Schedule
    setServiceDuration("");
    checkServiceInfo(false)

    //Maps through service list data for the inventory number associated with the serviceType and service price rates
    serviceList.map((service) => {
        if(service.Item == event.target.value) {
            setServiceItemCategory(Number(service.ItemCategory));
            //Sets the service's price rates
            setOptions(service.Prices);
        }
    })
    setServiceType(event.target.value);
    setCheckOptions(true);
  }

  const updateDateAndTime = (calendarData) => {
    setServiceTimeSlots(JSON.parse(`[${calendarData.loadTimeSlots}]`));
    const date = `${calendarData.loadMonth} ${calendarData.loadDay}, ${calendarData.loadYear}`;
    setServiceDate(date);
  }

  const updateServicePrice = (serviceDuration) => {
    const currentRate = loadOptions.filter((rate) => Number(rate.time) == Number(serviceDuration));
    currentRate.length > 0 ? setServicePrice(currentRate[0].cost) : null;
  }
    

  return (
    <div service-key={props.keyNumber} type={serviceType} client={serviceClient} price={servicePrice} itemCategory={serviceItemCategory} duration={serviceDuration} timeslots={serviceTimeSlots} serviceDate={serviceDate} >
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
          
          <input className="reservationFormFields" type="text" placeholder="Client for Service" autoComplete="off" value={serviceClient} onChange={(e) => {setServiceClient(e.target.value)}} />
          
        </div>

        <div>
          <input className="reservationFormFields" type="text" placeholder="Special Requests" autoComplete="off" value={specialRequests} onChange={(e) => {setSpecialRequests(e.target.value)}} />
        </div>

        {serviceDuration ? <div>
          <Calendar ref={calendarId} year="" month="" day="" timeslots="" duration={serviceDuration} itemCategory={serviceItemCategory} schedule="true" handleChange={(e) => {updateDateAndTime(e)}} />
          <p className="errorTxt hide">Please choose an available appointment time</p>
        </div> : null}
      </div>
  );
};

export default Service;
