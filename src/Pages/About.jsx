import '../../src/App.css';

const About = () => {
  return (
    <div className="page-shell about-page">
      <section className="about-intro">
        <div>
          <p className="eyebrow">A little about us</p>
          <h1>Objects with a point of view.</h1>
          <p className="about-lead">ShopCart began with a simple idea: the things we reach for every day deserve to be well made, beautiful, and genuinely useful.</p>
        </div>
        <div className="about-art"><p>“The best things become part of the story of your life.”</p></div>
      </section>
      <section className="about-story">
        <p className="eyebrow">Why ShopCart exists</p>
        <h2>Curiosity is our compass.</h2>
        <p>We look for the quiet details that turn an ordinary object into a favorite. From the first sketch to the final delivery, our edit is guided by material, function, and the feeling something brings into a room.</p>
      </section>
    </div>
  );
};

export default About;