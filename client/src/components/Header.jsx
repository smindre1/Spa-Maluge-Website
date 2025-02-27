import { useState, useEffect} from "react"
import Logo from "../assets/Maluge_Logo.svg"
import LogoTwo from "../assets/Maluge_Logo_Two.svg"

function Header() {
    const [home, setHome] = useState(false);
    const [services, setServices] = useState(false);
    const [contact, setContact] = useState(false);
    const [book, setBookNow] = useState(false);
    const [history, setHistory] = useState(false);
    const [manicure, setManicure] = useState(false);


    const pageSelection = () => {
        const page = window.location.pathname;
        page == "/" ? setHome(true) : setHome(false);
        page == "/services" ? setServices(true) : setServices(false);
        page == "/contact-us" ? setContact(true) : setContact(false);
        page == "/book-now" ? setBookNow(true) : setBookNow(false);
        page == "/history" ? setHistory(true) : setHistory(false);
        page == "/manicures" ? setManicure(true) : setManicure(false);
    };

    useEffect(() => {
        pageSelection();
    }, [home, services, contact, book, history, manicure])
    
    return (
    <header className={home | manicure? "homeHeader" : null || history ? "historyHeader" : null}>
        {/* <img className="logo" src={LogoTwo} ></img> */}
        <nav className="menu">
            <a href="/" className={home ? "hide menuBarText" : "textColor menuBarText"}>Home</a>
            {/* <a href="/services" className={services ? "hide menuBarText" : "textColor menuBarText"}>Services</a> */}
            <a href="/manicures" className={manicure ? "hide menuBarText" : "textColor menuBarText"}>Manicure</a>
            <a className={book ? "hide menuBarText" : "textColor menuBarText"} target="_blank" rel="noopener noreferrer" href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHj0D92Kry9uKJLZng8QKTshJ0ig+gxT+zAwSlxpgmQd2t6awtBVDSehSgX6YMhE4h8pgxdqsCzEr3PDH+0LQVdjhosn8OItSRdV6n3hkyy1N2HWzaNyW8XqNpiT9XmVY58yGFBXV88yFpzAp0mtl+a5iHiywk18l79oNcGwD8O5Pm5WYh08sQbkBaiJFPyb/hN06+eIq38fL73V6miVAWmrNIWgQc8/RA/fOulplM2MyWEBL7g+6TjXJiiK82VD9W7pIJ5Mkg88wSdfjmMAcUFhXbH1QLYmnvwHZjmcYUYhKT327kzQyxp58PCGOwHr4Oyim430dsKuML7WBO0DOcquQMteJt06XBvXL3hd0WejRyiDxm0VNIrYeCsl3juH82LnfHls/8lSWEP+ipuE1SR98E2xadQPCZUPR/4FW1jG3bigvM0zGNLo3sWb112uyw==">Book</a>
            <a href="/history" className={history ? "hide menuBarText" : "textColor menuBarText"}>History</a>
            <a href="/contact-us" className={contact ? "hide menuBarText" : "textColor menuBarText"}>Contact Us</a>
        </nav>
        <details className="mobileMenu">
            <summary className="mobileMenuTitle">≡</summary>
            <div className="mobileMenuDiv">
                {home ? null : <a href="/" className="mobileMenuText">Home</a>}
                {book ? null : <a className="mobileMenuText" target="_blank" rel="noopener noreferrer" href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHj0D92Kry9uKJLZng8QKTshJ0ig+gxT+zAwSlxpgmQd2t6awtBVDSehSgX6YMhE4h8pgxdqsCzEr3PDH+0LQVdjhosn8OItSRdV6n3hkyy1N2HWzaNyW8XqNpiT9XmVY58yGFBXV88yFpzAp0mtl+a5iHiywk18l79oNcGwD8O5Pm5WYh08sQbkBaiJFPyb/hN06+eIq38fL73V6miVAWmrNIWgQc8/RA/fOulplM2MyWEBL7g+6TjXJiiK82VD9W7pIJ5Mkg88wSdfjmMAcUFhXbH1QLYmnvwHZjmcYUYhKT327kzQyxp58PCGOwHr4Oyim430dsKuML7WBO0DOcquQMteJt06XBvXL3hd0WejRyiDxm0VNIrYeCsl3juH82LnfHls/8lSWEP+ipuE1SR98E2xadQPCZUPR/4FW1jG3bigvM0zGNLo3sWb112uyw==">Book</a> }
                {history ? null : <a href="/history" className="mobileMenuText">History</a> }
                {contact ? null : <a href="/contact-us" className="mobileMenuText">Contact</a> }
            </div>

        </details>
    </header>
    );
  }
  
  export default Header;