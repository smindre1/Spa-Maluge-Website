import MedicalImg from '../../assets/images/services/medical.webp';
import { Helmet } from "react-helmet-async";

function Medical() {
    return (
    <>
      <Helmet>
        <title>Medical Massage Therapy | Spa Maluge</title>
        <meta name="description" content="Restore your body's natural healing abilities with Medical Massage Therapy — a targeted treatment that relieves pain, supports recovery, and enhances well-being." />
        <meta property="og:title" content="Medical Massage Therapy" />
        <meta property="og:description" content="Used to treat a wide range of conditions, our Medical Massage Therapy improves physical function, reduces tension, and supports emotional balance." />
        <meta property="og:image" content="https://spamaluge.com/og/medical.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={MedicalImg} alt='Medical Massage Therapy Display Image'></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Medical Massage Therapy</h1>
            <p className='mainFont lineBreak'>Medical massage, a time-honored practice, employs diverse manipulations to impact the tissues and organs of the human body. Its aim extends beyond pain and tension relief, seeking to harness the body's inherent healing capabilities to promote overall well-being and enhance its functional efficiency.</p>
            <p className='mainFont lineBreak'>Medical massage is a highly regarded therapeutic tool, employed both independently and in conjunction with other treatments, for addressing a wide range of medical conditions.</p>
            <p className='mainFont lineBreak'>Additionally, it exerts a considerable positive influence on an individual's emotional and mental well-being.</p>
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
            <h2 className='serviceSubTitle lineBreak'>Benefits of Medical Massage Therapy:</h2>
            <p className='mainFont lineBreak'>Medical massage therapy effectively addresses sore muscles, nerve pain, trigger points, improves circulation, and reduces inflammation. It offers these benefits without the side effects or dependency risks associated with prescribed pain medications.</p>
            <p className='mainFont lineBreak'>This therapeutic modality proves effective in treating a wide range of conditions, including but not limited to:</p>
            <ul>
              <li className='list bulletPoint mainFont'>Whiplash</li>
              <li className='list bulletPoint mainFont'>Herniated Discs</li>
              <li className='list bulletPoint mainFont'>Sciatica</li>
              <li className='list bulletPoint mainFont'>Scoliosis</li>
              <li className='list bulletPoint mainFont'>Headaches</li>
              <li className='list bulletPoint mainFont'>Back pain</li>
              <li className='list bulletPoint mainFont'>Muscle Sprains</li>
              <li className='list bulletPoint mainFont'>Temporomandibular Joint (TMJ) Disorders</li>
              <li className='list bulletPoint mainFont'>Soft Tissue Injuries</li>
              <li className='list bulletPoint mainFont'>Carpal Tunnel Syndrome</li>
            </ul>
        </section>

        <section className='whiteBackground smallPadding prgBreak'>
            <h2 className='serviceSubTitle lineBreak'>Indications for getting Medical Massage Therapy:</h2>
            <ul>
              <li className='list bulletPoint mainFont'>Muscle pain and spasms</li>
              <li className='list bulletPoint mainFont'>Damage to the musculoskeletal system</li>
              <li className='list bulletPoint mainFont'>Rehabilitation after injuries and surgeries</li>
              <li className='list bulletPoint mainFont'>Circulatory and lymphatic drainage disorders</li>
              <li className='list bulletPoint mainFont'>Neurological diseases</li>
              <li className='list bulletPoint mainFont'>Stress and nervous tension</li>
              <li className='list bulletPoint mainFont'>Sleep disorders and fatigue</li>
            </ul>
        </section>

        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
          <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous and/or harmful.</h3>
          <p className='mainFont italic lineBreak'>Acute inflammatory processes, oncological diseases, thrombophlebitis, thrombosis, high blood pressure, pregnancy, skin damage and/or infections.</p>
          <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "A25320000&share=true&pId=2701511"}>Book Your Massage Here</a>
          <ul>
              <li className='mainFont bulletPoint'>15 Minutes - $39</li>
              <li className='mainFont bulletPoint'>30 Minutes - $69</li>
              <li className='mainFont bulletPoint'>45 Minutes - $99</li>
              <li className='mainFont bulletPoint'>60 Minutes - $129</li>
              <li className='mainFont bulletPoint'>90 Minutes - $189</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Medical;