
import React, { useEffect, useRef, useState } from "react";
import {
  Volume2,
  VolumeX,
  RotateCcw,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import "./Hero.css";

const VIDEO_URL =
  "https://res.cloudinary.com/zu7jndeq/video/upload/v1791448165/portfolio-hero_grytjz.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  const [videoEnded, setVideoEnded] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);

  // Autoplay video silently on initial load.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    video.play().catch(() => {
      // Autoplay may be restricted by the browser.
    });
  }, []);

  // Display introduction when the video finishes.
  const handleVideoEnd = () => {
    setVideoEnded(true);
    setSoundOn(false);
    setSoundBlocked(false);
  };

  // Toggle sound while the video is playing.
  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (soundOn) {
      video.muted = true;
      setSoundOn(false);
      setSoundBlocked(false);
      return;
    }

    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setSoundOn(true);
      setSoundBlocked(false);
    } catch {
      video.muted = true;
      setSoundOn(false);
      setSoundBlocked(true);
    }
  };

  // Replay from the beginning with sound.
  const replayWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    setVideoEnded(false);
    setSoundOn(false);
    setSoundBlocked(false);

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setSoundOn(true);
    } catch {
      // If audio playback is blocked, retry silently.
      video.muted = true;

      try {
        await video.play();
        setSoundOn(false);
        setSoundBlocked(true);
      } catch {
        setVideoEnded(true);
      }
    }
  };

  // Scroll to the About section.
  const explorePortfolio = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section
      className={`hero ${videoEnded ? "hero--ended" : ""}`}
      id="home"
      aria-label="Introduction"
    >
      {/* Background video */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          aria-label="A short personal introduction"
        >
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        <div className="hero-video-overlay" />
        <div className="hero-video-vignette" />
      </div>

      {/* Sound control visible during video playback */}
      {!videoEnded && (
        <button
          type="button"
          className="hero-sound"
          onClick={toggleSound}
          aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
        >
          {soundOn ? (
            <Volume2 size={16} strokeWidth={1.7} />
          ) : (
            <VolumeX size={16} strokeWidth={1.7} />
          )}

          <span>
            {soundOn ? "Sound On" : "Sound Off"}
          </span>
        </button>
      )}

      {/* Introduction content appears after video completion */}
      <div
        className={`hero-content ${
          videoEnded ? "hero-content--visible" : ""
        }`}
        aria-hidden={!videoEnded}
        inert={!videoEnded}
      >
        <div className="hero-intro">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>DESIGN-MINDED DEVELOPER</span>
          </div>

          <h1 className="hero-title">
            Hi, I’m
            <br />
            <span className="hero-name">Aneena Shahla.</span>
          </h1>

          <p className="hero-description">
            MERN stack developer crafting thoughtful,
            user-focused digital experiences with clean
            code, considered design, and user-friendly
            applications.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="hero-btn hero-btn--primary"
              tabIndex={videoEnded ? 0 : -1}
            >
              <span>Explore my work</span>
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn--secondary"
              tabIndex={videoEnded ? 0 : -1}
            >
              Let’s connect
            </a>
          </div>

          {/* Replay button shown after the video ends */}
          <button
            type="button"
            className="hero-replay"
            onClick={replayWithSound}
            tabIndex={videoEnded ? 0 : -1}
          >
            <RotateCcw size={15} strokeWidth={1.8} />
            <span>Play Again</span>
            <Volume2 size={15} strokeWidth={1.8} />
          </button>

          {soundBlocked && (
            <p className="hero-sound-note" role="status">
              Your browser blocked audio playback. The video is
              playing muted. Tap Sound On to enable audio.
            </p>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero-scroll"
        onClick={explorePortfolio}
        type="button"
        aria-label="Scroll to About section"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} strokeWidth={1.5} />
      </button>

      {/* Video progress indicator */}
      {!videoEnded && (
        <div className="hero-progress" aria-hidden="true">
          <span />
        </div>
      )}
    </section>
  );
};

export default Hero;
