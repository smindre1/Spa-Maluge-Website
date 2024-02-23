import { useState } from 'react'

function Home() {
  const [language, setLanguage] = useState('english');
  
    return (
    <div className='page'>
      <section className='wideContentBlock bkgrdColor'>
        <h1 className='pageTitle'>Welcome to<br></br>Spa Maluge</h1>
        <h2 className='welcomeMsg'>Enjoy Relaxation At It's Finest</h2>
        {/* <a>Schedule Now</a> */}
      </section>

      <section className='wideContentBlock'>
        <p className='bodyText lineBreak'>
          Welcome to Spa Maluge's Massage Salon, your oasis of relaxation nestled in the heart of charming Hoboken, New Jersey. At Spa Maluge, we invite you to escape the hustle and bustle of daily life and indulge in a rejuvenating experience tailored to soothe your mind, body, and spirit. Our expert therapists are dedicated to providing personalized care and attention, ensuring that each visit leaves you feeling refreshed, renewed, and ready to take on the world.</p>
        <p className='bodyText'>
          Step into our serene sanctuary and embark on a journey of blissful tranquility, where the stresses of the outside world melt away with every gentle touch. Discover the serenity you deserve at Spa Maluge.</p>
      </section>

      <section className='sectionBreak center bkgrdColor'>
        <div className='flexRow'>
          <div className='contentBlock pushRight'>
            <h2 className='prgTitle'>Our Spa Massage Services
            </h2>
            <p className='bodyText'>Indulge your senses and embrace the ultimate in relaxation with our exquisite massage services. Our team of skilled therapists offers a diverse range of techniques and modalities to cater to your specific needs and preferences. Whether you seek relief from muscle tension, stress reduction, or simply a moment of pure tranquility, we are committed to providing you with a deeply rejuvenating experience. From Swedish and deep tissue massages to aromatherapy and hot stone treatments, each session is crafted to promote healing, balance, and holistic well-being. Step into our serene sanctuary and let us melt away your cares, leaving you feeling restored, refreshed, and renewed.
            </p>
          </div>
          
          <img className='contentImage pushLeft' src='' alt='Massage Services Image'></img>
        </div>
        
      </section>

      <section className='sectionBreak flexColumn'>
        <h2 className='sectionTitle center'>Our Services</h2>
        <div className='servicesRow center'>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
        </div>

        <div className='servicesRow center'>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
        </div>

        <div className='servicesRow center'>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
          <div className='service'>
            <img className='serviceImg' src='' alt='Original Massage Image'></img>
            <h3 className='minorTitle'>Original Massage</h3>
          </div>
        </div>
      </section>

      <section className='sectionBreak bkgrdColor'>
        <div className='wideContentBlock'>
          <p className='bodyText'>
          Ready to experience the blissful benefits of our expert massage services? Treat yourself to the ultimate indulgence. Don't wait to invest in your well-being and take the first step towards a happier, healthier you by scheduling your appointment now. 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;