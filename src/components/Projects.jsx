
import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Layers,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import "./Projects.css";

import img1 from "../images/luxeliving.png";
import img2 from "../images/honey.png";
import img3 from "../images/kitchen.png";
import img4 from "../images/nexora.png";
import img5 from "../images/wellness.png";
import img6 from "../images/aiconcept.png";
import img7 from "../images/solar.png";
import img8 from "../images/clay.png";
import img9 from "../images/ayshas.png";
import img10 from "../images/lumiere.png";

const projects = [
  {
    id: 1,
    number: "01",
    category: "MERN COMMERCE",
    title: "LuxeLiving",
    year: "2025",
    description:
      "A full-stack furniture e-commerce platform featuring product management, authentication, and cloud-based media integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    image: img1,
    link: "https://lumiere-mocha-nine.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    category: "APPOINTMENT BOOKING",
    title: "Wellness",
    year: "2025",
    description:
      "Developed a responsive hospital management system with secure authentication, appointment booking, and patient management using RESTful APIs. Deployed the frontend and backend separately.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: img5,
    link: "https://wellness-in.netlify.app",
  },
  
  {
    id: 3,
    number: "03",
    category: "NATURAL BRAND",
    title: "Wayanad Honey",
    year: "2026",
    description:
      "A responsive brand experience for a natural honey business, designed to showcase products and make product discovery simple.",
    tech: ["React.js", "JavaScript", "CSS3", "Responsive Design", "ScrollTrigger"],
    image: img2,
    link: "https://wayanad-honey.netlify.app/",
  },
  {
    id: 4,
    number: "04",
    category: "AYURVEDHIC PRODUCTS",
    title: "Aysha's herbal",
    year: "2026",
    description:
      "Developed a responsive website for a homemade Ayurvedic skincare brand, showcasing natural herbal products with an elegant, user-friendly interface and product-focused layouts.",
    tech: ["React.js", "JavaScript", "Bootstrap", "Responsive design"],
    image: img9,
    link: "https://ayshas-herbal.vercel.app/",
  },
  {
    id: 5,
    number: "05",
    category: "INTERIOR EXPERIENCE",
    title: "KitchenCraft",
    year: "2026",
    description:
      "A modular kitchen website with animated showcases, interactive design experiences, and before-and-after comparisons.",
    tech: ["React.js", "JavaScript", "CSS3", "GSAP", "ScrollTrigger", "Framer Motion"],
    image: img3,
    link: "https://kitchen-kohl-eight.vercel.app/",
  },
  {
    id: 6,
    number: "06",
    category: "CLIENT WEBSITE",
    title: "Clay & earth",
    year: "2026",
    description:
      "Developed a single-page product website based on client requirements, featuring a clean, responsive layout to showcase products with an engaging and user-friendly interface.",
    tech: ["React.js", "JavaScript", "Bootstrap", "Responsive design"],
    image: img8,
    link: "https://clay-earth-swart.vercel.app/",
  },
 
  {
    id: 7,
    number: "07",
    category: "COMPANY WEBSITE",
    title: "AI Concept LLC",
    year: "2026",
    description:
      "Developed a professional company website showcasing services, projects, and brand identity, with responsive layouts and interactive UI elements for a seamless user experience.",
    tech: ["React.js", "JavaScript", "Bootstrap", "Responsive design"],
    image: img6,
    link: "https://ai-concept-bay.vercel.app",
  },
  {
    id: 8,
    number: "08",
    category: "CLIENT PROJECT",
    title: "Solar Energy Website",
    year: "2026",
    description:
      "Developed a single-page solar energy website tailored to client requirements, featuring a clean, responsive layout and engaging UI to showcase solar solutions and services.",
    tech: ["React.js", "JavaScript", "Bootstrap", "Responsive design"],
    image: img7,
    link: "https://solar-three-tawny.vercel.app/",
  },
   {
    id: 9,
    number: "09",
    category: "BRAND PLATFORM",
    title: "Nexora",
    year: "2026",
    description:
      "A modern digital storefront with clean typography, responsive layouts, and interactive interface components.",
    tech: ["React.js", "JavaScript", "Bootstrap", "REST APIs", "Framer Motion"],
    image: img4,
    link: "https://nexora-store-eta.vercel.app/",
  },
   {
    id: 10,
    number: "10",
    category: "PREMIUM SKINCARE WEBSITE",
    title: "Lumière",
    year: "2026",
    description:
      "A premium skincare e-commerce experience designed to showcase skincare products through elegant visuals, smooth scroll-driven animations, and a minimal luxury aesthetic.",
    tech: ["React.js", "JavaScript", "Bootstrap", "Scroll Animation", "Framer Motion"],
    image: img10,
    link: "https://lumiere-mocha-nine.vercel.app/",
  },
  
  
];

