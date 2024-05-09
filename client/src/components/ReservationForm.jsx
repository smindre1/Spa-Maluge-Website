import { useState, useRef, useEffect } from "react";
import Calendar from "./Calendar";
import Services from "../assets/Services";
// import Popup from '../components/Popup';

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  // const [services, setServices] = useState([]);
  const [serviceClient, setServiceClient] = useState("");
  //Loads the rates for one services
  const [loadOptions, setOptions] = useState([]);
  //This is used to measure when the prior state variable is ready
  const [checkOptions, setCheckOptions] = useState({ 0: false, 1: false});
  //Sets a single service type
  const [loadService, setService] = useState("");
  const [loadServicePrice, setServicePrice] = useState();
  const [loadDuration, setDuration] = useState("");
  const [itemCategory, setItemCategory] = useState(1);
  //Sets multiple services
  const [loadReceipt, setReceipt] = useState({});
  const [keyCount, setKeyCount] = useState(0);
  
  

  //Used for the popup, but I plan to redirect page so it may not be necessary.
  const [success, setSuccess] = useState(false);

  const nameId = useRef(null);
  const emailId = useRef(null);
  const numberId = useRef(null);
  const appointmentTimeId = useRef(null);
  const servicesId = useRef(null);
  const specialRequestsId = useRef(null);
  const divId = useRef(null);
  const calendarId = useRef(null);
  const serviceDurationId = useRef(null);

  // useEffect(() => {
  //   console.log(loadDuration, "duartion");
  //   checkOptions ? console.log(serviceDurationId.current.getAttribute("duration") || "meh", "fail") : console.log(serviceDurationId, "success");
  //   console.log(loadServicePrice, "price");
  // }, [loadDuration, checkOptions])

  // useEffect(() => {
  //     const preSelected = localStorage.getItem("service");
  //     preSelected ? checkServiceInfo(preSelected) : null;
  // }, [])

    useEffect(() => {
      console.log(loadReceipt, "receipt");
  }, [loadReceipt[0]])


  const updateServiceType = (event, serviceType, itemCategory) => {


    const key = event.target.parentElement.parentElement.getAttribute('service-key');
    const objKeys = Object.keys(loadReceipt);

    //This is the variable that manages when a service div has it's service type selected and can display possible service durations
    const rateOptions = checkOptions;
    const rateOptionKeys = Object.keys(rateOptions);
    if(rateOptionKeys.includes(String(key))) {
      rateOptions[key] = true;
      setCheckOptions(rateOptions)
    } else {
      rateOptions[key] = true;
      setCheckOptions(rateOptions);
    }

    //Grabs inventory data
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `inventory/`;
    let itemNum;
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      //Maps through inventory data for the inventory number associated with the serviceType
        for(let i = 0; i < data.length; i++) {
          data[i].Items.map((service) => {service.Item == serviceType ? itemNum = data[i].ItemCategory : null})
        }
        
        if(objKeys.includes(String(key)) && itemNum) {
          let services = loadReceipt;
          //Since the service type is changed, all values except client are updated
          services[key].type = serviceType;
          services[key].price = null;
          services[key].itemCategory = itemNum;
          services[key].duration = null;
          services[key].timeslots = [];
          services[key].date = null;

          setReceipt(services);
        } else {
          let services = loadReceipt;
          //If the service object is not on the receipt then it is added
          services[key] = { type: serviceType, client: null, price: null, itemCategory: itemNum, duration: null, timeslots: [], date: null};
          setReceipt(services);
        }
        console.log(loadReceipt, "check service type update");

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }

  const updateServiceClient = (event, serviceClient) => {
    const key = event.target.parentElement.parentElement.getAttribute('service-key');
    const objKeys = Object.keys(loadReceipt);
    if(objKeys.includes(String(key))) {
      let services = loadReceipt;
      services[key].client = serviceClient;
      setReceipt(services);
    } else {
      let services = loadReceipt;
      services[key] = { type: null, client: serviceClient, price: null, itemCategory: null, duration: null, timeslots: [], date: null};
      setReceipt(services);
    }
    console.log(loadReceipt, "check service client update");
  }

