
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/aes-case-study.css'

const normalCipher =
  '69 C4 E0 D8 6A 7B 04 30 D8 CD B7 80 70 B4 C5 5A'

const faultyCipher =
  '69 C4 E0 D8 6A 7B 04 30 D8 CD B7 80 70 B4 2F 91'

const stages = [
  {
    number: '01',
    title: 'Target Execution',
    description:
      'The ATmega328P executes an AES-128 encryption operation.',
  },
  {
    number: '02',
    title: 'Fault Injection',
    description:
      'An RP2040-based setup introduces controlled timing disturbances during target execution.',
  },
  {
    number: '03',
    title: 'Ciphertext Collection',
    description:
      'Normal and fault-affected encryption outputs are collected for comparison.',
  },
  {
    number: '04',
    title: 'Differential Analysis',
    description:
      'Python analysis examines relationships between correct and faulty ciphertexts.',
  },
]

const technologies = [
  {
    title: 'ATmega328P',
    description: 'Microcontroller executing AES-128 encryption',
  },
  {
    title: 'RP2040',
    description: 'Microcontroller used in the fault injection setup',
  },
  {
    title: 'C / C++',
    description: 'Embedded programming and target-side logic',
  },
  {
    title: 'Python',
    description: 'Ciphertext analysis and fault evaluation',
  },
  {
    title: 'AES-128',
    description: 'Cryptographic algorithm under investigation',
  },
  {
    title: 'Hardware Testing',
    description: 'Timing, measurements, and experiment validation',
  },
]

function Ciphertext({ value, changed = false }) {
  const bytes = value.split(' ')

  return (
    <div className="aes-cipher-grid">
      {bytes.map((byte, index) => (
        <span
          key={index}
          className={
            changed && index >= 14
              ? 'aes-byte aes-byte-changed'
              : 'aes-byte'
          }
        >
          {byte}
        </span>
      ))}
    </div>
  )
}

function FaultLab() {
  const [faultEnabled, setFaultEnabled] = useState(false)
  const [attempts, setAttempts] = useState(0)

  function runSimulation() {
    setFaultEnabled(true)
    setAttempts((count) => count + 1)
  }

  function resetSimulation() {
    setFaultEnabled(false)
    setAttempts(0)
  }

  return (
    <div className="aes-lab">
      <div className="aes-lab-header">
        <div className="aes-lab-title">
          <span className="aes-live-indicator" />
          HARDWARE SECURITY / EXPERIMENT CONSOLE
        </div>
        <span className="aes-lab-mode">SIMULATION</span>
      </div>

      <div className="aes-lab-body">
        <div className="aes-lab-hardware">
          <div className="aes-device">
            <span className="aes-device-label">
              INJECTION CONTROLLER
            </span>
            <div className="aes-chip">
              <span>RP2040</span>
              <small>FAULT CONTROLLER</small>
            </div>
            <span className="aes-device-status">
              {faultEnabled ? 'PULSE SIMULATED' : 'STANDBY'}
            </span>
          </div>

          <div className="aes-connection">
            <span className="aes-connection-line" />
            <span className="aes-connection-label">
              TIMING DISTURBANCE
            </span>
            <span className="aes-connection-line" />
          </div>

          <div className="aes-device">
            <span className="aes-device-label">
              ENCRYPTION TARGET
            </span>
            <div
              className={`aes-chip aes-target-chip ${
                faultEnabled ? 'aes-chip-faulted' : ''
              }`}
            >
              <span>ATmega328P</span>
              <small>AES-128 TARGET</small>
            </div>
            <span className="aes-device-status">
              {faultEnabled
                ? 'FAULT SCENARIO ACTIVE'
                : 'NORMAL EXECUTION'}
            </span>
          </div>
        </div>

        <div className="aes-output-grid">
          <div className="aes-output-panel">
            <div className="aes-output-heading">
              <span>CORRECT CIPHERTEXT</span>
              <span className="aes-good">REFERENCE</span>
            </div>
            <Ciphertext value={normalCipher} />
          </div>

          <div className="aes-output-panel">
            <div className="aes-output-heading">
              <span>SIMULATED OUTPUT</span>
              <span className={faultEnabled ? 'aes-bad' : 'aes-good'}>
                {faultEnabled ? 'ALTERED' : 'MATCH'}
              </span>
            </div>
            <Ciphertext
              value={faultEnabled ? faultyCipher : normalCipher}
              changed={faultEnabled}
            />
          </div>
        </div>

        <div className="aes-lab-result">
          <div>
            <span className="aes-result-label">EXPERIMENT STATUS</span>
            <strong>
              {faultEnabled
                ? 'Illustrative ciphertext difference detected'
                : 'Awaiting simulated fault injection'}
            </strong>
          </div>

          <div>
            <span className="aes-result-label">SIMULATED RUNS</span>
            <strong>{attempts}</strong>
          </div>
        </div>

        <div className="aes-lab-actions">
          <button
            type="button"
            className="aes-inject-button"
            onClick={runSimulation}
          >
            ⚡ Simulate Fault
          </button>

          <button
            type="button"
            className="aes-reset-button"
            onClick={resetSimulation}
          >
            Reset Experiment
          </button>
        </div>
      </div>

      <p className="aes-lab-disclaimer">
        Educational UI simulation. Ciphertext values are
        illustrative and are not outputs from the physical
        experiment. The animation does not perform encryption
        or hardware fault injection.
      </p>
    </div>
  )
}

