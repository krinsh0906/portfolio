import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FiDownload} from "react-icons/fi"
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.css'






const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h2  data-aos="fade-up" data-aos-duration="1500">Hello, i'm Krinsh Panchal</h2>
        <TypeAnimation
        data-aos="fade-up"
        sequence={[
          "Web Developer",
          2000,
          "",
        ]}
        speed={30}
        wrapper='h2'
        repeat={Infinity}
        
        
        />
        <p>Hi<span className="wave text-[21px]">👋🏻</span>I'm Krinsh. Seeking a challenging role as a MERN Stack Developer<br/> to apply my skills 
  and knowledgegained through education and <br/> personal projects to contribute to a 
  dynamic development team.</p>

        
      </div>
      <div className='mainhero-button' data-aos="fade-up">
        <button className='hero-button '>Hire me</button>
        <button className='hero-button space'>Resume <FiDownload/></button>
      </div>
      <div className='icons'>
        <ul data-aos="fade-up" data-aos-duration="1500">
          <li><a href='#'><AiFillGithub className="icons"/></a></li>
          <li className='space'><a href='#'><FaLinkedin className="icons"/></a></li>
          <li className='space'><a href='#'><AiFillInstagram className="icons"/></a></li>

        </ul>
      </div>

    </div>
    
    
  );
}

export default Hero;
