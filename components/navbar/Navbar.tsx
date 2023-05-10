import styles from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/images/png/logo.png'
import PhoneIcon from 'public/svgs/PhoneIcon'
import EmailIcon from 'public/svgs/EmailIcon'
import LocationIcon from 'public/svgs/LocationIcon'
import Hamburger from 'components/Hamburger/Hamburger'

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerBurger}>
          <Hamburger />
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerItemIcon}>
            <PhoneIcon />
          </div>
          <Link
            type={'tel'}
            href={'tel:+2402496023'}
            className={styles.bannerItemText}
          >
            (240) 249-6023
          </Link>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerItemIcon}>
            <LocationIcon />
          </div>
          <Link
            href={
              'https://www.google.com/maps/place/38588+Brett+Wy+%232,+Mechanicsville,+MD+20659/@38.4448182,-76.744591,17z/'
            }
            className={styles.bannerItemText}
          >
            38588 Brett Way Suite 2, Mechanicsville, MD 20659
          </Link>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerItemIcon}>
            <EmailIcon />
          </div>
          <Link
            href={'mailto:sncservllc@gmail.com'}
            className={styles.bannerItemText}
          >
            sncservllc@gmail.com
          </Link>
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src={Logo}
            alt="Logo"
            className={styles.logoImage}
            height={115}
            width={210}
          />
        </Link>
      </div>
      <div className={styles.linkWrapper}>
        <Link href={'/about'} className={styles.link}>
          About
        </Link>
        <Link href={'/services'} className={styles.link}>
          Services
        </Link>
        <Link href={'/forms'} className={styles.link} style={{ width: '150px' }}>
          MVA Forms
        </Link>
        <Link href={'/contact'} className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
