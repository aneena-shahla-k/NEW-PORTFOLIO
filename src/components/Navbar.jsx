
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    setMenuOpen(false);

    if (!section) return;

    section.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  const getLinkClass = (id, mobile = false) => {
    const base = mobile
      ? "navbar__mobile-link"
      : "navbar__link";

    return `${base} ${
      activeSection === id ? `${base}--active` : ""
    }`;
  };

  return (
    <header className="navbar">
      {/* Brand */}
      <button
        className="navbar__logo"
        onClick={() => scrollToSection("home")}
        aria-label="Aneena Shahla — Home"
        type="button"
      >
        <span className="navbar__logo-mark">A.S</span>

        <span className="navbar__logo-text">
          Aneena Shahla
        </span>
      </button>

      {/* Desktop Navigation */}
      <nav
        className="navbar__links"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={getLinkClass(item.id)}
            onClick={() => scrollToSection(item.id)}
            aria-current={
              activeSection === item.id ? "location" : undefined
            }
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Desktop CTA */}
      <button
        className="navbar__contact"
        onClick={() => scrollToSection("contact")}
        type="button"
      >
        <span>Let's Talk</span>
        <ArrowUpRight size={15} strokeWidth={1.8} />
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="navbar__menu"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="navbar-mobile-menu"
        type="button"
      >
        {menuOpen ? (
          <X size={20} strokeWidth={1.8} />
        ) : (
          <Menu size={20} strokeWidth={1.8} />
        )}
      </button>

      {/* Mobile Navigation */}
      <nav
        id="navbar-mobile-menu"
        className={`navbar__mobile ${
          menuOpen ? "navbar__mobile--open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={getLinkClass(item.id, true)}
            onClick={() => scrollToSection(item.id)}
            aria-current={
              activeSection === item.id ? "location" : undefined
            }
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>{item.label}</span>

            {activeSection === item.id ? (
              <span className="navbar__active-dot" />
            ) : (
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
              />
            )}
          </button>
        ))}

        <button
          className="navbar__mobile-contact"
          onClick={() => scrollToSection("contact")}
          type="button"
          tabIndex={menuOpen ? 0 : -1}
        >
          <span>Let's Talk</span>
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
