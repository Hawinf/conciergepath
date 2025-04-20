import './footer.css';

export default function Footer() {

    return (
        <footer className="wrapper-footer">
            
            <div className='above-footer'>
                <img className='footer-img' src='followingbg4.png' alt='follow me'/>
                <div className='footer-follow'>
                    <h1>JOIN MY CHANNEL</h1>
                    
                    <div className='footer-social'>
                        <a href=''>
                            <div className='footer-socialbtn'>
                                <img src='/telegram.png' alt='kate telegram channel' />
                                <p>TELEGRAM</p>
                            </div>
                        </a>
                        <a href=''>
                            <div className='footer-socialbtn'>
                                <img src='/tiktok.png' alt='kate telegram channel' />
                                <p>TIKTOK</p>
                            </div>
                        </a>
                    </div>
                    <h6>Keep up with my newest content </h6>
                </div>
            </div>
            
        </footer>
    );
};