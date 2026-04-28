import "./intro.css";
import bg from "../../assets/cropped_circle_image.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hi There,👋</span>
        <span className="introText">
          I'm <span className="introName">Musaddam</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I build fast, responsive, user-friendly web apps.
          <br /> Growing as a full-stack developer.
        </p>
        <Link to="about" smooth={true} duration={500}>
          <button className="btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
            About Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
