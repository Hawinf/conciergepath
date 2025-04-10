'use client'
import { useEffect, useRef, useState } from 'react';
import './navbar.css';


export default function Navbar() {
  const [planMenu, setPlanmenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


  const planningMenu = () => {
      // setPlanmenu(!true);
      setPlanmenu((prev) => !prev);
      // alert('got clicked')
  };

   // Close menu if click is outside
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setPlanmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
      <div className='navbar-wrapper'>
        <div className='navbar-section'>
          <div>
              <img src="/logo.png" alt="ConciergePath Logo" width={30} height={30} />
          </div>
          <div>
            <input className='input-search' placeholder='Search'/>
          </div>
          <div className='social-section'>
            <img className='social-ig' src="./instagram.png" alt='Hawinf' />
            <img className='social-yt' src="./youtube.png" alt='Hawinf Youtube' />
          </div>
        </div>
        <div className='searchone-wrapper'>
            <input className='input-searchone' placeholder='Search'/>
        </div>
        <div className='navbar-below'>
          <button onClick={planningMenu} ref={buttonRef}>Planning &#x25BC;</button>
          <button>Destination &#x25BC;</button>
          <button>About</button>
          <button>Shop</button>
        </div>
        {/* PLANNING MENU */}

        {
          planMenu ? 
          (
          <div className='planning-section' ref={menuRef}>
            <h1>Plan Your Trip</h1>
              <div className='wrapper-planning'>
                <div className='planning-icon'>
                  <a href='' >
                    <img src='/flight.png' />
                    <h6>Find Cheap Flight</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/bus.png' />
                    <h6>Find Buses</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/car-rent.png' />
                    <h6>Find Car Rent</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/jogging.png' />
                    <h6>Things To Do</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/ticket.png' />
                    <h6>Find Tickets</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/guide.png' />
                    <h6>Find Travel Guide</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/simcard.png' />
                    <h6>Find Esim Card</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img src='/food.png' />
                    <h6>Find Restaurant</h6>
                  </a>
                </div>
            </div>
            <p>ConciergePath @2025</p>
          </div>
          ) : ''
        }
        
      </div>
    );
  }