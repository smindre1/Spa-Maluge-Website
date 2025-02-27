import FacialImg from '../../assets/images/services/facial.webp';

function Facial() {
    return (
    <div className='servicePage'>
        
        <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={FacialImg}></img>
        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Facial Massage</h1>
          <p className='mainFont lineBreak'>Our exclusive facial massage technique brings natural rejuvenation by harmoniously engaging facial muscles, yielding the stunning results of a non-surgical facelift. This unique method delivering noticeable effects from the very first session.</p>
          <p className='mainFont lineBreak'></p>

          <h2 className='serviceSubTitle lineBreak'>Benefits</h2>
          <ul>
            <li className='list bulletPoint mainFont'>Stimulates improved blood circulation</li>
            <li className='list bulletPoint mainFont'>Lymphatic drainage</li>
            <li className='list bulletPoint mainFont'>Enhances microcirculation within subcutaneous fat layers, normalizes cellular respiration, and triggers metabolism and tissue revitalization.</li>
            {/* <li className='list bulletPoint mainFont'>Add-on a Gua Sha service for extra contouring</li> */}
          </ul>
        </section>
      </div>

      <section className='prgBreak whiteBackground smallPadding'>
        {/* <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='mainFont italic lineBreak'></p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3> */}
        <a className='bookNowBtn' rel="noopener noreferrer" href='https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHj0D92Kry9uKJLZng8QKTshJ0ig+gxT+zAwSlxpgmQd2t6awtBVDSehSgX6YMhE4h8pgxdqsCzEr3PDH+0LQVdjhosn8OItSRdV6n3hkyy1N2HWzaNyW8XqNpiT9XmVY58yGFBXV88yFpzAp0mtl+a5iHiywk18l79oNcGwD8O5Pm5WYh08sQbkBaiJFPyb/hN06+eIq38fL73V6miVAWmrNIWgQc8/RA/fOulplM2MyWEBL7g+6TjXJiiK82VD9W7pIJ5Mkg88wSdfjmMAcUFhXbH1QLYmnvwHZjmcYUYhKT327kzQyxp58PCGOwHr4Oyim430dsKuML7WBO0DOcquQMteJt06XBvXL3hd0WejRyiDxm0VNIrYeCsl3juH82LnfHls/8lSWEP+ipuE1SR98E2xadQPCZUPR/4FW1jG3bigvM0zGNLo3sWb112uyw=='>Book Your Massage Here</a>
        <ul>
          <li className='mainFont bulletPoint'>20 Minutes - $60.00</li>
          <li className='mainFont bulletPoint'>30 Minutes - $100.00</li>
          <li className='mainFont bulletPoint'>50 Minutes - $120.00</li>
        </ul>
      </section>
    </div>
  );
}

export default Facial;