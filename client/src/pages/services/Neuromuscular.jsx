import NeuromuscularImg from '../../assets/images/services/neuromuscular.webp';

function Neuromuscular() {
    return (
    <div className='servicePage'>
      <div className='serviceIntro prgBreak'>
        <img className='servicePageImg' src={NeuromuscularImg} alt='Neuromuscular Massage Therapy Display Image'></img>

        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Neuromuscular Massage Therapy</h1>
          <p className='mainFont lineBreak'>Neuromuscular massage therapy (NMT) is a specialized form of soft tissue manipulation that targets specific muscles and the nervous system to relieve tension, improve circulation, and promote overall muscle function. The therapy uses techniques such as trigger point therapy, deep tissue massage, and myofascial release to treat musculoskeletal pain, stiffness, and dysfunction.</p>
          <p className='mainFont lineBreak'>This massage The process typically involves identifying areas of muscle tension and applying focused pressure to these points to release the muscle's contraction and relieve the body.</p>
        </section>
      </div>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>Neuromuscular Massage Therapy is Effective With:</h2>
        <ul>
            <li className='list bulletPoint mainFont'>Chronic pain</li>
            <li className='list bulletPoint mainFont'>Muscle spasms</li>
            <li className='list bulletPoint mainFont'>Postural imbalances</li>
            <li className='list bulletPoint mainFont'>Repetitive strain injuries</li>
          </ul>
      </section>

      <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Benefits of a Neuromuscular Massage Therapy:</h2>
          <p className='mainFont lineBreak'></p>
          <ul>
            <li className='list bulletPoint mainFont'>Pain Relief</li>
                <p className='mainFont lineBreak'>One of the most significant benefits of NMT is its ability to reduce pain. By targeting trigger points, muscle spasms, and tense areas, NMT helps release muscle tension and alleviate pain, whether it's caused by chronic conditions like fibromyalgia or acute injuries like sprains and strains.</p>
            <li className='list bulletPoint mainFont'>Improved Circulation</li>
                <p className='mainFont lineBreak'>NMT helps to release tight muscles and restore normal movement patterns. This leads to improved flexibility and mobility, allowing individuals to move more freely without discomfort.</p>
            <li className='list bulletPoint mainFont'>Stress and Tension Reduction</li>
                <p className='mainFont lineBreak'>Many people who undergo NMT report feeling deeply relaxed during and after treatment. The pressure applied to the muscles stimulates the parasympathetic nervous system, which induces a state of relaxation and reduces stress levels.</p>
            <li className='list bulletPoint mainFont'>Enhanced Circulation</li>
                <p className='mainFont lineBreak'>NMT increases blood flow to the treated areas, which helps speed up thehealing process by delivering oxygen and nutrients to the muscles while removing waste products. Enhanced circulation can also reduce swelling and promote faster recovery after injury.</p>
            <li className='list bulletPoint mainFont'>Postural Improvement</li>
                <p className='mainFont lineBreak'>Neuromuscular therapy addresses postural imbalances caused by muscle tightness, poor ergonomics, or improper body mechanics. Correcting these imbalances can reduce pain and improve overall body alignment.</p>
          </ul>
      </section>

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='mainFont italic lineBreak'>Acute illness, fever, osteoporoses, high blood pressure, arrhythmia, uncontrolled diabetes, bone fractures, recent wounds, recent scars, areas of inflammation, varicose veins, blood cancers, viruses (such as flu and chickenpox), and/or herniated disk(s)</p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>

        <a className='bookNowBtn' rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book Your Massage Here</a>
        <ul>
            <li className='mainFont bulletPoint'>30 Minutes - $69</li>
            <li className='mainFont bulletPoint'>45 Minutes - $89</li>
            <li className='mainFont bulletPoint'>60 Minutes - $119</li>
            <li className='mainFont bulletPoint'>75 Minutes - $139</li>
            <li className='mainFont bulletPoint'>90 Minutes - $160</li>
        </ul>
      </section>

    </div>
  );
}

export default Neuromuscular;