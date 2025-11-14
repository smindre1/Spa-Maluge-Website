import PrenatalImg from '../../assets/images/services/prenatal.webp';
import { Helmet } from "react-helmet-async";

function Prenatal() {
    return (
    <>
      <Helmet>
        <title>Prenatal & Postnatal Massage | Spa Maluge</title>
        <meta name="description" content="Support your body before and after birth with our Prenatal & Postnatal Massage. Relieve discomfort, reduce stress, and promote total-body wellness." />
        <meta property="og:title" content="Prenatal & Postnatal Massage" />
        <meta property="og:description" content="Experience comfort and care with our Prenatal & Postnatal Massage. Alleviate tension, improve circulation, and aid recovery during pregnancy and postpartum." />
        <meta property="og:image" content="https://spamaluge.com/og/prenatal.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={PrenatalImg}></img>
          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Prenatal & Postnatal Massage</h1>
            <p className='mainFont lineBreak'>Our prenatal and post-natal massages designed to help alleviate pain and discomfort, reduce stress, and promote relaxation.</p>
            <p className='mainFont lineBreak'>Whether you are pregnant or postpartum, our massages will offer you an opportunity to relax and rejuvenate.</p>
            <h2>Postnatal Massage</h2>
            <p className='mainFont'>A Postnatal Massage is a wonderful way to get your body back on track after giving birth. An abdominal massage during this time can help with pelvic floor health and digestive and bladder function.Postnatal massage sessions can also focus on reducing stress, improving circulation and reducing muscle tension and joint pain.</p>
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Benefits of a Prenatal & Postnatal Massage</h2>
          <ul>
            <li className='italic bulletPoint bold mainFont'>Pain Relief</li>
            <p className='mainFont'>Prenatal massage can help to relieve pain and discomfort in the back, neck, shoulders, and hips.</p>
            <li className='italic bulletPoint bold mainFont'>Stress Relief</li>
            <p className='mainFont'>Pregnancy can be stressful, and prenatal massage can help to reduce stress and promote relaxation.</p>
            <li className='italic bulletPoint bold mainFont'>Improved Circulation</li>
            <p className='mainFont'>Massage can help to improve circulation, which can benefit both you and your baby.</p>
            <li className='italic bulletPoint bold mainFont'>Better Sleep</li>
            <p className='mainFont'>Prenatal massage can help to improve the quality of your sleep, which is important for both you and your baby.</p>
            <li className='italic bulletPoint bold mainFont'>Reduced Swelling</li>
            <p className='mainFont lineBreak'>Massage can help to reduce swelling in the hands and feet, which is a common symptom of pregnancy.</p>
          </ul>
        </section>

        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
          <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
          <p className='mainFont italic lineBreak'>Fresh fracture or wound(s), Thrombosis, Diseases of the heart and vascular system, Predisposition to increased blood pressure, Varicose veins, Hernias, Inflammatory processes, and/or Tuberculosis.</p>
          <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
          <li className='italic bold mainFont'>Prenatal Massage:</li>
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "A25319327&share=true&pId=2701511"}>Book Your Massage Here</a>
          <li className='italic bold mainFont'>Postnatal Massage:</li>
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "A25319374&share=true&pId=2701511"}>Book Your Massage Here</a>
          <li className='italic bold mainFont '>Our Rates:</li>
          <ul>
            <li className='mainFont bulletPoint'>30 Minutes - $80.00</li>
            <li className='mainFont bulletPoint'>60 Minutes - $160.00</li>
            <li className='mainFont bulletPoint'>90 Minutes - $220.00</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Prenatal;