// import heroImg from "../assets/images/manicure/img_15760.jpg";
// import heroOne from "../assets/images/manicure/manicure-hero-img-one.webp";
// import heroTwo from "../assets/images/manicure/manicure-hero-img-two.webp";
// import ImgOne from "../assets/images/manicure/img_1577.png";
// import flwrBr from "../assets/images/manicure/flower-border.jpg";
// import ImgTwo from "../assets/images/manicure/img_1579.png";

function Manicure() {
    return (
    <div className='sandBackground'>

        {/* <img className="m-hero" src={flwrBr} alt="flower border image"></img> */}

        {/* <img className="m-hero" src={heroOne} alt="Manicure Hero Image"></img> */}

        <section className="m-menu-title-block">
            <div className="brand">Spa Maluge — Hoboken, NJ</div>
            <div className="m-menu-title">Manicure & Pedicure Menu</div>
        </section>

        <section className="m-section">
            <h2 className="m-section-title">Manicures & Pedicures</h2>
            <ul className="m-menu">
                <li className="m-menu-item">Signature BIAB Manicure <span className="m-menu-price">$80</span>
                    <li className="muted">A premium strengthening system applied on your natural nails to create a flexible, glass-smooth surface that helps them grow longer and stronger. Ideal for weak or thin nails — elegant, durable, and naturally radiant.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320434&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Russian Pedicure — with Gel<span className="m-menu-price">$80</span>
                    <li className="muted">Gentle, precise e-file technique for refined cuticle care. Protects the natural skin barrier.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320416&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Russian Pedicure — Classic<span className="m-menu-price">$70</span>
                    <li className="muted">Gentle, precise e-file technique for refined cuticle care. Protects the natural skin barrier.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320406&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Russian Gel Manicure<span className="m-menu-price">$75</span>
                    <li className="muted"></li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320392&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Russian Dry Manicure<span className="m-menu-price">$65</span>
                    <li className="muted">Advanced European technique for ultra-precise cuticle work and flawless nail finish.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320389&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Dry Gel Pedicure<span className="m-menu-price">$65</span>
                    <li className="muted">Dry pedicure finished with gel polish for a glossy, durable result.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320382&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Dry Classic Pedicure<span className="m-menu-price">$50</span>
                    <li className="muted">Clean, waterless pedicure with gentle shaping and cuticle care.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320373&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Dry Gel Manicure<span className="m-menu-price">$60</span>
                    <li className="muted">Dry manicure with gel polish application for long-lasting shine.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320354&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Dry Classic Manicure<span className="m-menu-price">$45</span>
                    <li className="muted">Precise dry care with regular polish — ideal for natural nails.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320349&share=true&pId=2701511"}>Book Now</a>
                </li>
            </ul>
        </section>

        <section className="m-section">
            <h2 className="m-section-title">Nail Extensions & Enhancements</h2>
            <div>
                <h3 className="m-section-subtitle">Aprés Gel-X System (S/M/L)</h3>
                <li className="muted">Dry manicure with gel polish application for long-lasting shine.</li>
                <li>Small — $85      |   Medium — $95   |   Long — $105</li>
                <div className="flexRow">
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320467&share=true&pId=2701511"}>Book Small</a>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320468&share=true&pId=2701511"}>Book Medium</a>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320469&share=true&pId=2701511"}>Book Long</a>
                </div>
            </div>
            <div>
                <h3 className="m-section-subtitle">Polygel System (Small / Medium / Long)</h3>
                <li className="muted">Hybrid innovation combining acrylic strength with gel flexibility — light, durable, and sculpted to perfection.</li>
                <li>Small — $70      |   Medium — $80   |   Long — $90</li>
                <div className="flexRow">
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320484&share=true&pId=2701511"}>Book Small</a>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320485&share=true&pId=2701511"}>Book Medium</a>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320486&share=true&pId=2701511"}>Book Long</a>
                </div>
            </div>
            <div>
                <h3 className="m-section-subtitle">Hard Gel System (Small / Medium / Long)</h3>
                <li className="muted">Premium sculpted technique built entirely by hand — ideal for custom shape and lasting shine.</li>
                <li>Small — $95      |   Medium — $105   |   Long — $115</li>
                <div className="flexRow">
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320500&share=true&pId=2701511"}>Book Small</a>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320501&share=true&pId=2701511"}>Book Medium</a>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320502&share=true&pId=2701511"}>Book Long</a>
                </div>
            </div>
        </section>

        <section className="m-section">
            <h2 className="m-section-title">Spa Nails Advanced Care</h2>
            <ul className="m-menu">
                <li className="m-menu-item">Gel Polish Removal<span className="m-menu-price">$15</span>
                    <li className="muted"></li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320584&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Single Nail Repair<span className="m-menu-price">$15</span>
                    <li className="muted">**Price depends on design and complexity.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320572&share=true&pId=2701511"}>Book Now</a>
                </li>
            </ul>
        </section>

        <section className="m-section">
            <h2 className="m-section-title">Premium Spa Rituals</h2>
            <ul className="m-menu">
                <li className="m-menu-item">Seasonal Signature Manicure — with Gel<span className="m-menu-price">$80</span>
                    <li className="muted">Essential oil blend, seasonal scrub, warm towel therapy and custom massage.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320557&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Seasonal Signature Manicure — Classic<span className="m-menu-price">$70</span>
                    <li className="muted">Essential oil blend, seasonal scrub, warm towel therapy and custom massage.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320550&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Spa Ritual Manicure — with Gel<span className="m-menu-price">$75</span>
                    <li className="muted">Exfoliating scrub, hydrating mask, hot towel wrap, and warm oil massage.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320547&share=true&pId=2701511"}>Book Now</a>
                </li>
                <li className="m-menu-item">Spa Ritual Manicure — Classic<span className="m-menu-price">$65</span>
                    <li className="muted">Exfoliating scrub, hydrating mask, hot towel wrap, and warm oil massage.</li>
                    <a className='m-btn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4933842&oiid=sv%3A25320540&share=true&pId=2701511"}>Book Now</a>
                </li>
            </ul>
        </section>

        {/* <img src={heroTwo} alt="Pedicure Hero Image"></img> */}
        {/* <section className="m-section">
            <h2 className="m-section-title">Pedicures</h2>
            <section className="m-service-mobile">
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Classic Pedicure</h3>
                        <p className="m-price">$45</p>
                    </section>
                    <p className="m-service-desc">Luxurious soak in our pedicure tub, cuticle treatments including push back, trimming and buffing of toenails along with and amazing mini massage provided before the polish of your choice is applied</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Gel Pedicure</h3>
                        <p className="m-price">$55</p> 
                    </section>
                    <p className="m-service-desc">Luxurious soak in our pedicure tub, cuticle treatments including push back, trimming and buffing of toenails along with and amazing mini massage provided before the Gel polish of your choice is applied</p>
                </div>
            <h3 className="m-service-sub-title">Add Ons:</h3>
            <p className="m-service-sub-tag">French $20</p>
            <p className="m-service-sub-tag">Acrylic Removal $20</p>
            <p className="m-service-sub-tag">Dipping Removal $20</p>
            <p className="m-service-sub-tag">Gel Removal $10</p>
            <p className="m-service-sub-tag">Art Design (Varies)</p>
            </section>

        </section> */}

        <section className="sm-blurb wideContentBlock">
            <p className="SM-Txt">Real vibes. Real beauty. Real Spa Maluge.</p>
            <p className="SM-Txt">Tap into our world on Instagram & Facebook — you'll love what you see.</p>
            <div>
            <a href='https://www.instagram.com/spa_maluge/' target='blank'><img className="sm-color-icon" src="/insta-icon.svg" alt="Instagram link"></img></a>
            <a href='https://www.facebook.com/people/Maryna-Mindreau/61556201655523/' target='_blank'><img className="sm-color-icon" src="/facebook-icon.svg" alt="Facebook link"></img></a>
            </div>
        </section>
    </div>
  );
}

export default Manicure;