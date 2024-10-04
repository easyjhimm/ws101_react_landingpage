import React, { useState } from 'react';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">Jhimm Boy Jumao-as</div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#footer">Footer</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
