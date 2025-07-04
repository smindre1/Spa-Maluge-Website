import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Detox from "../assets/images/services/small_detox.webp";
import Deep from "../assets/images/services/small_deep.webp";
import HotStone from "../assets/images/services/small_stone.webp";
import Sport from "../assets/images/services/small_sport.webp";
import CBD from "../assets/images/services/small_CBD.webp";
import Head from "../assets/images/services/small_head.webp";
import Prenatal from "../assets/images/services/small_prenatal.webp";
import CouplesOne from "../assets/images/services/small_couple.webp";
import Salt from '../assets/images/services/small_salt.webp';
import SaltTwo from "../assets/images/services/salt_three.webp";
import Medical from "../assets/images/services/small_medical.webp";
import Shiatsu from "../assets/images/services/small_shiatsu.webp";
import Orange from "../assets/images/services/small_orange.webp";
import Myofascial from "../assets/images/services/small_myofascial.webp";
import Neuromuscular from "../assets/images/services/small_neuromuscular.webp";
import Orthopedic from "../assets/images/services/small_orthopedic.webp";

import ReflexOne from "../assets/images/services/small_reflex.webp";

import Cup from "../assets/images/services/small_cup.webp";
import Facial from "../assets/images/services/small_facial.webp";
import Lymph from "../assets/images/services/small_lymph.webp";
import Anticellulite from "../assets/images/services/small_Anticellulite.webp";
import Aroma from "../assets/images/services/small_Aroma.webp";
import DescImage from "../assets/images/description_stock_image.webp";

import TLCorner from "../assets/images/decals/TL_Baroque_Corner.svg";
import TRCorner from "../assets/images/decals/TR_Baroque_Corner.svg";
import BLCorner from "../assets/images/decals/BL_Baroque_Corner.svg";
import BRCorner from "../assets/images/decals/BR_Baroque_Corner.svg";
import TitleFrame from "../assets/images/decals/Section_Title_Frame.svg";


