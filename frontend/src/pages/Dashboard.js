"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileSection from "../components/ProfileSection"
import PerformanceGraphs from "../components/PerformanceGraphs"
import ClassmatesList from "../components/ClassmatesList"
import EditProfileModal from "../components/EditProfileModal"
import { useUser } from "../context/UserContext"
import { mockUserData, mockClassmates } from "../data/mockData"
import "../styles/Dashboard.css"

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUser()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [animateContent, setAnimateContent] = useState(false)
  const [userData, setUserData] = useState(null)
  const [classmates, setClassmates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUserData(mockUserData)
      setClassmates(mockClassmates)
      setUser(mockUserData) // Update context
      setLoading(false)

      // Trigger animations after data is loaded
      setTimeout(() => setAnimateContent(true), 100)
    }, 800)
  }, [setUser])

  const handleEditProfile = (updatedData) => {
    // In a real app, this would send the updated data to the server
    setUserData({ ...userData, ...updatedData })
    setUser({ ...user, ...updatedData }) // Update context
    setIsEditModalOpen(false)
  }

  const handleClassmateClick = (username) => {
    navigate(`/profile/${username}`)
  }

  if (loading) {
    return (
      <div className="dashboard-page">
        <Header />
        <main className="dashboard-main">
          <div className="container">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Caricamento dati in corso...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="dashboard-page">
      <Header />

      <main className="dashboard-main">
        <section className="dashboard-hero">
          <div className="dashboard-hero-overlay"></div>
          <div className="container">
            <h1 className="dashboard-hero-title">Dashboard Personale</h1>
            <p className="dashboard-hero-subtitle">Benvenuto, {userData.name}</p>
          </div>
        </section>

        <div className="container">
          <div className={`dashboard-content ${animateContent ? "animate" : ""}`}>
            {/* Profile Section */}
            <ProfileSection userData={userData} onEditClick={() => setIsEditModalOpen(true)} />

            {/* Performance Graphs */}
            <PerformanceGraphs userData={userData} />

            {/* Classmates List */}
            <ClassmatesList classmates={classmates} onClassmateClick={handleClassmateClick} />
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <EditProfileModal userData={userData} onSave={handleEditProfile} onClose={() => setIsEditModalOpen(false)} />
      )}

      <Footer />
    </div>
  )
}

export default Dashboard
