"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaBriefcase,
  FaBook,
  FaLaptopCode,
  FaTruck,
  FaWarehouse,
  FaShip,
  FaPlane,
} from "react-icons/fa"
import { GiMilitaryAmbulance, GiTank, GiRadarSweep, GiMechanicalArm } from "react-icons/gi"
import "../styles/Classi.css"

const Classi = () => {
  const [animateContent, setAnimateContent] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setAnimateContent(true), 300)
  }, [])

  return (
    <div className="classi-page">
      <Header />

      <main className="classi-main">
        <section className="classi-hero">
          <div className="classi-hero-overlay"></div>
          <div className="container">
            <h1 className="classi-hero-title">Classi Accademiche</h1>
            <p className="classi-hero-subtitle">Formazione d'eccellenza per i futuri leader militari</p>
          </div>
        </section>

        <section className="classi-intro">
          <div className="container">
            <div className={`classi-intro-content ${animateContent ? "animate" : ""}`}>
              <div className="classi-intro-icon">
                <FaGraduationCap />
              </div>
              <h2 className="section-title">Percorsi Formativi</h2>
              <p className="classi-intro-text">
                Il Sistema di Gestione Accademica Militare offre due percorsi formativi d'eccellenza, progettati per
                sviluppare competenze specialistiche in settori strategici per le forze armate moderne. Ogni classe è
                strutturata per fornire una formazione completa, combinando teoria avanzata, addestramento pratico e
                sviluppo della leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="classi-details">
          <div className="container">
            <div className="classi-grid">
              {/* Classe Ingegneria */}
              <div className={`classe-card ing-card ${animateContent ? "animate" : ""}`}>
                <div className="classe-header">
                  <div className="classe-icon">
                    <GiMechanicalArm />
                  </div>
                  <h3 className="classe-title">Classe Ingegneria (Ing)</h3>
                </div>
                <div className="classe-content">
                  <p className="classe-description">
                    La classe di Ingegneria forma specialisti tecnici in grado di progettare, sviluppare e mantenere
                    sistemi avanzati per le operazioni militari. Gli studenti acquisiscono competenze in ingegneria
                    meccanica, elettronica, informatica e delle telecomunicazioni con applicazioni specifiche in ambito
                    militare.
                  </p>

                  <div className="classe-features">
                    <h4 className="features-title">Aree di Specializzazione</h4>
                    <ul className="features-list">
                      <li>
                        <FaLaptopCode className="feature-icon" />
                        <span>Sistemi informatici e cybersecurity militare</span>
                      </li>
                      <li>
                        <GiRadarSweep className="feature-icon" />
                        <span>Telecomunicazioni e sistemi radar</span>
                      </li>
                      <li>
                        <GiTank className="feature-icon" />
                        <span>Ingegneria meccanica e veicoli militari</span>
                      </li>
                      <li>
                        <FaBook className="feature-icon" />
                        <span>Ricerca e sviluppo tecnologico</span>
                      </li>
                    </ul>
                  </div>

                  <div className="classe-stats">
                    <div className="stat-item">
                      <div className="stat-value">4 anni</div>
                      <div className="stat-label">Durata</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">85%</div>
                      <div className="stat-label">Tasso di impiego</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">120</div>
                      <div className="stat-label">Crediti formativi</div>
                    </div>
                  </div>

                  <div className="classe-career">
                    <h4 className="career-title">Sbocchi Professionali</h4>
                    <ul className="career-list">
                      <li>
                        <FaBriefcase className="career-icon" />
                        <span>Ufficiale tecnico nei reparti specializzati</span>
                      </li>
                      <li>
                        <FaChartLine className="career-icon" />
                        <span>Responsabile di progetti tecnologici militari</span>
                      </li>
                      <li>
                        <FaUsers className="career-icon" />
                        <span>Coordinatore di team tecnici operativi</span>
                      </li>
                    </ul>
                  </div>

                  <button className="classe-cta">Scopri il Programma Completo</button>
                </div>
              </div>

              {/* Classe Tramot */}
              <div className={`classe-card tramot-card ${animateContent ? "animate" : ""}`}>
                <div className="classe-header">
                  <div className="classe-icon">
                    <GiMilitaryAmbulance />
                  </div>
                  <h3 className="classe-title">Classe Trasporti e Mobilità (Tramot)</h3>
                </div>
                <div className="classe-content">
                  <p className="classe-description">
                    La classe Trasporti e Mobilità forma esperti nella gestione logistica e nei sistemi di trasporto
                    militare. Gli studenti sviluppano competenze nella pianificazione, coordinamento e ottimizzazione
                    delle operazioni logistiche, essenziali per il successo delle missioni militari in ogni scenario
                    operativo.
                  </p>

                  <div className="classe-features">
                    <h4 className="features-title">Aree di Specializzazione</h4>
                    <ul className="features-list">
                      <li>
                        <FaTruck className="feature-icon" />
                        <span>Logistica e trasporti terrestri</span>
                      </li>
                      <li>
                        <FaShip className="feature-icon" />
                        <span>Trasporti navali e operazioni marittime</span>
                      </li>
                      <li>
                        <FaPlane className="feature-icon" />
                        <span>Trasporti aerei e mobilità strategica</span>
                      </li>
                      <li>
                        <FaWarehouse className="feature-icon" />
                        <span>Gestione magazzini e catena di approvvigionamento</span>
                      </li>
                    </ul>
                  </div>

                  <div className="classe-stats">
                    <div className="stat-item">
                      <div className="stat-value">3 anni</div>
                      <div className="stat-label">Durata</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">90%</div>
                      <div className="stat-label">Tasso di impiego</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">100</div>
                      <div className="stat-label">Crediti formativi</div>
                    </div>
                  </div>

                  <div className="classe-career">
                    <h4 className="career-title">Sbocchi Professionali</h4>
                    <ul className="career-list">
                      <li>
                        <FaBriefcase className="career-icon" />
                        <span>Ufficiale logistico in operazioni nazionali e internazionali</span>
                      </li>
                      <li>
                        <FaChartLine className="career-icon" />
                        <span>Responsabile della pianificazione dei trasporti militari</span>
                      </li>
                      <li>
                        <FaUsers className="career-icon" />
                        <span>Coordinatore di operazioni logistiche complesse</span>
                      </li>
                    </ul>
                  </div>

                  <button className="classe-cta">Scopri il Programma Completo</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="classi-comparison">
          <div className="container">
            <h2 className="section-title">Confronto tra Classi</h2>
            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Caratteristiche</th>
                    <th>
                      <GiMechanicalArm className="table-icon" /> Ingegneria
                    </th>
                    <th>
                      <GiMilitaryAmbulance className="table-icon" /> Trasporti e Mobilità
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Focus principale</td>
                    <td>Sistemi tecnologici e sviluppo</td>
                    <td>Logistica e gestione dei trasporti</td>
                  </tr>
                  <tr>
                    <td>Durata del corso</td>
                    <td>4 anni</td>
                    <td>3 anni</td>
                  </tr>
                  <tr>
                    <td>Crediti formativi</td>
                    <td>120 CFU</td>
                    <td>100 CFU</td>
                  </tr>
                  <tr>
                    <td>Tirocinio pratico</td>
                    <td>800 ore</td>
                    <td>600 ore</td>
                  </tr>
                  <tr>
                    <td>Addestramento sul campo</td>
                    <td>Medio</td>
                    <td>Intensivo</td>
                  </tr>
                  <tr>
                    <td>Competenze tecniche</td>
                    <td>Avanzate</td>
                    <td>Intermedie</td>
                  </tr>
                  <tr>
                    <td>Competenze gestionali</td>
                    <td>Intermedie</td>
                    <td>Avanzate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="classi-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Pronto a iniziare il tuo percorso?</h2>
              <p>
                Scegli la classe più adatta alle tue aspirazioni e competenze. Entra a far parte dell'eccellenza
                militare.
              </p>
              <div className="cta-buttons">
                <button className="primary-button">Richiedi Informazioni</button>
                <button className="secondary-button">Calendario Accademico</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Classi
