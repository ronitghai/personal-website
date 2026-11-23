
import React from 'react'
import { Link } from 'react-router-dom'
import ProjectVisual from '../components/ProjectVisual'
import '../styles/project-case-study.css'
import '../styles/voyager-case-study.css'

const base = import.meta.env.BASE_URL

const features = [
  {
    title: 'Live GPS Tracking',
    text: 'A GPS receiver sends coordinates to the ESP32. The SwiftUI app displays the suitcase on an interactive Google Map and reverse geocodes its location into a readable address.',
  },
  {
    title: 'Integrated Weight Monitoring',
    text: 'Four load cells and an HX711 amplifier provide weight measurements without requiring a separate luggage scale.',
  },
  {
    title: 'BLE & Wi-Fi Connectivity',
    text: 'The iOS application receives suitcase telemetry over Bluetooth Low Energy or a configured local Wi-Fi connection.',
  },
  {
    title: 'Smart Baggage Alerts',
    text: 'Users can select baggage thresholds, switch between pounds and kilograms, tare the scale, and receive overweight notifications.',
  },
]

const screenshots = [
  {
    src: `${base}voyager/voyager-weight.png`,
    title: 'Weight Monitoring',
    detail: 'Real-time measurements and baggage limits',
  },
  {
    src: `${base}voyager/voyager-gps.png`,
    title: 'GPS Tracking',
    detail: 'Google Maps and reverse-geocoded address',
  },
  {
    src: `${base}voyager/voyager-settings.png`,
    title: 'Application Settings',
    detail: 'Connectivity, calibration, and notifications',
  },
]

