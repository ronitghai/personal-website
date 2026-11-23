
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/project-case-study.css'
import '../styles/altron-case-study.css'

const examples = [
  {
    label: 'Ask Gemini',
    command: 'Explain what machine learning is',
    response:
      'Machine learning is a branch of artificial intelligence that enables systems to learn patterns from data and make predictions without being explicitly programmed for every scenario.',
    category: 'GEMINI AI',
  },
  {
    label: 'Create a Task',
    command: 'Add finish project report to my tasks',
    response:
      'Task created successfully.\n\nTask: Finish project report\nStatus: Pending\nStorage: SQLite',
    category: 'TASK MANAGER',
  },
  {
    label: 'Save a Note',
    command: 'Remember that my meeting is at 3 PM',
    response:
      'Note saved successfully.\n\nContent: My meeting is at 3 PM\nStorage: SQLite',
    category: 'NOTES',
  },
  {
    label: 'Google Search',
    command: 'Search Google for React tutorials',
    response:
      'Search command recognized.\n\nQuery: React tutorials\nAction: Open Google Search results',
    category: 'WEB SEARCH',
  },
]

function getResponse(command) {
  const input = command.toLowerCase().trim()

  if (!input) {
    return {
      response: 'Enter a command to begin.',
      category: 'SYSTEM',
    }
  }

  if (
    input.includes('task') ||
    input.includes('todo') ||
    input.includes('to-do')
  ) {
    return {
      response:
        'Task management intent detected.\n\nIn the original application, task information was managed through SQLite.\n\nThis portfolio demo does not modify a real database.',
      category: 'TASK MANAGER',
    }
  }

  if (
    input.includes('note') ||
    input.includes('remember')
  ) {
    return {
      response:
        'Note-taking intent detected.\n\nThe original assistant supported note management using SQLite.\n\nThis demonstration does not save information permanently.',
      category: 'NOTES',
    }
  }

  if (
    input.includes('search') ||
    input.includes('google')
  ) {
    return {
      response:
        'Web search intent detected.\n\nThe original application could trigger Google searches.\n\nTry the Google Search example above to see a sample command.',
      category: 'WEB SEARCH',
    }
  }

  if (
    input.includes('voice') ||
    input.includes('speak') ||
    input.includes('audio')
  ) {
    return {
      response:
        'Voice interaction was implemented as part of A.L.T.R.O.N.\n\nAudio functionality encountered platform limitations when running inside Replit.\n\nThis web demonstration uses text responses.',
      category: 'VOICE SYSTEM',
    }
  }

  return {
    response:
      'Gemini-style request detected.\n\nThe original A.L.T.R.O.N. application sent typed questions to Google Gemini and received AI-generated answers.\n\nThis portfolio simulation does not make live API requests. Select "Ask Gemini" to view an example response.',
    category: 'GEMINI AI',
  }
}

