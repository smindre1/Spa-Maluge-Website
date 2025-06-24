import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    let footerClass = 'footerSect center';
    if (location.pathname === '/' | location.pathname === '/manicures') {
        footerClass = 'footerOne center';
    } else if (location.pathname === '/history') {
        footerClass = 'footerTwo center'
    }


    return (
    <section className={footerClass}>
        <div className='flexColumn footer'>
            <div className='flexFooter'>
                <section className='flexRow'>
                    <a className='textColor footerLink' href='/'>Home</a>
                    <a className='textColor footerLink' href='/privacy-policy'>Privacy Policy</a>
                </section>
                <section className='flexRow'>
                    <a className='textColor footerLink' href='/cancellation-and-refund-policy'>Cancellations & Refunds</a>
                    <a className='textColor footerLink' href='/contact-us'>Contact</a>
                </section>
                <div className='sm-icon-div'>
                    <a href='https://www.facebook.com/people/Maryna-Mindreau/61556201655523/' target='_blank'><img className='sm-icon' src='/facebook-c-icon.svg' alt='Facebook link'></img></a>
                    <a href='https://www.instagram.com/spa_maluge/' target='blank'><img className='sm-icon' src='/instagram-c-icon.svg' alt='Instagram link'></img></a>
                </div>
            </div>
            <p className='textColor footerText'>©2024 Spa Maluge ® - All Rights Reserved</p>
        </div>
    </section>
  );
}

export default Footer;