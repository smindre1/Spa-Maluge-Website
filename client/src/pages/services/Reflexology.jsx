import ReflexologyImg from '../../assets/images/services/reflexOne.webp';
import { Helmet } from "react-helmet-async";

function Reflexology() {
    return (
    <>
      <Helmet>
        <title>Reflexology Massage | Spa Maluge</title>
        <meta name="description" content="Experience the ancient healing art of Reflexology Massage, where pressure points on the feet stimulate organs and promote whole-body wellness." />
        <meta property="og:title" content="Reflexology Massage" />
        <meta property="og:description" content="Discover centuries-old techniques rooted in Chinese medicine. Reflexology Massage improves physiological functions through targeted foot therapy." />
        <meta property="og:image" content="https://spamaluge.com/og/reflex.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
          
          <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={ReflexologyImg}></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Reflexology Massage</h1>
            <p className='mainFont lineBreak'>Reflexology is more than just a foot massage. The theory behind foot massage, supported by centuries of experience, suggests that each internal human organ corresponds to a specific reflex zone on the foot. The outcome of a foot massage is the induction of physiological changes within the human body. We inherited healing foot massage from the magical art of excellent doctors in China.</p>
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Benefits</h2>
          <ul>
              <li className='list bulletPoint mainFont'>Stimulates blood circulation and lymph flow</li>
              <li className='list bulletPoint mainFont'>Promotes the removal of toxins</li>
              <li className='list bulletPoint mainFont'>Gradually alleviates tension</li>
              <li className='list bulletPoint mainFont'>Relieve stress, tension and fatigue</li>
              <li className='list bulletPoint mainFont'>Reinstates the normal functioning of internal systems</li>
            </ul>
        </section>

        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
          <h3 className='prgSubject'>Important things to remember when performing reflexology</h3>
          <p className='mainFont italic lineBreak'>Reflexology is contraindicated during pregnancy. Drink water after the procedure to remove toxins and lactic acid accumulated during the massage.</p>
          <h3 className='prgBreak'>If you have serious leg problems, unhealed wounds on the body, blood vessel diseases associated with clots or varicose veins, consult your doctor before a reflexology session.</h3>
          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4952432&oiid=sv%3A25319728&share=true&pId=2701511"}>Book Your Massage Here</a>
          <ul>
            <li className='mainFont bulletPoint'>15 Minutes - $40</li>
            <li className='mainFont bulletPoint'>30 Minutes - $80</li>
            <li className='mainFont bulletPoint'>60 Minutes - $140</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Reflexology;