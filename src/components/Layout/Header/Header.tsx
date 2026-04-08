import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => location.pathname === path

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoMain}>АМТП</span>
          </Link>

          <nav ref={navRef} className={styles.nav} role="navigation" aria-label="Main navigation">
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
                <a
                  href="#about-us"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  За асоциацията
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#activities"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Области на фокус
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#project-types"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Основни проекти
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#team"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Екип
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#experience"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Проектен опит
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="#contact"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header



