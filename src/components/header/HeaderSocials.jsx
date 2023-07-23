import React from 'react'
import { ImLinkedin } from 'react-icons/im'
import { FaGithubSquare } from 'react-icons/fa'
import { FaDribbbleSquare } from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
          <a href="https://linkedin.com" target='_blank'><ImLinkedin /></a>
          <a href="https://github.com" target='_blank'> <FaGithubSquare /> </a>
          <a href="https://dribble.com" target='_blank'> <FaDribbbleSquare /> </a>           
    </div>
   )
}

export default HeaderSocials