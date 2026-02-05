import Form from '../components/ContactForm'

function ContactUs() {
    return (
    <div className='contactPage flexColumn'>
      <h1 className='contactTitle center'>Contact Us</h1>
      <section className='contactPageContent'>
        <div className='businessInfo'>
          {/* <h2 className="minorTitle">Business Contacts</h2> */}
          <p className='businessInfoTxt'>This is a mockup webpage</p>
        </div>
        {/* <Form></Form> */}
      </section>
      
    </div>
  );
}

export default ContactUs;