import { useState, useEffect } from 'react'
import HeaderLogo from './HeaderLogo'
import SearchBar from './SearchBar'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const navbarClasses = theme === 'dark'
    ? 'navbar navbar-expand-lg navbar-dark bg-dark'
    : 'navbar navbar-expand-lg navbar-light bg-light'

  return (
    <nav className={navbarClasses}>
      <div className="container-fluid navbarcolor">
        <HeaderLogo />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <SearchBar />
          <NavLinks />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar