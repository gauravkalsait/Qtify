import React from 'react'
import Navbar from './components/Navbar/Navbar'
import styles from './App.module.css'
import Hero from './components/Hero/Hero'


function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
      </div>
    </>
  )
}

export default App