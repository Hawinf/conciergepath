'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { motion } from "motion/react"
import './header.css';


export default function Header() {

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'WELCOME TO MY PAGE';
  const typingSpeed = 1500;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  


  return (
    <div className='container-header'>
      <div className='wrapper-header'>
          <header className='header-cp'>
              <h1>KATSIARYNA</h1>
              <div className='melting-text-container'>
                <h5 className='melting-text'>PUTSILOUSKAYA</h5>
              </div>
              <img src='/header-cp5.png' alt='kate' />
              <div className='head-desc'>
                  <Link href='/discover-world' className='link-blog'>READ MY BLOG</Link>
                  <a href='https://www.tiktok.com/@katsia55?_t=ZS-8wGN9551DlA&_r=1' target='blank' className='link-video'>VIDEO</a>
                  <p >I create travel guides and backpacking itineraries from around the world, as well as sharing photography resources and more.</p>
              </div>
          </header>
          
      </div>
      <div className='main-header'>
        <div className='continents-map'>
          <div className='box-map'>
            <a href=''>
              <img className='each-map' src='/africa.png' alt='africa' />
              <p>Africa</p>
            </a>
          </div>
          <div className='box-map'>
            <a href=''>
              <img className='each-map' src='/asia.png' alt='asia' />
              <p>Asia</p>
            </a>
          </div>
          <div className='box-map'>
            <a href=''>
              <img className='each-map' src='/europe.png' alt='europe' />
              <p>Europe</p>
            </a>
          </div>
          <div className='box-map'>
            <a href=''>
              <img className='each-map' src='/north-america.png' alt='north-america' />
              <p>North America</p>
            </a>
          </div>
          <div className='box-map'>
            <a href=''>
              <img className='each-map' src='/south-america.png' alt='south-america' />
              <p>South America</p>
            </a>
          </div>
          <div className='box-map'>
            <a href=''>
              <img className='each-map' src='/oceania.png' alt='oceania' />
              <p>Oceania</p>
            </a>
          </div>
        </div>
      </div>
      <main className='container-discover'>
        <div className='dc-left'>
          <img src='/world-map.png' alt='discover the world' />
        </div>
        <div className='dc-right'>
          <h1 className='right-tittle'>DISCOVER</h1>
          <h1 className='right-tittle1'>THE WORLD &#8690;</h1>
          <p>We have written over 600+ travel guides and backpacking itineraries to provide all the information you need to help plan your dream trip around the world.</p>
          <Link href='/discover-world' className='link-blog'>
            <button className="btn matrix">
              <span>EXPLORE DESTINATION &#8608;</span>
              <div className="code-rain"></div>
            </button>
          </Link>
        </div>
      </main>
      <main className='about-section'>
        <div className='container-about'>
          {/* <h1>MY</h1> */}
          <h3>{displayedText}<span className="blinking-cursor">|</span></h3>
          <div className='main-about'>
            <div className="holographic-card">
              <a><img src='/downsection.jpeg' alt='KATE' /></a>
            </div>
            <div className="holographic-card">
              <a><img src='/he1.jpeg' alt='KATE' /></a>
            </div>
            <div className="holographic-card">
              <a><img src='/he2.jpeg' alt='KATE' /></a>
            </div>
            <div className="holographic-card">
              <a><img src='/he3.jpeg' alt='KATE' /></a>
            </div>
          </div>
          <a href='https://www.tiktok.com/@katsia55?_t=ZS-8wGN9551DlA&_r=1' target="_blank" className="btn matrix">
            <span>WATCH MORE &#8608;</span>
            <div className="code-rain"></div>
          </a>
        </div>
      </main>
      <main className='wrapper-feature'>
        <h4>AS FEATURE ON</h4>
        <div className='feature-image'>
          <div className='box-feature'>
            <a href=''><img src='/bbc-ogo.png' alt='BBC' /></a>
          </div>
          <div className='box-feature'>
            <a href=''><img src='/cnn-logo.png' alt='BBC' /></a>
          </div>
          <div className='box-feature'>
            <a href=''><img className='national' src='/nationalg-logo.png' alt='BBC' /></a>
          </div>
        </div>
      </main>
      <main className='wrapper-blog'>
        <h5 className='blog-tittle'>LATEST BLOG POST</h5>
        <div className='blog-section'>
            <div className='each-box'>
              <img src='/he.jpeg'/>
              <div className='blog-desc'>
                <h6>Dubai</h6>
                <h1>25 PLACES MUST VISIT IN DUBAI</h1>
                <p>By Kate P</p>
              </div>
            </div>
            <div className='each-box'>
              <img src='/he1.jpeg'/>
              <div className='blog-desc'>
                <h6>Georgia</h6>
                <h1>3 Days In Georgia</h1>
                <p>By Kate P</p>
              </div>
            </div>
            <div className='each-box'>
              <img src='/he2.jpeg'/>
              <div className='blog-desc'>
                <h6>Armenia</h6>
                <h1>3 Days In Armenia</h1>
                <p>By Kate P</p>
              </div>
            </div>
            <div className='each-box'>
              <img src='/he3.jpeg'/>
              <div className='blog-desc'>
                <h6>Turkey</h6>
                <h1>Place Must Visit In Turkey</h1>
                <p>By Kate P</p>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}