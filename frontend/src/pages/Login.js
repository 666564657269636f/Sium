"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi"
import "../styles/Login.css"

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
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
    setLoading(true)

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Errore durante l'autenticazione")
      }

      // Salva il token o i dati utente in localStorage/sessionStorage
      localStorage.setItem("userToken", data.token)

      // Reindirizza alla dashboard o home page
      navigate("/")
    } catch (err) {
      setError(err.message || "Si è verificato un errore durante l'accesso")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page login-page">
      <div className="auth-background"></div>

      <div className="auth-container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Torna alla Home
        </Link>

        <div className="auth-form-container">
          <div className="auth-logo">
            <GiStarsStack className="auth-logo-icon" />
            <h1 className="auth-logo-text">SGAM</h1>
          </div>

          <h2 className="auth-title">Accesso al Sistema</h2>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username_or_email">
                <FaUser className="input-icon" />
                <span>Username o Email</span>
              </label>
              <input
                type="text"
                id="username_or_email"
                name="username_or_email"
                value={formData.username_or_email}
                onChange={handleChange}
                required
                placeholder="Inserisci username o email"
              />
            </div>

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

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Ricordami</label>
              </div>
              <a href="#" className="forgot-password">
                Password dimenticata?
              </a>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Autenticazione..." : "Accedi"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Non hai un account?{" "}
              <Link to="/register" className="auth-link">
                Registrati
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

export default Login
