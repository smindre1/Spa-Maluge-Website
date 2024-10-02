function Footer() {
    return (
    <section className='footerSect center'>
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