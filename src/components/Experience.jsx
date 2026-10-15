
import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "Junior Web Developer",
    company: "AI Concept LLC",
    location: "Calicut, Kerala (Remote)",
    period: "August 2026 — October 2026",
    technologies: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "GSAP",
      "ScrollTrigger",
      "Framer Motion",
      "Responsive Design",
      "Git",
      "GitHub",
    ],
    achievements: [
      "Developed responsive and interactive websites using React.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Built reusable website sections and implemented UI layouts based on business and client requirements.",
      "Created interactive animations and scroll-based effects using GSAP, ScrollTrigger, and Framer Motion.",
      "Improved website responsiveness, visual consistency, and user experience across different screen sizes.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Zonemac Solutions",
    location: "Calicut, Kerala",
    period: "December 2025 — June 2026",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST APIs",
      "CRUD Operations",
      "Git",
      "GitHub",
    ],
    achievements: [
      "Developed responsive web application interfaces using React.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Created reusable React components to improve code organization and maintainability.",
      "Integrated REST APIs and worked with backend technologies including Node.js, Express.js, and MongoDB.",
      "Practised debugging, testing, database operations, and version control using Git and GitHub.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="experience-label">
            <span className="experience-label-dot" />
            <span>CAREER JOURNEY</span>
          </div>

          <h2 className="experience-title">Work Experience</h2>

          <p className="experience-subtitle">
            Hands-on experience building responsive web applications,
            interactive interfaces, and full-stack solutions.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <article className="experience-card" key={exp.company}>
              {/* Decorative Background */}
              <div className="exp-card-bg-image" aria-hidden="true" />
              <div className="exp-card-overlay" aria-hidden="true" />

              {/* Card Content */}
              <div className="exp-card-inner-content">
                {/* Card Header */}
                <div className="exp-inner-header">
                  <div className="exp-role-group">
                    <div className="exp-icon-bubble">
                      <Briefcase size={19} />
                    </div>

                    <div className="exp-role-details">
                      <h3 className="exp-role">{exp.role}</h3>

                      <div className="exp-company-sub">
                        <Building2 size={13} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-pill-group">
                    <span className="exp-glass-pill">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </span>

                    <span className="exp-glass-pill">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="exp-content-box">
                  <h4 className="exp-content-box-title">
                    Key Responsibilities
                  </h4>
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                  <ul className="exp-bullet-list">
                    {exp.achievements.map((item, aIdx) => (
                      <li
                        key={`${idx}-${aIdx}`}
                        className="exp-bullet-item"
                      >
                        <span className="exp-check-icon-wrap">
                          <CheckCircle2 size={14} />
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul></div>
                </div>

                {/* Technologies */}
                <div className="exp-tech-section">
                  <span className="exp-tech-label">
                    Stack &amp; Tools
                  </span>

                  <div className="exp-tech-chips"  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                    {exp.technologies.map((tech) => (
                      <span className="exp-chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
