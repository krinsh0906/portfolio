import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h2  data-aos="fade-uo" data-aos-duration="1500">Hello, i'm Krinsh Panchal</h2>
        <TypeAnimation
        data-aos="fade-uo"
        sequence={[
          "Web Developer",
          2000,
          "",
        ]}
        speed={30}
        wrapper='h2'
        repeat={Infinity}
        
        
        />
        <p>Hi<span className="wave text-[21px]">👋🏻</span>,I'm Krinsh. I'm passionate about building<br/> excellent WebApplication and bringing life to seamless<br/> Frontend solutions. </p>

        
      </div>

    </div>
    
    
  );
}

export default Hero;
