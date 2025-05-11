"use client"

import { useState } from "react"
import { FaTimes, FaUser, FaPhone, FaMapMarkerAlt, FaImage } from "react-icons/fa"
import "../styles/EditProfileModal.css"

const EditProfileModal = ({ userData, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    username: userData.username,
    phone: userData.phone,
    address: userData.address,
    profilePicture: userData.profilePicture,
  })
  const [previewImage, setPreviewImage] = useState(userData.profilePicture)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real app, you would upload the file to a server
      // Here we're just creating a local URL for preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
        setFormData({
          ...formData,
          profilePicture: reader.result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = "Username è obbligatorio"
    } else if (formData.username.length < 3) {
      newErrors.username = "Username deve essere di almeno 3 caratteri"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefono è obbligatorio"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Indirizzo è obbligatorio"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onSave(formData)
    }
  }

  return (
    <div className="modal-overlay">
      <div className="edit-profile-modal">
        <div className="modal-header">
          <h2>Modifica Profilo</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="profile-picture-section">
            <div className="profile-picture-preview">
              <img src={previewImage || "/placeholder.svg"} alt="Anteprima profilo" />
            </div>
            <div className="profile-picture-upload">
              <label htmlFor="profile-picture-input" className="upload-button">
                <FaImage /> Cambia Immagine
              </label>
              <input
                type="file"
                id="profile-picture-input"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
            </div>
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
              className={errors.username ? "error" : ""}
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>

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
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
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
              className={errors.address ? "error" : ""}
            />
            {errors.address && <div className="error-message">{errors.address}</div>}
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Annulla
            </button>
            <button type="submit" className="save-button">
              Salva Modifiche
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal
