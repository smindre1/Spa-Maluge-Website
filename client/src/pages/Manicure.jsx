import heroImg from "../assets/images/manicure/img_15760.jpg";
import heroOne from "../assets/images/manicure/manicure-hero-img-one.webp";
import heroTwo from "../assets/images/manicure/manicure-hero-img-two.webp";
import ImgOne from "../assets/images/manicure/img_1577.png";
import flwrBr from "../assets/images/manicure/flower-border.jpg";
import ImgTwo from "../assets/images/manicure/img_1579.png";

function Manicure() {
    return (
    <div className='flexColumn'>

        <img className="m-hero" src={flwrBr} alt="flower border image"></img>

        <img className="m-hero" src={heroOne} alt="Manicure Hero Image"></img>

        {/* <section className="m-hero whiteBackground">
            <div className="m-mobile-bckgrd">
                <div className="m-title-hg-mobile"></div>
                <h2 className="m-hero-subtitle">Spa Maluge</h2>
                <h1 className='m-hero-title center'>Manicures</h1>
                
            </div>
            <img className="m-hero-img" src={heroImg} alt="manicure hero image" />
        </section> */}


        <div className="wideContentBlock pink-bckg">
        <section className="sm-blurb">
            <p className="SM-Txt">Real vibes. Real beauty. Real Spa Maluge.</p>
            <p className="SM-Txt">Tap into our world on Instagram & Facebook — you'll love what you see.</p>
            <div>
            <a href='https://www.instagram.com/spa_maluge/' target='blank'><img className="sm-color-icon" src="/insta-icon.svg" alt="Instagram link"></img></a>
            <a href='https://www.facebook.com/people/Maryna-Mindreau/61556201655523/' target='_blank'><img className="sm-color-icon" src="/facebook-icon.svg" alt="Facebook link"></img></a>
            </div>
        </section>
        </div>

        <section className="m-section m-height">
            {/* <img className="m-img-one" src={ImgOne} alt="side profile manicure image" /> */}
            <h2 className="m-section-title">Styles</h2>
            <section className="m-service-module">
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Classic Manicure (Reg/Gel)</h3>
                        <p className="m-price">$25 | $49</p>
                    </section>
                    <p className="m-service-desc">Includes the reshaping and cleaning of the nails, cuticle grooming, a light moisturizing flex massage and then finished with a polish color of your choice</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Happy Hands Manicure (Reg / Gel)</h3>
                        <p className="m-price">$30 | $55</p> 
                    </section>
                    <p className="m-service-desc">Includes all of the steps of the classic manicure with an additional extended flex massage.</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Deluxe Manicure (Reg / Gel)</h3>
                        <p className="m-price">$59 | $69</p> 
                    </section>
                    <p className="m-service-desc">Treat yourself to a "SPA" manicure. Includes hydrating mask, exfoliating scrub and light moisturizing. Hot towel wrap and finished with a polish color of your choice.</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Enhancement Après Gel X (s,m,l)</h3>
                        <p className="m-price">$100</p> 
                    </section>
                    <p className="m-service-desc">Prepare and Apply "natural" Tips to the edge of your natural nails. Après gel is applied for strength and durability. Then length, file, buff, shape and polish as per your preference. (4+ week duration)</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Bio Structure Gel (Long Nails)</h3>
                        <p className="m-price">$100</p> 
                    </section>
                    <p className="m-service-desc">Prepare and Apply our high quality BIO GEL to the edge of your LONG NATURAL NAILS. Bio Gel is applied for strength and durability of your long or short natural nails. Then file, buff, shape and polish as per your preference. (4+ week duration)</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Bio Structure Gel (Short / Medium)</h3>
                        <p className="m-price">$80</p> 
                    </section>
                    <p className="m-service-desc">Prepare and Apply our high quality BIO GEL to the edge of your SHORT/MEDIUM NATURAL NAILS. Bio Gel is applied for strength and durability of your long or short natural nails. Then file, buff, shape and polish as per your preference. (4+ week duration)</p>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag">Signature Gel</h3>
                        <p className="m-price">$80</p>
                    </section>
                    <p className="m-service-desc">Cuticle treatments including push back, remove excess skin then shape, buff your nails. Hand lotion and a mini massage is provided after deep cuticle removal with special techniques than a final nail strengthener and clear polish are applied. (4+ week duration)</p>
                </div>
            </section>
            
        </section>

        <img src={heroTwo} alt="Pedicure Hero Image"></img>
        <section className="m-section">
            {/* <img className="m-img-two" src={ImgTwo} alt="side profile manicure image" /> */}
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

        </section>
        {/* <section className="m-section">
            <h2 className="m-section-title">Waxing</h2>
            <section className="m-service-mobile">
                <h3 className="m-service-sub-title">* Prices May Vary</h3>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Lip</h3>
                        <p className="m-price-c">$10</p>
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Chest</h3>
                        <p className="m-price-c">$30</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Back</h3>
                        <p className="m-price-c">$50*</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Tummy</h3>
                        <p className="m-price-c">$19</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Chin</h3>
                        <p className="m-price-c">$10</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Forehead</h3>
                        <p className="m-price-c">$15</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Eyebrows</h3>
                        <p className="m-price-c">$15</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Sideburn</h3>
                        <p className="m-price-c">$15</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Full Face</h3>
                        <p className="m-price-c">$50</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Neck</h3>
                        <p className="m-price-c">$19</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Under Arms</h3>
                        <p className="m-price-c">$19</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Half Arms</h3>
                        <p className="m-price-c">$30</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Full Arms</h3>
                        <p className="m-price-c">$40</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Lower Legs</h3>
                        <p className="m-price-c">$40</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Full Legs</h3>
                        <p className="m-price-c">$60</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Bikini</h3>
                        <p className="m-price-c">$40*</p> 
                    </section>
                </div>
                <div className="m-service">
                    <section className="flexRow">
                        <h3 className="m-service-tag-c">Brazilian Bikini</h3>
                        <p className="m-price-c">$60*</p> 
                    </section>
                </div>
            </section>
        </section> */}
        
      {/* <section className='contactPageContent'>
        <div className='businessInfo'>
          <h2 className="minorTitle">Business Contacts</h2>
          <p className='businessInfoTxt'>Call Us At: </p>
          <p className='businessInfoTxt'>Email Us At: </p>
          <a className='businessInfoTxt'>Find Us At: 108 Adams St, Hoboken, NJ 07030</a>
        </div>
      </section> */}
      
    </div>
  );
}

export default Manicure;