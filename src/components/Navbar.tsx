import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Container } from '@mui/material'

const Navbar: React.FC = () => {
  return (
    <nav className="relative border-b border-gray-300 bg-white">
      <Container maxWidth="xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Nusanet" className="h-8 w-auto" />
          </div>
        </div>
        
      </Container>
    </nav>
  )
}

export default Navbar
