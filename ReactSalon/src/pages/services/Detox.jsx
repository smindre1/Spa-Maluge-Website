import DetoxImg from '../../assets/images/services/detox.jpg';

function Detox() {
    return (
    <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={DetoxImg}></img>

        <section className='serviceSummary'>
          <h2 className='lineBreak'>Detox Custom Swedish Massage</h2>
          <p>Swedish massage is an effective Classic European therapy that works real miracles, healing the body from many ailments.</p>
          <p className='prgBreak'>Massage helps treat diseases and diagnose them. Swedish massage is a special massage system aimed at deep penetration into tissues, affecting muscles, joints and neurovascular bundles.</p>
          <h2 className='lineBreak'>What does a Swedish massage give?</h2>
          <ul>
            <li className='bulletPoint'>The technique copes well with adhesions, various seals and scars in the joints.</li>
            <li className='bulletPoint'>Diseased joints become flexible and mobile.</li>
            <li className='bulletPoint'>Puffiness disappears.</li>
            <li className='bulletPoint'>The muscles become toned and elastic.</li>
            <li className='bulletPoint'>Relieves fatigue and muscle spasms.</li>
            <li className='bulletPoint'>Blood circulation and lymphatic drainage of the limb are normalized.</li>
            <li className='bulletPoint'>There is a rapid recovery from injuries.</li>
          </ul>
        </section>
      </div>


      <section className='prgBreak'>
        <h2 className='lineBreak'>Take Precaution</h2>
        <h3>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <ul>
          <li className='bulletPoint'>Fresh fracture or wound(s)</li>
          <li className='bulletPoint'>Thrombosis</li>
          <li className='bulletPoint'>Diseases of the heart and vascular system </li>
          <li className='bulletPoint'>Predisposition to increased blood pressure</li>
          <li className='bulletPoint'>Varicose veins</li>
          <li className='bulletPoint'>Pregnancy</li>
          <li className='bulletPoint'>Hernias</li>
          <li className='bulletPoint'>Inflammatory processes</li>
          <li className='bulletPoint'>Tuberculosis</li>
        </ul>
        <h3>If you match any of the prior conditions we ask you to please look at our other massage services.</h3>
        <a href='/'>Home</a>
      </section>

      <section>
        <h2>History Of Origin</h2>
        {/* <img src=''></img> */}
        <p>Swedish massage, or the Swedish Massage System, is a unique technique for the treatment and prevention of many diseases of the musculoskeletal system, problems with joints and muscles. There is no need to select medication or choose from a variety of techniques.</p>
        <p>Classic Swedish Massage works real miracles, healing the body from many ailments.</p>
        
        <p>The time when the technique appeared was the beginning of the 19th century. Massage therapist and doctor from Stockholm Per Ling studied various techniques, paying attention to many of them, but in practice it turned out that something was missing from each. It is worth noting that the doctor himself suffered from rheumatism.</p>
        <p>The disease gave him the impetus to develop his own exercises and massage therapy techniques, combining various techniques.</p>
        <p>And after some time healing came. Ling realized that for successful healing it is necessary to influence the entire body, focusing on rubbing the diseased joints and stretching the muscles and neurovascular bundles. This is how the Swedish Massage System appeared. Later, Swedish massage began to be divided into subtypes: classic, holistic and others. Session duration is 40-60 minutes.</p>

      </section>

    </div>
  );
}

export default Detox;