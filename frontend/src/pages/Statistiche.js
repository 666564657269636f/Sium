"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js"
import { Pie, Bar, Line, Radar } from "react-chartjs-2"
import {
  FaChartPie,
  FaChartBar,
  FaChartLine,
  FaUsers,
  FaGraduationCap,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa"
import "../styles/Statistiche.css"

// Registra i componenti di Chart.js
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
)

const Statistiche = () => {
  const [animateContent, setAnimateContent] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setAnimateContent(true), 300)
  }, [])

  // Dati per il grafico a torta - Distribuzione Studenti
  const pieData = {
    labels: ["Ingegneria", "Trasporti e Mobilità"],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["#4b5320", "#2a3b4c"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  }

  // Dati per il grafico a barre - Tasso di Completamento
  const barData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Prima dell'implementazione",
        data: [65, 68, 70, 72, 75],
        backgroundColor: "rgba(91, 92, 81, 0.7)",
      },
      {
        label: "Dopo l'implementazione",
        data: [65, 75, 82, 88, 92],
        backgroundColor: "rgba(75, 83, 32, 0.7)",
      },
    ],
  }

  // Dati per il grafico a linee - Efficienza Amministrativa
  const lineData = {
    labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    datasets: [
      {
        label: "Prima dell'implementazione",
        data: [30, 35, 25, 40, 45, 40, 50, 45, 55, 50, 60, 55],
        borderColor: "rgba(91, 92, 81, 0.8)",
        backgroundColor: "rgba(91, 92, 81, 0.1)",
        tension: 0.4,
      },
      {
        label: "Dopo l'implementazione",
        data: [30, 45, 55, 65, 70, 75, 80, 85, 85, 90, 92, 95],
        borderColor: "rgba(75, 83, 32, 0.8)",
        backgroundColor: "rgba(75, 83, 32, 0.1)",
        tension: 0.4,
      },
    ],
  }

  // Dati per il grafico radar - Competenze Sviluppate
  const radarData = {
    labels: [
      "Leadership",
      "Competenze Tecniche",
      "Lavoro di Squadra",
      "Disciplina",
      "Problem Solving",
      "Comunicazione",
    ],
    datasets: [
      {
        label: "Prima dell'implementazione",
        data: [65, 70, 60, 80, 55, 50],
        backgroundColor: "rgba(91, 92, 81, 0.2)",
        borderColor: "rgba(91, 92, 81, 0.8)",
        pointBackgroundColor: "rgba(91, 92, 81, 1)",
      },
      {
        label: "Dopo l'implementazione",
        data: [85, 90, 85, 95, 80, 75],
        backgroundColor: "rgba(75, 83, 32, 0.2)",
        borderColor: "rgba(75, 83, 32, 0.8)",
        pointBackgroundColor: "rgba(75, 83, 32, 1)",
      },
    ],
  }

  // Dati per il grafico a barre orizzontali - Soddisfazione
  const horizontalBarData = {
    labels: ["Studenti", "Istruttori", "Amministrazione", "Comando"],
    datasets: [
      {
        label: "Prima dell'implementazione",
        data: [60, 65, 55, 70],
        backgroundColor: "rgba(91, 92, 81, 0.7)",
      },
      {
        label: "Dopo l'implementazione",
        data: [85, 90, 80, 95],
        backgroundColor: "rgba(75, 83, 32, 0.7)",
      },
    ],
  }

  // Opzioni comuni per i grafici
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "'Roboto', sans-serif",
            size: 12,
          },
          color: "#333",
        },
      },
    },
  }

  return (
    <div className="statistiche-page">
      <Header />

      <main className="statistiche-main">
        <section className="statistiche-hero">
          <div className="statistiche-hero-overlay"></div>
          <div className="container">
            <h1 className="statistiche-hero-title">Statistiche e Analisi</h1>
            <p className="statistiche-hero-subtitle">
              Misurazione dell'impatto del Sistema di Gestione Accademica Militare
            </p>
          </div>
        </section>

        <section className="statistiche-intro">
          <div className="container">
            <div className={`statistiche-intro-content ${animateContent ? "animate" : ""}`}>
              <div className="statistiche-intro-icon">
                <FaChartLine />
              </div>
              <h2 className="section-title">Impatto del Sistema</h2>
              <p className="statistiche-intro-text">
                L'implementazione del Sistema di Gestione Accademica Militare ha portato a significativi miglioramenti
                in vari aspetti della formazione e dell'amministrazione. I dati raccolti mostrano un chiaro progresso in
                termini di efficienza, completamento dei corsi e sviluppo delle competenze degli studenti.
              </p>
            </div>
          </div>
        </section>

        <section className="statistiche-charts">
          <div className="container">
            <div className="charts-grid">
              {/* Grafico a torta */}
              <div className={`chart-card ${animateContent ? "animate" : ""}`}>
                <div className="chart-header">
                  <FaChartPie className="chart-icon" />
                  <h3 className="chart-title">Distribuzione Studenti per Classe</h3>
                </div>
                <div className="chart-description">
                  <p>
                    Rappresentazione della distribuzione attuale degli studenti tra le due classi principali
                    dell'accademia. La classe di Ingegneria attrae la maggioranza degli studenti grazie al focus sulle
                    tecnologie avanzate.
                  </p>
                </div>
                <div className="chart-container pie-chart-container">
                  <Pie data={pieData} options={chartOptions} />
                </div>
              </div>

              {/* Grafico a barre */}
              <div className={`chart-card ${animateContent ? "animate" : ""}`}>
                <div className="chart-header">
                  <FaChartBar className="chart-icon" />
                  <h3 className="chart-title">Tasso di Completamento dei Corsi</h3>
                </div>
                <div className="chart-description">
                  <p>
                    Confronto del tasso di completamento dei corsi prima e dopo l'implementazione del sistema. Si nota
                    un incremento significativo a partire dal 2021, con un miglioramento del 17% nell'ultimo anno.
                  </p>
                </div>
                <div className="chart-container">
                  <Bar data={barData} options={chartOptions} />
                </div>
              </div>

              {/* Grafico a linee */}
              <div className={`chart-card ${animateContent ? "animate" : ""}`}>
                <div className="chart-header">
                  <FaChartLine className="chart-icon" />
                  <h3 className="chart-title">Efficienza Amministrativa</h3>
                </div>
                <div className="chart-description">
                  <p>
                    Andamento dell'efficienza amministrativa misurata su base mensile. L'implementazione del sistema ha
                    portato a un miglioramento costante, con un picco di efficienza del 95% negli ultimi mesi.
                  </p>
                </div>
                <div className="chart-container">
                  <Line data={lineData} options={chartOptions} />
                </div>
              </div>

              {/* Grafico radar */}
              <div className={`chart-card ${animateContent ? "animate" : ""}`}>
                <div className="chart-header">
                  <FaUsers className="chart-icon" />
                  <h3 className="chart-title">Competenze Sviluppate</h3>
                </div>
                <div className="chart-description">
                  <p>
                    Confronto delle competenze sviluppate dagli studenti prima e dopo l'implementazione del sistema. Si
                    evidenzia un miglioramento in tutte le aree, con particolare enfasi su leadership e competenze
                    tecniche.
                  </p>
                </div>
                <div className="chart-container radar-chart-container">
                  <Radar data={radarData} options={chartOptions} />
                </div>
              </div>

              {/* Grafico a barre orizzontali */}
              <div className={`chart-card full-width ${animateContent ? "animate" : ""}`}>
                <div className="chart-header">
                  <FaClipboardCheck className="chart-icon" />
                  <h3 className="chart-title">Livello di Soddisfazione</h3>
                </div>
                <div className="chart-description">
                  <p>
                    Confronto del livello di soddisfazione tra i vari stakeholder prima e dopo l'implementazione del
                    sistema. Il miglioramento più significativo si registra tra gli istruttori e il comando.
                  </p>
                </div>
                <div className="chart-container">
                  <Bar
                    data={horizontalBarData}
                    options={{
                      ...chartOptions,
                      indexAxis: "y",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="statistiche-highlights">
          <div className="container">
            <h2 className="section-title">Risultati Chiave</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaGraduationCap />
                </div>
                <div className="highlight-value">+17%</div>
                <div className="highlight-label">Tasso di completamento</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaClock />
                </div>
                <div className="highlight-value">-40%</div>
                <div className="highlight-label">Tempo amministrativo</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaUsers />
                </div>
                <div className="highlight-value">+25%</div>
                <div className="highlight-label">Sviluppo competenze</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaClipboardCheck />
                </div>
                <div className="highlight-value">+30%</div>
                <div className="highlight-label">Soddisfazione generale</div>
              </div>
            </div>
          </div>
        </section>

        <section className="statistiche-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Vuoi approfondire i dati?</h2>
              <p>Accedi al sistema per visualizzare statistiche dettagliate e report personalizzati.</p>
              <div className="cta-buttons">
                <button className="primary-button">Accedi al Sistema</button>
                <button className="secondary-button">Richiedi Report Completo</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Statistiche
