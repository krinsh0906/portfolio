import React from 'react';

const Navbar = () => {
  return (
    <>
    <nav className='main-nav'>
        {/* logo part */}
        <div className='logo'>
            <h2>
                <span>K</span>rinsh
                <span>P</span>anchal
            </h2>
        </div>
        {/* links part */}
        <div className='main-links'>
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
