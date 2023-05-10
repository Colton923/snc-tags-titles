import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/images/png/logo.png'
import emailIcon from 'public/svgs/envelope-solid.svg'
import locationIcon from 'public/svgs/location-dot-solid.svg'
import phoneIcon from 'public/svgs/mobile-screen-solid.svg'

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerTopSection}>
        <div className={styles.logo}>
          <Image src={logo} alt="snc-logo" />
        </div>
        <div className={styles.navigationWrapper}>
          <p>NAVIGATION</p>
          <div className={styles.line}></div>
          <div className={styles.navLinks}>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/forms">FORMS</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
        <div className={styles.contactInfoWrapper}>
          <p>GET IN TOUCH</p>
          <div className={styles.line}></div>
          <div className={styles.contactItemWrapper}>
            <Image
              src={emailIcon}
              alt="email icon"
              width={35}
              height={35}
              className={styles.contactItemIcon}
            />
            <span>sncservllc@gmail.com</span>
          </div>
          <div className={styles.contactItemWrapper}>
            <Image
              src={phoneIcon}
              alt="phone icon"
              width={35}
              height={35}
              className={styles.contactItemIcon}
            />
            <span>(240) 249-6023</span>
          </div>
          <div className={styles.contactItemWrapper}>
            <Image
              src={locationIcon}
              alt="location icon"
              width={35}
              height={35}
              className={styles.contactItemIcon}
            />
            <div>
              <span>SNC Services, LLC - Tag & Title</span>
              <span>38588 Brett Way Suite 2</span>
              <span> Mechanicsville, MD 20659</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomSection}>
        <small>{`Copyright © 2023 SNC Services. All rights reserved.`}</small>
      </div>
    </footer>
  )
}

export default Footer
