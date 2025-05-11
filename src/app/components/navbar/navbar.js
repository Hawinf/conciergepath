'use client'
import { useEffect, useRef, useState } from 'react';
import './navbar.css';


export default function Navbar() {

  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleToggle = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null); // toggle off
    } else {
      setActiveTab(tab); // switch
    }
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (containerRef.current && !containerRef.current.contains(event.target)) {
  //       setActiveTab(null); // close if clicked outside
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

    return (
      <div className={`navbar-wrapper ${showNavbar ? 'visible' : 'hidden'}`}>
        <div className='navbar-section'>
          <div>
              <img className='navbar-logo' src="/logo.png" alt="ConciergePath Logo" width={30} height={30} />
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
        <div className='navbar-below' ref={containerRef}>
          <button onClick={() => handleToggle('planning')}>Planning &#x25BC;</button>
          <button onClick={() => handleToggle('destination')}>Destination &#x25BC;</button>
          <button>About</button>
          <button>Shop</button>
        </div>
        {
          activeTab === "planning" && (
            <div className='planning-section'>
            <h1>Plan Your Trip</h1>
              <div className='wrapper-planning'>
                <div className='planning-icon'>
                  <a href='https://tp.media/r?marker=509395&trs=288881&p=4114&u=https%3A%2F%2Faviasales.com&campaign_id=100' >
                    <img className='planning-logo' src='/flight.png' />
                    <h6>Find Cheap Flight</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/bus.png' />
                    <h6>Find Buses</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/car-rent.png' />
                    <h6>Find Car Rent</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/jogging.png' />
                    <h6>Things To Do</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/ticket.png' />
                    <h6>Find Tickets</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/guide.png' />
                    <h6>Find Travel Guide</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/simcard.png' />
                    <h6>Find Esim Card</h6>
                  </a>
                </div>
                <div className='planning-icon'>
                  <a href=''>
                    <img className='planning-logo' src='/food.png' />
                    <h6>Find Restaurant</h6>
                  </a>
                </div>
            </div>
            <p>ConciergePath @2025</p>
          </div>
          )
        }
          

        {
          activeTab === "destination" && (
            <div className='wrapper-destination'>
            <h1>Plan Your Destinaton</h1>
            <div className='wrapper-continent'>
                <h5>Africa</h5>
                <div className='country-section'>
                    <a href=''>
                        <div className='country-box'>
                          <img src='egypt.png' alt='egypt'/>
                          <p>Egypt</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='wrapper-continent'>
                <h5>Asia</h5>
                <div className='country-section'>
                    <a href=''>
                        <div className='country-box'>
                          <img src='indonesia.png' alt='indonesia'/>
                          <p>Indonesia</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='kyrgyzstan.png' alt='kyrgyzstan'/>
                          <p>Kyrgyzstan</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='qatar.png' alt='qatar'/>
                          <p>Qatar</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='turkey.png' alt='turkey'/>
                          <p>Turkey</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='united-arab-emirates.png' alt='united-arab-emirates'/>
                          <p>UAE</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='uzbekistan.png' alt='uzbekistan'/>
                          <p>Uzbekistan</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='kazakhstan.png' alt='kazakhstan'/>
                          <p>Kazakhstan</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='wrapper-continent'>
                <h5>Europe</h5>
                <div className='country-section'>
                    <a href=''>
                        <div className='country-box'>
                          <img src='belarus.png' alt='belarus'/>
                          <p>Belarus</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='rusia.png' alt='rusia'/>
                          <p>Russia</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='georgia.png' alt='georgia'/>
                          <p>Georgia</p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='country-box'>
                          <img src='armenia.png' alt='armenia'/>
                          <p>Armenia</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='wrapper-continent'>
                <h5>Oceania</h5>
                <p>Coming Soon &#8594;</p>
                <div className='country-section'>
                    {/* <a href=''>
                        <div className='country-box'>
                          <img src='egypt.png' alt='egypt'/>
                          <p>Egypt</p>
                        </div>
                    </a> */}
                </div>
            </div>
            <div className='wrapper-continent'>
                <h5>North America</h5>
                <p>Coming Soon &#8594;</p>
                <div className='country-section'>
                    {/* <a href=''>
                        <div className='country-box'>
                          <img src='egypt.png' alt='egypt'/>
                          <p>Egypt</p>
                        </div>
                    </a> */}
                </div>
            </div>
            <div className='wrapper-continent'>
                <h5>South America</h5>
                <p>Coming Soon &#8594;</p>
                <div className='country-section'>
                    {/* <a href=''>
                        <div className='country-box'>
                          <img src='egypt.png' alt='egypt'/>
                          <p>Egypt</p>
                        </div>
                    </a> */}
                </div>
            </div>
            <p className='destination-footer'>ConciergePath @2025</p>
          </div>
          )
        }
          
        
        
      </div>
    );
  }