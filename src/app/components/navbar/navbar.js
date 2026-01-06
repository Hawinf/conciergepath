'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { searchIndex } from '@/app/data/searchIndex';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';


export default function Navbar() {
  
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

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
  

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setResults([]); // ✅ Clear when input is empty
      return;
    }

    const filtered = searchIndex.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const handleSelect = (item) => {
    setQuery('');
    setResults([]);
    router.push(item.url);
  };
  
  
    return (
      <nav className={`navbar-wrapper ${showNavbar ? 'visible' : 'hidden'}`}>
        <nav className='navbar-section'>
          <nav>
            <Link href='/'>
              <Image className='navbar-logo' src="/logo.png" alt="ConciergePath Logo" width={30} height={30} />
            </Link>
          </nav>
          <nav>
            <input className='input-search' placeholder='Search'
              value={query}
              onChange={handleSearch}
            />
          </nav>
          <nav className='social-section'>
            <Link href='https://t.me/qatsiaryna' target='blank'><Image className='social-ig' src='/telegram.png' width={'30'} height={'30'} alt='kate telegram channel' /></Link>
            <Link href='https://www.tiktok.com/@katsia55?_t=ZS-8wGN9551DlA&_r=1' target='blank'><Image className='social-yt' width={'30'} height={'30'} src='/tiktok.png' alt='kate telegram channel' /></Link>
          </nav>
        </nav>
        <nav className='searchone-wrapper'>
            <input className='input-searchone' placeholder='Search'/>
        </nav>

        <nav className='navbar-below' ref={containerRef}>
          <button onClick={() => handleToggle('planning')}>Planning &#x25BC;</button>
          <button onClick={() => handleToggle('destination')}>Destination &#x25BC;</button>
          <button onClick={() => handleToggle('about')}>About &#x25BC;</button>
          <button onClick={() => handleToggle('shop')}>Shop &#x25BC;</button>  
        </nav>
        <nav className='result-section'>
            <ul className="search-results">
            {results.map((item) => (
              <li
                key={item.url}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}{' '}
                <span className="text-sm text-gray-500">({item.type})</span>
                <span>{item.description}</span>
              </li>
            ))}
        </ul>
      
        </nav>
        {
          activeTab === "planning" && (
          <nav className='planning-section'>
            <h1>Plan Your Trip</h1>
              <nav className='wrapper-planning'>
                <nav className='planning-icon'>
                  <Link href='https://tp.media/r?marker=509395&trs=288881&p=4114&u=https%3A%2F%2Faviasales.com&campaign_id=100' >
                    <Image alt='Flight Tickets – Affordable Air Travel Deals' className='planning-logo' src='/flight.png' width={30} height={30} />
                    <h6>Find Cheap Flight</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Reliable Intercity Bus Service' className='planning-logo' src='/bus.png'  width={30} height={30} />
                    <h6>Find Buses</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Affordable Car Rentals Worldwide' className='planning-logo' src='/car-rent.png'  width={30} height={30} />
                    <h6>Find Car Rent</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Top Things to Do – Book Tours and Experiences' className='planning-logo' src='/jogging.png'  width={30} height={30} />
                    <h6>Things To Do</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Entry Ticket for Top Attractions and Tours' className='planning-logo' src='/ticket.png'  width={30} height={30} />
                    <h6>Find Tickets</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Comprehensive Travel Guid' className='planning-logo' src='/guide.png'  width={30} height={30} />
                    <h6>Find Travel Guide</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Best Travel SIM Card for Tourists' className='planning-logo' src='/simcard.png'  width={30} height={30} />
                    <h6>Find Esim Card</h6>
                  </Link>
                </nav>
                <nav className='planning-icon'>
                  <Link href=''>
                    <Image alt='Find the Best Local Restaurants Near You' className='planning-logo' src='/food.png'  width={30} height={30} />
                    <h6>Find Restaurant</h6>
                  </Link>
                </nav>
            </nav>
            <p>© 2026 Notepaths - All rights reserved.</p>
          </nav>
          )
        }

        
        {
          activeTab === "shop" && (
          <nav className='shop-menu'>
            <h1>Let Us Plan Your Perfect Trip – From Itinerary to Reservation</h1>
            <Link href='/plan' className='shop-btn'>Get your trip plan!</Link>
            <h1>Professional Website Creation – You Relax, We Build</h1>
            <Link href='/shop' className='shop-btn'>Get Your Website Today!</Link>
            <p>© 2026 Notepaths - All rights reserved.</p>
          </nav>
          )
        }

        {
          activeTab === "about" && (
          <nav className='about-menu-section'>
            <ul>
                <li><Link href='/plan'>Plan Your Trip</Link></li>
                <li><Link href='/shop'>Let us make website for you</Link></li>
                <li><Link href='cookie-policy'>Cookie and Policy</Link></li>
                <li><Link href='terms-of-service'>Terms Of Service</Link></li>
                <li><Link href='privacy-policy'>Privacy and Policy</Link></li>
            </ul> 
            <p>© 2026 Notepaths - All rights reserved.</p>
          </nav>
          )
        }
        
          

        {
          activeTab === "destination" && (
            <div className='wrapper-destination'>
            <h1>Plan Your Destinaton</h1>
            <div className='wrapper-continent'>
                <Link href='/continent/africa'><h5>Africa</h5></Link>
                <div className='country-section'>
                    <Link href='/country/egypt'>
                        <div className='country-box'>
                          <img src='/egypt.png' alt='egypt'/>
                          <p>Egypt</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='wrapper-continent'>
                <Link href='/continent/asia'><h5>Asia</h5></Link>
                <div className='country-section'>
                    <Link href='/country/indonesia'>
                        <div className='country-box'>
                          <img src='/indonesia.png' alt='indonesia'/>
                          <p>Indonesia</p>
                        </div>
                    </Link>
                    <Link href='/country/kyrgyzstan'>
                        <div className='country-box'>
                          <img src='/kyrgyzstan.png' alt='kyrgyzstan'/>
                          <p>Kyrgyzstan</p>
                        </div>
                    </Link>
                    <Link href='/country/qatar'>
                        <div className='country-box'>
                          <img src='/qatar.png' alt='qatar'/>
                          <p>Qatar</p>
                        </div>
                    </Link>
                    <Link href='/country/turkey'>
                        <div className='country-box'>
                          <img src='/turkey.png' alt='turkey'/>
                          <p>Turkey</p>
                        </div>
                    </Link>
                    <Link href='/country/uae'>
                        <div className='country-box'>
                          <img src='/united-arab-emirates.png' alt='united-arab-emirates'/>
                          <p>UAE</p>
                        </div>
                    </Link>
                    <Link href='/country/uzbekistan'>
                        <div className='country-box'>
                          <img src='/uzbekistan.png' alt='uzbekistan'/>
                          <p>Uzbekistan</p>
                        </div>
                    </Link>
                    <Link href='/country/kazakhstan'>
                        <div className='country-box'>
                          <img src='/kazakhstan.png' alt='kazakhstan'/>
                          <p>Kazakhstan</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='wrapper-continent'>
                <Link href='/continent/europe'><h5>Europe</h5></Link>
                <div className='country-section'>
                    <Link href='/country/belarus'>
                        <div className='country-box'>
                          <img src='/belarus.png' alt='belarus'/>
                          <p>Belarus</p>
                        </div>
                    </Link>
                    <Link href='/country/russ`ia'>
                        <div className='country-box'>
                          <img src='/rusia.png' alt='rusia'/>
                          <p>Russia</p>
                        </div>
                    </Link>
                    <Link href='/country/georgia'>
                        <div className='country-box'>
                          <img src='/georgia.png' alt='georgia'/>
                          <p>Georgia</p>
                        </div>
                    </Link>
                    <Link href='/country/armenia'>
                        <div className='country-box'>
                          <img src='/armenia.png' alt='armenia'/>
                          <p>Armenia</p>
                        </div>
                    </Link>
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
            <p className='destination-footer'>© 2026 Notepaths - All rights reserved.</p>
          </div>
          )
        }
          
        
        
      </nav>
    );
  }