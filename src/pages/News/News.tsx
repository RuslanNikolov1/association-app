import React from 'react'
import styles from './News.module.scss'

const News: React.FC = () => {
  return (
    <div className={styles.news}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Новини и анализи</h1>
          <p className={styles.pageSubtitle}>Актуални новини за транспортни политики, европейски практики, събития и публикации</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3">
            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Нови европейски директиви за устойчив транспорт</h2>
                <span className="text-muted">15 януари 2025</span>
              </div>
              <div className="card-body">
                <p>
                  Анализ на новите европейски директиви за намаляване на емисиите от транспорта 
                  и възприемане на превозни средства с нулеви емисии до 2030 г.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Прочети</button>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Интелигентни транспортни системи в България</h2>
                <span className="text-muted">10 януари 2025</span>
              </div>
              <div className="card-body">
                <p>
                  Преглед на възможностите за внедряване на иновативни и технологични решения 
                  в областта на транспорта и транспортната инфраструктура.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Прочети</button>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Адаптивно управление на трафика - добри практики</h2>
                <span className="text-muted">5 януари 2025</span>
              </div>
              <div className="card-body">
                <p>
                  Съвременни подходи за адаптивно управление на трафика и намаляване на 
                  времето за пътуване в европейските градове.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Прочети</button>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Оптимизация на градския транспорт</h2>
                <span className="text-muted">28 декември 2024</span>
              </div>
              <div className="card-body">
                <p>
                  Стратегии за оптимизиране на транспортни връзки, маршрути и разписания 
                  за подобряване на ефективността на градския транспорт.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Прочети</button>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Подкрепа на местни власти в транспорта</h2>
                <span className="text-muted">20 декември 2024</span>
              </div>
              <div className="card-body">
                <p>
                  Как централните и териториалните органи на изпълнителната власт могат да 
                  подобрят качеството на транспортните услуги.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Прочети</button>
              </div>
            </article>

            <article className={`card reveal hover-lift`}>
              <div className="card-header">
                <h2>Бъдещето на мобилността в България</h2>
                <span className="text-muted">15 декември 2024</span>
              </div>
              <div className="card-body">
                <p>
                  Визия за устойчива, ефективна и достъпна транспортна система, която 
                  отговаря на нуждите на всички граждани.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">Прочети</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News


