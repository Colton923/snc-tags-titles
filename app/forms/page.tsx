import styles from './Forms.module.scss'
import Link from 'next/link'

type PDFs = {
  name: string
  pdfSrc: string
}

export default function PDFss() {
  return (
    <div className={styles.pageWrapper}>
      <h1>Forms</h1>
      <div className={styles.pageContentWrapper}>
        <PDFs
          pdfSrc={'pdf/VR-005.pdf'}
          name="VR-005:Application for Certificate of Title"
        />
        <PDFs
          pdfSrc={'pdf/VR-008.pdf'}
          name="VR–O08: Application for New Plates/Stickers & Transfer of Plates or Non-Title Trailers"
        />
        <PDFs
          pdfSrc={'pdf/VR-009.pdf'}
          name="VR-009: Application for Substitute Plates/Stickers/Duplicate Registration Card"
        />
        <PDFs
          pdfSrc={'pdf/VR-018.pdf'}
          name="VR 018: Application for Duplicate Certificate of Title"
        />
        <PDFs
          pdfSrc={'pdf/VR-021.pdf'}
          name="VR-021: Application for Registration Plate Refund"
        />
        <PDFs
          pdfSrc={'pdf/VR-096.pdf'}
          name="VR-096: Application for Historic or Street Rod Registration"
        />
        <PDFs
          pdfSrc={'pdf/VR-103.pdf'}
          name="VR-103: Application for Maryland Gift Certification"
        />
        <PDFs pdfSrc={'pdf/VR-129.pdf'} name="VR-129: Temporary Inspection Waiver" />
        <PDFs
          pdfSrc={'pdf/VR-154.pdf'}
          name="VR-154: Application for Maryland Change of Address and/or Name"
        />
        <PDFs
          pdfSrc={'pdf/VR-164.pdf'}
          name="VR-164: Application for Special Registration Plates"
        />
        <PDFs
          pdfSrc={'pdf/VR-210.pdf'}
          name="VR-210: Application for Maryland Parking Placards/License Plates for Individuals with a Disability"
        />
        <PDFs
          pdfSrc={'pdf/VR-217.pdf'}
          name="VR-217: Security Interest Filing Statement"
        />
        <PDFs
          pdfSrc={'pdf/VR-302.pdf'}
          name="VR-302: Application for Chesapeake Bay/Agricultural License Plates"
        />
      </div>
    </div>
  )
}

function PDFs({ pdfSrc, name }: PDFs) {
  return (
    <div className={styles.PDFsCard}>
      <Link href={pdfSrc} className={styles.imageWrapper}>
        <PDFIcon />
        <h2 className={styles.PDFsName}>{name}</h2>
      </Link>
    </div>
  )
}

const PDFIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path d="M 20 8 C 13.539063 8 8.367188 13.109375 8.09375 19.5 C 3.417969 20.777344 0 24.996094 0 30 C 0 36.046875 4.953125 41 11 41 L 41 41 C 45.945313 41 50 36.945313 50 32 C 50 28.101563 47.402344 24.792969 43.90625 23.625 C 43.695313 17.761719 38.910156 13 33 13 C 31.960938 13 30.992188 13.257813 30.03125 13.53125 C 27.882813 10.261719 24.21875 8 20 8 Z M 20 10 C 23.726563 10 26.992188 12.09375 28.71875 15.09375 L 29.15625 15.8125 L 29.9375 15.53125 C 30.9375 15.167969 31.910156 15 33 15 C 37.953125 15 42 19.046875 42 24 L 42 25.09375 L 42.78125 25.28125 C 45.714844 25.972656 48 28.769531 48 32 C 48 35.855469 44.855469 39 41 39 L 11 39 C 6.046875 39 2 34.953125 2 30 C 2 25.671875 5.058594 21.996094 9.1875 21.1875 L 10 21.03125 L 10 20 C 10 14.433594 14.433594 10 20 10 Z M 24 20 L 24 31.5625 L 19.71875 27.28125 L 18.28125 28.71875 L 24.28125 34.71875 L 25 35.40625 L 25.71875 34.71875 L 31.71875 28.71875 L 30.28125 27.28125 L 26 31.5625 L 26 20 Z"></path>
    </svg>
  )
}
