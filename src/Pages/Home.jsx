import { Link } from 'react-router-dom';
import '../../src/App.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div>
          <p className="eyebrow">The everyday edit</p>
          <h1>Good things for a <em>well-lived</em> life.</h1>
          <p className="hero-copy">Shop considered essentials for your home, your routine, and the small rituals that make a day feel like yours.</p>
          <div className="hero-actions">
            <Link className="button" to="/products">Shop the edit <span aria-hidden="true">-&gt;</span></Link>
            <Link className="button button--light" to="/about">Our story</Link>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Curated self-care products on a sunny shelf">
          <p className="hero-tag">Thoughtful objects. Daily delight.</p>
        </div>
      </section>

      <section className="page-shell home-section">
        <div className="section-heading">
          <div><p className="eyebrow">Find your next favorite</p><h2>Shop by mood</h2></div>
          <Link className="button button--light" to="/products">View everything</Link>
        </div>
        <div className="category-grid">
          <Link className="category-card" to="/products"><h3>Slow mornings</h3><span>Home &amp; comfort -&gt;</span></Link>
          <Link className="category-card" to="/products"><h3>Daily carry</h3><span>Useful, beautiful things -&gt;</span></Link>
          <Link className="category-card" to="/products"><h3>Little luxuries</h3><span>Gifts worth keeping -&gt;</span></Link>
        </div>
      </section>

      <section className="home-section home-section--cream">
        <div className="page-shell">
          <div className="section-heading"><div><p className="eyebrow">The ShopCart promise</p><h2>Made for your real life.</h2></div></div>
          <div className="value-grid">
            <article className="value-item"><span className="value-number">01</span><h3>Less, but better</h3><p>A small, intentional collection chosen to earn its place in your home.</p></article>
            <article className="value-item"><span className="value-number">02</span><h3>Easy to love</h3><p>Good design should feel effortless, useful, and a little bit joyful.</p></article>
            <article className="value-item"><span className="value-number">03</span><h3>Always human</h3><p>Thoughtful service from a small team who genuinely care about the details.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
