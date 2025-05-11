"use client"

import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
