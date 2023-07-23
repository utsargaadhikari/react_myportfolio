import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3Full } from'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiBootstrap } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { TbBrandMysql } from 'react-icons/tb';
import { SiPhp } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';


const experience = () => {
  return (
    <section id='experience'>
     <h5>My Skillset</h5>
     <h2>My Experience</h2>

     <div className="container experience__container">
      <div className="experience__frontend">
<h3>Front-End Development</h3>
    <div className="experience__content">
      <article className='experience__details'>
            <AiFillHtml5 />
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
         </article>
            <article className='experience__details'>
              <DiCss3Full />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <TbBrandJavascript />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <SiBootstrap />
              <h4>BootStrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <RiReactjsLine />
              <h4>React.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <SiTailwindcss />
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </article>
    </div>
      </div>

      <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs />
              <h4>Node Js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Express</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <FaPython />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <TbBrandMysql />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <SiPhp />
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className='experience__details'>
              <TbBrandGolang />
              <h4>GoLang</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default experience