//rendering date and timeslots require itemCategory in the Calendar to be updated

  const updateServicePrice = (event, servicePrice, serviceDuration) => {
    const key = event.target.parentElement.parentElement.getAttribute('service-key');
    const objKeys = Object.keys(loadReceipt);
    if(objKeys.includes(String(key))) {
      let services = loadReceipt;
      services[key].price = servicePrice;
      services[key].duration = serviceDuration;
      setReceipt(services);
    } else {
      let services = loadReceipt;
      services[key] = { type: null, client: null, price: servicePrice, itemCategory: null, duration: serviceDuration, timeslots: [], date: null};
      setReceipt(services);
    }
    console.log(loadReceipt, "check service price/duration update");
  }



  const checkServiceInfo = (serviceName, key) => {
    //Duration is changed to reset Calendar and Schedule
    setDuration("");
    setService(serviceName);
    const info = Services.filter((item) => serviceName == item.Item);
    const itemNumber = info[0].ItemCategory;
    setItemCategory(itemNumber);
    setOptions(info[0]?.Prices);
    setCheckOptions(true);
  }

  const checkForm = () => {
    //Creates an array of each form field
    const items = [{value: name, id: nameId}, {value: email, id: emailId}, {value: number, id: numberId}];
    //Checks that each field has content, otherwise changes to error state
    items.forEach((item) => {
      if(item.value == "") {
        item.id.current.firstChild.classList.add("error");
        item.id.current.lastChild.classList.remove("hide");
      }
    });
    if(calendarId.current.childNodes[1].getAttribute("value") == null || calendarId.current.getAttribute("year") == null) {
      appointmentTimeId.current.firstChild.classList.add("error");
      appointmentTimeId.current.lastChild.classList.remove("hide");
    }
  }

  //Removes a form field's error state when the client adds content
  const handleChange = (event) => {
    //*Future Note: These are dependent on <input> and <p> respectively being the first and last child element's in their field <div>
    event.target.classList.contains("error") ? event.target.classList.remove("error"): null;
    const hidden = event.target.parentElement.lastChild.classList.contains("hide")
    !hidden ? event.target.parentElement.lastChild.classList.add("hide") : null;
  }

  const handlePhone = (value) => {
    if (!value) return;
    // Resets any non-numbers that the client inputs
    const letterRegex = /[\D]/g;
    if (value.match(letterRegex)) {setNumber('')};
    
    // Takes the inputted numbers and formats them into a phone number template
    const regex = /[\d]/g;
    var phoneNumber = value.match(regex);
    if (value.match(regex)) {
    phoneNumber = phoneNumber.join('');
    }
    const numLength = phoneNumber?.length;
    if (numLength < 4) {
      setNumber(phoneNumber)};
    if (3 < numLength && numLength < 7) {
      setNumber(`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`);
    };
    if (numLength > 6) {
      setNumber(`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6, 10)}`);
    }
  }
    
  const addService = (keyNumber) => {
    // setKeyCount(keyCount + 1);

    return (
      <div service-key={keyNumber} >
        <div className="formInputDiv">
          <select className="reservationFormFields" title="service" name="type" value={loadService} onChange={(e) => {checkServiceInfo(e.target.value, null); updateServiceType(e, e.target.value, 1)}}>
            <option  value="" disabled>-Select Massage-</option>
            {Services.map((item) => {
                return(<option key={item.Item} value={item.Item} itemcategory={item.itemCategory}>{item.Item}</option>)
            })}
          </select>

          {checkOptions[String(keyNumber)] ? 
          <select className="reservationFormFields" ref={serviceDurationId} title="duration" name="type" value={loadDuration} price={loadServicePrice} onChange={(e) => {setDuration(e.target.value); setServicePrice(e.target.selectedOptions[0].getAttribute("price")); updateServicePrice(e, e.target.selectedOptions[0].getAttribute("price"), e.target.value)}}>
            <option value="" disabled>-Select Duration-</option>
            {loadOptions.map((choice) => {
                return(<option key={choice.time} value={choice.time} price={choice.cost}>{choice.time} Minutes</option>)
            })}
          </select>
            : null}
          
          <input className="reservationFormFields" type="text" placeholder="Client for Service" autoComplete="off" value={serviceClient} onChange={(e) => {setServiceClient(e.target.value); updateServiceClient(e, e.target.value)}} />
          
        </div>

        <div ref={specialRequestsId}>
          <input className="reservationFormFields" type="text" placeholder="Special Requests" autoComplete="off" value={specialRequests} onChange={(e) => {setSpecialRequests(e.target.value)}} />
        </div>

        {loadDuration ? <div ref={appointmentTimeId}>
          <Calendar ref={calendarId} year="" month="" day="" timeslots="" duration={loadDuration} itemCategory={itemCategory} schedule="true" handleChange={(e) => {console.log(e, "hmm")}} />
          <p className="errorTxt hide">Please choose an available appointment time</p>
        </div> : null}
      </div>)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setServices(JSON.parse(localStorage.getItem("services")));
    checkForm();
    const intPrice = Number(loadServicePrice);
    setServicePrice(intPrice)
    //This is the date and time(s) taken from the Calendar/Schedule components
    const year = calendarId.current.getAttribute("year");
    const month = calendarId.current.getAttribute("month");
    const day = calendarId.current.getAttribute("day");
    const date = `${month} ${day}, ${year}`;
    const allAddOns = [{addition: null, price: null}];
    //Reformatting HTML attribute into JSON array
    let timeslots = calendarId.current.childNodes[1].getAttribute("value");
    let roomNumber = Number(calendarId.current.childNodes[1].getAttribute("room"));
    timeslots = timeslots.replaceAll(',', ', ');
    timeslots = `[${timeslots}]`;
    timeslots = JSON.parse(timeslots);
    //An empty field will prevent the form from submitting
    if(name == "" || email == "" || number == "" || day == "" || loadService == "" || timeslots.length == 0) {

    // if(name == "") {
      setSuccess(false);
      e.stopPropagation();
    } else {
      //The payment is being left as a default N/A for testing
      const reservationFormData = { name: name, email: email, phone: number, day: date, appointmentTime: timeslots, services: [{type: loadService, client: serviceClient, price: intPrice, itemCategory: itemCategory}], specialRequests: specialRequests, payment: {cardOwner: "Bob", cardNumber: 1000, cardExpiration: 1000, securityCode: 123, billingAddress: "Confusion"}, room: roomNumber };
      const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "reservations";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationFormData) // Convert data to JSON format
      })
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Work with the JSON response data
        console.log("Response data", data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('There was a problem with the fetch operation:', error);
      });

      // Reset form after successful submission
      setName("");
      setEmail("");
      setNumber("");
      // setServices([]);
      localStorage.removeItem("services");
      setCheckOptions({ 0: false, 1: false});
      setOptions([]);
      setDuration("");
      setService("");
      setServiceClient("");
      setSpecialRequests("");
      setItemCategory(1)
      //State change initiates popup
      setSuccess(true);
    }
  };

  return (
    <form className="reservationForm" autoComplete="off" onSubmit={handleSubmit} receipt={loadReceipt}>
      <h2 className="reservationTitle" >Reserve Your Spot Today!</h2>

      <div ref={nameId} className="formSection">
        <input className="reservationFormFields" type="text" placeholder="Full Name" autoComplete="off" value={name} onChange={(e) => {setName(e.target.value); handleChange(e)}} />
        <p className="errorTxt hide">Full Name cannot be blank</p>
      </div>
        
      <div ref={emailId} className="formSection">
          <input className="reservationFormFields" type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e) => {setEmail(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Email cannot be blank</p>
      </div>

      <div ref={numberId} className="formSection">
        <input className="reservationFormFields" type="tel" placeholder="Phone Number" autoComplete="off" value={number} onChange={(e) => {setNumber(e.target.value); handlePhone(e.target.value); handleChange(e)}} />
        <p className="errorTxt hide">Phone Number cannot be blank</p>
      </div>

      <div ref={servicesId} className="flexColumn">
        {addService(0)}
      </div>
      
      <button className="reservationFormBtn" type="submit">Reserve</button>
      {/* <div>

        <div className="formInputDiv">
          <select className="reservationFormFields" title="service" name="type" value={loadService} onChange={(e) => {checkServiceInfo(e.target.value);}}>
            <option  value="" disabled>-Select Massage-</option>
            {Services.map((item) => {
                return(<option key={item.Item} value={item.Item} itemcategory={item.itemCategory}>{item.Item}</option>)
            })}
          </select>

          {checkOptions ? 
          <select className="reservationFormFields" ref={serviceDurationId} title="duration" name="type" value={loadDuration} price={loadServicePrice} onChange={(e) => {setDuration(e.target.value); setServicePrice(e.target.selectedOptions[0].getAttribute("price"))}}>
            <option value="" disabled>-Select Duration-</option>
            {loadOptions.map((choice) => {
                return(<option key={choice.time} value={choice.time} price={choice.cost}>{choice.time} Minutes</option>)
            })}
          </select>
            : null}
          
          <input className="reservationFormFields" type="text" placeholder="Client for Service" autoComplete="off" value={serviceClient} onChange={(e) => {setServiceClient(e.target.value)}} />
          
        </div>

        <div ref={specialRequestsId}>
          <input className="reservationFormFields" type="text" placeholder="Special Requests" autoComplete="off" value={specialRequests} onChange={(e) => {setSpecialRequests(e.target.value)}} />
        </div>

        {loadDuration ? <div ref={appointmentTimeId}>
          <Calendar ref={calendarId} year="" month="" day="" timeslots="" duration={loadDuration} itemCategory={itemCategory} schedule="true"/>
          <p className="errorTxt hide">Please choose an available appointment time</p>
        </div> : null}

        <button className="reservationFormBtn" type="submit">Reserve</button>
      </div> */}

      {/* <Popup trigger={success} setTrigger={setSuccess}>
      </Popup> */}
    </form>
  );
};

export default ReservationForm;
