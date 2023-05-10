import styles from 'styles/App.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.somethingCool}>Skip</h2>
      <h2 className={styles.somethingCool}>The </h2>
      <h2 className={styles.somethingCool}>Line</h2>
      <Link
        href={'tel:+12402496023'}
        style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'var(--blue)',
          borderRadius: '5px',
          width: '200px',
          textAlign: 'center',
          transform: 'translate(50%, -50%)',
        }}
      >
        <p>Call Us Now</p>
      </Link>
      <h2>Who are we?</h2>
      <p>
        SNC Tag & Title is a family owned and operated business that has been serving
        the Maryland area for over 20 years. We are a full service tag and title
        agency that can handle all of your vehicle needs. We pride ourselves on
        providing fast, friendly, and reliable service to all of our customers. We
        are conveniently located in the heart of Mechanicsville, Maryland and are
        open 6 days a week. We are also available for after hours appointments. We
        look forward to serving you!
      </p>
      <h2>What can we do for you?</h2>
      <p>
        We offer a wide range of services to meet all of your vehicle needs. We
        specialize in tag and title services, but we also offer a variety of other
        services including notary services, insurance, and more. Please see our
        services page for more information.
      </p>
      <h2>Why choose us?</h2>
      <p>
        We are honest, transparent, and fast. These core values drive everything we
        do and form the foundation of our business philosophy. We firmly believe that
        honesty and transparency are the cornerstones of building strong, lasting
        relationships with our clients. We value your trust and ensure that every
        interaction with our team is characterized by integrity, openness, and
        sincerity.
      </p>
      <Link
        href={'/services'}
        style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'var(--white)',
          borderRadius: '5px',
          width: '100%',
          textAlign: 'center',
          height: '150px',
        }}
      >
        <h2>Our Services</h2>
      </Link>
    </div>
  )
}
