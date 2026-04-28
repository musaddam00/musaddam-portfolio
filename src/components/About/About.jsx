import "./About.css";
import aboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="aboutTitle">
        <h2>
          About <span className="aboutHighlight">Me</span>
        </h2>
      </div>

      <div className="aboutContent">
        <div className="aboutImgWrapper">
          <img src={aboutImg} alt="Musaddam" className="aboutImg" />
        </div>

        <div className="aboutText">
          <h3 className="aboutName">I'm Musaddam</h3>
          <p className="aboutRole">IT Student & Aspiring Full-Stack Developer</p>

          <p className="aboutDesc">
            I'm Musaddam, an IT student and aspiring Full-Stack Developer. I build web applications using modern technologies. Focused on improving my skills by building real projects.
          </p>

          <div className="aboutInfo">
            <p>
              <span className="infoLabel">Email :</span> musaddam00@gmail.com
            </p>
            <p>
              <span className="infoLabel">Location :</span> Kota Jambi, Indonesia
            </p>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resumeBtn">
            Resume &rsaquo;
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
