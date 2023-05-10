import styles from './About.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.topSection}>
          <div>
            <h2>GET TO KNOW US</h2>
            <span></span>
            <h3>Our Commitment</h3>
            <p>
              {`At SNC Tag and Title, our customers are at the heart of everything we do. We prioritize your satisfaction and strive to exceed your expectations at every turn. Our knowledgeable and friendly team is dedicated to providing personalized attention and guidance throughout your tag and title journey. We take the time to understand your unique needs and ensure that you receive the most appropriate solutions, tailored to your specific situation.`}
            </p>
            <p>{`Please review our list of Services for more information.`}</p>
            <Link href="/services" className={styles.buttonLink}>
              OUR SERVICES
            </Link>
          </div>
          <div className={styles.topSectionImageGrid}>
            <div className={styles.blueBox}></div>
            <div className={styles.topSectionImageWrapper}>
              {/* <Image
              alt="business-people-meeting-business-park"
              src={businessPeople}
              // fill
              sizes="100vw"
            /> */}
            </div>
          </div>
        </div>
        <div>
          <h2>OUR PEOPLE</h2>
          <span></span>
          <p>
            {`Welcome to SNC Tag and Title, your trusted partner for all your tag and title needs. We are a dedicated team of professionals committed to providing exceptional services in the field of vehicle registration, title transfers, and related documentation. With our expertise and unwavering commitment to customer satisfaction, we strive to make your tag and title experience efficient, hassle-free, and enjoyable.`}
          </p>
          <Link href="/contact" className={styles.buttonLink}>
            CONTACT US
          </Link>
        </div>
        <div className={styles.personSection}>
          <h2>The Team</h2>
          <span></span>
          <div className={styles.personSectionGrid}>
            <div className={styles.personImageWrapper}>
              {/* <Image alt="Clay Geilmann" src={president} sizes="100vw" /> */}
            </div>
            <div>
              <p>
                {`At SNC Tag and Title, our motto is simple yet powerful: "We are honest, transparent, and fast." These core values drive everything we do and form the foundation of our business philosophy. `}
              </p>
              <p>
                {`We firmly believe that honesty and transparency are the cornerstones of building strong, lasting relationships with our clients.`}
              </p>
              <p>
                {`We value your trust and ensure that every interaction with our team is characterized by integrity, openness, and sincerity.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
