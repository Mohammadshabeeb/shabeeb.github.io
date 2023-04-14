import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import storyImage from "../../images/trainer1.jpg";
import './about.css'
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas
        aliquid rerum recusandae, omnis, tempore cum vel et iure accusantium non
        quod nihil at hic vero, officia reprehenderit mollitia tenetur.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={storyImage} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam fugit ipsam sapiente eos quae aliquid quos
              sit, maiores, error blanditiis eum, aliquam distinctio modi ea
              libero porro minus sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              ad veritatis ea, exercitationem ratione odit quis cum corporis
              repellendus, commodi quidem dolores tenetur quibusdam eos placeat
              error sed, architecto dolorum?
            </p>
            <p>
              Lorem ipsum do voluptatum aperiam quasi mollitia beatae cum nihil
              nulla perspiciatis odit sunt?
            </p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam fugit ipsam sapiente eos quae aliquid quos
              sit, maiores, error blanditiis eum, aliquam distinctio modi ea
              libero porro minus sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              ad veritatis ea, exercitationem ratione odit quis cum corporis
              repellendus, commodi quidem dolores tenetur quibusdam eos placeat
              error sed, architecto dolorum?
            </p>
            <p>
              Lorem ipsum do voluptatum aperiam quasi mollitia beatae cum nihil
              nulla perspiciatis odit sunt?
            </p>
          </div>
          <div className="about_section-image">
            <img src={storyImage} alt="" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={storyImage} alt="" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam fugit ipsam sapiente eos quae aliquid quos
              sit, maiores, error blanditiis eum, aliquam distinctio modi ea
              libero porro minus sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              ad veritatis ea, exercitationem ratione odit quis cum corporis
              repellendus, commodi quidem dolores tenetur quibusdam eos placeat
              error sed, architecto dolorum?
            </p>
            <p>
              Lorem ipsum do voluptatum aperiam quasi mollitia beatae cum nihil
              nulla perspiciatis odit sunt?
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
