import React from 'react'
import Navbar from './components/Navbar/Navbar'
import styles from './App.module.css'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import { fetchTopAlbums, fetchNewAlbums } from './api/api'
import {  useState } from 'react' 


function App() {

  const [topAlbumSongs, setTopAlbumSongs] = useState([])
  const [newAlbumSongs, setNewAlbumSongs] = useState([])

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch (error) {
      console.log(error)
      return null
    }

  }

    const generateNewAlbumSongs = async () => {
      try {
        const newAlbumSongs = await fetchNewAlbums()
        setNewAlbumSongs(newAlbumSongs);
       
      }
      catch (error) {
        console.log(error)
        return null
      }
    }

    generateTopAlbumSongs();
    generateNewAlbumSongs();
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type='album' title='Top Albums' data={topAlbumSongs} />
        <Section type='album' title='New Albums' data={newAlbumSongs} />
      </div>
    </>
  )
}

export default App