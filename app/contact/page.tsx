import ContactForm from 'components/contactForm/ContactForm'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.contactPageWrapper}>
      <h1>{`Let's Connect!`}</h1>
      <p>Discuss your project with a team member by filling out our form.</p>
      <ContactForm />

    </div>
  )
 
}
