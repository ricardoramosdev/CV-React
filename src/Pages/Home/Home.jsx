import React from 'react'
import { Sidemenu } from '../../Sections/Sidemenu/Sidemenu'
import './Home.scss'
import heroVideo from '../../assets/video/RR1.mp4'
export const Home = () => {
  return (
    <>
    <div className="home" id='home'>
      <div className="hero" >
        <div className="hero-text">
          <h2 className='big-heading'>Ricardo Ramos</h2>
          <h3 className='big-heading'>Fullstack Web Developer</h3>
          <p>I'am Fullstack developer since 2021 and Industrial Egineer since 2018</p>
          <p>As Junior developer and industrial engineer I mixed both worlds in a blend of well organization, professionalism and great curiosity about technologies. I am looking for a Junior developer position where I can collaborate with the development team and continue my path growing and learning .</p>
        </div>
        <div className='hero-img'><video src={heroVideo} autoPlay muted></video></div>
      </div>
    </div>
    </>
  )
}