function Home() {
  const [language, setLanguage] = useState("english");

  return (
    <>
      <Helmet>
          <title>Spa Maluge, Enjoy Relaxation at it's Finest, Hoboken, New Jersey</title>
          <meta property="og:title" content="Spa Maluge" />
          <meta name="description" content="Spa Maluge is a beautiful and relaxing Spa located in Hoboken, NJ. Come here and feel your stress melt away." />
          <meta property="og:description" content="Spa Maluge is a beautiful and relaxing Spa located in Hoboken, NJ. Come here and feel your stress melt away." />
          {/* <meta property="og:image" content="https://spamaluge.com/public/og/" /> */}
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      <div>
        <section className="hero">
          <img className="topLeftCorner" src={TLCorner} alt="Top Left Frame Corner"></img>
          <img className="topRightCorner" src={TRCorner} alt="Top Right Frame Corner"></img>
          <div className="titleBreak flexColumn">
            <h1 className="pageTitle">
              <p className="smallPageTitle">Welcome to </p> Spa Maluge
            </h1>
            <h2 className="welcomeMsg pari">Enjoy Relaxation At It's Finest</h2>
          </div>
          <img className="bottomLeftCorner" src={BLCorner} alt="Bottom Left Frame Corner"></img>
          <img className="bottomRightCorner" src={BRCorner} alt="Bottom Right Frame Corner"></img>
        </section>

        {/* <section className="introContent">
          <p className="introText lineBreak mainFont bold colorLG">
            Welcome to Spa Maluge's Massage Salon, your oasis of relaxation nestled in the heart of charming Hoboken, New Jersey.
          </p>
          <p className="introText lineBreak mainFont">
            At Spa Maluge, we invite you to escape the hustle and bustle of daily life and indulge in a rejuvenating experience tailored to soothe your mind, body, and spirit. Our expert
            therapists are dedicated to providing personalized care and attention, ensuring that each visit leaves you feeling refreshed, renewed, and ready to
            take on the world.
          </p>
          <p className="introText mainFont">
            Step into our serene sanctuary and embark on a journey of blissful tranquility, where the stresses of the outside world melt away with every gentle
            touch. Discover the serenity you deserve at Spa Maluge.
          </p>
        </section> */}

        <section className="sectionBreak center">
          <div className="description">
            <img className="contentImage white" src={DescImage} title="Massage Services" alt="Massage Services Image"></img>
            <div className="descriptionText">
              <h2 className="descriptionTitle mainFont">Our Spa Massage Services</h2>
              <p>
                Indulge your senses and embrace the ultimate relaxation with our exquisite massage services. Our team of skilled therapists offers a diverse range
                of techniques and modalities to cater to your specific needs and preferences. Whether you seek relief from muscle tension, stress reduction, or
                simply a moment of pure tranquility, we are committed to providing you with a deeply rejuvenating experience. From Swedish and deep tissue
                massages to aromatherapy and hot stone treatments, each session is crafted to promote healing, balance, and holistic well-being. Step into our
                serene sanctuary and let us melt away your cares, leaving you feeling restored, refreshed, and renewed.
              </p>
            </div>
          </div>
        
          {/* <div className="description">
            <div className="contentBlock whiteBackground">
              <h2 className="prgTitle mainFont">Our Spa Massage Services</h2>
              <p className="mainFont">
                Indulge your senses and embrace the ultimate relaxation with our exquisite massage services. Our team of skilled therapists offers a diverse range
                of techniques and modalities to cater to your specific needs and preferences. Whether you seek relief from muscle tension, stress reduction, or
                simply a moment of pure tranquility, we are committed to providing you with a deeply rejuvenating experience. From Swedish and deep tissue
                massages to aromatherapy and hot stone treatments, each session is crafted to promote healing, balance, and holistic well-being. Step into our
                serene sanctuary and let us melt away your cares, leaving you feeling restored, refreshed, and renewed.
              </p>
            </div>

            <img className="contentImage pushLeft white" src={DescImage} title="Massage Services" alt="Massage Services Image"></img>
          </div> */}
        </section>

        <section className="sectionBreak flexColumn">
          <div className="center">
            <img className="sectionTitleFrame" src={TitleFrame} alt="Title Frame"></img>
            <h2 className="sectionTitle sectionImageLabel">Maluge Services</h2>
          </div>

          <div className="whiteBackground servicesFrame marginCenter detailedBorder">
            {/* <img className='rightBorder' src={RBorder}></img> */}
            <div className="servicesRow center">
              <a className="serviceAnchor" href="/services/detox-custom-swedish-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Detox} title="Detox Custom Swedish Massage" alt="Detox Custom Swedish Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Detox Custom Swedish Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/deep-tissue-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Deep} title="Deep Tissue Massage" alt="Deep Tissue Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Deep Tissue Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/hot-stone-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={HotStone} title="Hot Stone Massage" alt="Hot Stone Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Hot Stone Massage</h3>
                </div>
              </a>

              <a className="serviceAnchor" href="/services/sports-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Sport} title="Sports Massage" alt="Sports Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Sports Massage</h3>
                </div>
              </a>
              {/* <a className="serviceAnchor" href="/services/cbd-custom-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={CBD} title="CBD Custom Massage" alt="CBD Custom Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">CBD Custom Massage</h3>
                </div>
              </a> */}
              <a className="serviceAnchor" href="/services/head-neck-shoulders-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Head} title="Head-Neck-Shoulders Massage" alt="Head-Neck-Shoulders Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Head - Neck - Shoulders Massage</h3>
                </div>
              </a>

              <a className="serviceAnchor" href="/services/prenatal-and-postnatal-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Prenatal} title="Prenatal and Postnatal Massage" alt="Prenatal and Postnatal Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Prenatal and Postnatal Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/couples-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={CouplesOne} title="Couples Massage" alt="Couples Massage Image"></img>
                    {/* <img className='serviceImg' src={CouplesTwo} title="Couples Massage" alt='Couples Massage Image'></img> */}
                  </div>
                  <h3 className="minorTitle">Couples Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/reflexology-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={ReflexOne} title="Reflexology Massage" alt="Reflexology Massage Image"></img>
                    {/* <img className='serviceImg' src={ReflexOne} title="Reflexology Massage" alt='Reflexology Massage Image'></img> */}
                  </div>
                  <h3 className="minorTitle">Reflexology Massage</h3>
                </div>
              </a>

              <a className="serviceAnchor" href="/services/cupping-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Cup} title="Cupping Massage" alt="Cupping Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Cupping Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/facial-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Facial} title="Facial Massage" alt="Facial Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Facial Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/lymph-drainage-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Lymph} title="Lymph Drainage Massage" alt="Lymph Drainage Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Lymph Drainage Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/anticellulite-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Anticellulite} title="Anticellulite Massage" alt="Anticellulite Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Anticellulite Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/aroma-therapy-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Aroma} title="Aroma Therapy Massage" alt="Aroma Therapy Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Aroma Therapy Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/himalayan-salt-stone-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Salt} title="Himalayan Salt Stone Massage" alt="Himalayan Salt Stone Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Himalayan Salt Stone Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/medical-massage-therapy">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Medical} title="Medical Massage Therapy" alt="Medical Massage Therapy Image"></img>
                  </div>
                  <h3 className="minorTitle">Medical Massage Therapy</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/shiatsu-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Shiatsu} title="Shaitsu Massage" alt="Shaitsu Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Shiatsu Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/hot-orange-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Orange} title="Hot Orange Massage" alt="Hot Orange Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Hot Orange Massage</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/myofascial-release-therapy">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Myofascial} title="Myofascial Release Therapy" alt="Myofascial Release Therapy Image"></img>
                  </div>
                  <h3 className="minorTitle">Myofascial Release Therapy</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/neuromuscular-massage-therapy">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Neuromuscular} title="Neuromuscular Massage Therapy" alt="Neuromuscular Massage Therapy Image"></img>
                  </div>
                  <h3 className="minorTitle">Neuromuscular Massage Therapy</h3>
                </div>
              </a>
              <a className="serviceAnchor" href="/services/orthopedic-massage">
                <div className="service">
                  <div className="overflow">
                    <img className="serviceImg" src={Orthopedic} title="Hot Orange Massage" alt="Hot Orange Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Orthopedic Massage</h3>
                </div>
              </a>
            </div>
          </div>

        </section>

        <section className="sectionBreak flexColumn">
          <div className="center">
            <img className="sectionTitleFrame" src={TitleFrame} alt="Title Frame"></img>
            <h2 className="sectionTitle sectionImageLabel">Add Ons</h2>
          </div>

          <div className="whiteBackground servicesFrame marginCenter detailedBorder">
            {/* <img className='rightBorder' src={RBorder}></img> */}
            <div className="servicesRow center">

              <a className="serviceAnchor" href="/services/hot-stone-massage">
                <div className="service">
                  <div className="overflow addOnImg">
                    <img className="serviceImg" src={HotStone} title="Hot Stone Massage Addition" alt="Hot Stone Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Hot Stone Massage</h3>
                </div>
              </a>

              <a className="serviceAnchor" href="/services/cbd-custom-massage">
                <div className="service">
                  <div className="overflow addOnImg">
                    <img className="serviceImg" src={CBD} title="CBD Custom Massage Addition" alt="CBD Custom Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">CBD Custom Massage</h3>
                </div>
              </a>

              <a className="serviceAnchor" href="/services/cupping-massage">
                <div className="service">
                  <div className="overflow addOnImg">
                    <img className="serviceImg" src={Cup} title="Cupping Massage Addition" alt="Cupping Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Cupping Massage</h3>
                </div>
              </a>

              <a className="serviceAnchor" href="/services/himalayan-salt-stone-massage">
                <div className="service">
                  <div className="overflow addOnImg">
                    <img className="serviceImg" src={SaltTwo} title="Himalayan Salt Stone Massage Addition" alt="Himalayan Salt Stone Massage Image"></img>
                  </div>
                  <h3 className="minorTitle">Himalayan Salt Stone Massage</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="conclusionSection">
          <div className="wideContentBlock whiteBackground heroTwo">
            <section className="lgt-bckg">
              {/* <p className="SM-Txt lightWhite"><b>Curious what it really looks like inside?</b></p>
              <p className="SM-Txt lightWhite"><b>Come take a peek — we post all the behind the scenes beauty on Instagram & Facebook!</b></p> */}
              <p className="bodyText lightWhite"><b>Ready to experience the blissful benefits of our expert massage services? Treat yourself to the ultimate indulgence. Don't wait to invest in your well-being and take the first step towards a happier, healthier you by scheduling your appointment now.</b></p>
              {/* <div>
                <a href='https://www.instagram.com/spa_maluge/' target='blank'><img className="sm-color-icon" src="/instagram-c-icon-color.svg" alt="Instagram link"></img></a>
                <a href='https://www.facebook.com/people/Maryna-Mindreau/61556201655523/' target='_blank'><img className="sm-color-icon" src="/facebook-c-icon-color.svg" alt="Facebook link"></img></a>
              </div> */}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
