import FacialImg from '../../assets/images/services/facial.webp';
import { Helmet } from "react-helmet-async";
//////
function Facial() {
    return (
    <>
      <Helmet>
        <title>Facial Massage | Spa Maluge</title>
        <meta name="description" content="Refresh your skin and relax your senses with a rejuvenating Facial Massage at Spa Maluge. Designed to promote circulation, lift tension, and restore your natural glow." />
        <meta property="og:title" content="Facial Massage" />
        <meta property="og:description" content="Boost skin health and reduce tension with our Facial Massage. Enjoy improved circulation, smoother texture, and a radiant, youthful appearance." />
        <meta property="og:image" content="https://spamaluge.com/og/facial.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
          
          <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={FacialImg}></img>
          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Facial Massage</h1>
            <p className='mainFont lineBreak'>Our exclusive facial massage technique brings natural rejuvenation by harmoniously engaging facial muscles, yielding the stunning results of a non-surgical facelift. This unique method delivering noticeable effects from the very first session.</p>
            <p className='mainFont lineBreak'></p>

            <h2 className='serviceSubTitle lineBreak'>Benefits</h2>
            <ul>
              <li className='list bulletPoint mainFont'>Stimulates improved blood circulation</li>
              <li className='list bulletPoint mainFont'>Lymphatic drainage</li>
              <li className='list bulletPoint mainFont'>Enhances microcirculation within subcutaneous fat layers, normalizes cellular respiration, and triggers metabolism and tissue revitalization.</li>
            </ul>
          </section>
        </div>

        <section className='prgBreak whiteBackground smallPadding'>
          <a className='bookNowBtn' rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book Your Massage Here</a>
          <ul>
            <li className='mainFont bulletPoint'>20 Minutes - $60.00</li>
            <li className='mainFont bulletPoint'>30 Minutes - $100.00</li>
            <li className='mainFont bulletPoint'>50 Minutes - $120.00</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Facial;