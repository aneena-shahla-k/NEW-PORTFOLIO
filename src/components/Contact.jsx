
import React, { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";
import contactBg from "../images/global/cnt.webp";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const LinkedInIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.18h2.97v9.56ZM6.44 7.87a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.87h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.46V9.18h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.56v5.24Z" />
  </svg>
);

const GitHubIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.98 0 4.27-2.62 5.22-5.11 5.5.4.35.75 1.03.75 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailto = `mailto:aneenashahla@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  const contactLinks = [
    {
      label: "EMAIL",
      value: "aneenashahla@gmail.com",
      icon: Mail,
      href: "mailto:aneenashahla@gmail.com",
    },
    {
      label: "LOCATION",
      value: "Calicut, Kerala, India",
      icon: MapPin,
      href: null,
    },
    {
      label: "LINKEDIN",
      value: "aneena-shahla",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/aneena-shahla-07434832b",
    },
    {
      label: "GITHUB",
      value: "aneena-shahla-k",
      icon: GitHubIcon,
      href: "https://github.com/aneena-shahla-k",
    },
  ];

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div
        className="contact-bg-layer"
        style={{ backgroundImage: `url(${contactBg})` }}
        aria-hidden="true"
      />

      <div className="contact-overlay-layer" aria-hidden="true" />
      <div className="contact-glow contact-glow-one" aria-hidden="true" />
      <div className="contact-glow contact-glow-two" aria-hidden="true" />

      <div className="contact-container">
        <div className="contact-main-wrapper">
          {/* LEFT COLUMN */}
          <div className="contact-left-column">
            <header className="contact-header">
              <div className="contact-label">
                <span className="contact-label-dot" />
                <span>CONTACT</span>
              </div>

              <h2 className="contact-title" id="contact-heading">
                Let’s connect
                <span className="contact-title-period">.</span>
              </h2>

              <p className="contact-desc">
                Have a project in mind, an opportunity, or just want to say
                hello? I’d love to hear from you.
              </p>

              <div className="contact-availability">
                <span className="contact-availability-dot" />
                Open to exciting opportunities
              </div>
            </header>

            {/* Contact Form */}
            <div className="contact-form-glass" data-aos="fade-left">
              <div className="contact-form-top">
                <div className="contact-send-icon-wrap">
                  <MessageCircle size={19} strokeWidth={1.8} />
                </div>

                <div className="contact-form-heading-copy">
                  <h3 className="contact-form-title">
                    Send me a message
                  </h3>
                  <p className="contact-form-sub">
                    Let’s turn your idea into something meaningful.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-actual-form"
              >
                <div className="contact-grid-two">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Your name <span>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email address <span>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject">
                    Subject <span>*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Your message <span>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your idea..."
                    required
                  />
                </div>

                <button type="submit" className="contact-form-btn">
                  <span>Send message</span>
                  <Send size={15} strokeWidth={2} />
                </button>

                <p className="contact-form-note">
                  <span className="contact-note-dot" />
                  Your email app will open with your message ready to send.
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-right-column" data-aos="fade-right">
            <div className="contact-cards-under-form">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="contact-sub-icon">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <div className="contact-sub-text">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        className="contact-sub-arrow"
                        size={15}
                        strokeWidth={1.8}
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-sub-card"
                    target={
                      item.href.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="contact-sub-card">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="contact-bottom-note">
              <span>GOOD THINGS START WITH A CONVERSATION</span>
              <span className="contact-bottom-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
