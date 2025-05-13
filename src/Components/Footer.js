import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sunnatulloxon Valiyev</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SunnatulloValiyev" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sunnatillo-valiyev-63aba331a/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sunnatillovaliyev769@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer