import steelseriesImg from './assets/blurred_supportPage.png';
import d2fitnessImg from './assets/blurred_D2.png';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
   const textOptions = ['Zendesk Specialist', 'Gaming Connoseiur'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {~
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>Randy Leandicho</h1>
      </div>

      <div className="carousel">
        <p
          id="rotating_text"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          {textOptions[currentIndex]}
        </p>
      </div>

      <div className="bio">
        <h2>
          I am a Technical operations professional with 8+ years of experience bridging the gap
          between customer needs and platform scalability. <br />
          <br />
          Currently serving as an acting Support Platform Owner at SteelSeries, specializing in the
          architectural optimization of Zendesk and internal tooling.
        </h2>
      </div>

      <div className="title_text">
        <h1>Personal Projects</h1>
      </div>

      <div className="tiles-container">
         <div
            className="tiles tiles--with-image"
            style={{ backgroundImage: `url(${steelseriesImg})` }}
          >
            <a
              href="https://support.steelseries.com/hc/en-us"
              className="tile_link"
              target="_blank"
              rel="noreferrer"
            >
              SteelSeries Support Page
            </a>
          </div>


        <div
          className="tiles tiles--with-image"
          style={{ backgroundImage: `url(${d2fitnessImg})` }}
        >
          <a
            href="https://www.d2fitness.com/"
            className="tile_link"
            target="_blank"
            rel="noreferrer"
          >
            D2Fitness
          </a>
        </div>
      </div>

      <section className="experience">
        <h2>Experience & Impact</h2>
        <div className="experience-item">
          <h3>Senior Customer Success Specialist · SteelSeries</h3>
          <p className="experience-meta">Customer Experience · Zendesk Platform</p>
          <ul>
            <li>
              Lead optimization of the global Zendesk instance, aligning workflows with both
              customer needs and internal scalability.
            </li>
            <li>
              Partner with operations, product, and engineering teams to design support flows that
              reduce friction and improve time to resolution.
            </li>
            <li>
              Continuously analyze support data to identify opportunities for automation and
              proactive support.
            </li>
          </ul>
        </div>
      </section>

      <section className="socials">
        <h2>Connect With Me</h2>
        <div className="social-links">
          {/* GitHub */}
          <a
            href="https://github.com/your-github-username"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              {/* Simple GitHub SVG */}
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56
                     0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7
                     -1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.78 2.72 1.27
                     3.38.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7
                     0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18
                     .92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18
                     3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09
                     0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22
                     0 1.6-.01 2.88-.01 3.27 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12
                     23.5 5.65 18.35.5 12 .5z"
                />
              </svg>
            </span>
            <span className="social-text">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-slug"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              {/* Simple LinkedIn SVG */}
              <svg viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1
                     3.88 1 4.98 2.12 4.98 3.5zM.27 8h4.46V23H.27zM8.54 8h4.28v2.05h.06
                     c.6-1.14 2.06-2.34 4.24-2.34C21.5 7.71 23 9.9 23 13.37V23h-4.46v-8.47
                     c0-2.02-.72-3.4-2.52-3.4-1.37 0-2.19.92-2.55 1.81-.13.32-.16.77-.16 1.22V23H8.54z"
                />
              </svg>
            </span>
            <span className="social-text">LinkedIn</span>
          </a>
        </div>
      </section>
    </div> //ending div for project 
  );
}

export default App;