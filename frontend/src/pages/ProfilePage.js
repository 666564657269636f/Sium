"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PerformanceGraphs from "../components/PerformanceGraphs"
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBuilding } from "react-icons/fa"
import { mockUserData, mockClassmates } from "../data/mockData"
import "../styles/ProfilePage.css"

const ProfilePage = () => {
  const { username } = useParams()
  const [profileData, setProfileData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [animateContent, setAnimateContent] = useState(false)

  useEffect(() => {
    // Simulate fetching profile data
    setTimeout(() => {
      // If viewing own profile, use mockUserData
      if (username === mockUserData.username) {
        setProfileData(mockUserData)
      } else {
        // Find the classmate with matching username
        const classmate = mockClassmates.find((c) => c.username === username)
        if (classmate) {
          setProfileData(classmate)
        } else {
          // If no matching classmate is found, use a default profile
          setProfileData({
            ...mockClassmates[0],
            username: username,
            name: "Utente",
            surname: "Non Trovato",
          })
        }
      }

      setLoading(false)

      // Trigger animations after data is loaded
      setTimeout(() => setAnimateContent(true), 100)
    }, 800)
  }, [username])

  if (loading) {
    return (
      <div className="profile-page">
        <Header />
        <main className="profile-main">
          <div className="container">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Caricamento profilo in corso...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="profile-page">
      <Header />

      <main className="profile-main">
        <section className="profile-hero">
          <div className="profile-hero-overlay"></div>
          <div className="container">
            <h1 className="profile-hero-title">Profilo Militare</h1>
            <p className="profile-hero-subtitle">
              {profileData.name} {profileData.surname}
            </p>
          </div>
        </section>

        <div className="container">
          <div className={`profile-content ${animateContent ? "animate" : ""}`}>
            <Link to="/dashboard" className="back-to-dashboard">
              <FaArrowLeft /> Torna alla Dashboard
            </Link>

            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img
                    src={profileData.profilePicture || "/placeholder.svg"}
                    alt={`${profileData.name} ${profileData.surname}`}
                  />
                </div>
                <div className="profile-info">
                  <h2 className="profile-name">
                    {profileData.name} {profileData.surname}
                  </h2>
                  <p className="profile-username">@{profileData.username}</p>
                  <div className="profile-details">
                    <div className="profile-detail">
                      <FaEnvelope className="detail-icon" />
                      <span>{profileData.email}</span>
                    </div>
                    <div className="profile-detail">
                      <FaPhone className="detail-icon" />
                      <span>{profileData.phone}</span>
                    </div>
                    <div className="profile-detail">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{profileData.address}</span>
                    </div>
                    <div className="profile-detail">
                      <FaGraduationCap className="detail-icon" />
                      <span>{profileData.course}</span>
                    </div>
                    <div className="profile-detail">
                      <FaBuilding className="detail-icon" />
                      <span>Dipartimento {profileData.department}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Graphs */}
            <PerformanceGraphs userData={profileData} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProfilePage
