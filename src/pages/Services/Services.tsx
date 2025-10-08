import React from 'react'
import styles from './Services.module.scss'

const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Нашите услуги</h1>
          <p className={styles.pageSubtitle}>
            Професионални решения за транспортна мобилност и политики
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="card">
              <div className="card-header">
                <h2>Стратегическо планиране</h2>
              </div>
              <div className="card-body">
                <p>
                  Разработване на комплексни стратегии за транспортна мобилност на местно, 
                  регионално и национално ниво. Нашите стратегии включват:
                </p>
                <ul>
                  <li>Анализ на съществуващата транспортна инфраструктура</li>
                  <li>Идентифициране на проблеми и възможности</li>
                  <li>Разработване на цели и приоритети</li>
                  <li>Създаване на план за действие</li>
                  <li>Мониторинг и оценка на резултатите</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Иновативни технологии</h2>
              </div>
              <div className="card-body">
                <p>
                  Внедряване на съвременни технологични решения за оптимизиране на 
                  транспортните процеси и подобряване на мобилността:
                </p>
                <ul>
                  <li>Интелигентни транспортни системи (ITS)</li>
                  <li>Адаптивно управление на трафика</li>
                  <li>Цифрови платформи за мобилност</li>
                  <li>Анализ на големи данни в транспорта</li>
                  <li>Интеграция на различни видове транспорт</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Екологични решения</h2>
              </div>
              <div className="card-body">
                <p>
                  Подпомагане на прехода към устойчив транспорт и намаляване на 
                  въглеродния отпечатък:
                </p>
                <ul>
                  <li>Възприемане на електромобили и хибридни превозни средства</li>
                  <li>Развитие на велосипедна инфраструктура</li>
                  <li>Подобряване на обществения транспорт</li>
                  <li>Създаване на зони с ниски емисии</li>
                  <li>Стимулиране на споделената мобилност</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Управление на проекти</h2>
              </div>
              <div className="card-body">
                <p>
                  Пълно управление на транспортни проекти от идеята до реализацията:
                </p>
                <ul>
                  <li>Планиране и координация на проекти</li>
                  <li>Управление на ресурси и бюджети</li>
                  <li>Сътрудничество с заинтересовани страни</li>
                  <li>Мониторинг на напредъка</li>
                  <li>Оценка на резултатите и въздействието</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Illustration */}
      <section className={`section ${styles.illustration}`}>
        <div className="container">
          <img 
            src="/services-illustration.svg" 
            alt="Илюстрация на транспортни услуги и мрежа"
            className={styles.servicesIllustration}
          />
        </div>
      </section>

      {/* Specialized Services */}
      <section className={`section ${styles.specialized}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>Специализирани услуги</h2>
          <div className="grid grid-cols-3">
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>📊</span>
              </div>
              <h3>Анализ и проучвания</h3>
              <p>
                Детайлни анализи на транспортните потоци, нужди и възможности 
                за подобряване на мобилността.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>📋</span>
              </div>
              <h3>Нормативна поддръжка</h3>
              <p>
                Подготовка на нормативни документи и подпомагане на процеса 
                на тяхното приемане и прилагане.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>🎓</span>
              </div>
              <h3>Обучения и консултации</h3>
              <p>
                Специализирани обучения за експерти и консултации за 
                местни и регионални власти.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>🌍</span>
              </div>
              <h3>Международни проекти</h3>
              <p>
                Участие в европейски и международни проекти за обмен на 
                добри практики и иновации.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>🤝</span>
              </div>
              <h3>Сътрудничество</h3>
              <p>
                Координация между различни заинтересовани страни и 
                създаване на партньорства.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>📈</span>
              </div>
              <h3>Оценка на въздействието</h3>
              <p>
                Измерване и оценка на въздействието на транспортните 
                политики и мерки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.process}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>Нашият процес на работа</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Анализ и оценка</h3>
              <p>Детайлен анализ на съществуващата ситуация и идентифициране на нуждите.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Планиране</h3>
              <p>Разработване на стратегия и план за действие, съобразен с целите.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Реализация</h3>
              <p>Изпълнение на плана с активно участие на всички заинтересовани страни.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Мониторинг</h3>
              <p>Постоянен мониторинг на напредъка и коригиране при нужда.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Оценка</h3>
              <p>Оценка на резултатите и извличане на уроци за бъдещи проекти.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готови ли сте да работим заедно?</h2>
            <p className={styles.ctaText}>
              Свържете се с нас за консултация или сътрудничество в областта на 
              транспортната мобилност и политики.
            </p>
            <div className={styles.ctaActions}>
              <a href="/contact" className="btn btn-primary btn-lg">
                Свържете се с нас
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
