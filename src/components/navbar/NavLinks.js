import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav}><Link to="//www.linkedin.com/in/saurabh-agrawal-671067258" target="_blank" className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/Saurabhdev24" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:agrawalsaurabh2403@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
// https://github.com/Saurabhdev24
// https://www.instagram.com/saurabh_agrawal4343/?hl=en