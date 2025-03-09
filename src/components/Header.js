import logo from '../logo/logo2.png';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    
    return (
        <section>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                {/* <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </div> */}
                <div className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={() => {
                        // console.log("Toggling menu. Previous state:", isOpen);
                        setIsOpen(!isOpen);
                    }}>
                    {isOpen ? "✖" : "☰"}
                </div>

                {/* Add 'open' class dynamically */}
                <div className={`nav-items ${isOpen ? "open" : ""}`}>
                    <ul> 
                        {/* <li><a href="#main-content" onClick= {() =>{setIsOpen(false)}}><i className='bx bx-home' ></i>Home</a></li>
                        <li><a href="#about" onClick= {() =>{setIsOpen(false)}}><i className='bx bxs-user'></i>About</a></li>
                        <li><a href="#skills" onClick= {() =>{setIsOpen(false)}}><i className='bx bx-code-alt'></i>Skills</a></li>
                        <li><a href="#services" onClick= {() =>{setIsOpen(false)}}><i className='bx bx-cog'></i>Services</a></li>
                        <li><a href="#contacts" onClick= {() =>{setIsOpen(false)}}><i className='bx bx-envelope'></i>Contact</a></li> */}
                          <li><a href="#main-content" onClick= {() =>{setIsOpen(false)}}></a></li>
                        <li><a href="#about" onClick= {() =>{setIsOpen(false)}}>About</a></li>
                        <li><a href="#skills" onClick= {() =>{setIsOpen(false)}}>Skills</a></li>
                        <li><a href="#services" onClick= {() =>{setIsOpen(false)}}>Services</a></li>
                        <li><a href="#contacts" onClick= {() =>{setIsOpen(false)}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;


