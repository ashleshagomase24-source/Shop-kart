import '../../src/App.css';

const Contact = () => {
  return (
    <div className="page-shell contact-page">
      <div className="contact-layout">
        <section>
          <p className="eyebrow">Come say hello</p>
          <h1>We'd love to hear from you.</h1>
          <p className="contact-lead">Questions about an order, a product, or what to choose next? Our little team is here to help.</p>
          <div className="contact-details">
            <div className="contact-detail"><strong>Email</strong><span>hello@shopcart.example</span></div>
            <div className="contact-detail"><strong>Hours</strong><span>Monday - Friday, 9am - 6pm</span></div>
            <div className="contact-detail"><strong>Studio</strong><span>14 Market Lane, Jaipur</span></div>
          </div>
        </section>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <p className="eyebrow">Send a note</p>
          <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Message<textarea name="message" placeholder="How can we help?" required /></label>
          <button className="button" type="submit">Send message <span aria-hidden="true">-&gt;</span></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
