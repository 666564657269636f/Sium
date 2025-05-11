"use client"

import { useState } from "react"
import { FaSearch, FaUsers } from "react-icons/fa"
import "../styles/ClassmatesList.css"

const ClassmatesList = ({ classmates, onClassmateClick }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClassmates = classmates.filter(
    (classmate) =>
      classmate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classmate.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classmate.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="classmates-section">
      <div className="section-header">
        <h2 className="section-title">
          <FaUsers className="section-icon" /> Compagni di Corso
        </h2>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Cerca compagno..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {filteredClassmates.length === 0 ? (
        <div className="no-results">
          <p>Nessun compagno trovato con i criteri di ricerca specificati.</p>
        </div>
      ) : (
        <div className="classmates-grid">
          {filteredClassmates.map((classmate) => (
            <div
              key={classmate.username}
              className="classmate-card"
              onClick={() => onClassmateClick(classmate.username)}
            >
              <div className="classmate-avatar">
                <img
                  src={classmate.profilePicture || "/placeholder.svg"}
                  alt={`${classmate.name} ${classmate.surname}`}
                />
              </div>
              <div className="classmate-info">
                <h3 className="classmate-name">
                  {classmate.name} {classmate.surname}
                </h3>
                <p className="classmate-username">@{classmate.username}</p>
                <p className="classmate-course">{classmate.course}</p>
                <div className="classmate-stats">
                  <div className="stat">
                    <span className="stat-value">{classmate.completedExams}</span>
                    <span className="stat-label">Esami</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{classmate.averageGrade.toFixed(1)}</span>
                    <span className="stat-label">Media</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ClassmatesList
