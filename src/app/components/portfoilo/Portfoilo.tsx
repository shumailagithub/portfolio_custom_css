import React from 'react'
import styles from './Portfoilo.module.css'
import { caveatFont, interFont } from '@/font'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import PortfolioCard from './portfolio-card/PortfolioCard'


function Portfoilo() {
    return (
        <>
            <section className={styles.portfolioMainDiv}>
                <div>
                    <h1 className={`${caveatFont.className}`}>
                        <span>M</span>Y {"  "}
                        <span>L</span>AST {"  "}
                        <span>W</span>ORK {"  "}
                    </h1>
                </div>
                <p className={interFont.className}>I have developed a range of projects to demonstrate my front-end skills,
                    including a Resume Website to present my professional profile,and a Figma-Based
                    Website that faithfully replicates a design mockup. Each project highlights
                    my attention to design, functionality, and responsiveness, reflecting my dedication
                    to creating high-quality web experiences.</p>

                    <div className={styles.myWork}>

                      

                        <PortfolioCard/>
                       


                    </div>
            </section>
        </>
    )
}

export default Portfoilo