import { useState, useRef, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EMPLOYEE } from '../../utils/mutations';
import { GET_EMPLOYEES } from '../../utils/queries';
// import Popup from '../components/Popup';
import Auth from '../../utils/auth';

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  //Used for the popup, but I plan to redirect page so it may not be necessary.
  const [success, setSuccess] = useState(false);

  const nameId = useRef(null);
  const emailId = useRef(null);
  const numberId = useRef(null);
  const passwordId = useRef(null);
  const divId = useRef(null);

  const [addUser, { error, data }] = useMutation(ADD_EMPLOYEE);
  const { loading: wait, error: employeeError, data: employeeRoster} = useQuery(GET_EMPLOYEES);

  const checkForFirstUser = () => {
    if(!wait) {
      if(employeeRoster.users.length == 0) {
        return true
      } else {
        return false
      }
    } else {
      setTimeout(checkForFirstUser(), 2000);
    }
  }

  const checkForm = () => {
    //Creates an array of each form field
    const items = [{value: name, id: nameId}, {value: email, id: emailId}, {value: number, id: numberId}, {value: password, id: passwordId}];
    //Checks that each field has content, otherwise changes to error state
    items.forEach((item) => {
      if(item.value == "") {
        item.id.current.firstChild.classList.add("error");
        item.id.current.lastChild.classList.remove("hide");
      }
    })
  }

  //Removes a form field's error state when the user adds content
  const handleChange = (event) => {
    //*Future Note: These are dependent on <input> and <p> respectively being the first and last child element's in their field <div>
    event.target.classList.contains("error") ? event.target.classList.remove("error"): null;
    const hidden = event.target.parentElement.lastChild.classList.contains("hide")
    !hidden ? event.target.parentElement.lastChild.classList.add("hide") : null;
  }

  const handlePhone = (value) => {
    if (!value) return;
    // Resets any non-numbers that the user inputs
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
    checkForm();
    //An empty field will prevent the form from submitting
    if(name == "" || email == "" || number == "" || password == "") {
      setSuccess(false);
      e.stopPropagation();
    } else {
      
      const position = checkForFirstUser() ? "Admin" : "Invalid";
      const userFormData = { fullName: name, email: email, phone: number, password: password, position: position };

      try {
        const { data } = await addUser({
          variables: { ...userFormData }
        });
        //Uses the returned data from the ADD_EMPLOYEE template literal to login with the user's token.
        Auth.login(data.addUser.token);
      } catch (err) {
        console.error(err);
      }
      // Reset form after successful submission
      setName("");
      setEmail("");
      setNumber("");
      setPassword("");
      //State change initiates popup
      setSuccess(true);
    }
  };

  return (
    <form className="signupForm" autoComplete="off" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div ref={divId} className="formDiv">
        <div ref={nameId} className="flexColumn formSection">
          <input className="formFields" type="text" placeholder="Full Name" autoComplete="off" value={name} onChange={(e) => {setName(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Full Name cannot be blank</p>
        </div>
        <div ref={emailId} className="flexColumn formSection">
          <input className="formFields" type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e) => {setEmail(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Email cannot be blank</p>
        </div>
      </div>
      <div className="formDiv">
        <div ref={numberId} className="flexColumn formSection">
          <input className="formFields" type="tel" placeholder="Phone Number" autoComplete="off" value={number} onChange={(e) => {setNumber(e.target.value); handlePhone(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Phone Number cannot be blank</p>
        </div>
      </div>
      <div className="flexColumn">
        <div ref={passwordId} className="flexColumn">
          <input className="formFields" type="text" placeholder="Password" autoComplete="off" value={password} onChange={(e) => {setPassword(e.target.value); handleChange(e)}} />
          <p className="errorTxt hide">Password cannot be blank</p>
        </div>
        <button className="formBtn" type="submit">Submit</button>
      </div>

      {/* <Popup trigger={success} setTrigger={setSuccess}>
      </Popup> */}
    </form>
  );
};

export default SignupForm;