export default function AESFaultInjection() {
  return (
    <main className="aes-page">
      <div className="aes-background-glow" aria-hidden="true" />

      <div className="aes-container">
        <Link to="/projects" className="aes-back">
          ← Back to Projects
        </Link>

        {/* HERO */}
        <section className="aes-hero">
          <div className="aes-eyebrow">
            PROJECT 05 / EMBEDDED SECURITY
          </div>

          <h1>
            Breaking <span>AES.</span>
          </h1>

          <h2>
            Fault Injection on an AES-Encrypted ATmega328P
          </h2>

          <p>
            An embedded security research project investigating
            how deliberate hardware faults can affect AES-128
            encryption and how differences between correct
            and faulty ciphertexts can be analyzed using Python.
          </p>

          <div className="aes-tags">
            {[
              'AES-128',
              'ATmega328P',
              'RP2040',
              'Python',
              'C / C++',
              'Cryptography',
              'Hardware Security',
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="aes-metrics">
            <div>
              <strong>1,500</strong>
              <span>CIPHERTEXT SAMPLES</span>
            </div>

            <div>
              <strong>128-bit</strong>
              <span>AES ENCRYPTION</span>
            </div>

            <div>
              <strong>RP2040</strong>
              <span>FAULT CONTROLLER</span>
            </div>
          </div>
        </section>

        {/* LAB */}
        <section className="aes-section">
          <div className="aes-section-heading">
            <span>01 / INTERACTIVE EXPERIMENT</span>
            <h2>
              Inside the <em>Fault Lab.</em>
            </h2>
            <p>
              Explore a simplified visualization of the
              relationship between a fault controller,
              an encryption target, and ciphertext analysis.
            </p>
          </div>

          <FaultLab />
        </section>

        {/* OVERVIEW */}
        <section className="aes-section">
          <div className="aes-section-heading">
            <span>02 / RESEARCH OVERVIEW</span>
            <h2>
              When Hardware <em>Meets Cryptography.</em>
            </h2>
          </div>

          <div className="aes-overview">
            <p>
              Cryptographic algorithms can be mathematically
              secure while still being exposed to weaknesses
              in their physical implementations. Hardware
              fault injection investigates how disturbances
              during execution can influence the results
              of cryptographic operations.
            </p>

            <p>
              This project used an ATmega328P as an AES-128
              encryption target and an RP2040-based fault
              injection setup. The resulting ciphertext
              samples were examined with Python-based
              differential fault analysis techniques.
            </p>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="aes-section">
          <div className="aes-section-heading">
            <span>03 / EXPERIMENT WORKFLOW</span>
            <h2>
              From Fault to <em>Analysis.</em>
            </h2>
          </div>

          <div className="aes-workflow">
            {stages.map((stage) => (
              <article key={stage.number}>
                <span className="aes-stage-number">
                  {stage.number}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="aes-section">
          <div className="aes-section-heading">
            <span>04 / SYSTEM ARCHITECTURE</span>
            <h2>
              A Two-Controller <em>Experiment.</em>
            </h2>
          </div>

          <div className="aes-architecture">
            <div className="aes-architecture-row">
              <div className="aes-architecture-node">
                <span>FAULT INJECTION</span>
                <strong>RP2040</strong>
                <p>Injection timing and fault control</p>
              </div>

              <div className="aes-architecture-arrow">→</div>

              <div className="aes-architecture-node">
                <span>ENCRYPTION TARGET</span>
                <strong>ATmega328P</strong>
                <p>AES-128 encryption execution</p>
              </div>
            </div>

            <div className="aes-architecture-down">↓</div>

            <div className="aes-architecture-node aes-architecture-wide">
              <span>EXPERIMENT OUTPUT</span>
              <strong>Ciphertext Dataset</strong>
              <p>
                Correct and fault-affected encryption outputs
              </p>
            </div>

            <div className="aes-architecture-down">↓</div>

            <div className="aes-architecture-node aes-architecture-wide">
              <span>SOFTWARE ANALYSIS</span>
              <strong>Python Differential Fault Analysis</strong>
              <p>
                Comparison of ciphertext differences and
                evaluation of fault effects
              </p>
            </div>
          </div>
        </section>

        {/* ENGINEERING */}
        <section className="aes-section">
          <div className="aes-section-heading">
            <span>05 / ENGINEERING FOCUS</span>
            <h2>
              Exploring Physical <em>Attack Surfaces.</em>
            </h2>
          </div>

          <div className="aes-engineering-grid">
            <article>
              <span>01</span>
              <h3>Embedded System Integration</h3>
              <p>
                Working with separate microcontrollers
                for fault control and cryptographic execution
                required coordinating embedded hardware
                and software components.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Fault Timing</h3>
              <p>
                Fault injection research depends on the
                relationship between an injected disturbance
                and the execution of the target operation.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Ciphertext Analysis</h3>
              <p>
                Python-based analysis provided a way to
                investigate differences between expected
                and fault-affected encryption outputs.
              </p>
            </article>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="aes-section">
          <div className="aes-section-heading">
            <span>06 / TECHNOLOGY STACK</span>
            <h2>
              Tools & <em>Technologies.</em>
            </h2>
          </div>

          <div className="aes-tech-grid">
            {technologies.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* OUTCOME */}
        <section className="aes-outcome">
          <span className="aes-eyebrow">
            07 / PROJECT OUTCOME
          </span>

          <h2>
            Security Beyond <em>Software.</em>
          </h2>

          <p>
            This project explored the intersection of
            embedded engineering and cryptographic security,
            combining an RP2040-based fault injection
            setup, an ATmega328P AES-128 target, and
            Python-based differential fault analysis.
            The work involved collecting approximately
            1,500 ciphertext samples for investigation.
          </p>
        </section>

        <div className="aes-bottom-nav">
          <Link to="/projects">← All Projects</Link>
          <Link to="/contact">Let's Connect ↗</Link>
        </div>
      </div>
    </main>
  )
}
