import React from 'react'
import './services.css'
import { FaCheck } from 'react-icons/fa'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>SEO</h3>
          </div>

        <ul className='service__list'>
          <li> 
            <FaCheck className='service__list-icon' />
              <p>Keyword Research and Analysis.</p>

          </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>On-Page Optimization.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Technical SEO Audits.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Link Building and Off-Page SEO.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>SEO Reporting and Analytics.</p>

            </li>
        </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Custom Web Development.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Responsive Design.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>E-Commerce Solutions.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Content Management Systems (CMS).</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Post-Launch Web Maintenance and Support.</p>

            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Mobile Application Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Custom Mobile App Development.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>User-Centric Design.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>Native and Cross-Platform Development.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>App Testing and Quality Assurance.</p>

            </li>
            <li>
              <FaCheck className='service__list-icon' />
              <p>App Launch and Post-Launch Support:.</p>

            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
      </div>
    </section>
  )
}

export default Service