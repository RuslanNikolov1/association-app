import React from 'react'
import { Check, Cpu, Gauge, Globe, Leaf, Mail, Map, MapPin, Navigation, Route, Send, TrafficCone, Wind } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Home.module.scss'

const Home: React.FC = () => {
  // Initialize scroll reveal hooks to enable animations on supported sections
  useScrollReveal()
  useScrollReveal()
  useScrollReveal()

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section id="top" className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Асоциация за мобилност и транспортни политики
              </h1>
              <p className={styles.heroSubtitle}>
              Независима експертна организация, работеща за разработването на устойчиви и ефективни решения в сферата на мобилността.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className={`section ${styles.aboutSection}`}>
        <div className={styles.aboutSectionBackground}></div>
        <div className="container">
          <div className={styles.activitiesHeader}>
            <h2 className={styles.activitiesTitle}>За асоциацията</h2>
          </div>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutContainerCard}>
              <div className={styles.aboutHeaderRow}>
                <p className={styles.aboutLeadStatementFullWidth}>
                  Асоциацията работи в сферата на транспорта, мобилността и транспортната инфраструктура, като основната ѝ мисия е да подпомага устойчивото развитие на населените места чрез по-добра свързаност, достъпност, безопасност и ефективност на транспортните системи.
                </p>
              </div>

              <div className={styles.aboutContentColumn}>
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

              <div className={styles.aboutVisualColumn}>
                <div className={styles.aboutImageWrapper}>
                  <img
                    src="/AboutPicture.png"
                    alt="Трамвайна инфраструктура - пример за модерна транспортна система"
                    className={styles.aboutImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Types Section */}
      <section id="project-types" className={`section ${styles.projectTypesSection}`}>
        <div className={styles.projectTypesSectionBackground}></div>
        <div className="container">
          <div className={styles.projectTypesHeader}>
            <h2 className={styles.projectTypesTitle}>Основни проекти и дейности</h2>
          </div>
          
          {/* 2.1 Project Proposals */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>01</div>
              <Send className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardBodyWithImage}>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Подготовка на проектни предложения за европейско и национално финансиране</h3>
                  <p className={styles.projectTypeCardText}>
                    Предлагаме подготовка на проектни предложения в сферата на мобилността, включително разработване на проектни концепции, изготвяне на проектна документация, финансови и социално-икономически анализи за кандидатстване както по национални, така и по европейски програми.
                  </p>
                  <p className={styles.projectTypeCardText} style={{ marginTop: 'var(--spacing-xl)' }}>
                    Освен това активно следим по различни информационни и институционални канали за отворени програми и възможности за финансиране, по които нашите партньори могат да кандидатстват.
                  </p>
                </div>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img src="/Project 1.png" alt="Подготовка на проектни предложения" className={styles.projectTypeCardImage} />
                </div>
              </div>
            </div>
          </div>

          {/* 2.2 Transport Scheme Analyses */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>02</div>
              <Route className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardBodyWithImage}>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Анализи на транспортни схеми</h3>
                  <p className={styles.projectTypeCardText}>
                    Извършваме задълбочени анализи на съществуващи транспортни схеми, включително оценка на маршрутни мрежи, натовареност на линии, връзки между различни видове транспорт и възможности за оптимизация и промени в транспортното обслужване.
                  </p>
                </div>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img src="/Project 2.png" alt="Анализи на транспортни схеми" className={styles.projectTypeCardImage} />
                </div>
              </div>
            </div>
          </div>

          {/* 2.3 Tariff Policies */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>03</div>
              <Gauge className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardBodyWithImage}>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Тарифни политики</h3>
                  <p className={styles.projectTypeCardText}>
                    Анализираме различни модели на тарифна политика в обществения транспорт, включително ефектите от промени в цените, абонаментните карти и интегрираните транспортни системи.
                  </p>
                  <p className={styles.projectTypeCardText}>
                    Към разработените предложения изготвяме и необходимите нормативни промени, които позволяват тяхното практическо прилагане от съответните публични институции.
                  </p>
                </div>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img src="/Project 3.png" alt="Тарифни политики" className={styles.projectTypeCardImage} />
                </div>
              </div>
            </div>
          </div>

          {/* 2.4 Parking Policies */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>04</div>
              <MapPin className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardBodyWithImage}>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Паркинг политики</h3>
                  <p className={styles.projectTypeCardText}>
                    Разработваме анализи и модели за въвеждане или промяна на зони за платено паркиране, буферни паркинги и други инструменти за управление на автомобилния трафик в градска среда.
                  </p>
                  <p className={styles.projectTypeCardText}>
                    В рамките на тези дейности изготвяме финансови, икономически и социални анализи за ефектите от въвеждане или промяна на политики за паркиране, както и предложения за необходимите нормативни изменения.
                  </p>
                </div>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img src="/Project 4.png" alt="Паркинг политики" className={styles.projectTypeCardImage} />
                </div>
              </div>
            </div>
          </div>

          {/* 2.5 Traffic Organization */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>05</div>
              <TrafficCone className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardBodyWithImage}>
                <div className={styles.projectTypeCardTextContent}>
                  <h3 className={styles.projectTypeCardTitle}>Организация на движението</h3>
                  <p className={styles.projectTypeCardText}>
                    Организацията на движението включва разработване на технически решения и мерки за управление на трафика в уличната мрежа с цел подобряване на пропускателната способност, безопасността и ефективността на движението.
                  </p>
                  <p className={styles.projectTypeCardText}>
                    Тази дейност обхваща както разработване на проекти за организация на движението, така и анализи и оптимизация на работата на светофарно регулирани кръстовища, базирани на реални данни за транспортните потоци.
                  </p>
                </div>
                <div className={styles.projectTypeCardImageWrapper}>
                  <img src="/Project 5.png" alt="Организация на движението" className={styles.projectTypeCardImage} />
                </div>
              </div>
            </div>
          </div>

          {/* 2.6 Sustainable Urban Mobility Plans */}
          <div className={styles.projectTypeCard}>
            <div className={styles.projectTypeCardHeader}>
              <div className={styles.projectTypeCardNumber}>06</div>
              <Navigation className={styles.iconBadge} aria-hidden="true" focusable="false" />
              <div className={styles.projectTypeCardLine}></div>
            </div>
            <div className={styles.projectTypeCardBody}>
              <div className={styles.projectTypeCardTextContent}>
                <h3 className={styles.projectTypeCardTitle}>Планове за устойчива градска мобилност (ПУГМ)</h3>
                <p className={styles.projectTypeCardText}>
                  Планът за устойчива градска мобилност (ПУГМ) е стратегически документ за дългосрочно развитие на транспортната система на даден град или регион.
                </p>
                <p className={styles.projectTypeCardText}>
                  Методологията за изготвяне на ПУГМ е разработена от Европейската комисия и се използва широко в европейските градове като инструмент за планиране на устойчив транспорт.
                </p>
                <p className={styles.projectTypeCardText}>
                  Основната цел на ПУГМ е да създаде балансирана, ефективна и екологично устойчива транспортна система, която подобрява достъпността и качеството на живот в градовете.
                </p>

                <div className={styles.projectTypeSubsection}>
                  <h4 className={styles.projectTypeSubtitle}>Какво обхваща ПУГМ</h4>
                  <p className={styles.projectTypeCardText}>Планът разглежда цялостната транспортна система, включително:</p>
                  <ul className={styles.projectTypeList}>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>обществен транспорт;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>пешеходна и велосипедна мобилност;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>автомобилен трафик;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>паркиране;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>логистика и товарни превози;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>интеграция между различните видове транспорт.</span></li>
                  </ul>
                </div>

                <div className={styles.projectTypeSubsection}>
                  <h4 className={styles.projectTypeSubtitle}>Основни принципи на ПУГМ</h4>
                  <p className={styles.projectTypeCardText}>Плановете за устойчива градска мобилност се базират на няколко основни принципа:</p>
                  <ul className={styles.projectTypeList}>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>интегрирано планиране на транспорта и градската среда;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>участие на гражданите и заинтересованите страни;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>базиране на решенията на анализи и данни;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>баланс между различните видове транспорт;</span></li>
                    <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>намаляване на вредните емисии и подобряване на качеството на живот.</span></li>
                  </ul>
                </div>

                <div className={styles.projectTypeSubsection}>
                  <h4 className={styles.projectTypeSubtitle}>Процес на разработване</h4>
                  <p className={styles.projectTypeCardText}>Разработването на ПУГМ включва няколко основни етапа:</p>
                  <ol className={styles.projectTypeList} aria-label="Етапи при изработване на ПУГМ">
                    <li><span>1️⃣ анализ на текущото състояние на транспортната система;</span></li>
                    <li><span>2️⃣ определяне на стратегически цели;</span></li>
                    <li><span>3️⃣ разработване на мерки и сценарии за развитие;</span></li>
                    <li><span>4️⃣ оценка на икономическите, социалните и екологичните ефекти;</span></li>
                    <li><span>5️⃣ изготвяне на план за изпълнение и мониторинг.</span></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Support Section */}
      <section
        className={`section ${styles.institutionalSupportSection}`}
        aria-labelledby="institutional-support-heading"
      >
        <div className="container">
          <div className={styles.activitiesHeader}>
            <h2 id="institutional-support-heading" className={styles.activitiesTitle}>
              Подкрепа на централните и териториалните органи
            </h2>
          </div>
          <div className={`${styles.institutionalSupportCard} reveal`}>
            <div className={styles.institutionalSupportText}>
              <p className={styles.institutionalSupportLead}>
                Асоциацията активно подпомага централните и териториалните органи
                на изпълнителната власт при:
              </p>
              <ul className={styles.institutionalSupportList}>
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
            <div className={styles.institutionalSupportImageWrapper}>
              <img
                src="/Planning.png"
                alt="Планиране на транспортни политики и инфраструктура"
                className={styles.institutionalSupportImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className={`section ${styles.activitiesSection}`} aria-labelledby="activities-heading">
        <div className={styles.activitiesSectionBackground}></div>
        <div className="container">
          <div className={styles.activitiesHeader}>
            <h2 id="activities-heading" className={styles.activitiesTitle}>Области на фокус</h2>
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
                <p className={styles.activityCardText}>Подпомагане развитието на транспортната инфраструктура чрез анализи, предложения и експертни решения за подобряване на уличната мрежа, организацията на движението и безопасността на транспортната система.</p>
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
                <p className={styles.activityCardText}>Анализ и оптимизация на транспортни връзки, маршрутни мрежи и разписания на обществения транспорт с цел по-ефективно обслужване на пътниците и по-добра достъпност до ключови градски зони.</p>
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
                <p className={styles.activityCardText}>Разработване и внедряване на иновативни и технологични решения в транспорта, включително използване на данни, цифрови инструменти, GIS системи и интелигентни транспортни системи за по-ефективно управление на мобилността.</p>
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
                <p className={styles.activityCardText}>Насърчаване на използването на превозни средства с нулеви или ниски емисии чрез анализи, стратегии и политики, подпомагащи прехода към по-екологичен транспорт.</p>
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
                <p className={styles.activityCardText}>Разработване на политики и мерки за намаляване на вредните емисии от транспорта чрез устойчиви транспортни решения, подобряване на обществената мобилност и оптимизация на трафика.</p>
              </div>
            </div>

            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>06</div>
                <Navigation className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Планове и стратегии за градска мобилност</h3>
                <p className={styles.activityCardText}>Разработване и подпомагане приемането на стратегически документи за развитие на транспортната система, включително планове за устойчива градска мобилност, транспортни стратегии и интегрирани политики за всички участници в транспортната система.</p>
              </div>
            </div>

            <div className={`${styles.activityCardInstitutional} reveal`} role="listitem">
              <div className={styles.activityCardHeader}>
                <div className={styles.activityCardNumber}>07</div>
                <Globe className={styles.iconBadge} aria-hidden="true" focusable="false" />
                <div className={styles.activityCardLine}></div>
              </div>
              <div className={styles.activityCardBody}>
                <h3 className={styles.activityCardTitle}>Национални и европейски проекти</h3>
                <p className={styles.activityCardText}>Подготовка и участие в национални и европейски проекти в сферата на транспорта и мобилността, включително разработване на проектни предложения и подпомагане на местни и национални институции при кандидатстване за финансиране.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`section ${styles.teamSection}`}>
        <div className={styles.teamSectionBackground}></div>
        <div className="container">
          <div className={styles.teamHeader}>
            <h2 className={styles.teamTitle}>Нашият екип</h2>
          </div>

          <div className={styles.teamLayout}>
            <div className={styles.teamContentCard}>

              {/* Top two-column row: text left, image right */}
              <div className={styles.teamTopRow}>
                <div className={styles.teamTopTextColumn}>
                  <p className={styles.teamContentText}>
                    Екипът на Асоциацията за мобилност и транспортни политики обединява специалисти с опит в различни области на транспорта, мобилността и публичните политики. Нашата експертиза позволява комплексен подход при разработването на анализи, стратегии и конкретни решения за транспортни системи.
                  </p>
                  <p className={styles.teamContentText}>
                    Екипът включва пътни експерти, транспортни специалисти, икономисти и анализатори, които работят съвместно за разработване на устойчиви и ефективни решения в областта на мобилността.
                  </p>
                </div>
                <div className={styles.teamImageWrapper}>
                  <img
                    src="/People.png"
                    alt="Експертен екип на АМТП"
                    className={styles.teamImage}
                  />
                </div>
              </div>

              {/* Full-width expertise grid below */}
              <div className={styles.teamExpertiseBlock}>
                <p className={styles.teamExpertiseLabel}>Основните области на експертиза на екипа включват:</p>
                <ul className={styles.teamExpertiseGrid}>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>управление на мобилността и транспортното планиране;</span>
                  </li>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>обществен транспорт и политики за паркиране;</span>
                  </li>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>работа с местната власт и публични институции;</span>
                  </li>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>разработване на нормативни и стратегически документи;</span>
                  </li>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>подготовка, управление и изпълнение на проекти;</span>
                  </li>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>пътна безопасност и анализ на транспортни потоци;</span>
                  </li>
                  <li>
                    <Check className={styles.iconBullet} aria-hidden="true" focusable="false" />
                    <span>пътно проектиране и организация на движението.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Activities Section */}
      <section id="core-activities" className={`section ${styles.coreActivitiesSection}`} aria-labelledby="core-activities-heading">
        <div className={styles.coreActivitiesSectionBackground}></div>
        <div className="container">
          <div className={styles.coreActivitiesHeader}>
            <h2 id="core-activities-heading" className={styles.coreActivitiesTitle}>Основни дейности</h2>
          </div>

          <div className={styles.coreActivitiesGrid}>

            {/* 1 - Разработване на проекти */}
            <article className={`${styles.coreActivityCard} reveal`} aria-label="Разработване на проекти за организация на движението">
              <div className={styles.coreActivityCardHeader}>
                <div className={styles.coreActivityIconWrap}>
                  <Navigation className={styles.coreActivityIcon} aria-hidden="true" focusable="false" />
                </div>
                <h3 className={styles.coreActivityTitle}>Разработване на проекти за организация на движението</h3>
              </div>
              <div className={styles.coreActivityBody}>
                <p className={styles.coreActivityText}>Изготвяме предложения и проекти за организация на движението в отделни улици, кръстовища или цели зони на населените места. Тези проекти включват:</p>
                <ul className={styles.coreActivityList}>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>режими на движение;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>пътна сигнализация;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>пътна маркировка;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>организация на паркирането;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>мерки за повишаване на пътната безопасност;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>подобряване на условията за пешеходци и велосипедисти.</span></li>
                </ul>
              </div>
            </article>

            {/* 2 - Анализ на транспортните потоци */}
            <article className={`${styles.coreActivityCard} reveal`} aria-label="Анализ на транспортните потоци">
              <div className={styles.coreActivityCardHeader}>
                <div className={styles.coreActivityIconWrap}>
                  <Gauge className={styles.coreActivityIcon} aria-hidden="true" focusable="false" />
                </div>
                <h3 className={styles.coreActivityTitle}>Анализ на транспортните потоци</h3>
              </div>
              <div className={styles.coreActivityBody}>
                <p className={styles.coreActivityText}>Извършваме преброявания и анализи на транспортните потоци, които включват:</p>
                <ul className={styles.coreActivityList}>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>интензивност на автомобилния трафик;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>разпределение на транспортните потоци по направления;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>пешеходни потоци;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>натоварване на кръстовища;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>анализ на конфликтни точки.</span></li>
                </ul>
                <p className={styles.coreActivityFootnote}>Тези данни служат като основа за разработване на ефективни решения за организация на движението.</p>
              </div>
            </article>

            {/* 3 - Проекти за светофарни уредби */}
            <article className={`${styles.coreActivityCard} reveal`} aria-label="Проекти за светофарни уредби">
              <div className={styles.coreActivityCardHeader}>
                <div className={styles.coreActivityIconWrap}>
                  <TrafficCone className={styles.coreActivityIcon} aria-hidden="true" focusable="false" />
                </div>
                <h3 className={styles.coreActivityTitle}>Проекти за светофарни уредби</h3>
              </div>
              <div className={styles.coreActivityBody}>
                <p className={styles.coreActivityText}>Разработваме предложения за проекти на светофарни уредби, включително:</p>
                <ul className={styles.coreActivityList}>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>определяне на фази на регулиране;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>времетраене на сигналите;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>оптимизиране на цикъла на светофара;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>подобряване на пропускателната способност на кръстовищата.</span></li>
                </ul>
                <p className={styles.coreActivityFootnote}>Решенията се базират на реални данни за транспортните потоци и анализ на натоварванията в различни часови периоди.</p>
              </div>
            </article>

            {/* 4 - Координация на светофарни уредби */}
            <article className={`${styles.coreActivityCard} reveal`} aria-label="Координация на светофарни уредби">
              <div className={styles.coreActivityCardHeader}>
                <div className={styles.coreActivityIconWrap}>
                  <Route className={styles.coreActivityIcon} aria-hidden="true" focusable="false" />
                </div>
                <h3 className={styles.coreActivityTitle}>Координация на светофарни уредби</h3>
              </div>
              <div className={styles.coreActivityBody}>
                <p className={styles.coreActivityText}>Предлагаме разработване на координационни планове за светофарно регулирани кръстовища, които позволяват:</p>
                <ul className={styles.coreActivityList}>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>синхронизация на светофарите по основни булеварди;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>създаване на „зелени вълни";</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>намаляване на времето за пътуване;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>по-ефективно управление на трафика.</span></li>
                </ul>
              </div>
            </article>

            {/* 5 - GIS заснемане */}
            <article className={`${styles.coreActivityCard} reveal`} aria-label="GIS заснемане на знаковото стопанство">
              <div className={styles.coreActivityCardHeader}>
                <div className={styles.coreActivityIconWrap}>
                  <Map className={styles.coreActivityIcon} aria-hidden="true" focusable="false" />
                </div>
                <h3 className={styles.coreActivityTitle}>GIS заснемане на знаковото стопанство</h3>
              </div>
              <div className={styles.coreActivityBody}>
                <p className={styles.coreActivityText}>Извършваме заснемане на съществуващото знаково стопанство и организация на движението чрез GIS платформи. Това включва:</p>
                <ul className={styles.coreActivityList}>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>позициониране на пътни знаци;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>пътна маркировка;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>светофарни уредби;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>други елементи на организацията на движението.</span></li>
                </ul>
                <p className={styles.coreActivityFootnote}>Събраната информация се използва за създаване на цифрови карти и бази данни, които подпомагат управлението на транспортната инфраструктура.</p>
              </div>
            </article>

            {/* 6 - Симулации на трафика */}
            <article className={`${styles.coreActivityCard} reveal`} aria-label="Симулации на трафика">
              <div className={styles.coreActivityCardHeader}>
                <div className={styles.coreActivityIconWrap}>
                  <Cpu className={styles.coreActivityIcon} aria-hidden="true" focusable="false" />
                </div>
                <h3 className={styles.coreActivityTitle}>Симулации на трафика</h3>
              </div>
              <div className={styles.coreActivityBody}>
                <p className={styles.coreActivityText}>Използваме транспортни модели и софтуерни инструменти за симулиране на различни варианти на организация на движението. Чрез симулации могат да се оценят:</p>
                <ul className={styles.coreActivityList}>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>ефектите от промени в организацията на движението;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>влиянието на нови инфраструктурни решения;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>оптимизация на работата на кръстовища;</span></li>
                  <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>намаляване на задръстванията.</span></li>
                </ul>
                <p className={styles.coreActivityFootnote}>Този подход позволява предварителна оценка на различни решения и избор на най-ефективния вариант.</p>
              </div>
            </article>

          </div>

          <div className={styles.coreActivitiesOutcome}>
            <div className={styles.coreActivitiesOutcomeInner}>
              <p className={styles.coreActivitiesOutcomeLabel}>С проектите и анализите за организация на движението се постигат:</p>
              <ul className={styles.coreActivitiesOutcomeList}>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>подобряване на пропускателната способност на уличната мрежа;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>намаляване на задръстванията;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>повишаване на пътната безопасност;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>по-добра работа на светофарно регулираните кръстовища;</span></li>
                <li><Check className={styles.iconBullet} aria-hidden="true" focusable="false" /><span>по-ефективно управление на транспортната система.</span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Completed and Current Projects Section */}
      <section id="experience" className={`section ${styles.completedProjectsSection}`}>
        <div className={styles.completedProjectsSectionBackground}></div>
        <div className="container">
          <div className={styles.completedProjectsHeader}>
            <h2 className={styles.completedProjectsTitle}>Реализирани и текущи проекти</h2>
          </div>
          
          <div className={styles.completedProjectsLayout}>
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
                <li>
                  <MapPin className={styles.iconBullet} aria-hidden="true" focusable="false" />
                  <span>Дупница</span>
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
      <section id="contact" className={`section ${styles.contactSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>
            Контакти
          </h2>
          <div className="grid grid-cols-2">
            <div className="reveal">
              <h3>Свържете се с нас</h3>
              <div className={styles.contactInfo}>
                <p><MapPin className={styles.iconBullet} aria-hidden="true" focusable="false" /><strong>Адрес:</strong>бул. Инж. Иван Иванов № 70, вх. Б,, 1000 София, България</p>
                <p><Mail className={styles.iconBullet} aria-hidden="true" focusable="false" /><strong>Имейл:</strong>amtp.bulgaria@gmail.com</p>
              </div>
            </div>
            <div className="reveal">
              <div className={styles.mapPlaceholder}>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
