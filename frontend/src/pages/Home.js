"use client"

import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import FeatureCard from "../components/FeatureCard"
import StatisticBox from "../components/StatisticBox"
import { FaUsers, FaChartLine, FaMedal, FaClipboardList } from "react-icons/fa"
import { GiRank3 } from "react-icons/gi"
import "../styles/Home.css"

const Home = () => {
  const [animateFeatures, setAnimateFeatures] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setAnimateFeatures(true), 300)
    setTimeout(() => setAnimateStats(true), 800)
  }, [])

  return (
    <div className="home-container">
      <Header />

      <main>
        <HeroSection />

        <section className="mission-section">
          <div className="container">
            <h2 className="section-title">La Nostra Missione</h2>
            <div className="mission-content">
              <div className="mission-text">
                <p>
                  Il Sistema di Gestione Accademica Militare è stato progettato per ottimizzare l'addestramento e la
                  formazione del personale militare attraverso un monitoraggio preciso e dettagliato del progresso
                  accademico.
                </p>
                <p>
                  La nostra piattaforma permette ai comandanti e agli istruttori di gestire efficacemente le classi,
                  monitorare le prestazioni individuali e collettive, e garantire che gli standard di eccellenza
                  militare siano sempre rispettati.
                </p>
              </div>
              <div className="mission-image">
                <GiRank3 size={120} className="mission-icon pulse" />
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Funzionalità Principali</h2>
            <div className={`features-grid ${animateFeatures ? "animate" : ""}`}>
              <FeatureCard
                icon={<FaUsers />}
                title="Gestione Classi"
                description="Organizza il personale in classi strutturate per un addestramento efficiente e mirato."
              />
              <FeatureCard
                icon={<FaChartLine />}
                title="Statistiche Accademiche"
                description="Visualizza e analizza le prestazioni accademiche con grafici dettagliati e report completi."
              />
              <FeatureCard
                icon={<FaMedal />}
                title="Monitoraggio Avanzamento"
                description="Tieni traccia del progresso individuale e di gruppo attraverso il percorso formativo."
              />
              <FeatureCard
                icon={<FaClipboardList />}
                title="Valutazioni e Test"
                description="Gestisci valutazioni, esami e test di qualificazione in un unico sistema integrato."
              />
            </div>
          </div>
        </section>

        <section className="statistics-section">
          <div className="container">
            <h2 className="section-title">Impatto del Sistema</h2>
            <div className={`statistics-grid ${animateStats ? "animate" : ""}`}>
              <StatisticBox value="30%" label="Miglioramento nell'efficienza dell'addestramento" />
              <StatisticBox value="25%" label="Aumento del tasso di completamento dei corsi" />
              <StatisticBox value="40%" label="Riduzione del tempo di gestione amministrativa" />
              <StatisticBox value="95%" label="Soddisfazione degli istruttori" />
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Pronto per migliorare la gestione accademica?</h2>
              <p>Accedi al sistema per iniziare a gestire le tue classi e monitorare i progressi.</p>
              <button className="cta-button">Accedi al Sistema</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
