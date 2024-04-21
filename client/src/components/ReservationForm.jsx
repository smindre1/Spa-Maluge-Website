import { useState, useRef, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_RESERVATION } from "../../utils/mutations";
import Calendar from "./Calendar";
import Services from "../assets/Services";
// import Popup from '../components/Popup';

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const [services, setServices] = useState([]);
  const [serviceClient, setServiceClient] = useState("");

  const [loadOptions, setOptions] = useState([]);
  const [checkOptions, setCheckOptions] = useState(false);
  const [loadService, setService] = useState("");
  const [loadServicePrice, setServicePrice] = useState();
  const [loadDuration, setDuration] = useState("");
  //This is used to make different keys for each service the client is considering purchasing.
  const [serviceKey, setServiceKey] = useState(0);
  const [specialRequests, setSpecialRequests] = useState("");
  const [itemCategory, setItemCategory] = useState(1);

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

  const [addReservation, { error, data }] = useMutation(ADD_RESERVATION);

  // useEffect(() => {
  //   console.log(loadDuration, "duartion");
  //   checkOptions ? console.log(serviceDurationId.current.getAttribute("duration") || "meh", "fail") : console.log(serviceDurationId, "success");
  //   console.log(loadServicePrice, "price");
  // }, [loadDuration, checkOptions])

  const checkServiceInfo = (serviceName) => {
    //Duration is changed to reset Calendar and Schedule
    setDuration("");
    // console.log(serviceName, "name?");
    setService(serviceName);
    const info = Services.filter((item) => serviceName == item.Item);
    const itemNumber = info[0].ItemCategory;
    setItemCategory(itemNumber);
    // console.log(itemNumber, "info");
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
      const reservationFormData = { name: name, email: email, phone: number, day: date, appointmentTime: timeslots, services: [{type: loadService, client: serviceClient, price: intPrice}], specialRequests: specialRequests, payment: {cardOwner: "Bob", cardNumber: 1000, cardExpiration: 1000, securityCode: 123, billingAddress: "Confusion"}, room: roomNumber };

      try {
        const { data } = await addReservation({
          variables: { ...reservationFormData }
        });

      } catch (err) {
        console.error(err);
      }
      // Reset form after successful submission
      setName("");
      setEmail("");
      setNumber("");
      // setServices([]);
      localStorage.removeItem("services");
      setCheckOptions(false);
      setOptions([]);
      setDuration("");
      setService("");
      setServiceClient("");
      setSpecialRequests("");
      //State change initiates popup
      setSuccess(true);
    }
  };

  return (
    <form className="signupForm" autoComplete="off" onSubmit={handleSubmit}>
      <h2>Make Your Reservation(s)</h2>
      <div ref={divId} className="formDiv">
        <div ref={nameId} className="formSection">
          <input className="formFields" type="text" placeholder="Full Name" autoComplete="off" value={name} onChange={(e) => {setName(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Full Name cannot be blank</p>
        </div>
        <div ref={emailId} className="formSection">
          <input className="formFields" type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e) => {setEmail(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Email cannot be blank</p>
        </div>
      </div>
      <div className="formDiv">
        <div ref={numberId} className="formSection">
          <input className="formFields" type="tel" placeholder="Phone Number" autoComplete="off" value={number} onChange={(e) => {setNumber(e.target.value); handlePhone(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Phone Number cannot be blank</p>
        </div>
      </div>
      <div>

        {/* Services */}
        <div className="formInputDiv">
          <select className="formFields" title="service" name="type" value={loadService} onChange={(e) => {checkServiceInfo(e.target.value);}}>
            <option  value="" disabled>-Select Massage-</option>
            {Services.map((item) => {
                return(<option key={item.Item} value={item.Item} itemcategory={item.itemCategory}>{item.Item}</option>)
            })}
          </select>

          {checkOptions ? 
          <select className="formFields" ref={serviceDurationId} title="duration" name="type" value={loadDuration} price={loadServicePrice} onChange={(e) => {setDuration(e.target.value); setServicePrice(e.target.selectedOptions[0].getAttribute("price"))}}>
            <option value="" disabled>-Select Duration-</option>
            {loadOptions.map((choice) => {
                return(<option key={choice.time} value={choice.time} price={choice.cost}>{choice.time} Minutes</option>)
            })}
          </select>
            : null}
          
          <input className="formFields" type="text" placeholder="Client for Service" autoComplete="off" value={serviceClient} onChange={(e) => {setServiceClient(e.target.value)}} />
          
          {/* <input className="formFields" type="text" placeholder="Price" autoComplete="off" value={servicePrice} onChange={(e) => {setServicePrice(e.target.value)}} /> */}
        </div>

        <div ref={specialRequestsId}>
          <input className="formFields" type="text" placeholder="Special Requests" autoComplete="off" value={specialRequests} onChange={(e) => {setSpecialRequests(e.target.value)}} />
        </div>

        {loadDuration ? <div ref={appointmentTimeId}>
          <Calendar ref={calendarId} year="" month="" day="" timeslots="" duration={loadDuration} itemCategory={itemCategory} schedule="true"/>
          <p className="errorTxt hide">Please choose an available appointment time</p>
        </div> : null}

        <button className="formBtn" type="submit">Submit</button>
      </div>

      {/* <Popup trigger={success} setTrigger={setSuccess}>
      </Popup> */}
    </form>
  );
};

export default ReservationForm;