// Repeat the reel items for a continuous loop.
// The modal below intentionally displays each project only once.
const displayProjects = [...projects, ...projects, ...projects];

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const x = useMotionValue(0);

  // Pause the reel and lock background scrolling while the modal is open.
  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // A full cycle is four cards (330px) plus four gaps (22px).
  useAnimationFrame((_, delta) => {
    if (isPaused || isModalOpen) return;

    const cardWidth = 330;
    const gap = 22;
    const cycleWidth = projects.length * (cardWidth + gap);

    let nextX = x.get() - delta * 0.035;

    if (nextX <= -cycleWidth) {
      nextX += cycleWidth;
    }

    x.set(nextX);
  });

  return (
    <section className="reel-section" id="projects">
      <div className="reel-ambient-glow" aria-hidden="true" />

      <div className="reel-header-wrap">
        <div className="reel-label">
          <span className="reel-label-dot" />
          <span>SELECTED WORKS</span>
        </div>

        <div className="reel-heading-row">
          <div>
            <h2 className="reel-title">Work that speaks</h2>
            <p className="reel-subtitle">
              A selection of digital experiences, interfaces, and web projects.
            </p>
          </div>

          <div className="reel-actions">
            <button
              type="button"
              className="reel-view-all-btn"
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
            >
              <Layers size={15} aria-hidden="true" />
              <span>View All Projects</span>
              <ArrowUpRight
                size={15}
                className="reel-btn-arrow"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="reel-stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >
        <div className="reel-sprockets top" aria-hidden="true">
          {Array.from({ length: 45 }).map((_, i) => (
            <span key={`top-${i}`} className="sprocket-hole" />
          ))}
        </div>

        <div className="reel-side-fade left" aria-hidden="true" />
        <div className="reel-side-fade right" aria-hidden="true" />

        <div className="reel-window">
          <motion.div className="reel-track" style={{ x }}>
            {displayProjects.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reel-card"
                aria-label={`${item.title} — open live project in a new tab`}
                tabIndex={index < projects.length ? 0 : -1}
              >
                <div className="reel-card-header">
                  <span>FRAME {item.number}</span>
                  <span className="reel-card-year">{item.year}</span>
                </div>

                <div className="reel-card-image-wrap">
                  <img
                    src={item.image}
                    alt={`${item.title} website preview`}
                    draggable="false"
                    loading={index < projects.length ? "eager" : "lazy"}
                  />
                  <div className="reel-card-glass-tint" aria-hidden="true" />
                  <span className="reel-card-badge">{item.category}</span>
                  <h3 className="reel-card-name">{item.title}</h3>
                </div>

                <div className="reel-card-footer">
                  <div className="reel-card-footer-info">
                    <span className="reel-card-idx">{item.number}</span>
                    <strong className="reel-card-title-sub">
                      {item.title}
                    </strong>
                  </div>

                  <span className="reel-card-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="reel-sprockets bottom" aria-hidden="true">
          {Array.from({ length: 45 }).map((_, i) => (
            <span key={`bottom-${i}`} className="sprocket-hole" />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-backdrop"
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="modal-container"
              role="dialog"
              aria-modal="true"
              aria-labelledby="projects-modal-title"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 18 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="modal-header">
                <div>
                  <div className="modal-eyebrow">
                    <Sparkles size={14} aria-hidden="true" />
                    <span>PROJECT DIRECTORY</span>
                  </div>
                  <h3 className="modal-title" id="projects-modal-title">
                    All Featured Works
                  </h3>
                  <p className="modal-subtitle">
                    Explore the details behind each project.
                  </p>
                </div>

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close projects dialog"
                  autoFocus
                >
                  <X size={19} />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-grid">
                  {projects.map((project) => (
                    <article className="modal-card" key={project.id}>
                      <div className="modal-card-image">
                        <img
                          src={project.image}
                          alt={`${project.title} website preview`}
                          loading="lazy"
                        />
                        <span className="modal-card-cat">
                          {project.category}
                        </span>
                      </div>

                      <div className="modal-card-details">
                        <div className="modal-card-meta">
                          <div>
                            <span className="modal-project-number">
                              PROJECT {project.number}
                            </span>
                            <h4 className="modal-card-name">
                              {project.title}
                            </h4>
                          </div>
                          <span className="modal-card-year">
                            {project.year}
                          </span>
                        </div>

                        <p className="modal-card-desc">
                          {project.description}
                        </p>

                        <div
                          className="modal-card-tech"
                          aria-label="Technologies used"
                        >
                          {project.tech.map((technology) => (
                            <span className="modal-tech-tag" key={technology}>
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div className="modal-card-actions">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-action-btn primary"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>

                         
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
