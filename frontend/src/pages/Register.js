"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi"
import "../styles/Register.css"

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    course: "",
    department: "Tramot", // Default value
    phone: "",
    address: "",
    password: "",
    confirmPassword: "", // For validation only, not sent to API
    username: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Le password non corrispondono")
      return
    }

    setLoading(true)

    // Create a copy of formData without confirmPassword
    const { confirmPassword, ...dataToSend } = formData

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Errore durante la registrazione")
      }

      // Registrazione completata con successo, reindirizza alla pagina di login
      navigate("/login")
    } catch (err) {
      setError(err.message || "Si è verificato un errore durante la registrazione")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page register-page">
      <div className="auth-background"></div>

      <div className="auth-container register-container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Torna alla Home
        </Link>

        <div className="auth-form-container register-form-container">
          <div className="auth-logo">
            <GiStarsStack className="auth-logo-icon" />
            <h1 className="auth-logo-text">SGAM</h1>
          </div>

          <h2 className="auth-title">Registrazione Nuovo Utente</h2>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form register-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="input-icon" />
                  <span>Nome</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="surname">
                  <FaUser className="input-icon" />
                  <span>Cognome</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci cognome"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="input-icon" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">
                  <FaUser className="input-icon" />
                  <span>Username</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci username"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="course">
                  <FaGraduationCap className="input-icon" />
                  <span>Corso</span>
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci corso"
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">
                  <FaBuilding className="input-icon" />
                  <span>Dipartimento</span>
                </label>
                <select id="department" name="department" value={formData.department} onChange={handleChange} required>
                  <option value="Tramot">Tramot</option>
                  <option value="Ing">Ing</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone className="input-icon" />
                  <span>Telefono</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci numero di telefono"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">
                  <FaMapMarkerAlt className="input-icon" />
                  <span>Indirizzo</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci indirizzo"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">
                  <FaLock className="input-icon" />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <FaLock className="input-icon" />
                  <span>Conferma Password</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Conferma password"
                />
              </div>
            </div>

            <div className="terms-agreement">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                Accetto i{" "}
                <a href="#" className="terms-link">
                  Termini di Servizio
                </a>{" "}
                e la{" "}
                <a href="#" className="terms-link">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Registrazione in corso..." : "Registrati"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Hai già un account?{" "}
              <Link to="/login" className="auth-link">
                Accedi
              </Link>
            </p>
          </div>
        </div>

        <div className="auth-decoration">
          <div className="military-badge">
            <GiStarsStack className="badge-icon" />
            <div className="badge-text">
              <div className="badge-title">Sistema di Gestione Accademica Militare</div>
              <div className="badge-subtitle">Eccellenza • Disciplina • Progresso</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