export default function VoyagerPro() {
  return (
    <main className="cs-page voyager-page">
      <div className="cs-grid-background" aria-hidden="true" />

      <div className="cs-container">
        <Link to="/projects" className="cs-back-link">
          ← Back to Projects
        </Link>

        <section className="cs-hero">
          <p className="cs-eyebrow">
            PROJECT 03 / EMBEDDED SYSTEMS & IOS
          </p>

          <h1>
            Voyager <span>Pro.</span>
          </h1>

          <p className="cs-hero-description">
            An intelligent suitcase integrating real-time
            weight monitoring, GPS location tracking,
            wireless communication, and a custom SwiftUI
            companion application.
          </p>

          <div className="cs-tags">
            {[
              'SwiftUI', 'ESP32', 'C++', 'BLE',
              'Wi-Fi', 'Google Maps API',
              'GPS', 'HX711', 'KiCad',
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="cs-hero-metrics">
            <div>
              <strong>0.47 lbs</strong>
              <span>MEAN WEIGHT DISCREPANCY</span>
            </div>
            <div>
              <strong>4</strong>
              <span>INTEGRATED LOAD CELLS</span>
            </div>
            <div>
              <strong>≤5s</strong>
              <span>REPORTED UPDATE TIME</span>
            </div>
          </div>
        </section>

        <section className="cs-preview-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">01 / SYSTEM SHOWCASE</p>
            <h2>
              Hardware Meets <span>Software.</span>
            </h2>
            <p>
              Explore an illustrative telemetry interface
              inspired by the working prototype.
            </p>
          </div>

          <div className="voyager-preview">
            <ProjectVisual type="voyager" />
          </div>

          <p className="cs-preview-caption">
            Interactive concept preview using sample data.
            This page is not connected to a physical suitcase.
          </p>
        </section>

        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">02 / THE PROBLEM</p>
            <h2>
              Smarter <span>Travel.</span>
            </h2>
          </div>

          <div className="cs-two-column">
            <p>
              Travelers often rely on separate luggage scales
              and tracking devices to monitor baggage weight
              and location. These accessories can be
              inconvenient and easy to misplace.
            </p>
            <p>
              Voyager Pro combines both capabilities inside
              the suitcase, providing a centralized mobile
              experience for tracking weight, location,
              connectivity, and baggage alerts.
            </p>
          </div>
        </section>

        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">03 / ACTUAL IOS APPLICATION</p>
            <h2>
              Built for <span>iPhone.</span>
            </h2>
            <p>
              Screenshots from the original SwiftUI
              application developed for the prototype.
            </p>
          </div>

          <div className="voyager-screenshot-grid">
            {screenshots.map((item) => (
              <figure className="voyager-screen-card" key={item.title}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">04 / CORE FEATURES</p>
            <h2>
              Connected by <span>Design.</span>
            </h2>
          </div>

          <div className="cs-feature-grid">
            {features.map((feature, index) => (
              <article className="cs-feature-card" key={feature.title}>
                <div className="cs-feature-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="cs-feature-icon">◈</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">05 / SYSTEM ARCHITECTURE</p>
            <h2>
              From Sensors to <span>Screen.</span>
            </h2>
          </div>

          <div className="voyager-architecture">
            <div className="voyager-architecture-inputs">
              <div className="voyager-architecture-node">
                <span>WEIGHT SUBSYSTEM</span>
                <strong>4 Load Cells + HX711</strong>
                <p>Weight measurement and signal conversion</p>
              </div>
              <div className="voyager-architecture-node">
                <span>LOCATION SUBSYSTEM</span>
                <strong>GPS Receiver</strong>
                <p>Satellite positioning and coordinates</p>
              </div>
            </div>

            <div className="voyager-flow-arrow">↓</div>

            <div className="voyager-architecture-node voyager-architecture-center">
              <span>PROCESSING & COMMUNICATION</span>
              <strong>ESP32 Microcontroller</strong>
              <p>C++ firmware · BLE · Wi-Fi · Local HTTP</p>
            </div>

            <div className="voyager-flow-arrow">↓</div>

            <div className="voyager-architecture-node voyager-architecture-center">
              <span>USER EXPERIENCE</span>
              <strong>SwiftUI iOS Application</strong>
              <p>
                Weight dashboard · Google Maps · Reverse geocoding
                · Notifications
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">06 / ENGINEERING CHALLENGES</p>
            <h2>
              Tested. Refined. <span>Improved.</span>
            </h2>
          </div>

          <div className="cs-feature-grid">
            <article className="cs-feature-card">
              <div className="cs-feature-top"><span>01</span></div>
              <h3>Weight Calibration</h3>
              <p>
                Early measurements showed significant deviations.
                Replacing a faulty load cell, recalibrating the
                system, and improving mechanical stability
                substantially reduced measurement error.
              </p>
            </article>

            <article className="cs-feature-card">
              <div className="cs-feature-top"><span>02</span></div>
              <h3>Mechanical Stability</h3>
              <p>
                Custom 3D-printed load-cell holders and a more
                rigid weighing surface helped reduce movement
                and improve measurement consistency.
              </p>
            </article>

            <article className="cs-feature-card">
              <div className="cs-feature-top"><span>03</span></div>
              <h3>Wireless Integration</h3>
              <p>
                The application supports BLE scanning and a
                Wi-Fi configuration workflow, enabling the
                ESP32 to communicate with the phone using
                local network requests.
              </p>
            </article>

            <article className="cs-feature-card">
              <div className="cs-feature-top"><span>04</span></div>
              <h3>GPS Validation</h3>
              <p>
                GPS coordinates were tested across multiple
                locations and compared with reference positions
                using the Haversine distance formula.
              </p>
            </article>
          </div>
        </section>

        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">07 / PROJECT DEMONSTRATION</p>
            <h2>
              See It in <span>Action.</span>
            </h2>
          </div>

          <div className="voyager-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/0sg-tGyp5Q8"
              title="Voyager Pro Smart Suitcase Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <a
            className="voyager-video-link"
            href="https://www.youtube.com/shorts/0sg-tGyp5Q8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Original Demo on YouTube ↗
          </a>
        </section>

        <section className="cs-outcome">
          <p className="cs-eyebrow">08 / MY CONTRIBUTIONS & RESULTS</p>
          <h2>
            End-to-End <span>Engineering.</span>
          </h2>

          <p>
            I contributed across the full Voyager Pro system,
            including the embedded hardware, ESP32 firmware,
            GPS integration, weight measurement and calibration,
            PCB design, and SwiftUI application. The project
            was developed as part of a four-person engineering team.
          </p>

          <div className="voyager-results">
            <div>
              <strong>0.47 lbs</strong>
              <span>MEAN DISCREPANCY</span>
            </div>
            <div>
              <strong>±1.15 lbs</strong>
              <span>REPORTED FINAL TOLERANCE</span>
            </div>
            <div>
              <strong>48</strong>
              <span>WEIGHT TESTS</span>
            </div>
          </div>
        </section>

        <div className="cs-bottom-navigation">
          <Link to="/projects">← All Projects</Link>
          <Link to="/contact">Let's Connect ↗</Link>
        </div>
      </div>
    </main>
  )
}
