import React from 'react'
import styles from './Footer.module.css'
import { caveatFont } from '@/font'

function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <h1 className={`${caveatFont.className} ${styles.footerText}`}>&copy; 2024 Shumaila Gulfam. All Right reserved.</h1>
    </footer>
    </>
  )
}

export default Footer