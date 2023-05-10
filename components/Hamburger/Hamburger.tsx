'use client'

import styles from './Hamburger.module.scss'
import { useState } from 'react'
import { useSiteContext } from 'components/context/SiteContext'
import Link from 'next/link'

export default function Hamburger() {
  const { isMobileNavOverlayed, setIsMobileNavOverlayed } = useSiteContext()
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
    setIsMobileNavOverlayed(!isMobileNavOverlayed)
  }

  return (
    <>
      <div className={isMobileNavOverlayed ? styles.mobileOverlay : ''}>
        <Link
          href={'/about'}
          className={!isMobileNavOverlayed ? styles.link : styles.activeLink}
        >
          About
        </Link>
        <Link
          href={'/services'}
          className={!isMobileNavOverlayed ? styles.link : styles.activeLink}
        >
          Services
        </Link>
        <Link
          href={'/forms'}
          className={!isMobileNavOverlayed ? styles.link : styles.activeLink}
        >
          MVA Forms
        </Link>
        <Link
          href={'/contact'}
          className={!isMobileNavOverlayed ? styles.link : styles.activeLink}
        >
          Contact
        </Link>
      </div>
      <div onClick={handleClick} className={styles.wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 40 40"
          className={clicked ? styles.clicked : styles.unclicked}
        >
          <path fill="#dff0fe" d="M1.5 17.5H38.5V22.5H1.5z"></path>
          <path fill="#4788c7" d="M38,18v4H2v-4H38 M39,17H1v6h38V17L39,17z"></path>
          <path
            className={styles.lineTwo}
            fill="#dff0fe"
            d="M1.5 7.5H38.5V12.5H1.5z"
          ></path>
          <path
            className={styles.lineTwo}
            fill="#4788c7"
            d="M38,8v4H2V8H38 M39,7H1v6h38V7L39,7z"
          ></path>

          <g>
            <path
              className={styles.lineOne}
              fill="#dff0fe"
              d="M1.5 27.5H38.5V32.5H1.5z"
            ></path>
            <path
              className={styles.lineOne}
              fill="#4788c7"
              d="M38,28v4H2v-4H38 M39,27H1v6h38V27L39,27z"
            ></path>
          </g>
        </svg>
      </div>
    </>
  )
}
