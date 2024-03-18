import CouplesImg from '../../assets/images/services/coupleOne.jpg';

function Couples() {
    return (
      <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={CouplesImg} alt='Couples Massage Display Image'></img>

        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Couples Massage</h1>
          <p className='serviceText lineBreak'>Enhance your relationship with a touch of romance by indulging in relaxing treatments at the cozy Spa Maluge. Immerse yourself in the France atmosphere as our specialists lavish you with care and attention. Experience the harmony of body and soul, sharing a state of complete peace together.</p>
          <p className='serviceText lineBreak'>Our Mini Couple's Spa Day gives you and a loved one a good taste of each of our specialties including:</p>

          <ul>
            <li className='list bulletPoint serviceText'>Two glasses of champagne</li>
            <li className='list bulletPoint serviceText'>Strawberries + Nutella Dip</li>
            <li className='list bulletPoint serviceText'>40 Minute Full Body Hotstone Massage</li>
            <li className='list bulletPoint serviceText'>20 Minute Mini Facial</li>
            <li className='list bulletPoint serviceText'>Aroma Therapy</li>
          </ul>
        </section>
      </div>

      {/* <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>History Of Origin</h2>
        <p className='serviceText lineBreak'></p>
        <p className='serviceText lineBreak'></p>
        
        <p className='serviceText lineBreak'></p>
        <p className='serviceText lineBreak'></p>
        <p className='serviceText lineBreak'></p>

      </section>

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='serviceText italic lineBreak'></p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
        <a className='bookNowBtn' href='/book-now'>Book Your Massage Here</a>
        <ul>
          <li className='serviceText bulletPoint'>30 Minutes - $</li>
          <li className='serviceText bulletPoint'>60 Minutes - $</li>
          <li className='serviceText bulletPoint'>90 Minutes - $</li>
        </ul>
      </section> */}

    </div>
  );
}

export default Couples;