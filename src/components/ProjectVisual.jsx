
import React, { useState } from 'react'
import './ProjectVisual.css'

function FinancialVisual() {
  const [period, setPeriod] = useState('MONTH')
  const monthly = [36, 58, 43, 76, 51, 89, 64, 78]
  const weekly = [48, 35, 71, 53, 85, 62, 93, 68]
  const bars = period === 'MONTH' ? monthly : weekly

  return (
    <div className="pv-frame pv-finance">
      <div className="pv-topbar">
        <span className="pv-app-label">◈ FINANCE.OS</span>
        <span className="pv-status">● ANALYTICS</span>
      </div>

      <div className="pv-finance-body">
        <div className="pv-finance-header">
          <div>
            <span className="pv-muted">SPENDING ANALYTICS</span>
            <strong>Financial Overview</strong>
          </div>
          <div className="pv-period-controls">
            {['WEEK', 'MONTH'].map((value) => (
              <button
                key={value}
                type="button"
                className={period === value ? 'pv-active' : ''}
                onClick={() => setPeriod(value)}
                aria-pressed={period === value}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="pv-chart">
          <div className="pv-chart-grid" />
          {bars.map((height, index) => (
            <div className="pv-bar-track" key={index}>
              <div
                className="pv-bar"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>

        <div className="pv-finance-bottom">
          <span>TRANSACTION INSIGHTS</span>
          <span className="pv-accent-cyan">AI ENABLED ↗</span>
        </div>
      </div>
    </div>
  )
}

function SecurityVisual() {
  const [verified, setVerified] = useState(true)

  return (
    <div className="pv-frame pv-security">
      <div className="pv-topbar">
        <span className="pv-app-label">⌘ VERIFY.SYS</span>
        <span className="pv-status">SHA-256</span>
      </div>

      <div className="pv-security-body">
        <div className="pv-file-row">
          <div className="pv-file-icon">{"{}"}</div>
          <div>
            <strong>document.pdf</strong>
            <span className="pv-muted">FILE INTEGRITY CHECK</span>
          </div>
          <span className="pv-file-check">
            {verified ? '✓' : '!'}
          </span>
        </div>

        <div className="pv-hash-label">
          <span>SHA-256 FINGERPRINT</span>
          <span>256 BIT</span>
        </div>

        <div className="pv-hash">
          a3f9c28b...7d04e12c
        </div>

        <div className="pv-verification-row">
          <span
            className={
              verified
                ? 'pv-verify-success'
                : 'pv-verify-warning'
            }
          >
            {verified
              ? '● INTEGRITY VERIFIED'
              : '● MISMATCH DETECTED'}
          </span>

          <button
            type="button"
            onClick={() => setVerified((previous) => !previous)}
          >
            {verified ? 'SIMULATE MISMATCH' : 'RESET'}
          </button>
        </div>
      </div>
    </div>
  )
}

function VoyagerVisual() {
  const [mode, setMode] = useState('TELEMETRY')

  return (
    <div className="pv-frame pv-voyager">
      <div className="pv-topbar">
        <span className="pv-app-label">◎ VOYAGER / PRO</span>
        <span className="pv-status">● DEVICE UI</span>
      </div>

      <div className="pv-voyager-body">
        <div className="pv-voyager-tabs">
          {['TELEMETRY', 'TRACKING'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={mode === tab ? 'pv-active' : ''}
              onClick={() => setMode(tab)}
              aria-pressed={mode === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {mode === 'TELEMETRY' ? (
          <div className="pv-device-display">
            <div className="pv-suitcase">
              <div className="pv-suitcase-handle" />
              <div className="pv-suitcase-body">
                <span>V</span>
                <div className="pv-suitcase-lines" />
              </div>
              <div className="pv-suitcase-wheels">
                <i />
                <i />
              </div>
            </div>

            <div className="pv-device-info">
              <div>
                <span className="pv-muted">SENSORS</span>
                <strong>ESP32</strong>
              </div>
              <div>
                <span className="pv-muted">WEIGHT</span>
                <strong>HX711</strong>
              </div>
              <div>
                <span className="pv-muted">WIRELESS</span>
                <strong>BLE / Wi-Fi</strong>
              </div>
            </div>
          </div>
        ) : (
          <div className="pv-tracking-display">
            <div className="pv-map-grid" />
            <div className="pv-map-ring pv-map-ring-one" />
            <div className="pv-map-ring pv-map-ring-two" />
            <div className="pv-map-pin">⌖</div>
            <span>GPS / GEOFENCE SYSTEM</span>
          </div>
        )}

        <div className="pv-voyager-footer">
          <span>SWIFTUI COMPANION APP</span>
          <span className="pv-accent-cyan">ESP32 + GPS</span>
        </div>
      </div>
    </div>
  )
}

export default function ProjectVisual({ type }) {
  switch (type) {
    case 'finance':
      return <FinancialVisual />
    case 'security':
      return <SecurityVisual />
    case 'voyager':
      return <VoyagerVisual />
    default:
      return null
  }
}
