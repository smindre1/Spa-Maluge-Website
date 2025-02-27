import HotStoneImg from '../../assets/images/services/stone.webp';

function HotStone() {
    return (
      <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={HotStoneImg} alt='Hot Stone Massage Display Image'></img>

        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Hot Stone Massage</h1>
          <p className='mainFont lineBreak'>A relaxing hot stone massage affects the body on all levels: physical and emotional, stimulates the immune system, improves blood microcirculation, improves metabolism, removes blockades, harmonizes the positive flow of energy. Promotes relaxation of the whole body. The massage is performed with volcanic stones.</p>
          <p className='mainFont lineBreak'></p>
          <h2 className='serviceSubTitle lineBreak'>Benefits of a Hot Stone Massage give?</h2>
          <ul>
            <li className='list bulletPoint mainFont'>Activation of metabolic processes allows you to remove toxins from the body.</li>
            <li className='list bulletPoint mainFont'>Heating the capillaries ensures rapid blood circulation.</li>
            <li className='list bulletPoint mainFont'>After the sessions, maximum relaxation and calm are observed.</li>
            <li className='list bulletPoint mainFont'>Thanks to muscle relaxation, even small wrinkles are smoothed out.</li>
            <li className='list bulletPoint mainFont'>Stone massage helps restore hormonal levels, rejuvenate cells, and reduce cellulite.</li>
          </ul>
        </section>
      </div>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>Features of a Hot Stone Massage</h2>
        <p className='mainFont lineBreak'>For a Hot Stone Massage, special stones are used, which are heated to a certain temperature - from 40 to 55 degrees. The choice of stones directly depends on the procedure and the client's characteristics: the specialist selects material of a certain length, size, weight and shape.</p>
        <p className='mainFont lineBreak'></p>
        
        <p className='mainFont lineBreak'></p>
        <p className='mainFont lineBreak'></p>
        <p className='mainFont lineBreak'></p>

      </section>

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='mainFont italic lineBreak'>In case of circulatory disorders, cancer, skin diseases, varicose veins, acute inflammatory and infectious processes, and diseases of the cardiovascular system a Hot Stone Massage will not bring any benefit, and will only cause harm.</p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
        <a className='bookNowBtn' rel="noopener noreferrer" href='https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHj0D92Kry9uKJLZng8QKTshJ0ig+gxT+zAwSlxpgmQd2t6awtBVDSehSgX6YMhE4h8pgxdqsCzEr3PDH+0LQVdjhosn8OItSRdV6n3hkyy1N2HWzaNyW8XqNpiT9XmVY58yGFBXV88yFpzAp0mtl+a5iHiywk18l79oNcGwD8O5Pm5WYh08sQbkBaiJFPyb/hN06+eIq38fL73V6miVAWmrNIWgQc8/RA/fOulplM2MyWEBL7g+6TjXJiiK82VD9W7pIJ5Mkg88wSdfjmMAcUFhXbH1QLYmnvwHZjmcYUYhKT327kzQyxp58PCGOwHr4Oyim430dsKuML7WBO0DOcquQMteJt06XBvXL3hd0WejRyiDxm0VNIrYeCsl3juH82LnfHls/8lSWEP+ipuE1SR98E2xadQPCZUPR/4FW1jG3bigvM0zGNLo3sWb112uyw=='>Book Your Massage Here</a>
        <ul>
          <li className='mainFont bulletPoint'>30 Minutes - $90.00</li>
          <li className='mainFont bulletPoint'>60 Minutes - $160.00</li>
          <li className='mainFont bulletPoint'>90 Minutes - $220.00</li>
          <li className='mainFont bulletPoint'>Or Add On Hot Stone's To Another Massage - Additional $20.00</li>
        </ul>
      </section>

    </div>
  );
}

export default HotStone;