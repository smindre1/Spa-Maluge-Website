import OrthopedicImg from '../../assets/images/services/orthopedic.webp';
import { Helmet } from "react-helmet-async";

function Orthopedic() {
    return (
    <>
      <Helmet>
        <title>Orthopedic Massage | Spa Maluge</title>
        <meta name="description" content="Improve joint mobility, reduce pain, and support recovery with Orthopedic Massage — a specialized therapy focused on musculoskeletal health." />
        <meta property="og:title" content="Orthopedic Massage" />
        <meta property="og:description" content="Target soft tissue injuries and restore physical function with Orthopedic Massage at Spa Maluge. Ideal for pain relief, posture correction, and rehabilitation." />
        <meta property="og:image" content="https://spamaluge.com/og/orthopedic.webp" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className='servicePage'>
        <div className='serviceIntro prgBreak'>
          <img className='servicePageImg' src={OrthopedicImg} alt='Orthopedic Massage Display Image'></img>

          <section className='serviceSummary whiteBackground'>
            <h1 className='serviceTitle lineBreak'>Orthopedic Massage</h1>
            <p className='mainFont lineBreak'>An orthopedic massage is a specialized form of massage therapy focusing on the musculoskeletal system, aiming to address pain, improve joint function, and rehabilitate soft tissue injuries through targeted techniques.</p>
            {/* <p className='mainFont lineBreak'></p> */}
          </section>
        </div>

        <section className='whiteBackground smallPadding prgBreak'>
          <h2 className='serviceSubTitle lineBreak'>Breakdown of an Orthopedic Massage</h2>
          <ul>
              <li className='list bulletPoint mainFont bold'>Focus</li>
                  <p className='mainFont lineBreak'>Orthopedic massage specifically targets the tissues and muscles
                  surrounding the body's joints (musculoskeletal system).</p>
              <li className='list bulletPoint mainFont bold'>Goal</li>
                  <p className='mainFont lineBreak'>To restore function, reduce pain, and aid in the rehabilitation of injuries
                  and conditions affecting the musculoskeletal system.</p>
              <li className='list bulletPoint mainFont bold'>Techniques</li>
                  <p className='mainFont lineBreak'>Orthopedic massage therapists employ various techniques, including alignment, pin and stretch, and release techniques, to address soft tissue issues.</p>
              <li className='list bulletPoint mainFont bold'>Conditions Treated</li>
                  <p className='mainFont lineBreak'>It can be used to treat conditions like carpal tunnel syndrome,
                  tendonitis, plantar fasciitis, and post-surgical pain or discomfort.</p>
              <li className='list bulletPoint mainFont bold'>Preventitive Care</li>
              <   p className='mainFont lineBreak'>Orthopedic massage can also be used as a preventative measure to
              help maintain musculoskeletal health and prevent future injuries.</p>
            </ul>
        </section>

        <section className='whiteBackground smallPadding prgBreak'>
            <h2 className='serviceSubTitle lineBreak'>Benefits of an Orthopedic Massage:</h2>
            <ul>
              <li className='list bulletPoint mainFont bold'>Pain Relief</li>
                  <p className='mainFont lineBreak'>Orthopedic massage can help reduce pain associated with various
                  musculoskeletal conditions.</p>
              <li className='list bulletPoint mainFont bold'>Improved Range of Motion</li>
                  <p className='mainFont lineBreak'>By addressing soft tissue restrictions, orthopedic massage can help
                  improve joint movement and function.</p>
              <li className='list bulletPoint mainFont bold'>Rehabilitation</li>
                  <p className='mainFont lineBreak'>It can play a crucial role in the rehabilitation process after injuries or surgeries.</p>
              <li className='list bulletPoint mainFont bold'>Prevention</li>
                  <p className='mainFont lineBreak'>Orthopedic massage can help prevent future injuries by addressing
                  underlying issues and promoting healthy movement patterns.</p>
            </ul>
        </section>

        <section className='prgBreak whiteBackground smallPadding'>
          <h2 className='serviceSubTitle lineBreak'>Precaution</h2>
          <h3 className='prgSubject'>The procedure should not be performed on people with any of the following conditions as it can be dangerous.</h3>
          <p className='mainFont italic lineBreak'>Acute illness, fever, osteoporoses, high blood pressure, arrhythmia, uncontrolled diabetes, bone fractures, recent wounds, recent scars, areas of inflammation, varicose veins, blood cancers, viruses (such as flu and chickenpox), and/or herniated disk(s)</p>
          <h3 className='prgBreak'>If you match any of the prior listed conditions please consult your doctor before booking your massage.</h3>

          <a className='bookNowBtn' target="_blank" rel="noopener noreferrer" href={import.meta.env.VITE_MASSAGE_BOOKING + "4952432&oiid=sv%3A25320125&share=true&pId=2701511"}>Book Your Massage Here</a>
          <ul>
              <li className='mainFont bulletPoint'>45 Minutes - $119</li>
              <li className='mainFont bulletPoint'>60 Minutes - $139</li>
              <li className='mainFont bulletPoint'>90 Minutes - $190</li>
              <li className='mainFont bulletPoint'>120 Minutes - $230</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Orthopedic;