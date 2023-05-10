import servicesData from 'public/data.json'
import Card from 'components/card/Card'
import styles from './Services.module.scss'

type Service = {
  id: number
  name: string
  imageSrc: string
}

export type CardProps = {
  service: Service
}

export default function Services(): JSX.Element {
  const { vehicleRegistration } = servicesData.services[0]
  const { other } = servicesData.services[1]

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentWrapper}>
        <h1>
          <span className={styles.h1Span}>Explore</span> Our Services
        </h1>
        <div className={styles.topSectionWrapper}>
          <div className={styles.serviceTypeWrapper}>
            <h2>Registration</h2>
            <ul className={styles.topSectionList}>
              {vehicleRegistration?.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.serviceTypeWrapper}>
            <h2>Other</h2>
            <ul className={styles.topSectionList}>
              {other?.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.cardGrids}>
          <div>
            <h2 className={styles.grid_h2}>REGISTRATION</h2>
            <div className={styles.serviceTypeGrid}>
              {vehicleRegistration?.map((service) => (
                <Card service={service} key={service.id} />
              ))}
            </div>
          </div>
          <div>
            <h2 className={styles.grid_h2}>OTHER</h2>
            <div className={styles.serviceTypeGrid}>
              {other?.map((service) => (
                <Card service={service} key={service.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
