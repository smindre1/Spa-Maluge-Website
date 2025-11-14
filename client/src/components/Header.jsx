import { useState, useEffect} from "react"

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
            <a className={book ? "hide menuBarText" : "textColor menuBarText"} target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book</a>
            <a href="/history" className={history ? "hide menuBarText" : "textColor menuBarText"}>History</a>
            <a href="/contact-us" className={contact ? "hide menuBarText" : "textColor menuBarText"}>Contact Us</a>
        </nav>
        <details className="mobileMenu">
            <summary className="mobileMenuTitle">≡</summary>
            <div className="mobileMenuDiv">
                {home ? null : <a href="/" className="mobileMenuText">Home</a>}
                {book ? null : <a className="mobileMenuText" target="_blank" rel="noopener noreferrer" href={"https://www.fresha.com/book-now/spa-maluge-ees8yy6h/all-offer?share=true&pId=2701511"}>Book</a> }
                {history ? null : <a href="/history" className="mobileMenuText">History</a> }
                {contact ? null : <a href="/contact-us" className="mobileMenuText">Contact</a> }
                {manicure ? null : <a href="/manicures" className="mobileMenuText">Manicures</a> }
            </div>

        </details>
    </header>
    );
  }
  
  export default Header;