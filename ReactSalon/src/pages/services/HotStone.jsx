import HotStoneImg from '../../assets/images/services/stone.jpg';

function HotStone() {
    return (
      <div className='servicePage'>
      <div className='flexRow prgBreak'>
        <img className='servicePageImg' src={HotStoneImg} alt='Hot Stone Massage Display Image'></img>

        <section className='serviceSummary whiteBackground'>
          <h1 className='serviceTitle lineBreak'>Hot Stone Massage</h1>
          <p className='serviceText lineBreak'>A relaxing hot stone massage affects the body on all levels: physical and emotional, stimulates the immune system, improves blood microcirculation, improves metabolism, removes blockades, harmonizes the positive flow of energy. Promotes relaxation of the whole body. The massage is performed with volcanic stones.</p>
          <p className='serviceText lineBreak'></p>
          <h2 className='serviceSubTitle lineBreak'>Benefits of a Hot Stone Massage give?</h2>
          <ul>
            <li className='list bulletPoint serviceText'>Activation of metabolic processes allows you to remove toxins from the body;</li>
            <li className='list bulletPoint serviceText'>Heating the capillaries ensures rapid blood circulation;</li>
            <li className='list bulletPoint serviceText'>After the sessions, maximum relaxation and calm are observed;</li>
            <li className='list bulletPoint serviceText'>Thanks to muscle relaxation, even small wrinkles are smoothed out;</li>
            <li className='list bulletPoint serviceText'>Stone massage helps restore hormonal levels, rejuvenate cells, and reduce cellulite.</li>
          </ul>
        </section>
      </div>

      <section className='whiteBackground smallPadding prgBreak'>
        <h2 className='serviceSubTitle lineBreak'>Features of a Hot Stone Massage</h2>
        <p className='serviceText lineBreak'>For A Hot Stone Massage, special stones are used, which are heated to a certain temperature - from 40 to 55 degrees. The choice of stones directly depends on the procedure and the client’s characteristics: the specialist selects material of a certain length, size, weight and shape.</p>
        <p className='serviceText lineBreak'></p>
        
        <p className='serviceText lineBreak'></p>
        <p className='serviceText lineBreak'></p>
        <p className='serviceText lineBreak'></p>

      </section>

      <section className='prgBreak whiteBackground smallPadding'>
        <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
        <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
        <p className='serviceText italic lineBreak'>In case of circulatory disorders, cancer, skin diseases, varicose veins, acute inflammatory and infectious processes, and diseases of the cardiovascular system a Hot Stone Massage will not bring any benefit, and will only cause harm.</p>
        <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>
        <a className='bookNowBtn' href='/book-now'>Book Your Massage Here</a>
        <ul>
          <li className='serviceText bulletPoint'>Add On a Hot Stone Service - Additional $20.00</li>
        </ul>
      </section>

    </div>
  );
}

export default HotStone;