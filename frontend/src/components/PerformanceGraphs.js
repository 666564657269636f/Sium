"use client"

import { Doughnut, Line, Bar } from "react-chartjs-2"
import { FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa"
import "../styles/PerformanceGraphs.css"

const PerformanceGraphs = ({ userData }) => {
  // Doughnut chart data for exams completed
  const examCompletionData = {
    labels: ["Completati", "Rimanenti"],
    datasets: [
      {
        data: [userData.completedExams, userData.totalExams - userData.completedExams],
        backgroundColor: ["#4b5320", "#d0d3c5"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  }

  // Line chart data for grade progression
  const gradeProgressionData = {
    labels: userData.examHistory.map((exam) => exam.date),
    datasets: [
      {
        label: "Voto Esame",
        data: userData.examHistory.map((exam) => exam.grade),
        borderColor: "#4b5320",
        backgroundColor: "rgba(75, 83, 32, 0.1)",
        tension: 0.4,
      },
      {
        label: "Media Progressiva",
        data: userData.examHistory.map((_, index) => {
          const gradesUpToNow = userData.examHistory.slice(0, index + 1).map((exam) => exam.grade)
          const sum = gradesUpToNow.reduce((acc, grade) => acc + grade, 0)
          return (sum / gradesUpToNow.length).toFixed(2)
        }),
        borderColor: "#2a3b4c",
        backgroundColor: "rgba(42, 59, 76, 0.1)",
        tension: 0.4,
      },
    ],
  }

  // Bar chart data for class ranking
  const classRankingData = {
    labels: ["Media Personale", "Media Classe", "Media Dipartimento"],
    datasets: [
      {
        label: "Confronto Medie",
        data: [userData.averageGrade, userData.classAverage, userData.departmentAverage],
        backgroundColor: ["#4b5320", "#2a3b4c", "#5d4a38"],
      },
    ],
  }

  // Common chart options
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
    <section className="performance-graphs">
      <h2 className="section-title">Performance Accademica</h2>

      <div className="graphs-grid">
        {/* Exam Completion Chart */}
        <div className="graph-card">
          <div className="graph-header">
            <FaChartPie className="graph-icon" />
            <h3 className="graph-title">Completamento Esami</h3>
          </div>
          <div className="graph-description">
            <p>
              Hai completato {userData.completedExams} esami su {userData.totalExams} totali (
              {((userData.completedExams / userData.totalExams) * 100).toFixed(0)}%).
            </p>
          </div>
          <div className="graph-container doughnut-container">
            <Doughnut data={examCompletionData} options={chartOptions} />
          </div>
        </div>

        {/* Grade Progression Chart */}
        <div className="graph-card">
          <div className="graph-header">
            <FaChartLine className="graph-icon" />
            <h3 className="graph-title">Andamento Voti</h3>
          </div>
          <div className="graph-description">
            <p>
              La tua media attuale è {userData.averageGrade.toFixed(2)}, media ponderata{" "}
              {userData.weightedAverage.toFixed(2)}.
            </p>
          </div>
          <div className="graph-container">
            <Line data={gradeProgressionData} options={chartOptions} />
          </div>
        </div>

        {/* Class Ranking Chart */}
        <div className="graph-card">
          <div className="graph-header">
            <FaChartBar className="graph-icon" />
            <h3 className="graph-title">Confronto con la Classe</h3>
          </div>
          <div className="graph-description">
            <p>
              La tua posizione nella classe: {userData.classRanking}° su {userData.totalClassmates}.
            </p>
          </div>
          <div className="graph-container">
            <Bar data={classRankingData} options={chartOptions} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceGraphs
