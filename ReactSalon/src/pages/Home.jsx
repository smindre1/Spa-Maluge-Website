import { useState } from "react";
import Detox from "../assets/images/services/detox.jpg";
import Deep from "../assets/images/services/deep.jpg";
import HotStone from "../assets/images/services/stone.jpg";
import Sport from "../assets/images/services/sport.jpg";
import CBD from "../assets/images/services/CBD.jpg";
import Head from "../assets/images/services/head.jpg";
import Prenatal from "../assets/images/services/prenatal.jpg";
import CouplesOne from "../assets/images/services/coupleOne.jpg";
import CouplesTwo from "../assets/images/services/coupleTwo.jpg";
import ReflexOne from "../assets/images/services/reflexOne.jpg";
import ReflexTwo from "../assets/images/services/reflexTwo.jpg";
import Cup from "../assets/images/services/cup.jpg";
import Facial from "../assets/images/services/facial.jpg";
import Lymph from "../assets/images/services/lymph.jpg";

import Logo from "../assets/test_frame_w.png";

function Home() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="page">
      <section className="flexRow bkgrdColor goldBackground">
        <img className="logo" src={Logo}></img>

        <div className="titleAnim flexColumn">
          <h1 className="pageTitle">
            <p className="smallPageTitle">Welcome to </p> Spa Maluge
          </h1>
          <h2 className="welcomeMsg pari">Enjoy Relaxation At It's Finest</h2>
          {/* <a>Schedule Now</a> */}
        </div>
      </section>

      <section className="introContent">
        <p className="bodyText lineBreak">
          Welcome to Spa Maluge's Massage Salon, your oasis of relaxation nestled in the heart of charming Hoboken, New Jersey. At Spa Maluge, we invite you to
          escape the hustle and bustle of daily life and indulge in a rejuvenating experience tailored to soothe your mind, body, and spirit. Our expert
          therapists are dedicated to providing personalized care and attention, ensuring that each visit leaves you feeling refreshed, renewed, and ready to
          take on the world.
        </p>
        <p className="bodyText">
          Step into our serene sanctuary and embark on a journey of blissful tranquility, where the stresses of the outside world melt away with every gentle
          touch. Discover the serenity you deserve at Spa Maluge.
        </p>
      </section>

      <section className="sectionBreak center">
        <div className="flexRow">
          <div className="contentBlock pushRight">
            <h2 className="prgTitle">Our Spa Massage Services</h2>
            <p className="bodyText">
              Indulge your senses and embrace the ultimate relaxation with our exquisite massage services. Our team of skilled therapists offers a diverse range
              of techniques and modalities to cater to your specific needs and preferences. Whether you seek relief from muscle tension, stress reduction, or
              simply a moment of pure tranquility, we are committed to providing you with a deeply rejuvenating experience. From Swedish and deep tissue
              massages to aromatherapy and hot stone treatments, each session is crafted to promote healing, balance, and holistic well-being. Step into our
              serene sanctuary and let us melt away your cares, leaving you feeling restored, refreshed, and renewed.
            </p>
          </div>

          <img className="contentImage pushLeft white" src="" alt="Massage Services Image"></img>
        </div>
      </section>

      <section className="sectionBreak flexColumn">
        <h2 className="sectionTitle center">Maluge Services</h2>
        <div className="servicesRow center">
          <a className="serviceAnchor" href="/services/detox-custom-swedish-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Detox} alt="Petox Custom Swedish Massage Image"></img>
              </div>
              <h3 className="minorTitle">Detox Custom Swedish Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/deep-tissue-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Deep} alt="Deep Tissue Massage Image"></img>
              </div>
              <h3 className="minorTitle">Deep Tissue Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/hot-stone-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={HotStone} alt="Hot Stone Massage Image"></img>
              </div>
              <h3 className="minorTitle">Hot Stone Massage</h3>
            </div>
          </a>

          <a className="serviceAnchor" href="/services/sport-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Sport} alt="Sport Massage Image"></img>
              </div>
              <h3 className="minorTitle">Sport Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/cbd-custom-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={CBD} alt="CBD Custom Massage Image"></img>
              </div>
              <h3 className="minorTitle">CBD Custom Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/head-neck-shoulders-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Head} alt="Head-Neck-Shoulders Massage Image"></img>
              </div>
              <h3 className="minorTitle">Head - Neck - Shoulders Massage</h3>
            </div>
          </a>

          <a className="serviceAnchor" href="/services/prenatal-and-postnatal-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Prenatal} alt="Prenatal and Postnatal Massage Image"></img>
              </div>
              <h3 className="minorTitle">Prenatal and Postnatal Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/couples-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={CouplesOne} alt="Couples Massage Image"></img>
                {/* <img className='serviceImg' src={CouplesTwo} alt='Couples Massage Image'></img> */}
              </div>
              <h3 className="minorTitle">Couples Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/reflexology-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={ReflexOne} alt="Reflexology Massage Image"></img>
                {/* <img className='serviceImg' src={ReflexOne} alt='Reflexology Massage Image'></img> */}
              </div>
              <h3 className="minorTitle">Reflexology Massage</h3>
            </div>
          </a>

          <a className="serviceAnchor" href="/services/cupping-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Cup} alt="Cupping Massage Image"></img>
              </div>
              <h3 className="minorTitle">Cupping Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/facial-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Facial} alt="Facial Massage Image"></img>
              </div>
              <h3 className="minorTitle">Facial Massage</h3>
            </div>
          </a>
          <a className="serviceAnchor" href="/services/lymph-drainage-massage">
            <div className="service">
              <div className="overflow">
                <img className="serviceImg" src={Lymph} alt="Lymph Drainage Massage Image"></img>
              </div>
              <h3 className="minorTitle">Lymph Drainage Massage</h3>
            </div>
          </a>
        </div>
      </section>

      <section className="sectionBreak">
        <div className="wideContentBlock">
          <p className="bodyText">
            Ready to experience the blissful benefits of our expert massage services? Treat yourself to the ultimate indulgence. Don't wait to invest in your
            well-being and take the first step towards a happier, healthier you by scheduling your appointment now.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
