
import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillColumns = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        level: 92,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        level: 96,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        level: 94,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Responsive Web Design",
        level: 95,
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        level: 86,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        level: 87,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "REST APIs",
        level: 90,
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
      },
      {
        name: "JWT Auth",
        level: 88,
        icon: "https://jwt.io/img/pic_logo.svg",
      },
    ],
  },
  {
    category: "Database & UI",
    items: [
      {
        name: "MongoDB",
        level: 86,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        level: 85,
        icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",
      },
      {
        name: "GSAP & ScrollTrigger",
        level: 84,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/greensock/greensock-original.svg",
      },
      {
        name: "Framer Motion",
        level: 82,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Cloudinary",
        level: 86,
        icon: "https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png",
      },
      {
        name: "Netlify",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Render",
        level: 84,
        icon: "https://images.seeklogo.com/logo-png/44/1/render-logo-png_seeklogo-442880.png",
      },
    ],
  },
];

const SkillIcon = ({ skill }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <span className="skill-icon-shell" aria-hidden="true">
      {!imageFailed && skill.icon ? (
        <img
          src={skill.icon}
          alt=""
          className="skill-row-icon"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="skill-icon-fallback">
          {skill.name
            .split(/[\s.&()+-]+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase()}
        </span>
      )}
    </span>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    if (
      typeof IntersectionObserver === "undefined"
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`skills-section ${isVisible ? "skills-visible" : ""}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-container">
        <header className="skills-header">
          <div className="skills-label">
            <span className="skills-label-dot" />
            <span>SKILLS</span>
          </div>

          <h2 className="skills-title">
            Technologies I Work With
          </h2>

          <p className="skills-intro">
            The technologies and tools I use to build
            thoughtful, responsive, and reliable digital
            experiences.
          </p>
        </header>

        <div className="skills-category-grid">
          {skillColumns.map((column, columnIndex) => (
            <article
              className="skills-col-card"
              key={column.category}
              style={{
                "--card-index": columnIndex,
              }}
            >
              <div className="skills-card-heading">
                <h3 className="skills-col-title">
                  {column.category}
                </h3>

                <span className="skills-card-count">
                  {String(column.items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="skills-list">
                {column.items.map((skill, itemIndex) => (
                  <div
                    className="skill-row"
                    key={skill.name}
                    style={{
                      "--item-index": itemIndex,
                    }}
                  >
                    <div className="skill-row-top">
                      <div className="skill-row-info">
                        <SkillIcon skill={skill} />

                        <span className="skill-row-name">
                          {skill.name}
                        </span>
                      </div>

                      <span className="skill-row-percent">
                        {isVisible ? `${skill.level}%` : "—"}
                      </span>
                    </div>

                    <div
                      className="skill-row-bar-track"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      <div
                        className="skill-row-bar-fill"
                        style={{
                          "--skill-level": `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-footer-note">
          <span className="skills-footer-dot" />
          <p>
            Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
