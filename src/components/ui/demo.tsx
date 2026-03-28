import React from 'react'
import CybercoreBackground from '@/components/ui/cybercore-section-hero'

const App: React.FC = () => (
  <>
    <CybercoreBackground beamCount={70} />

    <div className="content-wrapper">
      <header className="main-header">
        <div className="logo">CYBERCORE</div>
        <nav>
          <a href="#">Protocols</a>
          <a href="#">Network</a>
          <a href="#">Developers</a>
          <a href="#">Connect</a>
        </nav>
      </header>

      <main className="hero-section">
        <h1>Enter the Grid</h1>
        <p>
          Experience the next evolution of decentralized infrastructure, where data
          flows with unparalleled speed and security.
        </p>
        <button className="cta-button">Explore the Network</button>
      </main>
    </div>
  </>
)

export default App
