import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>АМТП</h3>
            <p className={styles.footerDescription}>
              Асоциация за мобилност и транспортни политики - разработване на стратегии и проекти за подобряване на транспортната инфраструктура.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Навигация</h4>
            <nav className={styles.footerNav} aria-label="Footer navigation">
              <ul className={styles.footerNavList}>
                <li><Link to="/" className={styles.footerLink}>Начало</Link></li>
                <li><Link to="/about" className={styles.footerLink}>За нас</Link></li>
                <li><Link to="/services" className={styles.footerLink}>Услуги</Link></li>
                <li><Link to="/contact" className={styles.footerLink}>Контакти</Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Контакти</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className="sr-only">Email:</span>
                <a href="mailto:info@amtp.bg" className={styles.contactLink}>
                  info@amtp.bg
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className="sr-only">Телефон:</span>
                <a href="tel:+359123456789" className={styles.contactLink}>
                  +359 123 456 789
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className="sr-only">Адрес:</span>
                <span>София, България</span>
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Следвайте ни</h4>
            <div className={styles.socialLinks}>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="LinkedIn профил"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Twitter профил"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} АМТП. Всички права запазени.
            </p>
            <div className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>
                Политика за поверителност
              </Link>
              <Link to="/terms" className={styles.legalLink}>
                Условия за ползване
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



