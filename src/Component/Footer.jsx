import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top page-shell">
        <div className="site-footer__intro">
          <Link className="site-footer__logo" to="/">
            <span className="site-footer__logo-mark">S</span>
            <span>ShopCart</span>
          </Link>
          <p>Thoughtful finds for everyday living, delivered with a little more joy.</p>
          <div className="site-footer__socials" aria-label="Social links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
          </div>
        </div>

        <div className="site-footer__links">
          <div>
            <h2>Explore</h2>
            <Link to="/products">All products</Link>
            <Link to="/about">Our story</Link>
            <Link to="/contact">Contact us</Link>
          </div>
          <div>
            <h2>Need help?</h2>
            <a href="mailto:hello@shopcart.com">hello@shopcart.com</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <span>Mon - Sat, 9am - 6pm</span>
          </div>
        </div>

        <div className="site-footer__signup">
          <span className="eyebrow">The good list</span>
          <h2>Fresh finds, straight to your inbox.</h2>
          <form onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" name="email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe to newsletter">Join</button>
          </form>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="page-shell">
          <span>© 2026 ShopCart. Made for better everyday shopping.</span>
          <div>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
