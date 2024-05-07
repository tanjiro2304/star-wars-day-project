import './App.css'
import MenuBar from './components/MenuBar'
import MoviesSection from './components/MoviesSection'
import SeriesSection from './components/SeriesSection'

function App() {


  return (
    <div className='container'>
      <MenuBar/>
      <div className='slide-text'>
      <h1 className='caption'>May the Force Be With You. Celebrating Star Wars Day on 4th May</h1>
      </div>
      
      <MoviesSection/>
      <SeriesSection/>
    </div>
  )
}

export default App
