import CouplesImg from '../../assets/images/services/couple.webp';
import { Helmet } from "react-helmet-async";

function Couples() {
    return (
      <>
        <Helmet>
          <title>Couples Massage | Spa Maluge</title>
          <meta name="description" content="Strengthen your bond and unwind together with a relaxing Couples Massage in the cozy and serene atmosphere of Spa Maluge." />
          <meta property="og:title" content="Couples Massage" />
          <meta property="og:description" content="Share the experience of deep relaxation and connection with a Couples Massage at Spa Maluge. Perfect for romance, renewal, and stress relief." />
          <meta property="og:image" content="https://spamaluge.com/og/couple.webp" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
        </Helmet>
      
        <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={CouplesImg} alt='Couples Massage Display Image'></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Couples Massage</h1>
            <p className='mainFont lineBreak'>Enhance your relationship with a touch of romance by indulging in relaxing treatments at the cozy Spa Maluge. Immerse yourself in the tranquil atmosphere as our specialists lavish you with care and attention. Experience the harmony of body and soul, sharing a state of complete peace together.</p>
            <p className='mainFont lineBreak'>During a couples massage, you and your partner will receive simultaneous massages in the same room, allowing you to enjoy the nurturing, relaxing, and therapeutic benefits of massage together. Not only do couples massages provide a relaxing and romantic experience for you and your partner, but they also offer numerous benefits for your physical, mental, and relationship health.</p>
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Here are 7 benefits you can enjoy when you opt for a couple's massage:</h2>
          <ul>
              <li className='list bulletPoint mainFont'>Strengthen your bond</li>
              <li className='list bulletPoint mainFont'>Improve sleep time</li>
              <li className='list bulletPoint mainFont'>Reduce stress and anxiety</li>
              <li className='list bulletPoint mainFont'>Improve physical touch</li>
              <li className='list bulletPoint mainFont'>Learn new massage techniques</li>
              <li className='list bulletPoint mainFont'>Quality couple time</li>
              <li className='list bulletPoint mainFont'>Create lasting memories</li>
            </ul>
        </section>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Couple's Mini Spa Day</h2>
          <p className='mainFont'>Our Couple's Mini Spa Day gives you and a loved one a good taste of each of our specialties including:</p>
          <ul>
            <li className='list bulletPoint mainFont'>Two glasses of champagne</li>
            <li className='list bulletPoint mainFont'>Strawberries + Nutella Dip</li>
            <li className='list bulletPoint mainFont'>40 Minute Full Body Hotstone Massage</li>
            <li className='list bulletPoint mainFont'>20 Minute Mini Facial</li>
            <li className='list bulletPoint mainFont'>Aromatherapy</li>
          </ul>
          <p className='mainFont bold'>A $199 Value!</p>
          <p className='mainFont lineBreak bold'>Duration: 60 Mins Deluxe massage for couples</p>
          <a className='bookNowBtn' rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book Your Massage Here</a>
        </section>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Our best offer is the Deluxe Couples Package!</h2>
          <p className='mainFont'>Go the extra mile for your loved one and treat them to a complete massage and facial!</p>
          <p className='mainFont lineBreak'>A room with candles is available upon request!</p>
          <p className='mainFont'>This package includes:</p>
          <ul>
            <li className='list bulletPoint mainFont'>Two glasses of champagne</li>
            <li className='list bulletPoint mainFont'>Strawberries + Nutella Sauce</li>
            <li className='list bulletPoint mainFont'>60 Minute Full Body Hotstone Massage</li>
            <li className='list bulletPoint mainFont'>30-minute custom massage of your choice.</li>
            <li className='list bulletPoint mainFont'>Aromatherapy</li>
          </ul>
          <p className='mainFont bold'>90 minutes/ $299</p>
          <p className='mainFont lineBreak bold'>120 minutes/ $360</p>
          <a className='bookNowBtn' rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book Your Massage Here</a>
        </section>

      </div>
    </>
  );
}

export default Couples;