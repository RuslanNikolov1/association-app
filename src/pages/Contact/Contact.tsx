import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
  type ContactForm = {
    name: string
    email: string
    phone?: string
    organization?: string
    subject: string
    message: string
  }

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<ContactForm>({
    mode: 'onTouched'
  })

  const onSubmit = async (_data: ContactForm) => {
    await new Promise(resolve => setTimeout(resolve, 800))
    reset()
  }

  return (
    <div className={styles.contact}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Контакти</h1>
          <p className={styles.pageSubtitle}>
            Свържете се с нас за консултации, сътрудничество или въпроси
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Свържете се с нас</h2>
              <p className={styles.contactDescription}>
                Нашият екип е готов да отговори на вашите въпроси и да ви помогне с 
                вашите нужди в областта на транспортната мобилност и политики.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <span>📧</span>
                  </div>
                  <div className={styles.contactText}>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:info@amtp.bg" className={styles.contactLink}>
                        info@amtp.bg
                      </a>
                    </p>
                    <p>
                      <a href="mailto:projects@amtp.bg" className={styles.contactLink}>
                        projects@amtp.bg
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <span>📞</span>
                  </div>
                  <div className={styles.contactText}>
                    <h3>Телефон</h3>
                    <p>
                      <a href="tel:+359123456789" className={styles.contactLink}>
                        +359 123 456 789
                      </a>
                    </p>
                    <p className={styles.contactNote}>
                      Работно време: 9:00 - 18:00 (Понеделник - Петък)
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <span>📍</span>
                  </div>
                  <div className={styles.contactText}>
                    <h3>Адрес</h3>
                    <p>ул. "Витоша" 1</p>
                    <p>1000 София, България</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <span>🌐</span>
                  </div>
                  <div className={styles.contactText}>
                    <h3>Социални мрежи</h3>
                    <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                        LinkedIn
                      </a>
                      <a href="#" className={styles.socialLink} aria-label="Twitter">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>Изпратете ни съобщение</h2>
              
              {isSubmitSuccessful && (
                <div className="alert alert-success">
                  Благодарим ви! Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Име и фамилия *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Моля, въведете вашето име.' })}
                    className="form-input"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <div id="name-error" role="alert" className="text-small text-muted">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email адрес *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Моля, въведете email.',
                      pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Моля, въведете валиден email.' }
                    })}
                    className="form-input"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <div id="email-error" role="alert" className="text-small text-muted">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization" className="form-label">
                    Организация
                  </label>
                  <input
                    type="text"
                    id="organization"
                    {...register('organization')}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Тема *
                  </label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Моля, изберете тема.' })}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Изберете тема</option>
                    <option value="consultation">Консултация</option>
                    <option value="cooperation">Сътрудничество</option>
                    <option value="project">Проект</option>
                    <option value="question">Въпрос</option>
                    <option value="other">Друго</option>
                  </select>
                  {errors.subject && (
                    <div id="subject-error" role="alert" className="text-small text-muted">
                      {errors.subject.message}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Съобщение *
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Моля, въведете съобщение.' })}
                    className="form-input form-textarea"
                    rows={5}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <div id="message-error" role="alert" className="text-small text-muted">
                      {errors.message.message}
                    </div>
                  )}
                </div>

                <div className={styles.formActions}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Изпращане...' : 'Изпрати съобщение'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`section ${styles.mapSection}`}>
        <div className="container">
          <h2 className={`text-center ${styles.sectionTitle}`}>Нашето местоположение</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapResponsive}>
              <iframe
                title="АМТП на картата"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.097884226969!2d23.318969!3d42.695432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8576b9c8c1cf%3A0x0!2z0YPQuy4g4pet4oCe0JLQvtCy0LDRgNC40Y8gMSwgMTAwMCBTb2ZpYSwgQnVsZ2FyaWE!5e0!3m2!1sen!2sbg!4v1700000000000!5m2!1sen!2sbg"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
