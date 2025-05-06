function ContactUs() {
    return (
    // <div className='contactPage flexColumn'>
    //   <h1 className='contactTitle center'>404</h1>
    //   <p className="smallPageTitle">Page Does Not Exist</p>
    //   
      
    // </div>
    <div className='contactPage flexColumn'>
        <h1 className='contactTitle center'>- 404 -</h1>
        <section className='contactPageContent'>
        <div className='businessInfo'>
            <p className='businessInfoTxt'>Page Could Not Be Found</p>
            <a className="center errBtn" href="/">Return To Spa Maluge Homepage</a>
        </div>
      <div className='businessInfo'>
        {/* <h2 className="minorTitle">Business Contacts</h2> */}
        <p className='businessInfoTxt'>(917) 921-4237</p>
        <p className='businessInfoTxt'>malugemc@gmail.com</p>
        <a className='businessInfoTxt'>108B Adams Street, Hoboken, NJ 07030</a>
        <img className="center errImg" src="/maluge-logo.png"></img>
      </div>
    </section>
    
  </div>
  );
}

export default ContactUs;