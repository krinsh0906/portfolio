import React,{useState} from 'react';

const Navbar = () => {
    const [navbar,setNavbar] = useState('false');

    const changebackground = () => {    
        console.log(window.scrollY);
       if(window.scrollY >= 100){
        setNavbar(true);
       }
       else{
        setNavbar(false);
       }
    }
    window.addEventListener('scroll',changebackground)
  return (
    <>
    <nav className={navbar ? 'main-nav active': 'main-nav'}>
        {/* logo part */}
        <div className='logo' data-aos="fade-down">
            <h2>
                <span>K</span>rinsh
                <span>P</span>anchal
            </h2>
        </div>
        {/* links part */}
        <div className='main-links' data-aos="fade-down">
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Skils</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Resume</a></li>
                <li><a href='#'>Contact</a></li>
                <div className='main-button'>
                <button className='button'>Hire me</button>
                </div>
            </ul>

        </div>

    </nav>
    </>
  );
}

export default Navbar;
