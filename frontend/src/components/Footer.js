import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <div className="footer-logo">
            <GiStarsStack className="footer-logo-icon" />
            <span className="footer-logo-text">SGAM</span>
          </div>
          <p className="footer-description">
            Sistema di Gestione Accademica Militare: la soluzione completa per l'organizzazione e il monitoraggio
            dell'addestramento e della formazione militare.
          </p>
        </div>

        <div className="footer-section links-section">
          <h3 className="footer-heading">Collegamenti Rapidi</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/classi">Classi</a>
            </li>
            <li>
              <a href="/statistiche">Statistiche</a>
            </li>
            <li>
              <a href="/avanzamento">Avanzamento</a>
            </li>
            <li>
              <a href="/contatti">Contatti</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3 className="footer-heading">Contatti</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Via dell'Accademia Militare, 1 - Roma</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+39 06 1234567</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@sgam.difesa.it</span>
            </li>
          </ul>
        </div>

        <div className="footer-section social-section">
          <h3 className="footer-heading">Seguici</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Sistema di Gestione Accademica Militare. Tutti i diritti riservati.
        </p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/termini">Termini di Servizio</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
