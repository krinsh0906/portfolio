import React from 'react';
import {AiFillHtml5} from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar';
import{FaCss3Alt} from 'react-icons/fa'
import{BiLogoJavascript} from 'react-icons/bi'
import{IoLogoReact} from 'react-icons/io5'
import{FaBootstrap} from 'react-icons/fa'
import{FaNodeJs} from 'react-icons/fa'
import{BiLogoMongodb} from 'react-icons/bi'
import{SiExpress} from 'react-icons/si'
import{BsGit} from 'react-icons/bs'


function Skills() {
  return (
    <div>
      <div className='skills-text'>
        <h3> My Skills</h3>
        <span></span>
      </div>
      
      <div className='skills-headding'>
          <p>Here are my skills</p>
        
        <div className='skills-progressbar' data-aos='fade-right'>
            <div>
              <AiFillHtml5 fontSize={22}></AiFillHtml5>
              <p style={{float:'right', marginRight:'70rem', marginTop:'1px',fontWeight:'500'}}>Html</p>
              <ProgressBar className='progressbar' completed={90} bgColor='#000' animateOnRender={true} height='.8rem' margin='0 0 3rem 0'/>
            </div>

            <div style={{marginTop:'-2rem'}}>
              <FaCss3Alt fontSize={22}/>
              <p style={{float:'right', marginRight:'70.7rem', marginTop:'1px',fontWeight:'500'}}>Css</p>
              <ProgressBar className='progressbar' completed={90} bgColor='#000' animateOnRender={true} height='.8rem' margin='0 0 3rem 0'/>
            </div>

            <div style={{marginTop:'-2rem'}}>
              <BiLogoJavascript fontSize={22}/>
              <p style={{float:'right', marginRight:'67.4rem', marginTop:'1px',fontWeight:'500'}}>Java Script</p>
              <ProgressBar className='progressbar' completed={70} bgColor='#000' animateOnRender={true} height='.8rem' margin='0 0 3rem 0'/>
            </div>

            <div style={{marginTop:'-2rem'}}>
              <IoLogoReact fontSize={22}/>
              <p style={{float:'right', marginRight:'68.7rem', marginTop:'1px',fontWeight:'500'}}>React Js</p>
              <ProgressBar className='progressbar' completed={80} bgColor='#000' animateOnRender={true} height='.8rem' margin='0 0 3rem 0'/>
            </div>

            <div style={{marginTop:'-2rem'}}>
              <FaBootstrap fontSize={22}/>
              <p style={{float:'right', marginRight:'67.8rem', marginTop:'1px',fontWeight:'500'}}>Bootstrap</p>
              <ProgressBar className='progressbar' completed={70} bgColor='#000' animateOnRender={true} height='.8rem' margin='0 0 3rem 0'/>
            </div>
        </div>

        <div className='skill-box' data-aos=''>
          <div className='skillbox-1'>
              <FaNodeJs className='icon' fontSize={'3rem'} />
              <p>Node Js</p>

          </div>

          <div className='skillbox-1' style={{margin:'3.9rem 0 0 0'}}>
              <BiLogoMongodb className='icon' fontSize={'3rem'} />
              <p style={{marginLeft:'2rem'}}>Mongo DB</p>

          </div>

          <div className='skillbox-1' style={{margin:'-23.9rem 0 0 18rem', background:'#000', color:'white'}}>
              <SiExpress className='icon' fontSize={'3rem'} />
              <p style={{marginLeft:'3rem'}} >Express Js</p>

          </div>

          <div className='skillbox-1' style={{margin:'3.9rem 0 0 18rem', background:'#000', color:'white'}}>
              <BsGit className='icon' fontSize={'3rem'}  />
              <p style={{marginLeft:'4.5rem'}} >Git</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
