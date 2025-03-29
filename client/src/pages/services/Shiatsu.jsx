import ShiatsuImg from '../../assets/images/services/shiatsu.webp';

function Shiatsu() {
    return (
    <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={ShiatsuImg} alt='Shiatsu Massage Display Image'></img>

        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Shiatsu Massage</h1>
          <p className='mainFont lineBreak'>Shiatsu is a form of massage that utilizes the hands, thumb, or other body parts, to apply direct pressure on various points or channels in the body. It is performed through loose clothing and does not use oils.</p>
          {/* <p className='mainFont lineBreak'></p> */}
        </section>
      </div>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>What to Expect During a Shiatsu Massage</h2>
        <p className='lineBreak mainFont'>Before the session begins, a shiatsu practitioner evaluates the person and assesses a person's state of qi to plan the session. The practitioner may perform varying protocols based on the person's general energy level, presence of blockages, and conditions.</p>
        <p className='mainFont lineBreak'>For example, when a person has deficient energy levels, the practitioner uses techniques to reactivate or stimulate the blood and qi circulation. Meanwhile, they may utilize techniques to diffuse excess energy in anxious and stressed individuals.</p>
        <p className='mainFont lineBreak'>Practitioners perform manual techniques such as holding, stretching, tapping, pressure, kneading, and soothing, using their thumbs, fingers, palms, and knees. They may also do more body stretches, rotations, and joint mobilizations.</p>
        <p className='mainFont lineBreak'>From time to time, the therapist may ask the person to change their position to allow them to work on specific meridian points to energy stagnation or blockages.</p>
        <p className='mainFont lineBreak'>Shiatsu does not use instruments or oils. During a session, individuals are fully clothed and traditionally lie on a futon mat placed on a floor, but lying on a massage table is also common.</p>
      </section>

      <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Benefits of a Shiatsu Massage:</h2>
          <p className='mainFont lineBreak'>Shiatsu is a holistic form of therapy that improves a person's overall health
          by affecting their internal energy system. It is said it helps with:</p>
          <ul>
            <li className='list bulletPoint mainFont'>Poor posture</li>
            <li className='list bulletPoint mainFont'>Joint problems such as arthritis</li>
            <li className='list bulletPoint mainFont'>Painfull mussels</li>
            <li className='list bulletPoint mainFont'>Digestive and bowel disorders</li>
            <li className='list bulletPoint mainFont'>Sports injuries</li>
            <li className='list bulletPoint mainFont'>Asthma</li>
            <li className='list bulletPoint mainFont'>Constant cold</li>
            <li className='list bulletPoint mainFont'>Skin conditions</li>
            <li className='list bulletPoint mainFont'>Sciatica</li>
            <li className='list bulletPoint mainFont'>Acute and chronic aches and pains</li>
            <li className='list bulletPoint mainFont'>Fatigue</li>
            <li className='list bulletPoint mainFont'>Muscle tention</li>
            <li className='list bulletPoint mainFont'>Sinusitis</li>
            <li className='list bulletPoint mainFont'>Bronkitis</li>
            <li className='list bulletPoint mainFont'>Anxiety</li>
            <li className='list bulletPoint mainFont'>Depression</li>
            <li className='list bulletPoint mainFont'>Insomnia</li>
          </ul>
      </section>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>History Of Origin</h2>
        <p className='lineBreak mainFont'>Shiatsu is a bodywork that originated in Japan. It integrates Japan's traditional manual therapies such as acupuncture and anma, an old Japanese massage style, with western medical knowledge.</p>
        <p className='mainFont lineBreak'>Healthcare professionals view shiatsu as a modified form of acupressure, a massage therapy that involves pressing specific points in the body to reduce tension and fatigue by improving blood and lymphatic circulation. Shiatsu has its roots in the concept of qi. In traditional Chinese medicine, qi is the vital life force that drives all life activity. It believes that health occurs when qi flows unobstructed. When it becomes deficient or blocked, symptoms such as body pain, headaches, and digestive arise. A shiatsu therapist applies pressure on the body's meridians, parts of the body believed to be energy channels, to balance or unblock the flow of energy (qi).</p>
        <p className='mainFont lineBreak'>While shiatsu translates as finger pressure, a shiatsu therapist may also use palms, elbows, and sometimes feet to apply pressure along energy lines or paths to relieve pain and tension in the body.</p>
      </section>

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='mainFont italic lineBreak'>Acute illness, fever, osteoporoses, high blood pressure, arrhythmia, uncontrolled diabetes, bone fractures, recent wounds, recent scars, areas of inflammation, varicose veins, blood cancers, viruses (such as flu and chickenpox), and/or herniated disk(s)</p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>

        <a className='bookNowBtn' rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING}>Book Your Massage Here</a>
        <ul>
            <li className='mainFont bulletPoint'>15 Minutes - $35</li>
            <li className='mainFont bulletPoint'>30 Minutes - $60</li>
            <li className='mainFont bulletPoint'>45 Minutes - $95</li>
            <li className='mainFont bulletPoint'>60 Minutes - $120</li>
            <li className='mainFont bulletPoint'>90 Minutes - $180</li>
        </ul>
      </section>

    </div>
  );
}

export default Shiatsu;