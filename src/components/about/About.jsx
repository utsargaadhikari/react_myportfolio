import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { RiAwardFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { VscRootFolder } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To know</h5>
    <h2>About Me</h2>

      <div className="container about__container">
    <div className="about__me">
      <div className="about__me image">
        <img src={ME} alt="About Image" />
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
              <RiAwardFill  className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>

            <article className='about__card'>
              <FaUser className='about__icon' />
              <h5>Clients</h5>
              <small>Global Clients</small>
            </article>

            <article className='about__card'>
              <VscRootFolder className='about__icon' />
              <h5>Projects</h5>
              <small>Amazing Projects</small>
            </article>

      </div>

      <p>
            I am a visionary full-stack developer with a passion for crafting elegant and innovative solutions that bridge the gap between front-end aesthetics and back-end functionality. Constantly seeking to stay ahead of the curve, I thrive on embracing challenges and exploring new technologies. Collaboration is at the heart of my philosophy, and I believe in leaving a positive impact by building purposeful applications that resonate with users and drive success. With an insatiable hunger for knowledge and a commitment to excellence, I approach each project with enthusiasm, dedicating myself to creating digital magic and leaving a lasting impression in the world of technology.
      </p>

      <a href="#contact" className='btn btn-primary'>Holla at me if you need me</a>
    </div>
      </div>
  </section>
  )
}

export default About