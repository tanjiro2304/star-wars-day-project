import React from 'react'
import theCloneWar from '../assets/TheCloneWats.jpg';
import Rebels from '../assets/Rebels.jpg';
import TheMandalorian from '../assets/TheMandalorian.jpg';
import Andor from "../assets/Andor.jpg"
import bobafett from '../assets/bobfett.webp';
import ahsoka from '../assets/ahsoka.jpeg';
import '../components/SeriesSection.css';
const SeriesSection = () => {
  return (
    <div className='series-section'>
        <h3 className='title'>Series</h3>
        <div className='posters'>
          <img className='image' src={theCloneWar} width="250px" height="350px"/>
          <img className='image' src={Rebels} width="250px" height="350px"/>
          <img className='image' src={TheMandalorian} width="250px" height="350px"/>
          <img className='image' src={Andor} width="250px" height="350px"/>
          <img className='image' src={bobafett} width="250px" height="350px"/>
          <img className='image' src={ahsoka} width="250px" height="350px"/>
        </div>
    </div>
  )
}

export default SeriesSection