import { useState, useRef, useEffect, forwardRef } from "react";
import Service from "./Service";
import Popup from '../components/Popup';

const ReservationForm = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const [specialRequests, setSpecialRequests] = useState("");

  const [keyCount, setKeyCount] = useState(1);

  //Used for the BookNow page, sends a signal for when to refresh receipt
  const [refresh, setRefresh] = useState(false);
  
  //Variables for the popup component
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const reservationFormId = ref;

  const nameId = useRef(null);
  const emailId = useRef(null);
  const numberId = useRef(null);
  // const specialRequestsId = useRef(null);
  const serviceDivId = useRef(null);
  const serviceOneId = useRef(null);
  const serviceTwoId = useRef(null);
  const serviceThreeId = useRef(null);
  const serviceFourId = useRef(null);
  const serviceFiveId = useRef(null);

  const checkboxDivId = useRef(null);
  const checkboxId = useRef(null);
  // useEffect(() => {
  //     const preSelected = localStorage.getItem("service");
  //     preSelected ? checkServiceInfo(preSelected) : null;
  // }, [])

  useEffect(() => {
    //Signals the BookNow page to refresh/update the receipt data
      if(refresh) {
        props.updateReceipt(true);
        setRefresh(false);
      }
  }, [refresh])

  useEffect(() => {
    let receipt = localStorage.getItem("receipt");
    receipt == null ? receipt = {} : receipt = JSON.parse(receipt);

    //Service Two's operator
    if(keyCount == 1) {
      //removes any services that the user removed
      delete receipt.servicetwo;
      delete receipt.servicethree;
      delete receipt.servicefour;
      delete receipt.servicefive;
    }

    //Service Two's operator
    if(keyCount == 2) {
      //removes any services that the user removed
      delete receipt.servicethree;
      delete receipt.servicefour;
      delete receipt.servicefive;
    }

    //Service Three's operator
    if(keyCount == 3) {
      //removes any services that the user removed
      delete receipt.servicefour;
      delete receipt.servicefive;
    }

    //Service Four's operator
    if(keyCount == 4) {
      //removes any services that the user removed
      delete receipt.servicefive;
    }

    localStorage.setItem("receipt", JSON.stringify(receipt));
  }, [keyCount])


  const checkForm = () => {
    //This is the returned value which will determine if the form should be submitted or not
    let approved = true;
    
    //Creates an array of each basic form field
    const items = [{value: name, id: nameId}, {value: email, id: emailId}, {value: number, id: numberId}];
    //Checks that each basic form field has content, otherwise changes to error state
    items.forEach((item) => {
      if(item.value == "") {
        item.id.current.firstChild.classList.add("error");
        item.id.current.lastChild.classList.remove("hide");
        approved = false;
      }
    });

    const serviceRefs = [serviceOneId, serviceTwoId, serviceThreeId, serviceFourId, serviceFiveId];
    //Checks each rendered service component for user completion, if not completed it makes an error message
    for(let i=0; i < keyCount; i++) {
      if(serviceRefs[i].current.getAttribute("servicedate") == "" || serviceRefs[i].current.getAttribute("timeslots") == "" || serviceRefs[i].current.getAttribute("type") == "" || serviceRefs[i].current.getAttribute("client") == "" || serviceRefs[i].current.getAttribute("price") == "" || serviceRefs[i].current.getAttribute("itemcategory") == "") {
        // serviceDivId.current.firstChild.classList.add("error");
        serviceDivId.current.lastChild.classList.remove("hide");
        approved = false;
      }
    }

    if(!checkboxId.current.checked) {
      checkboxDivId.current.lastChild.classList.remove("hide");
      approved = false;
    } else {
      checkboxDivId.current.lastChild.classList.add("hide");
    }

    return approved;
  }

  //Removes a form field's error state when the client adds content
  const handleChange = (event) => {
    //*Future Note: These are dependent on <input> and <p> respectively being the first and last child element's in their field <div>
    event.target.classList.contains("error") ? event.target.classList.remove("error"): null;
    const hidden = event.target.parentElement.lastChild.classList.contains("hide")
    !hidden ? event.target.parentElement.lastChild.classList.add("hide") : null;
  }

  const makeReservation = (data) => {
    setLoading(true);
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "reservations";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convert data to JSON format
    })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        // Reset form after successful submission
        setName("");
        setEmail("");
        setNumber("");
        setKeyCount(1);
        checkboxId.current.checked = false;
        localStorage.removeItem("receipt");

        //State change initiates popup
        setSuccess(true);
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Work with the JSON response data
      // console.log("Response data", data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('There was a problem with making the reservation:', error);
    });
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
    //Checks that all form fields and service information have been filled, if not then the form will not submit
    const formApproved = checkForm();
    
    if(!formApproved) {
      setSuccess(false);
      e.stopPropagation();
      return;
    } else {

      const serviceRefs = [serviceOneId, serviceTwoId, serviceThreeId, serviceFourId, serviceFiveId];

      for(let i=0; i < keyCount; i++) {

        // const allAddOns = [{addition: null, price: null}];

        const date = serviceRefs[i].current.getAttribute("servicedate");
        let timeslots = serviceRefs[i].current.getAttribute("timeslots");
        timeslots = timeslots.replaceAll(',', ', ');
        timeslots = `[${timeslots}]`;
        timeslots = JSON.parse(timeslots);
        const serviceType = serviceRefs[i].current.getAttribute("type");
        const client = serviceRefs[i].current.getAttribute("client");
        const price = serviceRefs[i].current.getAttribute("price");
        const itemCategory = serviceRefs[i].current.getAttribute("itemcategory");
        const specialRequest = serviceRefs[i].current.getAttribute("specialrequest");
        const roomNumber = serviceRefs[i].current.getAttribute("room");


        // console.log("date: ", date, "type: ", serviceType, "client: ", client, "price: ", price, "item categ: ", itemCategory, "request: ", specialRequest);

        //The payment is being left as a default N/A since the business is not collecting payment information at the moment
        const reservationFormData = { name: name, email: email, phone: number, day: date, appointmentTime: timeslots, services: [{type: serviceType, client: client, price: price, itemCategory: itemCategory}], specialRequests: specialRequest, payment: {cardOwner: "Bob", cardNumber: 1000, cardExpiration: 1000, securityCode: 123, billingAddress: "Unavailable"}, room: roomNumber };
        // console.log(reservationFormData);

        // type: serviceType, client: client, price: price, 

        //Takes the add on service values from the Service component
        let addOnOne = serviceRefs[i].current.getAttribute("addonone").split(",");
        addOnOne[1] = Number(addOnOne[1]);
        let addOnTwo = serviceRefs[i].current.getAttribute("addontwo").split(",");
        addOnTwo[1] = Number(addOnTwo[1]);
        // console.log("add on string one:", addOnOne, "add on string two:", addOnTwo);

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
        //If the user added any add on services then they are added to the reservation request body
        addOnData.length > 0 ? reservationFormData.services[0].addOns = addOnData : null;

        
        
        // console.log("Reservation Form:", reservationFormData);

        makeReservation(reservationFormData);

      }
    }
  };

  return (
    <form ref={reservationFormId} className="reservationForm" autoComplete="off" onSubmit={handleSubmit} servicecount={keyCount} >
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

      <div ref={serviceDivId} className="flexColumn">
        <Service ref={serviceOneId} keynumber={1}  refreshReceipt={setRefresh}/>
        {keyCount > 1 ? <Service ref={serviceTwoId} keynumber={2} refreshReceipt={setRefresh}/> : null}
        {keyCount > 2 ? <Service ref={serviceThreeId} keynumber={3}  refreshReceipt={setRefresh}/> : null}
        {keyCount > 3 ? <Service ref={serviceFourId} keynumber={4}  refreshReceipt={setRefresh}/> : null}
        {keyCount > 4 ? <Service ref={serviceFiveId} keynumber={5}  refreshReceipt={setRefresh}/> : null}
        { keyCount < 6 ? <button type="button" onClick={() => {setKeyCount(keyCount + 1)}}>Add Another Service</button> : null}
        { keyCount > 1 ? <button type="button" onClick={() => {setKeyCount(keyCount - 1)}}>Remove Last Service</button> : null}
        <p className="errorTxt hide">Please Complete The Form</p>

      </div>

      <div ref={checkboxDivId} className="formSection">
        <div className="checkboxContainer flexRow">
          <p>Please click to confirm that you agree to our following policies: <br></br><a href="/privacy-policy" target="_blank">Privacy Policy</a>, <a href="/cancellation-and-refund-policy" target="_blank">Cancellation/Refund Policy</a>, And the cooresponding medical precautions listed on the service page(s) of your selected service(s)</p>
          <input ref={checkboxId} className="checkbox" type="checkbox" />
        </div>
        
        <p className="errorTxt hide">Please confirm that you accept the terms and conditions</p>
      </div>

      <button className="reservationFormBtn" type="submit">Reserve</button>

      <Popup trigger={success} setTrigger={setSuccess} loading={loading} setLoading={setLoading}>
      </Popup>
    </form>
  );
});

export default ReservationForm;
