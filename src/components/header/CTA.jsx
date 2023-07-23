import React from 'react'
import CV from '../../assets/cv.docx'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Checkout My CV</a>
        <a href="#contact" className='btn btn-primary'>Holler At me</a>
    </div>
  ) 
}

export default CTA