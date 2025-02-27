import PrenatalImg from '../../assets/images/services/prenatal.webp';

function Prenatal() {
    return (
    <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={PrenatalImg}></img>
        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Prenatal & Postnatal Massage</h1>
          <p className='mainFont lineBreak'>Our prenatal and post-natal massages designed to help alleviate pain and discomfort, reduce stress, and promote relaxation.</p>
          <p className='mainFont lineBreak'>Whether you are pregnant or postpartum, our massages will offer you an opportunity to relax and rejuvenate.</p>

          <h2 className='serviceSubTitle lineBreak'>Benefits of a Prenatal Massage</h2>
          <ul>
            <li className='italic bulletPoint bold mainFont'>Pain Relief</li>
            <p className='mainFont'>Prenatal massage can help to relieve pain and discomfort in the back, neck, shoulders, and hips.</p>
            <li className='italic bulletPoint bold mainFont'>Stress Relief</li>
            <p className='mainFont'>Pregnancy can be stressful, and prenatal massage can help to reduce stress and promote relaxation.</p>
            <li className='italic bulletPoint bold mainFont'>Improved Circulation</li>
            <p className='mainFont'>Massage can help to improve circulation, which can benefit both you and your baby.</p>
            <li className='italic bulletPoint bold mainFont'>Better Sleep</li>
            <p className='mainFont'>Prenatal massage can help to improve the quality of your sleep, which is important for both you and your baby.</p>
            <li className='italic bulletPoint bold mainFont'>Reduced Swelling</li>
            <p className='mainFont lineBreak'>Massage can help to reduce swelling in the hands and feet, which is a common symptom of pregnancy.</p>
          </ul>
        </section>
      </div>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2>Postnatal Massage</h2>
        <p className='mainFont'>A Postnatal Massage is a wonderful way to get your body back on track after giving birth. An abdominal massage during this time can help with pelvic floor health and digestive and bladder function.Postnatal massage sessions can also focus on reducing stress, improving circulation and reducing muscle tension and joint pain.</p>
      </section>

      {/* <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>Benefits</h2>
        <p className='mainFont lineBreak'></p>
        <p className='mainFont lineBreak'>Therapeutic head massage helps cope with stress, muscle spasms, sleep disorders, drowsiness, and chronic fatigue. It brings relief from cramps and spasms of the facial muscles, pain in the joints and neck.</p>
        <p className='mainFont lineBreak'>Cosmetic head massage improves the condition of the skin and hair, helps get rid of seborrhea, dandruff, alopecia (hair loss)..</p>
        <p className='mainFont lineBreak'>Positive benefits of scalp massage include: elimination of headaches; getting rid of puffiness of the face, 'bags' under the eyes; improvement of hair nutrition, activation of hair growth; improvement of memory, attention; activation of mental activity; relief from muscle spasms.</p>
        <p className='mainFont lineBreak'></p>

      </section> */}

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        {/* <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='mainFont italic lineBreak'>Fresh fracture or wound(s), Thrombosis, Diseases of the heart and vascular system, Predisposition to increased blood pressure, Varicose veins, Pregnancy, Hernias, Inflammatory processes, and/or Tuberculosis.</p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3> */}
        <a className='bookNowBtn' rel="noopener noreferrer" href='https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHj0D92Kry9uKJLZng8QKTshJ0ig+gxT+zAwSlxpgmQd2t6awtBVDSehSgX6YMhE4h8pgxdqsCzEr3PDH+0LQVdjhosn8OItSRdV6n3hkyy1N2HWzaNyW8XqNpiT9XmVY58yGFBXV88yFpzAp0mtl+a5iHiywk18l79oNcGwD8O5Pm5WYh08sQbkBaiJFPyb/hN06+eIq38fL73V6miVAWmrNIWgQc8/RA/fOulplM2MyWEBL7g+6TjXJiiK82VD9W7pIJ5Mkg88wSdfjmMAcUFhXbH1QLYmnvwHZjmcYUYhKT327kzQyxp58PCGOwHr4Oyim430dsKuML7WBO0DOcquQMteJt06XBvXL3hd0WejRyiDxm0VNIrYeCsl3juH82LnfHls/8lSWEP+ipuE1SR98E2xadQPCZUPR/4FW1jG3bigvM0zGNLo3sWb112uyw=='>Book Your Massage Here</a>
        <ul>
          <li className='mainFont bulletPoint'>30 Minutes - $80.00</li>
          <li className='mainFont bulletPoint'>60 Minutes - $160.00</li>
          <li className='mainFont bulletPoint'>90 Minutes - $220.00</li>
        </ul>
      </section>

    </div>
  );
}

export default Prenatal;