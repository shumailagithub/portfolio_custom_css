import React from 'react'
import styles from './Services.module.css'
import { caveatFont, interFont } from '@/font'
import ServicesCard from './services-card/servicesCard'

function Services() {
  return (
    <>
      <section className={`${styles.servicesMainDiv} ${caveatFont.className}`}>
        <h1>
          <span>W</span>hat {""} {" "}
          <span> I</span> {" "} {" "}
          <span> D</span>o {" "} {" "}
          <span> F</span>or {""}{" "}
          <span> C</span>lients
        </h1>

        <p className={interFont.className}>I focus on delivering high-quality, functional, <br />
          and aesthetically pleasing websites that help you achieve your goals.
        </p>

        <div className={styles.servicesCarDiv}>
          <ServicesCard />

        </div>
      </section>
    </>
  )
}

export default Services