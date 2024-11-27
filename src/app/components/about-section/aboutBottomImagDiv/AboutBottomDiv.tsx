"use client"
import React from 'react'
import styles from './aboutBottomDiv.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden:{},
  show:{
    transition: {
      staggerChildren: 0.2,
    }
  }
}

//Child Variants
const itemVariants = {
  hidden:{opacity: 0, y: 20},
  show:{opacity: 1, y: 0}
}

function AboutBottumDiv() {
  return (
    <>
    <motion.section className={styles.aboutBottumDiv}
     variants={containerVariants}
     initial="hidden" 
     whileInView={"show"}
    >
    

    <motion.div variants={itemVariants}><Image src={"/html.png" }alt="HTML-Picture" width={95} height={95} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/css.png"} alt="css-Pic" width={95} height={95} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/typescript.png"} alt="typescript-Pic" width={60} height={55} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/git.png"} alt="git-Pic" width={95} height={95} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/figma.png"} alt="figma-Pic" width={95} height={95} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/react.png" }alt="React-Pic" width={95} height={95} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/node.png"} alt="Node.js-Pic" width={95} height={95} className={styles.image}/></motion.div>
    <motion.div variants={itemVariants}><Image src={"/next.png"}alt="Next-Pic" width={95} height={95} className={styles.image}/></motion.div>
        
      </motion.section>
    </>
  )
}

export default AboutBottumDiv
