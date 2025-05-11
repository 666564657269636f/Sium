"use client"

import { FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBuilding } from "react-icons/fa"
import "../styles/ProfileSection.css"

const ProfileSection = ({ userData, onEditClick }) => {
  return (
    <section className="profile-section">
      <div className="section-header">
        <h2 className="section-title">Informazioni Personali</h2>
        <button className="edit-profile-btn" onClick={onEditClick}>
          <FaEdit /> Modifica Profilo
        </button>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={userData.profilePicture || "/placeholder.svg"} alt={`${userData.name} ${userData.surname}`} />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">
              {userData.name} {userData.surname}
            </h2>
            <p className="profile-username">@{userData.username}</p>
            <div className="profile-details">
              <div className="profile-detail">
                <FaEnvelope className="detail-icon" />
                <span>{userData.email}</span>
              </div>
              <div className="profile-detail">
                <FaPhone className="detail-icon" />
                <span>{userData.phone}</span>
              </div>
              <div className="profile-detail">
                <FaMapMarkerAlt className="detail-icon" />
                <span>{userData.address}</span>
              </div>
              <div className="profile-detail">
                <FaGraduationCap className="detail-icon" />
                <span>{userData.course}</span>
              </div>
              <div className="profile-detail">
                <FaBuilding className="detail-icon" />
                <span>Dipartimento {userData.department}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-status">
          <div className="status-item">
            <div className="status-value">{userData.rank}</div>
            <div className="status-label">Grado</div>
          </div>
          <div className="status-item">
            <div className="status-value">{userData.completedExams}</div>
            <div className="status-label">Esami Completati</div>
          </div>
          <div className="status-item">
            <div className="status-value">{userData.totalExams - userData.completedExams}</div>
            <div className="status-label">Esami Rimanenti</div>
          </div>
          <div className="status-item">
            <div className="status-value">{userData.averageGrade.toFixed(2)}</div>
            <div className="status-label">Media</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
