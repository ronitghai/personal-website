
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        background: '#080811',
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <p
          style={{
            color: '#67e8f9',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
          }}
        >
          ERROR / 404
        </p>

        <h1
          style={{
            margin: '18px 0',
            color: '#f5f3ff',
            fontSize: 'clamp(55px, 9vw, 100px)',
            fontWeight: 800,
            letterSpacing: '-4px',
          }}
        >
          Lost in
          <br />
          <span style={{ color: '#a78bfa' }}>
            Cyberspace?
          </span>
        </h1>

        <p
          style={{
            margin: '0 auto 30px',
            color: '#a4a4bb',
            fontSize: '15px',
            lineHeight: 1.8,
          }}
        >
          The page you're looking for doesn't exist
          or may have moved. Let's get you back
          to something interesting.
        </p>

        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 24px',
            borderRadius: '9px',
            background: '#a78bfa',
            color: '#080811',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Back to Homepage ↗
        </Link>
      </div>
    </div>
  )
}
