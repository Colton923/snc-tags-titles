import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import { CardProps } from 'app/services/page'

const Card = ({ service }: CardProps) => {
  return (
    <div className={styles.card} id={`${service.id}`}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={service.imageSrc}
          alt="placeholder text"
          width={400}
          height={300}
        />
      </div>
      <div className={styles.card_h2Wrapper}>
        <h2 className={styles.card_h2}>{service.name}</h2>
      </div>
    </div>
  )
}

export default Card
