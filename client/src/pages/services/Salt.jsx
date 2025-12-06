import SaltImg from '../../assets/images/services/salt_one.webp';
import { Helmet } from "react-helmet-async";

function Salt() {
    return (
    <>
      <Helmet>
        <title>Himalayan Salt Stone Massage | Spa Maluge</title>
        <meta name="description" content="Experience the healing power of Himalayan Salt Stone Massage. Relax, rejuvenate, and support your body's health with this therapeutic spa treatment." />
        <meta property="og:title" content="Himalayan Salt Stone Massage" />
        <meta property="og:description" content="Enjoy benefits like improved circulation, reduced anxiety, muscle recovery, and gentle skin exfoliation with our Himalayan Salt Stone Massage." />
        <meta property="og:image" content="https://spamaluge.com/og/salt.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={SaltImg} alt='Himalayan Salt Stone Massage Display Image'></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Himalayan Salt Stone Massage</h1>
            <p className='mainFont lineBreak'>Healers have been using Salt Stones to maintain optimal health for thousands of years. More recently, massage therapists started using them in a spa setting because of the enhanced health benefits and therapeutic results. A hot Himalayan Salt Stone Massage provides the healing of the mind, body, and spirit.</p>
            <p className='mainFont lineBreak'>Himalayan Salt Stone Massage is not only relaxing and rejuvenating, but it also has many health benefits including, lowering blood pressure, supporting a healthy respiratory system, enhancing circulation, relieving anxiety and tension, treating insomnia, promoting normal blood sugar levels, improving muscle recovery and preventing muscle cramps, and boosting bone health. The salt stones are hand-carved and give gentle exfoliation to the skin during the massage, leaving it creamy and smooth. </p>
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
            <h2 className='serviceSubTitle lineBreak'>Benefits of a Himalayan Salt Stone Massage:</h2>
            <ul>
              <li className='list bulletPoint mainFont'>Balances the autonomic and peripheral nervous systems</li>
              <li className='list bulletPoint mainFont'>Provides deep relaxation</li>
              <li className='list bulletPoint mainFont'>Gently exfoliates the skin</li>
              <li className='list bulletPoint mainFont'>Improves circulation</li>
              <li className='list bulletPoint mainFont'>Supplies immune support</li>
              <li className='list bulletPoint mainFont'>Helps to reduce symptoms of autoimmune conditions</li>
              <li className='list bulletPoint mainFont'>Contributes to a sense of wellbeing</li>
              <li className='list bulletPoint mainFont'>Treats insomnia</li>
              <li className='list bulletPoint mainFont'>Enhances detoxification</li>
              <li className='list bulletPoint mainFont'>Reduces inflammation</li>
              <li className='list bulletPoint mainFont'>Relieves muscle pain and tension</li>
              <li className='list bulletPoint mainFont'>Relaxes the mind and spirit</li>
              <li className='list bulletPoint mainFont'>Promotes a healthy respiratory system </li>
              <li className='list bulletPoint mainFont'>Supports the sinuses</li>
              <li className='list bulletPoint mainFont'>Boosts bone health</li>
            </ul>
        </section>

        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
          <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
          <p className='mainFont italic lineBreak'>Fresh fracture or wound(s), severe skin conditions (like eczema or rashes), those with high blood pressure, kidney disease, pregnancy, diabetes, and/or people with a loss of sensation/neuropathy.
          </p>
          <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
          <h2 className='serviceSubTitle lineBreak'>*Important Steps Before Getting This Massage:</h2>
          <p className='mainFont italic lineBreak'>Drink plenty of water before, during, and after the massage to help prevent dehydration and burns from dry skin.</p>
          <p className='mainFont italic lineBreak'>Apply a skin moisturizer to prevent dry skin as sry skin can burn more easily with the salt stones used in this massage.</p>
          <p className='mainFont italic lineBreak'>Monitor sodium intake if you have kidney, heart, or liver issues, or if you're on a sodium-restricted diet as your skin will be absorbing salt from the salt stones used in this massage.</p>
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4952432&oiid=sv%3A25319960&share=true&pId=2701511"}>Book Your Massage Here</a>
          <ul>
            <li className='mainFont bulletPoint'>30 Minutes - $90</li>
            <li className='mainFont bulletPoint'>60 Minutes - $160</li>
            <li className='mainFont bulletPoint'>90 Minutes - $220</li>
            <li className='mainFont bulletPoint'>Or Add On Himalayan Salt Stones' To Another Massage - Additional $20.00</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Salt;