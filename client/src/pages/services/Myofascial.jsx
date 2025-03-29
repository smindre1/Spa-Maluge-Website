import MyofascialImg from '../../assets/images/services/myofascial.webp';

function Myofascial() {
    return (
    <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={MyofascialImg} alt='Myofascial Release Therapy Display Image'></img>

        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Myofascial Release Therapy</h1>
          <p className='mainFont lineBreak'>Myofascial Release Therapy is a hands-on technique that involves applying sustained, gentle pressure to the fascia, the connective tissue that surrounds and supports muscles, bones, and organs. When the fascia becomes tight due to injury, stress, poor posture, or trauma, it can cause pain, stiffness, and restricted movement.</p>
        </section>
      </div>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>How Myofascial Release Therapy Works</h2>
        <p className='lineBreak mainFont'>Myofascial Release Theraapy focuses on loosening and elongating the fascia by applying slow, steady pressure to areas of restriction. This helps:</p>
        <ul>
            <li className='list bulletPoint mainFont'>Reduce chronic pain</li>
            <li className='list bulletPoint mainFont'>Improve range of motion</li>
            <li className='list bulletPoint mainFont'>Enhance circulation and oxygen flow</li>
            <li className='list bulletPoint mainFont'>Break up scar tissue and adhesions</li>
          </ul>
      </section>

      <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Conditions Treated with Myofascial Release Theraapy:</h2>
          <p className='mainFont lineBreak'></p>
          <ul>
            <li className='list bulletPoint mainFont'>Chronic back pain</li>
            <li className='list bulletPoint mainFont'>Fibromyalgia</li>
            <li className='list bulletPoint mainFont'>Sciatica</li>
            <li className='list bulletPoint mainFont'>TMJ (jaw pain)</li>
            <li className='list bulletPoint mainFont'>Postural imbalances</li>
            <li className='list bulletPoint mainFont'>Shoulder, neck, and hip pain</li>
          </ul>
      </section>

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='mainFont italic lineBreak'>Acute illness, fever, osteoporoses, high blood pressure, arrhythmia, uncontrolled diabetes, bone fractures, recent wounds, recent scars, areas of inflammation, varicose veins, blood cancers, viruses (such as flu and chickenpox), and/or herniated disk(s)</p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>

        <a className='bookNowBtn' rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book Your Massage Here</a>
        <ul>
            <li className='mainFont bulletPoint'>30 Minutes - $79</li>
            <li className='mainFont bulletPoint'>60 Minutes - $149</li>
            <li className='mainFont bulletPoint'>75 Minutes - $179</li>
            <li className='mainFont bulletPoint'>90 Minutes - $210</li>
        </ul>
      </section>

    </div>
  );
}

export default Myofascial;