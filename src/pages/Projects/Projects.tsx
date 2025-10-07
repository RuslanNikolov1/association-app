import React from 'react'
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Проекти</h1>
          <p className={styles.pageSubtitle}>Завършени и текущи инициативи за подобряване на транспортната инфраструктура и мобилността</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            <button className="btn btn-outline hover-lift">Всички</button>
            <button className="btn btn-outline hover-lift">Национални</button>
            <button className="btn btn-outline hover-lift">Регионални</button>
            <button className="btn btn-outline hover-lift">Местни</button>
            <button className="btn btn-outline hover-lift">2025</button>
            <button className="btn btn-outline hover-lift">2024</button>
          </div>

          <div className="grid grid-cols-3">
            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Стратегия за устойчива мобилност - София</h2>
                <span className="badge">2023-2024</span>
              </div>
              <div className="card-body">
                <p>
                  Разработване на комплексна стратегия за устойчива мобилност в столицата, 
                  включваща мерки за оптимизиране на транспортни връзки и възприемане на 
                  превозни средства с ниски емисии.
                </p>
              </div>
              <div className="card-footer">
                <span className="badge">Национален</span>
                <span className="badge">Стратегия</span>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Адаптивно управление на трафика - Пловдив</h2>
                <span className="badge">2024</span>
              </div>
              <div className="card-body">
                <p>
                  Внедряване на иновативни решения за адаптивно управление на трафика и 
                  намаляване на времето за пътуване в град Пловдив.
                </p>
              </div>
              <div className="card-footer">
                <span className="badge">Регионален</span>
                <span className="badge">Технология</span>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Електрически автобуси - Варна</h2>
                <span className="badge">2023-2025</span>
              </div>
              <div className="card-body">
                <p>
                  Проект за възприемане на превозни средства с нулеви емисии в градския 
                  транспорт на Варна, включващ закупуване на електрически автобуси.
                </p>
              </div>
              <div className="card-footer">
                <span className="badge">Местен</span>
                <span className="badge">Екология</span>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Интелигентни транспортни системи</h2>
                <span className="badge">2024-2026</span>
              </div>
              <div className="card-body">
                <p>
                  Разработване и внедряване на технологични решения за подобряване на 
                  ефективността и безопасността на транспортната система.
                </p>
              </div>
              <div className="card-footer">
                <span className="badge">Национален</span>
                <span className="badge">Иновация</span>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Оптимизация на маршрути - Бургас</h2>
                <span className="badge">2024</span>
              </div>
              <div className="card-body">
                <p>
                  Оптимизиране на транспортни връзки, маршрути и разписания в град Бургас 
                  за подобряване на ефективността на градския транспорт.
                </p>
              </div>
              <div className="card-footer">
                <span className="badge">Местен</span>
                <span className="badge">Оптимизация</span>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Подкрепа на местни власти</h2>
                <span className="badge">2023-2025</span>
              </div>
              <div className="card-body">
                <p>
                  Подпомагане на териториалните органи на изпълнителната власт в прилагането 
                  на добрите европейски практики в областта на транспорта.
                </p>
              </div>
              <div className="card-footer">
                <span className="badge">Национален</span>
                <span className="badge">Подкрепа</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects


