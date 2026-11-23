
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Ronit Ghai'
const SITE_URL =
  'https://ronitghai.github.io/personal-website/'

const routeMetadata = {
  '/': {
    title: 'Ronit Ghai | Software Engineer',
    description:
      'Explore the portfolio of Ronit Ghai, a software engineer working across full-stack development, AI, cloud infrastructure, and embedded systems.',
  },

  '/projects': {
    title: 'Projects | Ronit Ghai',
    description:
      'Explore software engineering projects involving artificial intelligence, cloud applications, full-stack development, and embedded systems.',
  },

  '/experience': {
    title: 'Experience | Ronit Ghai',
    description:
      'Explore the professional experience, engineering background, and education of software engineer Ronit Ghai.',
  },

  '/certifications': {
    title: 'Certifications | Ronit Ghai',
    description:
      'Explore certifications and professional training in artificial intelligence, cloud architecture, and software development.',
  },

  '/contact': {
    title: 'Contact | Ronit Ghai',
    description:
      'Connect with Ronit Ghai to discuss software engineering opportunities, technical collaborations, and projects.',
  },

  '/projects/smart-financial-coach': {
    title: 'Smart Financial Coach | Ronit Ghai',
    description:
      'An AI-powered personal finance application built with React, FastAPI, Python, and SQLite.',
  },

  '/projects/file-integrity-verification': {
    title: 'File Integrity Verification | Ronit Ghai',
    description:
      'A cloud-based file integrity verification system using SHA-256, Azure Functions, Blob Storage, and FastAPI.',
  },

  '/projects/voyager-pro': {
    title: 'Voyager Pro Smart Suitcase | Ronit Ghai',
    description:
      'An IoT smart suitcase project combining ESP32, weight sensors, GPS tracking, BLE, and a SwiftUI mobile application.',
  },

  '/projects/altron-ai-assistant': {
    title: 'A.L.T.R.O.N. AI Assistant | Ronit Ghai',
    description:
      'A Python-based AI assistant project using natural language processing, SQLite, and Gemini integration.',
  },

  '/projects/aes-fault-injection': {
    title: 'AES Fault Injection | Ronit Ghai',
    description:
      'A hardware security research project exploring fault injection against AES-128 on an ATmega328P microcontroller.',
  },
}

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

export default function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = routeMetadata[pathname] || {
      title: `Page Not Found | ${SITE_NAME}`,
      description:
        'Explore software engineering projects, experience, and certifications by Ronit Ghai.',
    }

    document.title = metadata.title

    setMeta(
      'meta[name="description"]',
      'content',
      metadata.description
    )

    setMeta(
      'meta[property="og:title"]',
      'content',
      metadata.title
    )

    setMeta(
      'meta[property="og:description"]',
      'content',
      metadata.description
    )

    setMeta(
      'meta[name="twitter:title"]',
      'content',
      metadata.title
    )

    setMeta(
      'meta[name="twitter:description"]',
      'content',
      metadata.description
    )

    const pageUrl =
      `${SITE_URL}#${pathname}`

    setMeta(
      'meta[property="og:url"]',
      'content',
      pageUrl
    )

    const canonical = document.querySelector(
      'link[rel="canonical"]'
    )

    if (canonical) {
      canonical.setAttribute('href', pageUrl)
    }

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}
