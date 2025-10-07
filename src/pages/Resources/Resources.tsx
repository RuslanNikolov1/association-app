import React from 'react'
import styles from './Resources.module.scss'

const Resources: React.FC = () => {
  return (
    <div className={styles.resources}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Ресурси</h1>
          <p className={styles.pageSubtitle}>Политически документи, насоки, изследвания и връзки към ЕС регулации и национални стратегии</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className={`card reveal hover-lift`}>
              <div className="card-header"><h2>Политики и регулации</h2></div>
              <div className="card-body">
                <ul>
                  <li><a href="#">Европейска стратегия за устойчив и интелигентен транспорт</a></li>
                  <li><a href="#">Национална стратегия за развитие на транспорта</a></li>
                  <li><a href="#">Европейски директиви за емисиите от транспорта</a></li>
                  <li><a href="#">Насоки за адаптивно управление на трафика</a></li>
                </ul>
              </div>
            </div>
            <div className={`card reveal hover-lift`}>
              <div className="card-header"><h2>Изследвания и анализи</h2></div>
              <div className="card-body">
                <ul>
                  <li><a href="#">Добри практики в градската мобилност</a></li>
                  <li><a href="#">Технологични решения в транспорта</a></li>
                  <li><a href="#">Анализ на емисиите от транспорта в България</a></li>
                  <li><a href="#">Оптимизация на транспортни връзки и маршрути</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources


