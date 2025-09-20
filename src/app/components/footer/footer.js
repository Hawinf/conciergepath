'use client'
import './footer.css';
import Link from 'next/link';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        
        <footer className="wrapper-footer">
            
            <div className='above-footer'>
                <img className='footer-img' src='/followingbg4.png' alt='travel package' data-aos="fade-up"/>
                <div className='footer-follow' data-aos="fade-up">
                    <h1 data-aos="slide-left"> JOIN MY CHANNEL</h1>
                    
                    <div className='footer-social' data-aos="fade-up">
                        <Link href='https://t.me/qatsiaryna' target='blank'>
                            <div className='footer-socialbtn'>
                                <img src='/telegram.png' alt='kate telegram channel' />
                                <p>TELEGRAM</p>
                            </div>
                        </Link>
                        <Link href='https://www.tiktok.com/@katsia55?_t=ZS-8wGN9551DlA&_r=1' target='blank'>
                            <div className='footer-socialbtn1'>
                                <img src='/tiktok.png' alt='kate telegram channel' />
                                <p>TIKTOK</p>
                            </div>
                        </Link>
                    </div>
                    <h6>Check out my newest posts</h6>
                </div>
            </div>
            <div className='below-footer'>
                <div className='section-one' data-aos="slide-left">
                    <h6>Explore Dubai</h6>
                    <div>
                        <a href='/discover-dubai'>Discover Dubai</a>
                    </div>
                    <div>
                        <a href='/blog/explore-dubai/dubai'>5 Days In Dubai</a>
                    </div>
                </div>
                <div className='section-one' data-aos="slide-left">
                    <h6>Top Destinations</h6>
                    <div>
                        <a href='/country/turkey'>Turkey</a>
                    </div>
                    <div>
                        <a href='/country/georgia'>Georgia</a>
                    </div>
                    <div>
                        <a href='/country/qatar'>Qatar</a>
                    </div>
                    <div>
                        <a href='/country/kyrgyzstan'>Kyrgyzstan</a>
                    </div>
                </div>
                <div className='section-one' data-aos="slide-right">
                    <h6>About</h6>
                    <div>
                        <a>About Me</a>
                    </div>
                    <div>
                        <Link href='/plan'>Plan Your Trip</Link>
                    </div>
                    <div>
                        <Link href='/shop'>Let us make website for you</Link>
                    </div>
                    <div>
                        <Link href='cookie-policy'>Cookie and Policy</Link>
                    </div>
                    <div>
                        <Link href='terms-of-service'>Terms Of Service</Link>
                    </div>
                    <div>
                        <Link href='privacy-policy'>Privacy and Policy</Link>
                    </div>
                </div>
                <div className='section-one' data-aos="slide-right">
                    <h6>Stay Update</h6>
                    <div>
                        <Link href='https://t.me/qatsiaryna' target='blank'><img src='/telegram.png' alt='kate telegram channel' /></Link>
                        <Link href='https://www.tiktok.com/@katsia55?_t=ZS-8wGN9551DlA&_r=1' target='blank'><img src='/tiktok.png' alt='kate telegram channel' /></Link>
                    </div>
                    <p>© 2025 Wanderpath - All rights reserved.</p>
                </div>
                
            </div>
                
            
        </footer>
    );
};