function AltronConsole() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'A.L.T.R.O.N. initialized.\nNLP engine ready.\nCommand interface active.\nSelect an example or enter a command.',
      category: 'SYSTEM',
    },
  ])

  function execute(command, preset = null) {
    const value = command.trim()
    if (!value) return

    const result = preset || getResponse(value)

    setHistory((previous) => [
      ...previous,
      {
        type: 'user',
        text: value,
      },
      {
        type: 'assistant',
        text: result.response,
        category: result.category,
      },
    ])

    setInput('')
  }

  return (
    <div className="altron-console">
      <div className="altron-console-header">
        <div className="altron-window-controls">
          <span />
          <span />
          <span />
        </div>

        <div className="altron-console-title">
          <span className="altron-console-symbol">◈</span>
          ALTRON / ASSISTANT CONSOLE
        </div>

        <div className="altron-console-status">
          <span className="altron-status-dot" />
          DEMO ONLINE
        </div>
      </div>

      <div className="altron-console-body">
        <div className="altron-console-intro">
          <span>ALTRON AI SYSTEM</span>
          <strong>How can I assist you?</strong>
          <p>
            Explore sample commands from the original
            Python assistant.
          </p>
        </div>

        <div className="altron-example-grid">
          {examples.map((example) => (
            <button
              key={example.label}
              type="button"
              className="altron-example-button"
              onClick={() => execute(example.command, example)}
            >
              <span>{example.label}</span>
              <span>↗</span>
            </button>
          ))}
        </div>

        <div
          className="altron-console-history"
          role="log"
          aria-live="polite"
        >
          {history.map((message, index) => (
            <div
              key={index}
              className={`altron-message altron-message-${message.type}`}
            >
              <div className="altron-message-label">
                {message.type === 'user'
                  ? 'USER / INPUT'
                  : `ALTRON / ${message.category}`}
              </div>

              <div className="altron-message-content">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form
          className="altron-input-form"
          onSubmit={(event) => {
            event.preventDefault()
            execute(input)
          }}
        >
          <span className="altron-input-prefix">❯</span>

          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a command..."
            aria-label="Enter an assistant command"
          />

          <button type="submit" disabled={!input.trim()}>
            SEND ↗
          </button>
        </form>

        <div className="altron-console-footer">
          <span>SIMULATED INTERFACE</span>

          <button
            type="button"
            onClick={() => {
              setHistory([
                {
                  type: 'system',
                  text: 'Console reset. Ready for commands.',
                  category: 'SYSTEM',
                },
              ])
              setInput('')
            }}
          >
            CLEAR CONSOLE
          </button>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    number: '01',
    title: 'Gemini-Powered Intelligence',
    description:
      'Integrated Google Gemini to process typed questions and generate natural-language responses through an AI-powered assistant interface.',
  },
  {
    number: '02',
    title: 'Natural Language Processing',
    description:
      'Used SpaCy to support language processing and command interpretation, connecting user requests with assistant functionality.',
  },
  {
    number: '03',
    title: 'Task & Note Management',
    description:
      'Built productivity functionality for managing tasks, reminders, and notes with SQLite-backed storage.',
  },
  {
    number: '04',
    title: 'Google Search Integration',
    description:
      'Supported search commands that could initiate Google searches from the assistant.',
  },
  {
    number: '05',
    title: 'Voice Interaction',
    description:
      'Implemented voice interaction functionality, including text-to-speech work using gTTS. Audio operation was constrained by Replit environment support.',
  },
  {
    number: '06',
    title: 'Python User Interface',
    description:
      'Developed the assistant interface with Python and Tkinter, bringing AI responses and productivity tools into one application.',
  },
]

const stack = [
  {
    name: 'Python',
    role: 'Application logic and orchestration',
  },
  {
    name: 'Google Gemini',
    role: 'AI-generated conversational responses',
  },
  {
    name: 'SpaCy',
    role: 'Natural language processing',
  },
  {
    name: 'SQLite',
    role: 'Tasks, reminders, and notes',
  },
  {
    name: 'Tkinter',
    role: 'Application interface',
  },
  {
    name: 'gTTS',
    role: 'Text-to-speech implementation',
  },
]

export default function AltronAI() {
  return (
    <main className="altron-page">
      <div className="altron-page-glow" aria-hidden="true" />

      <div className="altron-container">
        <Link to="/projects" className="altron-back">
          ← Back to Projects
        </Link>

        {/* HERO */}
        <section className="altron-hero">
          <div className="altron-eyebrow">
            PROJECT 04 / ARTIFICIAL INTELLIGENCE
          </div>

          <h1>
            A.L.T.R.O.N<span>.</span>
          </h1>

          <div className="altron-hero-subtitle">
            AI-Powered Personal Assistant
          </div>

          <p className="altron-hero-description">
            A Python-based personal assistant combining
            Google Gemini, natural language processing,
            productivity management, and voice interaction
            into a unified application.
          </p>

          <div className="altron-tech-tags">
            {[
              'Python',
              'Gemini API',
              'SpaCy',
              'SQLite',
              'Tkinter',
              'gTTS',
              'NLP',
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="altron-hero-stats">
            <div>
              <strong>Gemini</strong>
              <span>AI INTEGRATION</span>
            </div>

            <div>
              <strong>SpaCy</strong>
              <span>NLP ENGINE</span>
            </div>

            <div>
              <strong>SQLite</strong>
              <span>LOCAL DATA STORAGE</span>
            </div>
          </div>
        </section>

        {/* DEMO */}
        <section className="altron-section">
          <div className="altron-section-heading">
            <span>01 / INTERACTIVE SHOWCASE</span>

            <h2>
              Meet Your <em>Assistant.</em>
            </h2>

            <p>
              Explore an interactive recreation of A.L.T.R.O.N.'s
              command-based experience.
            </p>
          </div>

          <AltronConsole />

          <p className="altron-demo-disclaimer">
            Portfolio simulation with illustrative responses.
            The original Python application used a working
            Google Gemini integration; this demo does not
            send requests to Gemini or persist data.
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="altron-section">
          <div className="altron-section-heading">
            <span>02 / PROJECT OVERVIEW</span>

            <h2>
              One Assistant. <em>Multiple Capabilities.</em>
            </h2>
          </div>

          <div className="altron-overview">
            <p>
              A.L.T.R.O.N. was developed to bring everyday
              productivity tools and AI-powered conversation
              into a single Python application.
            </p>

            <p>
              Rather than requiring users to navigate
              separate applications for notes, reminders,
              information retrieval, and general questions,
              the assistant provided a centralized
              command-driven experience.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="altron-section">
          <div className="altron-section-heading">
            <span>03 / CORE CAPABILITIES</span>

            <h2>
              Designed to <em>Assist.</em>
            </h2>
          </div>

          <div className="altron-features">
            {features.map((feature) => (
              <article
                className="altron-feature-card"
                key={feature.number}
              >
                <div className="altron-feature-number">
                  {feature.number}
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="altron-section">
          <div className="altron-section-heading">
            <span>04 / SYSTEM ARCHITECTURE</span>

            <h2>
              Inside the <em>Intelligence.</em>
            </h2>

            <p>
              A conceptual overview of the application's
              major technologies and responsibilities.
            </p>
          </div>

          <div className="altron-architecture">
            <div className="altron-architecture-node altron-architecture-main">
              <span>USER INTERFACE</span>
              <strong>Python + Tkinter</strong>
              <p>Typed commands and assistant interaction</p>
            </div>

            <div className="altron-architecture-arrow">↓</div>

            <div className="altron-architecture-node altron-architecture-main">
              <span>APPLICATION LAYER</span>
              <strong>Python + SpaCy</strong>
              <p>Command processing and intent interpretation</p>
            </div>

            <div className="altron-architecture-arrow">↓</div>

            <div className="altron-architecture-services">
              <div className="altron-architecture-node">
                <span>AI RESPONSES</span>
                <strong>Google Gemini</strong>
                <p>Natural-language answers</p>
              </div>

              <div className="altron-architecture-node">
                <span>PRODUCTIVITY DATA</span>
                <strong>SQLite</strong>
                <p>Tasks, notes, and reminders</p>
              </div>

              <div className="altron-architecture-node">
                <span>EXTERNAL ACTIONS</span>
                <strong>Google Search</strong>
                <p>Search commands</p>
              </div>

              <div className="altron-architecture-node">
                <span>VOICE FUNCTIONALITY</span>
                <strong>Audio + gTTS</strong>
                <p>Implemented voice features with runtime limitations</p>
              </div>
            </div>
          </div>
        </section>

        {/* ENGINEERING CHALLENGES */}
        <section className="altron-section">
          <div className="altron-section-heading">
            <span>05 / ENGINEERING CHALLENGES</span>

            <h2>
              Beyond the <em>Prompt.</em>
            </h2>
          </div>

          <div className="altron-challenges">
            <article>
              <div className="altron-challenge-index">01</div>
              <h3>Integrating AI with Application Logic</h3>
              <p>
                The assistant combined Gemini-generated
                responses with application-specific commands,
                allowing conversational AI and productivity
                features to coexist in one Python application.
              </p>
            </article>

            <article>
              <div className="altron-challenge-index">02</div>
              <h3>Voice Functionality in Replit</h3>
              <p>
                Voice interaction was implemented, but
                Replit's audio environment prevented the
                functionality from operating as intended
                in that deployment environment.
                The text-based Gemini integration worked.
              </p>
            </article>

            <article>
              <div className="altron-challenge-index">03</div>
              <h3>Managing Persistent Information</h3>
              <p>
                SQLite supported structured storage for
                assistant-managed information, including
                tasks, reminders, and notes.
              </p>
            </article>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="altron-section">
          <div className="altron-section-heading">
            <span>06 / TECHNOLOGY STACK</span>

            <h2>
              Tools Behind <em>A.L.T.R.O.N.</em>
            </h2>
          </div>

          <div className="altron-stack-grid">
            {stack.map((item) => (
              <div className="altron-stack-card" key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOME */}
        <section className="altron-outcome">
          <div className="altron-eyebrow">
            07 / PROJECT OUTCOME
          </div>

          <h2>
            Building an <em>Intelligent Assistant.</em>
          </h2>

          <p>
            A.L.T.R.O.N. brought together generative AI,
            NLP, application development, and persistent
            storage in a unified personal assistant.
            The project demonstrated working Gemini-powered
            text interactions while also exploring voice
            functionality and the practical limitations
            of its execution environment.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="altron-bottom-nav">
          <Link to="/projects">
            ← All Projects
          </Link>

          <Link to="/contact">
            Let's Connect ↗
          </Link>
        </div>
      </div>
    </main>
  )
}
