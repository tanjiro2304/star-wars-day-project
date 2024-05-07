import React from 'react'
import '../components/MovieSection.css'
import cloneWarPoster from '../assets/81OaxWd0R3L._AC_UF1000,1000_QL80_DpWeblab_.jpg';
import returnOfJediPoster from '../assets/1e73a3b3187d686e49935d1b4ea11ee4.jpg';
import empireStrikesBack from '../assets/054cf89c468b7f97ac8a7607b0cd2447.jpg';
import aNewHope from '../assets/512471df7680dbf70f5bb2c6a5ecbebf.jpg';
import episode1 from '../assets/episode1.jpg';
import episode2 from '../assets/episode2.jpg';
import episode3 from '../assets/episode3.jpg';
import episode7 from '../assets/episode7.jpg';
import episode8 from '../assets/8c33012a2be07ebb811f563941fc7c01.jpg';
import episode9 from '../assets/episode9.jpg';
const MoviesSection = () => {
  return (
    <div className='movie-section'>
        <h3 className='title'>Movies</h3>
        <div className='posters'>
          <img className='image' src={aNewHope} width="250px" height="350px"/>
          <img className='image' src={empireStrikesBack} width="250px" height="350px"/>
          <img className='image' src={returnOfJediPoster} width="250px" height="350px"/>
          <img className='image' src={episode1} width="250px" height="350px"/>
          <img className='image' src={episode2} width="250px" height="350px"/>
          <img className='image' src={episode3} width="250px" height="350px"/>
          <img className='image' src={episode7} width="250px" height="350px"/>
          <img className='image' src={episode8} width="250px" height="350px"/>
          <img className='image' src={episode9} width="250px" height="350px"/>
        </div>
    </div>
  )
}

export default MoviesSection