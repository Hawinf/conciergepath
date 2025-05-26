import './footer.css';
import Link from 'next/link';

export default function Footer() {

    return (
        
        <footer className="wrapper-footer">
            
            <div className='above-footer'>
                <img className='footer-img' src='followingbg4.png' alt='follow me'/>
                <div className='footer-follow'>
                    <h1>JOIN MY CHANNEL</h1>
                    
                    <div className='footer-social'>
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
                    <h6>Keep up with my newest content </h6>
                </div>
            </div>
            <div className='below-footer'>
                <div className='section-one'>
                    <h6>Popular Itineraries</h6>
                    <div>
                        <a>3 Days In Turkey</a>
                    </div>
                    <div>
                        <a>3 Days In Georgia</a>
                    </div>
                </div>
                <div className='section-one'>
                    <h6>Top Destinations</h6>
                    <div>
                        <a>Turkey</a>
                    </div>
                    <div>
                        <a>Georgia</a>
                    </div>
                </div>
                <div className='section-one'>
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
                        <Link href='privacy-policy'>Privacy and Policy</Link>
                    </div>
                </div>
                <div className='section-one'>
                    <h6>Stay Update</h6>
                    <div>
                        <Link href='https://t.me/qatsiaryna' target='blank'><img src='/telegram.png' alt='kate telegram channel' /></Link>
                        <Link href='https://www.tiktok.com/@katsia55?_t=ZS-8wGN9551DlA&_r=1' target='blank'><img src='/tiktok.png' alt='kate telegram channel' /></Link>
                    </div>
                    <p>© 2025 Kate. All rights reserved.</p>
                </div>
                
            </div>
                ``
            
        </footer>

        
    

    );
};