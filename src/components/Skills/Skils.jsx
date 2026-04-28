import "./skills.css";

import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css-3.png";
import jsIcon from "../../assets/icons/js.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import bootstrapIcon from "../../assets/icons/bootstrap.png";
import phpIcon from "../../assets/icons/php.png";
import reactIcon from "../../assets/icons/react.png";
import nodeIcon from "../../assets/icons/nodejs.png";
import mongoIcon from "../../assets/icons/mongodb.png";
import mysqlIcon from "../../assets/icons/mysql.png";
import githubIcon from "../../assets/icons/github-white-icon.png";
import gitIcon from "../../assets/icons/git.png";
import vscodeIcon from "../../assets/icons/vscode.png";
import figmaIcon from "../../assets/icons/figma.png";
import npmIcon from "../../assets/icons/npm.png";
import pythonIcon from "../../assets/icons/icons8-python-480.png";
import postman from "../../assets/icons/postman-icon.png";
import express from "../../assets/icons/express-js.png";
import laravel from "../../assets/icons/laravel.png";
import postgreSql from "../../assets/icons/PostgresSQL.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "PHP", icon: phpIcon },
  { name: "React", icon: reactIcon },
  { name: "NodeJs", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Github", icon: githubIcon },
  { name: "Git", icon: gitIcon },
  { name: "VSCode", icon: vscodeIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "npm", icon: npmIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Postman", icon: postman },
  { name: "ExpressJS", icon: express },
  { name: "Laravel", icon: laravel },
  { name: "PostgreSQL", icon: postgreSql },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-title">
          Tech <span className="stack-highlight">Stack</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
