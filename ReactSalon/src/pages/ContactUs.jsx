import Form from '../components/ContactForm'

function ContactUs() {
    return (
    <div className='contactPage flexColumn'>
      <h1 className='sectionTitle center'>Contact Us</h1>
      <section className='center flexRow'>
        <div>
          <p>Call Us At: </p>
          <p>Email Us At: </p>
          <a>Find Us At: </a>
        </div>
        <Form></Form>
      </section>
      
    </div>
  );
}

export default ContactUs;