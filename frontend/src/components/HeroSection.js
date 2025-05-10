"use client"

import { useEffect, useState } from "react"
import { GiMilitaryAmbulance, GiRank3, GiMilitaryFort } from "react-icons/gi"
import "../styles/HeroSection.css"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <div className="hero-icons">
          <GiRank3 className="hero-icon icon-left" />
          <GiMilitaryFort className="hero-icon icon-center" />
          <GiMilitaryAmbulance className="hero-icon icon-right" />
        </div>
        <h1 className="hero-title">Sistema di Gestione Accademica Militare</h1>
        <p className="hero-subtitle">Eccellenza, Disciplina, Progresso</p>
        <div className="hero-description">
          <p>
            Una piattaforma completa per la gestione delle classi militari, il monitoraggio delle statistiche
            accademiche e la valutazione dell'avanzamento del personale.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="primary-button">Esplora il Sistema</button>
          <button className="secondary-button">Scopri di Più</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
