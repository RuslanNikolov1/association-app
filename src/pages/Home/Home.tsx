import React from 'react'
import { Link } from 'react-router-dom'
import {
  Accessibility,
  ArrowDownCircle,
  ArrowRight,
  Check,
  Clock,
  Cpu,
  Gauge,
  Globe,
  Landmark,
  Leaf,
  Mail,
  Map,
  MapPin,
  Navigation,
  Network,
  Phone,
  Route,
  Send,
  Shield,
  TrafficCone,
  Users,
  Wind,
} from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import EUFlag from '../../components/Flags/EUFlag'
import BulgarianFlag from '../../components/Flags/BulgarianFlag'
import NetworkNodesDiagram from '../../components/Diagrams/NetworkNodesDiagram'
import TrafficFlowDiagram from '../../components/Diagrams/TrafficFlowDiagram'
import IntersectionSchematic from '../../components/Diagrams/IntersectionSchematic'
import ProcessFlowDiagram from '../../components/Diagrams/ProcessFlowDiagram'
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
              </p>
              <div className={styles.heroActions}>
                <a href="#about-us" className="btn btn-primary btn-lg">
                  <ArrowDownCircle className={styles.iconInline} aria-hidden="true" focusable="false" />
                  Научете повече
                </a>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <Mail className={styles.iconInline} aria-hidden="true" focusable="false" />
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
      <section id="about-us" className={`section ${styles.aboutSection}`}>
        <div className={styles.aboutSectionBackground}></div>
        <div className="container">
          <div className={styles.aboutLayout}>
            {/* Left Column - Text (60%) */}
            <div className={styles.aboutTextColumn}>
              <div className={styles.aboutOverline}>ЗА АСОЦИАЦИЯТА</div>
              
              <p className={styles.aboutLeadStatement}>
                Асоциацията работи в сферата на транспорта, мобилността и транспортната инфраструктура, като основната ѝ мисия е да подпомага устойчивото развитие на населените места чрез по-добра свързаност, достъпност, безопасност и ефективност на транспортните системи.
              </p>
              
              <div className={styles.aboutDivider}></div>
              
              <p className={styles.aboutBodyText}>
                АМТП разработва, изпълнява и подпомага изпълнението на:
              </p>
              
              <ul className={styles.aboutCustomList}>
                <li>Стратегии</li>
                <li>Програми</li>
                <li>Планове</li>
                <li>Проекти и аналитични документи</li>
              </ul>
              
              <p className={styles.aboutClosingLine}>
                от местно, регионално и национално значение, свързани с транспорт и мобилност.
              </p>
            </div>
            
            {/* Right Column - Institutional Visual Element (40%) */}
            <div className={styles.aboutVisualColumn}>
              <div className={styles.aboutImageWrapper}>
                <img 
                  src="/tram.jpg" 
                  alt="Трамвайна инфраструктура - пример за модерна транспортна система"
                  className={styles.aboutImage}
                />
              </div>
              <div className={styles.aboutInstitutionalCard}>
                <div className={styles.aboutCardHeader}>
                  <Landmark className={styles.iconBadge} aria-hidden="true" focusable="false" />
                  <h3 className={styles.aboutCardTitle}>Мисия</h3>
                </div>
                <div className={styles.aboutCardContent}>
                  <div className={styles.aboutCardPrinciple}>
                    <Network className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>Свързаност</span>
                  </div>
                  <div className={styles.aboutCardPrinciple}>
                    <Accessibility className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>Достъпност</span>
                  </div>
                  <div className={styles.aboutCardPrinciple}>
                    <Shield className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>Безопасност</span>
                  </div>
                  <div className={styles.aboutCardPrinciple}>
                    <Gauge className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>Ефективност</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className={`section ${styles.activitiesSection}`} aria-labelledby="activities-heading">
        <div className={styles.activitiesSectionBackground}></div>
        <div className="container">
          <div className={styles.activitiesHeader}>
            <div className={styles.activitiesOverline}>ОБЛАСТИ НА ДЕЙНОСТ</div>
            <h2 id="activities-heading" className={styles.activitiesTitle}>Дейности и области на фокус</h2>
          </div>
          
          <div className={styles.activitiesGrid} role="list" aria-label="Списък с дейности и области на фокус">
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>01</div>
                <Navigation className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Подобряване на транспортната инфраструктура</h3>
                <p className={styles.activityCardText}>Подобряване на транспортната инфраструктура и организацията на движението.</p>
              </div>
            </div>
            
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>02</div>
                <Route className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Оптимизация на транспортни връзки</h3>
                <p className={styles.activityCardText}>Оптимизация на транспортни връзки, маршрути и разписания.</p>
              </div>
            </div>
            
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>03</div>
                <Cpu className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Иновативни и технологични решения</h3>
                <p className={styles.activityCardText}>Разработване и внедряване на иновативни и технологични решения в транспорта.</p>
              </div>
            </div>
            
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>04</div>
                <Leaf className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Превозни средства с нулеви емисии</h3>
                <p className={styles.activityCardText}>Насърчаване на превозни средства с нулеви или ниски емисии.</p>
              </div>
            </div>
            
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>05</div>
                <Wind className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Намаляване на вредните емисии</h3>
                <p className={styles.activityCardText}>Прилагане на политики за намаляване на вредните емисии от транспорта.</p>
              </div>
            </div>
            
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>06</div>
                <TrafficCone className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Адаптивно управление на трафика</h3>
                <p className={styles.activityCardText}>Адаптивно управление на трафика и мерки за намаляване на времето за пътуване.</p>
              </div>
            </div>
            
            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>07</div>
                <Globe className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Европейски и световни практики</h3>
                <p className={styles.activityCardText}>Интегриране на добри европейски и световни практики в местните транспортни политики.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.activitiesSupportCard}>
            <div className={styles.supportCardContent}>
              <div className={styles.supportCardHeader}>
                <Landmark className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <h3 className={styles.supportCardTitle}>Подкрепа на централните и териториалните органи</h3>
              </div>
              <div className={styles.supportCardLayout}>
                <div className={styles.supportCardTextContent}>
                  <p className={styles.supportCardText}>Асоциацията активно подпомага централните и териториалните органи на изпълнителната власт при:</p>
                  <ul className={styles.supportCardList}>
                    <li>
                      <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                      <span>подобряване качеството на транспортните услуги;</span>
                    </li>
                    <li>
                      <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                      <span>формиране и прилагане на ефективни транспортни и паркинг политики;</span>
                    </li>
                    <li>
                      <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                      <span>стратегическо планиране и проектна подготовка.</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.supportCardImageWrapper}>
                  <img 
                    src="/services-illustration.svg" 
                    alt="Илюстрация на транспортни услуги и мрежа"
                    className={styles.supportCardImage}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.activitiesFooter}>
            <Link to="/activities" className={styles.activitiesLink}>
              Вижте всички дейности
              <ArrowRight className={styles.iconInline} aria-hidden="true" focusable="false" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`section ${styles.teamSection}`}>
        <div className={styles.teamSectionBackground}></div>
        <div className="container">
          <div className={styles.teamHeader}>
            <div className={styles.teamOverline}>ЕКСПЕРТИЗА</div>
            <h2 className={styles.teamTitle}>Нашият екип</h2>
          </div>
          
          <div className={styles.teamLayout}>
            <div className={styles.teamImageWrapper}>
              <img 
                src="/team-illustration.svg" 
                alt="Експертен екип на АМТП"
                className={styles.teamImage}
              />
            </div>
            <div className={styles.teamContentCard}>
              <div className={styles.teamContentHeader}>
                <Users className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <h3 className={styles.teamContentTitle}>Експертна структура</h3>
              </div>
              <p className={styles.teamContentText}>
                Екипът на АМТП включва експерти с дългогодишен практически опит в:
              </p>
              <ul className={styles.teamExpertiseList}>
                <li>
                  <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>управление на мобилността;</span>
                </li>
                <li>
                  <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>обществен транспорт и паркиране;</span>
                </li>
                <li>
                  <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>работа с местната власт;</span>
                </li>
                <li>
                  <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>разработване на нормативни и стратегически документи;</span>
                </li>
                <li>
                  <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>управление и изпълнение на проекти.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Types Section */}
      <section className={`section ${styles.projectTypesSection}`}>
        <div className={styles.projectTypesSectionBackground}></div>
        <div className="container">
          <div className={styles.projectTypesHeader}>
            <div className={styles.projectTypesOverline}>ПРОЕКТНИ ТИПОВЕ</div>
            <h2 className={styles.projectTypesTitle}>Основни типове проекти и дейности</h2>
          </div>
          
          {/* 2.1 Financial and Social Analyses */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>01</div>
              <Gauge className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardLayout}>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Финансови и социални анализи на транспортни и паркинг политики</h3>
                  <p className={styles.projectTypeCardText}>АМТП извършва задълбочени финансови, икономически и социални анализи, свързани с:</p>
              <ul className={styles.projectTypeList}>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>транспортни схеми;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>тарифни политики в обществения транспорт;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>въвеждане или промяна на зони за платено паркиране;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>ефекти от различни модели на организация на движението.</span></li>
              </ul>
                  <p className={styles.projectTypeCardText} style={{ marginTop: 'var(--spacing-xl)' }}>Тези анализи имат за цел:</p>
                  <ul className={styles.projectTypeList}>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>да оценят реалните ползи и разходи от прилагането на конкретни политики;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>да подпомогнат вземането на информирани управленски решения;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>да осигурят аргументация пред общински съвети, администрации и граждани.</span></li>
                  </ul>
                </div>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img 
                    src="/istockphoto-501619427-612x612-removebg-preview.png" 
                    alt="Анализ и планиране на транспортни политики"
                    className={styles.projectTypeCardImage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2.2 Project Proposals */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>02</div>
              <Send className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardLayoutReversed}>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img 
                    src="/transport-hero.svg" 
                    alt="Проектни предложения и финансиране"
                    className={styles.projectTypeCardImage}
                  />
                </div>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Подготовка на проектни предложения за европейско и национално финансиране</h3>
                  <p className={styles.projectTypeCardText}>Асоциацията подпомага общини и държавни структури при:</p>
              <ul className={styles.projectTypeList}>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>разработване на проектни предложения;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>попълване на апликационни форми;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>структуриране на проектната логика и дейности;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>изготвяне на анализ „разходи–ползи" (АРП);</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>пазарни проучвания и обосновки;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>съответствие с изискванията на конкретните финансиращи програми.</span></li>
              </ul>
                  <p className={styles.projectTypeCardText} style={{ marginTop: 'var(--spacing-xl)' }}>Работата обхваща както европейски програми, така и национални източници на финансиране.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2.3 GPOD */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>03</div>
              <TrafficCone className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <h3 className={styles.projectTypeCardTitle}>Генерален план за организация на движението (ГПОД)</h3>

              <div className={styles.gpodReport} aria-label="Експертен преглед: ГПОД">
                <div className={styles.projectTypeSubsection}>
                  <h4 className={styles.projectTypeSubtitle}>Какво е ГПОД?</h4>
                  <p className={styles.projectTypeCardText}>
                    <span className={styles.gpodTerm}>Генералният план за организация на движението (ГПОД)</span> е стратегически и технически документ,
                    регламентиран с <span className={styles.gpodTerm}>Наредба № РД-02-20-2</span> от 24.10.2022 г.
                  </p>

                  <dl className={styles.gpodDefinitions}>
                    <div className={styles.gpodDefinitionRow}>
                      <dt className={styles.gpodDefinitionTerm}>Определя</dt>
                      <dd className={styles.gpodDefinitionValue}>
                        принципите, мерките, схемите и правилата за организация на движението по пътищата, отворени за обществено ползване.
                      </dd>
                    </div>
                    <div className={styles.gpodDefinitionRow}>
                      <dt className={styles.gpodDefinitionTerm}>Обхват</dt>
                      <dd className={styles.gpodDefinitionValue}>
                        населено място или територия, включително ключови улици, кръстовища, зони с конфликтни точки и режим на движение.
                      </dd>
                    </div>
                  </dl>

                  <NetworkNodesDiagram className={styles.gpodDiagramFull} variant="full" />

                  <div className={styles.gpodCallouts} role="list" aria-label="Ключови акценти">
                    <aside className={styles.gpodCallout} role="listitem">
                      <h5 className={styles.gpodCalloutTitle}>Дефиниции и термини</h5>
                      <p className={styles.gpodCalloutText}>
                        <span className={styles.gpodTerm}>ГПОД</span> работи като “рамка”, върху която стъпват последващите схеми, проекти и решения на общината.
                      </p>
                      <TrafficFlowDiagram className={styles.gpodDiagramInline} variant="inline" />
                    </aside>
                    <aside className={styles.gpodCallout} role="listitem">
                      <h5 className={styles.gpodCalloutTitle}>Нормативна проследимост</h5>
                      <p className={styles.gpodCalloutText}>
                        Всяка препоръка се обвързва с конкретни цели, критерии и изпълнимост — така документът е защитим пред институции и общественост.
                      </p>
                      <IntersectionSchematic className={styles.gpodDiagramInline} variant="inline" />
                    </aside>
                  </div>
                </div>

              <div className={styles.projectTypeSubsection}>
                <h4 className={styles.projectTypeSubtitle}>Как изглежда процесът (схема)</h4>
                <ol className={styles.gpodTimeline} aria-label="Етапи при изработване на ГПОД">
                  <li className={styles.gpodTimelineItem}>
                    <div className={styles.gpodTimelineMarker} aria-hidden="true" />
                    <div className={styles.gpodTimelineContent}>
                      <h5 className={styles.gpodTimelineTitle}>1) Данни и обследване</h5>
                      <p className={styles.gpodTimelineText}>Трафик, ПТП, потоци, паркиране, ОТ, пешеходна/вело среда, теренни проверки.</p>
                    </div>
                  </li>
                  <li className={styles.gpodTimelineItem}>
                    <div className={styles.gpodTimelineMarker} aria-hidden="true" />
                    <div className={styles.gpodTimelineContent}>
                      <h5 className={styles.gpodTimelineTitle}>2) Анализ и проблемни зони</h5>
                      <p className={styles.gpodTimelineText}>Конфликтни точки, капацитет, скоростни режими, риск за уязвими участници.</p>
                    </div>
                  </li>
                  <li className={styles.gpodTimelineItem}>
                    <div className={styles.gpodTimelineMarker} aria-hidden="true" />
                    <div className={styles.gpodTimelineContent}>
                      <h5 className={styles.gpodTimelineTitle}>3) Схеми и мерки</h5>
                      <p className={styles.gpodTimelineText}>Организация на движението, сигнализация/маркировка, ОТ приоритет, паркинг решения.</p>
                    </div>
                  </li>
                  <li className={styles.gpodTimelineItem}>
                    <div className={styles.gpodTimelineMarker} aria-hidden="true" />
                    <div className={styles.gpodTimelineContent}>
                      <h5 className={styles.gpodTimelineTitle}>4) План за изпълнение</h5>
                      <p className={styles.gpodTimelineText}>Приоритизация, бюджет/етапност, индикатори, мониторинг и актуализация на мерките.</p>
                    </div>
                  </li>
                </ol>
                <ProcessFlowDiagram className={styles.gpodDiagramFull} variant="full" />
              </div>

              <div className={styles.projectTypeSubsection}>
                <h4 className={styles.projectTypeSubtitle}>Защо се изработва ГПОД?</h4>
                <div className={styles.gpodTwoColumn}>
                  <div>
                    <p className={styles.projectTypeCardText}>ГПОД се разработва с цел:</p>
                    <ul className={styles.projectTypeList}>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>повишаване на пътната безопасност;</span></li>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>ясно регламентиране на движението на всички участници – автомобили, пешеходци, велосипедисти, обществен транспорт;</span></li>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>оптимизиране на трафика и намаляване на конфликтните точки;</span></li>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>създаване на предвидима и разбираема транспортна среда.</span></li>
                    </ul>
                    <TrafficFlowDiagram className={styles.gpodDiagramFull} variant="full" />
                  </div>
                  <aside className={styles.gpodCalloutEmphasis} aria-label="Връзка с пътната безопасност">
                    <h5 className={styles.gpodCalloutTitle}>Връзка с пътната безопасност</h5>
                    <ul className={styles.projectTypeList}>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>идентифицира рискови участъци и зони с концентрация на ПТП;</span></li>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>предлага мерки за ограничаване на скоростта и конфликтите;</span></li>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>въвежда адекватна сигнализация, маркировка и режими на движение;</span></li>
                      <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>осигурява по-добра защита на уязвимите участници в движението.</span></li>
                    </ul>
                    <IntersectionSchematic className={styles.gpodDiagramFull} variant="full" />
                  </aside>
                </div>
              </div>

              <p className={styles.projectTypeCardText} style={{ marginTop: 'var(--spacing-xl)' }}>
                На практика <span className={styles.gpodTerm}>ГПОД</span> е основният инструмент, чрез който една община планира и управлява безопасността и
                ефективността на движението в дългосрочен план.
              </p>
              <p className={styles.projectTypeCardHighlight}>АМТП разработва ГПОД в пълно съответствие с нормативната уредба и добрите европейски практики.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed and Current Projects Section */}
      <section className={`section ${styles.completedProjectsSection}`}>
        <div className={styles.completedProjectsSectionBackground}></div>
        <div className="container">
          <div className={styles.completedProjectsHeader}>
            <div className={styles.completedProjectsOverline}>ПРОЕКТЕН ОПИТ</div>
            <h2 className={styles.completedProjectsTitle}>Реализирани и текущи проекти</h2>
          </div>
          
          <div className={styles.completedProjectsLayout}>
            <div className={styles.completedProjectsImageGrid}>
              <div className={styles.completedProjectsImageItem}>
                <img 
                  src="/bus.jpg" 
                  alt="Градски автобус - пример за обществен транспорт"
                  className={styles.completedProjectsImage}
                />
              </div>
              <div className={styles.completedProjectsImageItem}>
                <img 
                  src="/trolley.jpg" 
                  alt="Тролейбус - екологичен градски транспорт"
                  className={styles.completedProjectsImage}
                />
              </div>
              <div className={styles.completedProjectsImageItem}>
                <img 
                  src="/Chariot-Motors-e-buses_new-1.png" 
                  alt="Електрически автобуси - бъдещето на градския транспорт"
                  className={styles.completedProjectsImage}
                />
              </div>
            </div>
            <div className={styles.completedProjectsCard}>
              <div className={styles.completedProjectsCardHeader}>
                <MapPin className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <h3 className={styles.completedProjectsCardTitle}>Географски обхват</h3>
              </div>
              <p className={styles.completedProjectsCardText}>
                Асоциацията има опит в изпълнението на проекти в редица български градове, сред които:
              </p>
              <ul className={styles.completedProjectsList}>
                <li>
                  <MapPin className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>Пловдив</span>
                </li>
                <li>
                  <MapPin className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>Русе</span>
                </li>
                <li>
                  <MapPin className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>Самоков</span>
                </li>
              </ul>
              <p className={styles.completedProjectsCardText} style={{ marginTop: 'var(--spacing-xl)' }}>
                Проектите обхващат както аналитични и стратегически дейности, така и реално приложими решения за подобряване на транспорта и мобилността.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>
            <Phone className={styles.iconTitle} aria-hidden="true" focusable="false" />
            Контакти
          </h2>
          <div className="grid grid-cols-2">
            <div className="reveal">
              <h3>Свържете се с нас</h3>
              <div className={styles.contactInfo}>
                <p><MapPin className={styles.iconBullet} aria-hidden="true" focusable="false" /><strong>Адрес:</strong> ул. "Примерна" №10, 1000 София, България</p>
                <p><Phone className={styles.iconBullet} aria-hidden="true" focusable="false" /><strong>Телефон:</strong> +359 2 123 4567</p>
                <p><Mail className={styles.iconBullet} aria-hidden="true" focusable="false" /><strong>Имейл:</strong> info@amtp.bg</p>
                <p><Clock className={styles.iconBullet} aria-hidden="true" focusable="false" /><strong>Работно време:</strong> Пон-Пет, 09:00 - 17:00 ч.</p>
              </div>
              <div className={styles.contactActions}>
                <Link to="/contact" className="btn btn-primary">
                  <Send className={styles.iconInline} aria-hidden="true" focusable="false" />
                  Изпратете съобщение
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <Map className={styles.iconInline} aria-hidden="true" focusable="false" />
                  Вижте картата
                </Link>
              </div>
            </div>
            <div className="reveal">
              <div className={styles.mapPlaceholder}>
                <img 
                  src="/contact-map.svg" 
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
                <ArrowRight className={styles.iconInline} aria-hidden="true" focusable="false" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
