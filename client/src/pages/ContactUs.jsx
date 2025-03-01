import Form from '../components/ContactForm'

function ContactUs() {
    return (
    <div className='contactPage flexColumn'>
      <h1 className='contactTitle center'>Contact Us</h1>
      <section className='contactPageContent'>
        <div className='businessInfo'>
          {/* <h2 className="minorTitle">Business Contacts</h2> */}
          <p className='businessInfoTxt'>(917) 921-4237</p>
          <p className='businessInfoTxt'>malugemc@gmail.com</p>
          <a className='businessInfoTxt'>108 Adams St, Hoboken, NJ 07030</a>
        </div>
        <Form></Form>
      </section>
      
    </div>
  );
}

export default ContactUs;