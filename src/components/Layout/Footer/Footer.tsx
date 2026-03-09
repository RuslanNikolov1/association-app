import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
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
                <li>
                  <a href="#about-us" className={styles.footerLink}>
                    За асоциацията
                  </a>
                </li>
                <li>
                  <a href="#activities" className={styles.footerLink}>
                    Дейности
                  </a>
                </li>
                <li>
                  <a href="#team" className={styles.footerLink}>
                    Екип
                  </a>
                </li>
                <li>
                  <a href="#project-types" className={styles.footerLink}>
                    Основни проекти
                  </a>
                </li>
                <li>
                  <a href="#core-activities" className={styles.footerLink}>
                    Основни дейности
                  </a>
                </li>
                <li>
                  <a href="#experience" className={styles.footerLink}>
                    Проектен опит
                  </a>
                </li>
                <li>
                  <a href="#contact" className={styles.footerLink}>
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Контакти</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className="sr-only">Email:</span>
                <a href="mailto:amtp.bulgaria@gmail.com" className={styles.contactLink}>
                  <Mail className={styles.iconInline} aria-hidden="true" focusable="false" />
                  amtp.bulgaria@gmail.com
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className="sr-only">Адрес:</span>
                <span className={styles.contactText}>
                  <MapPin className={styles.iconInline} aria-hidden="true" focusable="false" />
                  бул. Инж. Иван Иванов № 70, вх. Б,, 1000 София, България
                </span>
              </p>
            </div>
          </div>

          {/* Social links removed per updated requirements */}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} АМТП. Всички права запазени.
            </p>
            <p className={styles.footerCredits}>
              Created by{' '}
              <a
                href="https://portfolio-website-dusky-five-28.vercel.app/"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Създаден от Руслан
              </a>
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



