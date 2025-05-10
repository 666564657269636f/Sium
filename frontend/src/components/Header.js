"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi"
import "../styles/Header.css"

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <GiStarsStack className="logo-icon" />
          <h1 className="logo-text">SGAM</h1>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/classi">Classi</Link>
            </li>
            <li className="nav-item">
              <Link to="/statistiche">Statistiche</Link>
            </li>
            <li className="nav-item">
              <Link to="/avanzamento">Avanzamento</Link>
            </li>
            <li className="nav-item">
              <Link to="/contatti">Contatti</Link>
            </li>
          </ul>
        </nav>

        <div className="user-actions">
          <Link to="/login" className="login-button">
            <FaUserCircle />
            <span>Accedi</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
