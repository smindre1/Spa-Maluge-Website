import AromaImg from '../../assets/images/services/Aroma.webp';
import { Helmet } from "react-helmet-async";

function Aroma() {
    return (
      <>
      <Helmet>
        <title>Aromatherapy Massage | Spa Maluge</title>
        <meta name="description" content="Relax your body and calm your mind with our Aromatherapy Massage, combining gentle touch with therapeutic essential oils." />
        <meta property="og:title" content="Aromatherapy Massage" />
        <meta property="og:description" content="Melt stress away with our Aromatherapy Massage at Spa Maluge. A sensory experience that rejuvenates both body and soul." />
        <meta property="og:image" content="https://spamaluge.com/og/aroma.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={AromaImg} alt='CBD Massage Display Image'></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Aromatherapy Massage</h1>
            <p className='mainFont lineBreak'></p>
            <p className='mainFont lineBreak'></p>

            <h2 className='serviceSubTitle lineBreak'>What is an Aromatherapy Massage?</h2>
            <p className='mainFont lineBreak'>Many years of practice have convincingly proven the benefits of essential oils. Due to their low molecular weight, they penetrate into the blood and have a beneficial effect on the entire body.</p>
            <p className='mainFont lineBreak'>An Aromatherapy Massage not only has a cosmetic effect (fights cellulite, rejuvenates the skin), but also has a positive effect on the nervous system.</p>
            <p className='mainFont lineBreak'>A procedure for relieving tension, doubly useful thanks to acupressure and the use of aromatic mixtures. Oils and mixture composition are selected individually.</p>
          </section>
        </div>


        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Benefits</h2>
          <ul className='prgBreak'>
            <li className='mainFont bulletPoint'>Tones the nervous system, relieving muscle discomfort.</li>
            <li className='mainFont bulletPoint'>Improves mood and activates metabolic processes in tissues.</li>
            <li className='mainFont bulletPoint'>Increases blood circulation, providing cells with oxygen and beneficial components.</li>
          </ul>
        
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "A25319921&share=true&pId=2701511"}>Book Your Massage Here</a>
          <ul>
              <li className='mainFont bulletPoint'>30 Minutes - $70.00</li>
              <li className='mainFont bulletPoint'>60 Minutes - $110.00</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Aroma;