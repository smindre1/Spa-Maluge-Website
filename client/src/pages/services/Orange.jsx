import OrangeImg from '../../assets/images/services/orange.webp';
import { Helmet } from "react-helmet-async";

function Orange() {
    return (
    <>
      <Helmet>
        <title>Hot Orange Massage | Spa Maluge</title>
        <meta name="description" content="Awaken your senses and rejuvenate your skin with our Hot Orange Massage — a legendary ritual that nourishes the body and uplifts the spirit." />
        <meta property="og:title" content="Hot Orange Massage" />
        <meta property="og:description" content="Rooted in ancient tradition, the Hot Orange Massage strengthens the immune system and revives dull, dehydrated skin with the power of citrus and gentle touch." />
        <meta property="og:image" content="https://spamaluge.com/og/orange.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={OrangeImg} alt='Hot Orange Massage Display Image'></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Hot Orange Massage</h1>
            <p className='mainFont lineBreak'>The history of our civilization is full of secrets, mysteries and legends. One of these ancient myths is the story of the hot orange massage that have been celebrated for centuries for their purity and beauty.</p>
            <p className='mainFont lineBreak'>The ritual of the Orange massage strengthens the immune system and has beneficial effects on the whole organism. It is a gentle massage with oranges that enhances skin texture and revives dull and dehydrated skin.</p>
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>What to Expect During a Hot Orange Massage</h2>
          <p className='lineBreak mainFont'>The hot oranges are gently and smoothly rolled over the body working the muscles, relieving pain, fatigue and bad mood, leaving a wonderful aroma and pleasant warmth throughout the body. Smooth movements along the energy points are used to completely relax the body.</p>
          <p className='mainFont lineBreak'>After the body is worked on, the oranges are cut into two parts and the skin is rubbed again with the orange pulps and slices, so the nutrients are instantly absorbed into the pores of the skin! The pleasant smell of fruits fills the air, adding aromatherapy to the massage and relaxing you due to a combination of warmth and smooth deep pressure massage technique in which you will lose the sense of time and reality... The body relaxes and the brain literally switches off! The aroma of citrus has a bright anti-stress effect.</p>
          <p className='mainFont lineBreak'>This beautiful ritual removes waste and toxins from your body activating the metabolic process and improving the blood circulation which also improves the skin condition. It also eliminates cellulite, relieves stress and nervous tension. You are worthy of kindness and self-care; take a moment from the busy Life to acknowledge your value and treat yourself with the same care and respect you would offer to someone you love!</p>
        </section>

        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
          <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
          <p className='mainFont italic lineBreak'>Allergy to citrus fruits, infections, skin diseases, wounds and/or abrasions on the
          body.</p>
          <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
    
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4952432&oiid=sv%3A25320071&share=true&pId=2701511"}>Book Your Massage Here</a>
          <ul>
            <li className='mainFont bulletPoint'>30 Minutes - $70</li>
            <li className='mainFont bulletPoint'>45 Minutes - $100</li>
            <li className='mainFont bulletPoint'>60 Minutes - $120</li>
            <li className='mainFont bulletPoint'>90 Minutes - $180</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Orange;