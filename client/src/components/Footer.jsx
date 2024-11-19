import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    let footerClass = 'footerSect center';
    if (location.pathname === '/') {
        footerClass = 'footerOne center';
    } else if (location.pathname === '/history') {
        footerClass = 'footerTwo center'
    }


    return (
    <section className={footerClass}>
        <div className='flexColumn footer'>
            {/* <nav>
                <a href=''>
                    <img className='textColor' src='' alt=''></img>
                </a>
            </nav> */}
            
            <div className='flexRow'>
                <a className='textColor footerLink' href='/'>Home</a>
                {/* <p className='textColor'>|</p> */}
                <a className='textColor footerLink' href='/privacy-policy'>Privacy Policy</a>
                {/* <p className='textColor'>|</p> */}
                <a className='textColor footerLink' href='/cancellation-and-refund-policy'>Cancellations & Refunds</a>
                {/* <p className='textColor'>|</p> */}
                <a className='textColor footerLink' href='/contact-us'>Contact</a>
            </div>
            <p className='textColor footerText'>©2024 Spa Maluge ® - All Rights Reserved</p>
        </div>
        
    </section>
  );
}

export default Footer;