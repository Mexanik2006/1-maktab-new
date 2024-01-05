import React from 'react'
import TopNavbar from './Components/TopNavbar/TopNavbar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Score from './Components/Score/Score'
import News from './Components/News/News'
import Teachers from './Components/Teachers/Teachers'
import UploadImage from './firebase/UploadImage'

function App() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <About />
      <Score />
      <Teachers />
      <News />
      <Footer />
      {/* <UploadImage /> */}
    </div>
  )
}

export default App