import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import EUFlag from '../../components/Flags/EUFlag'
import BulgarianFlag from '../../components/Flags/BulgarianFlag'
import styles from './Home.module.scss'

const Home: React.FC = () => {
  // Initialize scroll reveal hooks to enable animations on supported sections
  useScrollReveal()
  useScrollReveal()
  useScrollReveal()

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.flagLeft}>
              <EUFlag className={styles.flag} />
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Асоциация за мобилност и транспортни политики
              </h1>
              <p className={styles.heroSubtitle}>
                Юридическо лице с нестопанска цел за осъществяване на дейност в обществена полза. 
                Разработваме стратегии, програми и проекти за подобряване на транспортната инфраструктура, 
                мобилността и устойчивостта на местно, регионално и национално ниво.
              </p>
              <div className={styles.heroActions}>
                <Link to="/about" className="btn btn-primary btn-lg">
                  Научете повече
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Свържете се с нас
                </Link>
              </div>
            </div>
            <div className={styles.flagRight}>
              <BulgarianFlag className={styles.flag} />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>ℹ️ За нас</h2>
          
          {/* Who We Are */}
          <div className={`grid grid-cols-2 ${styles.subsection}`}>
            <div className="reveal">
              <h3 className={styles.subsectionTitle}>Кой сме ние</h3>
              <p className={styles.subsectionText}>
                <strong>Асоциация за мобилност и транспортни политики (АМТП)</strong> е юридическо лице с нестопанска цел за осъществяване на дейност в обществена полза. 
                Асоциацията разработва, изпълнява или подпомага изпълнението на стратегии, програми, планове, проекти и други от местно, регионално и национално значение.
              </p>
              <p className={styles.subsectionText}>
                Нашата дейност е свързана с подобряване на свързаността и достъпността на транспортната инфраструктура, подобряване на транспорта и мобилността, 
                разработване и внедряване на иновативни и технологични решения в областта на транспорта и транспортната инфраструктура.
              </p>
            </div>
            <div className="reveal">
              <img 
                src="/tram.jpg" 
                alt="Трамвай - модерен градски транспорт"
                className={styles.sectionImage}
              />
            </div>
          </div>

          {/* Our Goals & Mission */}
          <div className={`grid grid-cols-2 ${styles.subsection}`}>
            <div className="reveal">
              <img 
                src="/trolley.jpg" 
                alt="Тролейбус - екологичен градски транспорт"
                className={styles.sectionImage}
              />
            </div>
            <div className="reveal">
              <h3 className={styles.subsectionTitle}>Нашите цели и мисия</h3>
              <p className={styles.subsectionText}>
                Фокусираме се върху <strong>възприемане на превозни средства с нулеви или ниски емисии</strong>, разработване и прилагане на решения за намаляване на емисиите от транспорта, 
                оптимизиране на транспортни връзки, маршрути и разписания.
              </p>
              <p className={styles.subsectionText}>
                Разработваме и прилагаме решения за <strong>адаптивно управление на трафика и намаляване на времето за пътуване</strong>, 
                подпомагаме централните и териториалните органи на изпълнителната власт в усилията им за подобряване качеството на транспортните услуги.
              </p>
              <p className={styles.subsectionText}>
                Прилагаме <strong>добрите европейски и световни практики и подходи</strong> в областта на транспорта и провежданите политики.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="reveal">
            <h3 className={`text-center ${styles.subsectionTitle}`}>Нашият екип</h3>
            <p className={`text-center ${styles.teamIntro}`}>
              В екипа ни са привлечени експерти с дългогодишен опит в управление на мобилността, 
              включително транспорт и паркиране, както и участие в местната власт, подготовката на нормативни документи и управлението на проекти.
            </p>
            <div className="grid grid-cols-3">
              <div className={`${styles.teamMember} reveal hover-lift`}>
                <div className={styles.memberPhoto}>
                  <div className={styles.photoPlaceholder}>👨‍💼</div>
                </div>
                <h4>Д-р Иван Петров</h4>
                <p className={styles.memberRole}>Изпълнителен директор</p>
                <p className={styles.memberBio}>
                  Дългогодишен опит в транспортната политика и управление на мобилността. 
                  Специалист по европейски транспортни програми и устойчиво развитие.
                </p>
              </div>
              <div className={`${styles.teamMember} reveal hover-lift`}>
                <div className={styles.memberPhoto}>
                  <div className={styles.photoPlaceholder}>👩‍💼</div>
                </div>
                <h4>Инж. Мария Георгиева</h4>
                <p className={styles.memberRole}>Главен експерт по иновации</p>
                <p className={styles.memberBio}>
                  Експерт по интелигентни транспортни системи и технологични решения. 
                  Участвала в множество проекти за адаптивно управление на трафика.
                </p>
              </div>
              <div className={`${styles.teamMember} reveal hover-lift`}>
                <div className={styles.memberPhoto}>
                  <img 
                    src="/team-member-3.jpg" 
                    alt="Д-р Петър Стоянов - Старши консултант"
                    className={styles.memberImage}
                  />
                </div>
                <h4>Д-р Петър Стоянов</h4>
                <p className={styles.memberRole}>Старши консултант</p>
                <p className={styles.memberBio}>
                  Специалист по устойчив транспорт и намаляване на емисиите. 
                  Има богат опит в работа с местни власти и прилагане на европейски практики.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to="/about" className="btn btn-primary">Научете повече за нас</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className={`section ${styles.activitiesSection}`} aria-labelledby="activities-heading">
        <div className="container">
          <h2 id="activities-heading" className={`text-center ${styles.sectionTitle}`}>📑 Дейности и области на фокус</h2>
          <div className="grid grid-cols-2" role="list" aria-label="Списък с дейности и области на фокус">
            <div className="reveal">
              <div className={`${styles.activityItem} ${styles.activityCard}`} role="listitem">
                <div className={styles.cardContent}>
                  <div className={styles.textContent}>
                    <div className={styles.activityIcon} role="img" aria-label="Стратегии и планиране">
                      📋
                    </div>
                    <h3>Стратегии за транспорт и мобилност</h3>
                    <p>Разработване, изпълнение или подпомагане на изпълнението на стратегии, програми, планове, проекти и други от местно, регионално и национално значение.</p>
                  </div>
                  
                  {/* Strategy Planning Chart */}
                  <div className={styles.chartSection}>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartTitle}>Ниво на планиране</div>
                      <div className={styles.strategyChart}>
                        <div className={styles.chartBar}>
                          <div className={styles.barLabel}>Местно</div>
                          <div className={styles.barContainer}>
                            <div className={styles.barFill} style={{width: '75%'}}></div>
                            <span className={styles.barValue}>75%</span>
                          </div>
                        </div>
                        <div className={styles.chartBar}>
                          <div className={styles.barLabel}>Регионално</div>
                          <div className={styles.barContainer}>
                            <div className={styles.barFill} style={{width: '85%'}}></div>
                            <span className={styles.barValue}>85%</span>
                          </div>
                        </div>
                        <div className={styles.chartBar}>
                          <div className={styles.barLabel}>Национално</div>
                          <div className={styles.barContainer}>
                            <div className={styles.barFill} style={{width: '90%'}}></div>
                            <span className={styles.barValue}>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.activityItem} ${styles.activityCard} ${styles.cardReversed}`} role="listitem">
                <div className={styles.cardContent}>
                  {/* Sustainability Infographic */}
                  <div className={styles.chartSection}>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartTitle}>Намаляване на емисиите</div>
                      <div className={styles.sustainabilityChart}>
                        <div className={styles.emissionItem}>
                          <div className={styles.emissionIcon}>🚗</div>
                          <div className={styles.emissionInfo}>
                            <div className={styles.emissionLabel}>CO₂ намаление</div>
                            <div className={styles.emissionValue}>-45%</div>
                          </div>
                        </div>
                        <div className={styles.emissionItem}>
                          <div className={styles.emissionIcon}>⚡</div>
                          <div className={styles.emissionInfo}>
                            <div className={styles.emissionLabel}>Електрически превозни средства</div>
                            <div className={styles.emissionValue}>+120%</div>
                          </div>
                        </div>
                        <div className={styles.emissionItem}>
                          <div className={styles.emissionIcon}>🌿</div>
                          <div className={styles.emissionInfo}>
                            <div className={styles.emissionLabel}>Зелени технологии</div>
                            <div className={styles.emissionValue}>+85%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.textContent}>
                    <div className={styles.activityIcon} role="img" aria-label="Устойчив и екологичен транспорт">
                      🌱
                    </div>
                    <h3>Устойчив транспорт</h3>
                    <p>Възприемане на превозни средства с нулеви или ниски емисии, разработване и прилагане на решения за намаляване на емисиите от транспорта.</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.activityItem} ${styles.activityCard}`} role="listitem">
                <div className={styles.cardContent}>
                  <div className={styles.textContent}>
                    <div className={styles.activityIcon} role="img" aria-label="Управление на трафика">
                      🚦
                    </div>
                    <h3>Оптимизация на трафика и маршрути</h3>
                    <p>Оптимизиране на транспортни връзки, маршрути и разписания. Разработване и прилагане на решения за адаптивно управление на трафика.</p>
                  </div>
                  
                  {/* Traffic Optimization Graph */}
                  <div className={styles.chartSection}>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartTitle}>Подобрение на времето за пътуване</div>
                      <div className={styles.trafficChart}>
                        <div className={styles.trafficMetrics}>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue}>-35%</div>
                            <div className={styles.metricLabel}>Време за пътуване</div>
                          </div>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue}>+28%</div>
                            <div className={styles.metricLabel}>Ефективност на маршрути</div>
                          </div>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue}>-42%</div>
                            <div className={styles.metricLabel}>Задръствания</div>
                          </div>
                        </div>
                        <div className={styles.trafficFlow}>
                          <div className={styles.flowLine}></div>
                          <div className={styles.flowDots}>
                            <div className={styles.flowDot}></div>
                            <div className={styles.flowDot}></div>
                            <div className={styles.flowDot}></div>
                            <div className={styles.flowDot}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className={`${styles.activityItem} ${styles.activityCard} ${styles.cardReversed}`} role="listitem">
                <div className={styles.cardContent}>
                  {/* Innovation Technology Diagram */}
                  <div className={styles.chartSection}>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartTitle}>Технологични решения</div>
                      <div className={styles.innovationChart}>
                        <div className={styles.techGrid}>
                          <div className={styles.techItem}>
                            <div className={styles.techIcon}>🤖</div>
                            <div className={styles.techLabel}>AI & ML</div>
                            <div className={styles.techProgress}>
                              <div className={styles.progressBar} style={{width: '80%'}}></div>
                            </div>
                          </div>
                          <div className={styles.techItem}>
                            <div className={styles.techIcon}>📡</div>
                            <div className={styles.techLabel}>IoT</div>
                            <div className={styles.techProgress}>
                              <div className={styles.progressBar} style={{width: '75%'}}></div>
                            </div>
                          </div>
                          <div className={styles.techItem}>
                            <div className={styles.techIcon}>🔗</div>
                            <div className={styles.techLabel}>Blockchain</div>
                            <div className={styles.techProgress}>
                              <div className={styles.progressBar} style={{width: '60%'}}></div>
                            </div>
                          </div>
                          <div className={styles.techItem}>
                            <div className={styles.techIcon}>☁️</div>
                            <div className={styles.techLabel}>Cloud</div>
                            <div className={styles.techProgress}>
                              <div className={styles.progressBar} style={{width: '90%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.textContent}>
                    <div className={styles.activityIcon} role="img" aria-label="Иновации и технологии">
                      💡
                    </div>
                    <h3>Иновации и технологии</h3>
                    <p>Разработване и внедряване на иновативни и технологични решения в областта на транспорта и транспортната инфраструктура.</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.activityItem} ${styles.activityCard}`} role="listitem">
                <div className={styles.cardContent}>
                  <div className={styles.textContent}>
                    <div className={styles.activityIcon} role="img" aria-label="Подкрепа на институции">
                      🏛️
                    </div>
                    <h3>Подкрепа на институции</h3>
                    <p>Подпомагане на централните и териториалните органи на изпълнителната власт в усилията им за подобряване качеството на транспортните услуги.</p>
                  </div>
                  
                  {/* Institutional Support Flowchart */}
                  <div className={styles.chartSection}>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartTitle}>Подкрепа на институции</div>
                      <div className={styles.institutionalChart}>
                        <div className={styles.supportFlow}>
                          <div className={styles.flowStep}>
                            <div className={styles.stepIcon}>🏛️</div>
                            <div className={styles.stepLabel}>Централни органи</div>
                            <div className={styles.stepValue}>15</div>
                          </div>
                          <div className={styles.flowArrow}>→</div>
                          <div className={styles.flowStep}>
                            <div className={styles.stepIcon}>🏢</div>
                            <div className={styles.stepLabel}>Регионални органи</div>
                            <div className={styles.stepValue}>28</div>
                          </div>
                          <div className={styles.flowArrow}>→</div>
                          <div className={styles.flowStep}>
                            <div className={styles.stepIcon}>🏘️</div>
                            <div className={styles.stepLabel}>Местни власти</div>
                            <div className={styles.stepValue}>45</div>
                          </div>
                        </div>
                        <div className={styles.supportStats}>
                          <div className={styles.statItem}>
                            <div className={styles.statValue}>88</div>
                            <div className={styles.statLabel}>Общо институции</div>
                          </div>
                          <div className={styles.statItem}>
                            <div className={styles.statValue}>95%</div>
                            <div className={styles.statLabel}>Успешност</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/activities" className="btn btn-outline">Вижте всички дейности</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>📊 Проекти</h2>
          <div className="grid grid-cols-3">
            <div className="card reveal hover-lift">
              <div className="card-body">
                <h3>Стратегия за устойчива мобилност - София</h3>
                <p className="text-muted">2023-2024</p>
                <p>Разработване на комплексна стратегия за устойчива мобилност в столицата, включваща мерки за оптимизиране на транспортни връзки.</p>
                <span className="badge">Национален</span>
              </div>
            </div>
            <div className="card reveal hover-lift">
              <div className="card-body">
                <h3>Адаптивно управление на трафика - Пловдив</h3>
                <p className="text-muted">2024</p>
                <p>Внедряване на иновативни решения за адаптивно управление на трафика и намаляване на времето за пътуване.</p>
                <span className="badge">Регионален</span>
              </div>
            </div>
            <div className="card reveal hover-lift">
              <div className="card-body">
                <h3>Електрически автобуси - Варна</h3>
                <p className="text-muted">2023-2025</p>
                <p>Проект за възприемане на превозни средства с нулеви емисии в градския транспорт на Варна.</p>
                <span className="badge">Местен</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-primary">Вижте всички проекти</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={`section ${styles.newsSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>📰 Новини и анализи</h2>
          <div className="grid grid-cols-3">
            <div className="card reveal hover-lift">
              <div className="card-body">
                <h3>Нови европейски директиви за устойчив транспорт</h3>
                <p className="text-muted">15 януари 2025</p>
                <p>Анализ на новите европейски директиви за намаляване на емисиите от транспорта и възприемане на превозни средства с нулеви емисии.</p>
              </div>
            </div>
            <div className="card reveal hover-lift">
              <div className="card-body">
                <h3>Интелигентни транспортни системи в България</h3>
                <p className="text-muted">10 януари 2025</p>
                <p>Преглед на възможностите за внедряване на иновативни и технологични решения в областта на транспорта.</p>
              </div>
            </div>
            <div className="card reveal hover-lift">
              <div className="card-body">
                <h3>Адаптивно управление на трафика - добри практики</h3>
                <p className="text-muted">5 януари 2025</p>
                <p>Съвременни подходи за адаптивно управление на трафика и намаляване на времето за пътуване в европейските градове.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/news" className="btn btn-primary">Вижте всички новини</Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={`section ${styles.partnersSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>🤝 Партньори</h2>
          <div className="grid grid-cols-4">
            <div className={`${styles.partnerCard} reveal hover-lift`}>
              <div className={styles.partnerLogo}>МРРБ</div>
              <h3>Министерство на регионалното развитие</h3>
            </div>
            <div className={`${styles.partnerCard} reveal hover-lift`}>
              <div className={styles.partnerLogo}>Столична община</div>
              <h3>Столична община</h3>
            </div>
            <div className={`${styles.partnerCard} reveal hover-lift`}>
              <div className={styles.partnerLogo}>ЕК</div>
              <h3>Европейска комисия</h3>
            </div>
            <div className={`${styles.partnerCard} reveal hover-lift`}>
              <div className={styles.partnerLogo}>Пловдив</div>
              <h3>Община Пловдив</h3>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/partners" className="btn btn-outline">Вижте всички партньори</Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className={`section ${styles.resourcesSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>📚 Ресурси</h2>
          <div className="grid grid-cols-2">
            <div className="card reveal hover-lift">
              <div className="card-header"><h3>Политики и регулации</h3></div>
              <div className="card-body">
                <ul>
                  <li>Европейска стратегия за устойчив и интелигентен транспорт</li>
                  <li>Национална стратегия за развитие на транспорта</li>
                  <li>Европейски директиви за емисиите от транспорта</li>
                  <li>Насоки за адаптивно управление на трафика</li>
                </ul>
              </div>
            </div>
            <div className="card reveal hover-lift">
              <div className="card-header"><h3>Изследвания и анализи</h3></div>
              <div className="card-body">
                <ul>
                  <li>Добри практики в градската мобилност</li>
                  <li>Технологични решения в транспорта</li>
                  <li>Анализ на емисиите от транспорта в България</li>
                  <li>Оптимизация на транспортни връзки и маршрути</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/resources" className="btn btn-outline">Вижте всички ресурси</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>📞 Контакти</h2>
          <div className="grid grid-cols-2">
            <div className="reveal">
              <h3>Свържете се с нас</h3>
              <div className={styles.contactInfo}>
                <p><strong>Адрес:</strong> ул. "Примерна" №10, 1000 София, България</p>
                <p><strong>Телефон:</strong> +359 2 123 4567</p>
                <p><strong>Имейл:</strong> info@amtp.bg</p>
                <p><strong>Работно време:</strong> Пон-Пет, 09:00 - 17:00 ч.</p>
              </div>
              <div className={styles.contactActions}>
                <Link to="/contact" className="btn btn-primary">Изпратете съобщение</Link>
                <Link to="/contact" className="btn btn-outline">Вижте картата</Link>
              </div>
            </div>
            <div className="reveal">
              <div className={styles.mapPlaceholder}>
                <img 
                  src="/src/assets/contact-map.svg" 
                  alt="Местоположение на АМТП на карта"
                  className={styles.mapImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Готови ли сте да работим заедно?</h2>
            <p className={styles.ctaText}>
              Свържете се с нас за консултация или сътрудничество в областта на 
              транспортната мобилност и политики.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Свържете се с нас
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
