"use client"
import React, { useState } from 'react';
import styles from './Header.module.css';
import { caveatFont, interFont } from '@/font';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';
 

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state with useState

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>
            <span>S</span>humaila {" "}
          </h1>


         <AnimatePresence>
          {/* Render the nav items based on isOpen */}
          {isOpen ? (
            <motion.ul className={`${styles.navUl} ${styles.active} ${interFont.className}`}
            key={"active"}
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:'40%'}}
            exit={{opacity:0, width:0}}
            transition={{duration: 2, type: "spring"}}
            >
              
              <IoCloseSharp style={{top: "10"}} className={styles.close} onClick={()=>setIsOpen(false)}/>
              <li><Link href={'#!'}>Home</Link></li>
              <li><Link href={'#!'}>About</Link></li>
              <li><Link href={'#!'}>Portfolio</Link></li>
              <li><Link href={'#!'}>Services</Link></li>
              <li><Link href={'#!'}>Testimonial</Link></li>
              <li><Link href={'#!'}>Contact</Link></li>
            </motion.ul>
          ) : (
            <ul className={`${styles.navUl} ${interFont.className}`}>
              <li><Link href={'#!'}>Home</Link></li>
              <li><Link href={'#!'}>About</Link></li>
              <li><Link href={'#!'}>Portfolio</Link></li>
              <li><Link href={'#!'}>Services</Link></li>
              <li><Link href={'#!'}>Testimonial</Link></li>
              <li><Link href={'#!'}>Contact</Link></li>
            </ul>
          )}
          </AnimatePresence>

          
          {/* Toggle isOpen on click */}
          <GiHamburgerMenu
            size={30}
            className={styles.menu}
            onClick={() => setIsOpen(!isOpen)}
          />
          
        </nav>
      </header>
    </>
  );
}

export default Header;
