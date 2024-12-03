"use client"
import React from 'react';
import styles from './aboutSection.module.css'
import { caveatFont } from '@/font';
import Button from '../button/button';
import Image from 'next/image';
import { motion } from 'framer-motion';


function AboutSection() {
  return (
    <>

    <motion.section 
    className={styles.aboutMainDiv}
     initial={{ opacity: 0, x: -100 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 2, type: "spring" }}
    
    
    >
        <motion.div className={styles.aboutLeftDiv}>
            <h1 className={`${caveatFont.className} ${styles.h1Name}`}>Shumaila Gulfam</h1>
            <p className={caveatFont.className}>Freelance Web Developer</p>
            
            <pre className={styles.pre}>
              I&#39;m Shumaila, a passionate front-end web developer 
               with a focus on creating visually appealing and user-friendly web experiences.
               With a strong foundation in HTML, CSS, and TypeScript, I enjoy building 
               interactive, responsive websites that make an impact. Continuously learning 
               and growing in web development
            </pre>




        <Button text={"Contact Me"}/>

        </motion.div>

        
        <div className={styles.rightProfilePicDiv}>
       
            <Image src="/pic-for-personal-portfolio-removebg.png" alt='Profile Picture' width={300} height={300}/>
        </div>
        </motion.section>
   
   
    </>
  )
}

export default AboutSection