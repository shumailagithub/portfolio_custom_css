import React from 'react'
import styles from './TestimonialCard.module.css'
import { interFont } from '@/font'
import Image from 'next/image'
import { testimonialCard } from '@/constant/testmonialCard'

function TestimonialCard() {
    return (
        <>
            {testimonialCard.map((Card, index) => {
                return (
                    <div className={`${styles.Card} ${interFont.className}`} key={index}>
                        <div className={styles.CardImage}>
                            <Image src={Card.src} alt={"Picture"} width={150} height={150} className={styles.Img}></Image>
                        </div>

                        <p>{Card.name}</p>
                        <p><span>{Card.title}</span></p>
                        <p style={{ marginBottom: "0px" }}>{Card.description}</p>
                    </div>
                )
            })}


        </>
    )
}

export default TestimonialCard