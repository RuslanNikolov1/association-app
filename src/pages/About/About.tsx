import React from 'react'
import styles from './About.module.scss'

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>За нас</h1>
          <p className={styles.pageSubtitle}>
            Юридическо лице с нестопанска цел за осъществяване на дейност в обществена полза
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Кой сме ние</h2>
              <p className={styles.contentText}>
                АМТП е юридическо лице с нестопанска цел за осъществяване на дейност в обществена полза. 
                Асоциацията разработва, изпълнява или подпомага изпълнението на стратегии, програми, 
                планове, проекти и други от местно, регионално и национално значение.
              </p>
              <p className={styles.contentText}>
                Нашата дейност е свързана с подобряване на свързаността и достъпността на транспортната 
                инфраструктура, подобряване на транспорта и мобилността, разработване и внедряване на 
                иновативни и технологични решения в областта на транспорта.
              </p>
            </div>
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Нашите цели и мисия</h2>
              <p className={styles.contentText}>
                Фокусираме се върху възприемане на превозни средства с нулеви или ниски емисии, 
                разработване и прилагане на решения за намаляване на емисиите от транспорта, 
                оптимизиране на транспортни връзки, маршрути и разписания.
              </p>
              <p className={styles.contentText}>
                Подпомагаме централните и териториалните органи на изпълнителната власт в усилията им 
                за подобряване качеството на транспортните услуги и прилагането на добрите европейски 
                и световни практики и подходи в областта на транспорта.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className={`section ${styles.keyAreas}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>Основни области на дейност</h2>
          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-body">
                <h3>Транспортна инфраструктура</h3>
                <p>
                  Разработване и подобряване на транспортната инфраструктура за по-добра 
                  свързаност и достъпност между различните региони.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Иновативни технологии</h3>
                <p>
                  Внедряване на съвременни технологични решения за оптимизиране на 
                  транспортните процеси и управление на трафика.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Екологични решения</h3>
                <p>
                  Подпомагане на прехода към превозни средства с нулеви или ниски емисии 
                  и намаляване на въглеродния отпечатък от транспорта.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Адаптивно управление</h3>
                <p>
                  Разработване и прилагане на решения за адаптивно управление на трафика 
                  и намаляване на времето за пътуване.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Политическо подпомагане</h3>
                <p>
                  Подпомагане на централните и териториалните органи на изпълнителната власт 
                  в усилията им за подобряване на транспортните услуги.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Международно сътрудничество</h3>
                <p>
                  Прилагане на добрите европейски и световни практики и подходи в областта 
                  на транспорта и провежданите политики.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.team}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>Нашият екип</h2>
          <div className={styles.teamContent}>
            <div className={styles.teamText}>
              <p className={styles.teamDescription}>
                В екипа ни са привлечени експерти с дългогодишен опит в управление на 
                мобилността, включително транспорт и паркиране, както и участие в 
                местната власт, подготовката на нормативни документи и управлението на проекти.
              </p>
              <p className={styles.teamDescription}>
                Нашият опит обхваща различни аспекти на транспортната политика и 
                практическото прилагане на решения за подобряване на мобилността. 
                Работим с професионалисти от различни области - инженери, икономисти, 
                урбанисти, експерти по околна среда и социални работници.
              </p>
            </div>
            <div className={styles.teamImage}>
              <img 
                src="/team-illustration.svg" 
                alt="Експертен екип на АМТП - професионалисти в офис среща"
                className={styles.teamImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>Нашите ценности</h2>
          <div className="grid grid-cols-4">
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <span>🎯</span>
              </div>
              <h3>Фокус върху резултата</h3>
              <p>Стремим се към конкретни и измерими резултати в нашата работа.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <span>🤝</span>
              </div>
              <h3>Сътрудничество</h3>
              <p>Работим в тясно сътрудничество с всички заинтересовани страни.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <span>🌱</span>
              </div>
              <h3>Устойчивост</h3>
              <p>Приоритет на екологичните и устойчиви решения в транспорта.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <span>💡</span>
              </div>
              <h3>Иновации</h3>
              <p>Постоянно търсим нови и по-добри решения за транспортните проблеми.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
