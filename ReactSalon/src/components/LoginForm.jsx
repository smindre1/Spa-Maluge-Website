import { useState, useRef } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_EMPLOYEE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const emailId = useRef(null);
  const numberId = useRef(null);
  const passwordId = useRef(null);

  const [login, { error, data }] = useMutation(LOGIN_EMPLOYEE);

  const checkForm = () => {
    //Creates an array of each form field
    const items = [{value: email, id: emailId}, {value: number, id: numberId}, {value: password, id: passwordId}];
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
    if(email == "" && number == "" || password == "") {
      e.stopPropagation();
    } else {
      const userFormData = { email: email, phone: number, password: password };

      try {
        const { data } = await login({
          variables: { ...userFormData }
        });
        //Uses the returned data from the LOGIN_EMPLOYEE template literal to login with the user's token.
        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
      }
      // Reset form after successful submission
      setEmail("");
      setNumber("");
      setPassword("");
    }
  };

  return (
    <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="formDiv">
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
    </form>
  );
};

export default LoginForm;
