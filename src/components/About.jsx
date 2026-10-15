
import React from "react";
import {
  MapPin,
  BriefcaseBusiness,
  CalendarDays,
  Lightbulb,
  Code2,
  UsersRound,
  Heart,
  Download,
  ArrowUpRight,
} from "lucide-react";

import "./About.css";
import img from "../images/about.png";

const About = () => {
  const features = [
    { label: "Problem Solver", Icon: Lightbulb },
    { label: "Quick Learner", Icon: Code2 },
    { label: "Team Player", Icon: UsersRound },
  ];

  const infoCards = [
    {
      label: "Based in",
      value: "Kerala, India",
      Icon: MapPin,
    },
    {
      label: "Open to",
      value: "Remote / On-site",
      Icon: BriefcaseBusiness,
    },
    {
      label: "Available for",
      value: "Full Time",
      Icon: CalendarDays,
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content" >
          <div className="about-label">
            <span className="about-label-dot" />
            <span>ABOUT ME</span>
          </div>
<div data-aos="fade-left">
          <h2 className="about-title">
            Nice to meet you!
          </h2>

          <p className="about-description">
            I'm <strong>Aneena Shahla</strong>, a passionate developer
            focused on building responsive, interactive, and visually
            engaging web experiences. I enjoy turning ideas and
            requirements into functional interfaces while working
            with modern technologies to create clean, efficient,
            and user-friendly applications.
          </p>

          {/* DOWNLOAD CV */}
          <a
            href="/resume.pdf"
            download
            className="about-cv-button"
          >
            <span className="about-cv-icon">
              <Download size={17} strokeWidth={1.8} />
            </span>

            <span className="about-cv-text">
              Download CV
            </span>

            <span className="about-cv-arrow">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </a></div>

          {/* FEATURES */}
          <div className="about-features">
            {features.map(({ label, Icon }) => (
              <div className="about-feature" key={label}>
                <span className="about-feature-icon">
                  <Icon size={16} strokeWidth={1.7} />
                </span>

                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER PORTRAIT */}
        <div className="about-visual" data-aos="zoom-in-up">
          <div className="about-photo-glow" />

          <div className="about-photo-card">
            <div className="about-photo-inner">
              <img
                src={img}
                alt="Aneena Shahla working on her laptop"
                loading="lazy"
              />
            </div>

            <div className="about-photo-caption">
              Always learning.
            </div>
          </div>

          <span className="about-heart" aria-hidden="true">
            <Heart size={22} strokeWidth={1.35} />
          </span>

          <span className="about-plus" aria-hidden="true">
            +
          </span>
        </div>

        {/* RIGHT INFORMATION CARDS */}
        <div className="about-info" data-aos="fade-right">
          {infoCards.map(({ label, value, Icon }) => (
            <div className="about-info-card" key={label}>
              <span className="about-info-icon">
                <Icon size={18} strokeWidth={1.7} />
              </span>

              <div className="about-info-text">
                <span className="about-info-label">
                  {label}
                </span>

                <strong>{value}</strong>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
