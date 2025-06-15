import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      console.log(`Toggle menu from ${prev} to ${!prev}`);
      return !prev;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside menu AND outside toggle button
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        if (menuOpen) {
          console.log('Clicked outside menu, closing menu');
          setMenuOpen(false);
          console.log('Closing menu');
        }
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="Header">
      <section className="left">
        <h1>Durga Prasad Koppireddy</h1>
      </section>

      {/* Toggle button (hamburger / close) */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="menu-button"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation menu */}
      <section
        ref={menuRef}
        className={`right ${menuOpen ? 'open' : ''}`}
      >
        <a href="#homep" onClick={() => setMenuOpen(false)}><h1>Home</h1></a>
        <a href="#aboutme" onClick={() => setMenuOpen(false)}><h1>About</h1></a>
        <a href="#myskills" onClick={() => setMenuOpen(false)}><h1>Skills</h1></a>
        <a href="#project" onClick={() => setMenuOpen(false)}><h1>Projects</h1></a>
        <a href="#contactus" onClick={() => setMenuOpen(false)}><h1>Contact</h1></a>
      </section>
    </div>
  );
};

export default Header;
