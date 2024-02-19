import { useState, useEffect} from "react"
import Logo from "../assets/Maluge_Logo.svg"

function Header() {
    const [home, setHome] = useState(false);
    const [services, setServices] = useState(false);
    const [contact, setContact] = useState(false);
    const [book, setBookNow] = useState(false);


    const pageSelection = () => {
        const page = window.location.pathname;
        page == "/" ? setHome(true) : setHome(false);
        page == "/Services" ? setServices(true) : setServices(false);
        page == "/ContactUs" ? setContact(true) : setContact(false);
        page == "/BookNow" ? setBookNow(true) : setBookNow(false);
    };

    useEffect(() => {
        pageSelection();
    }, [home, services, contact, book])
    
    return (
    <header>
        <img className="logo" src={Logo} ></img>
        <nav className="menu">
            <a href="/" className={home ? "highlight menuBarText" : "menuBarText"}>Home</a>
            <a href="/Services" className={services ? "highlight menuBarText" : "menuBarText"}>Services</a>
            {/* <a href="/BookNow" className={book ? "highlight menuBarText" : "menuBarText"}>Book Now</a> */}
            <a href="/ContactUs" className={contact ? "highlight menuBarText" : "menuBarText"}>Contact Us</a>
        </nav>
    </header>
    );
  }
  
  export default Header;