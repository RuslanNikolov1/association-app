import React from 'react'
import styles from './Partners.module.scss'

const Partners: React.FC = () => {
  return (
    <div className={styles.partners}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Партньори</h1>
          <p className={styles.pageSubtitle}>Институционални, общински и индустриални партньори в областта на транспорта и мобилността</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.gridLogos}>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>МРРБ</div>
              <h3>Министерство на регионалното развитие</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>Столична община</div>
              <h3>Столична община</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>ЕК</div>
              <h3>Европейска комисия</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>Пловдив</div>
              <h3>Община Пловдив</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>Варна</div>
              <h3>Община Варна</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>Бургас</div>
              <h3>Община Бургас</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>Транспорт</div>
              <h3>Транспортни оператори</h3>
            </div>
            <div className={`${styles.logoCard} reveal hover-lift`}>
              <div className={styles.logoPlaceholder}>Технологии</div>
              <h3>Технологични компании</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners


