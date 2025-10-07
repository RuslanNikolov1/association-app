import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <img 
              src="/istockphoto-501619427-612x612-removebg-preview.png" 
              alt="Street Light" 
              className={styles.streetLight}
            />
            <span className={styles.logoMain}>АМТП</span>
          </Link>

          <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              aria-label="Toggle navigation menu"
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>

            <ul
              id="main-menu"
              className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}
            >
              <li className={styles.navItem}>
                <Link
                  to="/"
                  className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Начало
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/about"
                  className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  За нас
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/activities"
                  className={`${styles.navLink} ${isActive('/activities') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Дейности
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/projects"
                  className={`${styles.navLink} ${isActive('/projects') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Проекти
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/news"
                  className={`${styles.navLink} ${isActive('/news') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Новини
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/partners"
                  className={`${styles.navLink} ${isActive('/partners') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Партньори
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/resources"
                  className={`${styles.navLink} ${isActive('/resources') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Ресурси
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/services"
                  className={`${styles.navLink} ${isActive('/services') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Услуги
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/contact"
                  className={`${styles.navLink} ${isActive('/contact') ? styles.navLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header



