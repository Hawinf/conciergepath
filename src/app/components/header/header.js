'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { motion } from "motion/react"
import './header.css';
import Footer from '../footer/footer';
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Header() {

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'EXPLORE DUBAI';
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
  }, []);``

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  


  return (
    <>
    <div className='container-header'>
      <div className='wrapper-header'>
          <header className='header-cp'>
              <h1 data-aos="slide-right">KATSIARYNA</h1>
              <div className='melting-text-container'>
                <h5 className='melting-text' data-aos="slide-right">PUTSILOUSKAYA</h5>
              </div>
              {/* <img src='/header-cp5.png' alt='kate' data-aos="fade-up"/> */}
              <img className='webheader' src='/webheader.png' alt='kate' data-aos="fade-up"/>
              <div className='head-desc'>
                  <Link href='/discover-world' className='link-blog' data-aos="slide-right">DISCOVER WORLD</Link>
                  <a href='/discover-dubai' className='link-video' data-aos="slide-left">DUBAI</a>
                  <p data-aos="slide-right">I create travel guides and backpacking itineraries from around the world, as well as sharing photography resources and more.</p>
              </div>
          </header>
          
      </div>
      <div className='main-header' >
        <div className='continents-map'>
        <div className="slider-container" data-aos="slide-right">
          <Slider {...settings}>
            <div className='box-map' >
                <Link href='/continent/africa'>
                  <img className='each-map' src='/africa.png' alt='africa' />
                  <p>Africa</p>
                </Link>
            </div>
            <div className='box-map'>
                <Link href='/continent/asia' >
                  <img className='each-map' src='/asia.png' alt='asia' />
                  <p>Asia</p>
                </Link>
              </div>
              <div className='box-map'>
                <Link href='/continent/europe'>
                  <img className='each-map' src='/europe.png' alt='europe' />
                  <p>Europe</p>``
                </Link>
              </div>
              <div className='box-map'>
                <Link href='/continent/northamerica'>
                  <img className='each-map' src='/north-america.png' alt='north-america' />
                  <p>North America</p>
                </Link>
              </div>
              <div className='box-map'>
                <Link href='/continent/southamerica'>
                  <img className='each-map' src='/south-america.png' alt='south-america' />
                  <p>South America</p>
                </Link>
              </div>
              <div className='box-map'>
                <Link href='/continent/oceania'>
                  <img className='each-map' src='/oceania.png' alt='oceania' />
                  <p>Oceania</p>
                </Link>
              </div>
      </Slider>``
    </div>
        </div>
      </div>
    {/* test */}
    
{/* test */}
      <main className='container-discover'>
        <div className='dc-left' data-aos="slide-right">
          <img src='/world-map.png' alt='discover the world' />
        </div>
        <div className='dc-right'>
          <h1 className='right-tittle' data-aos="fade-up">DISCOVER</h1>
          <h1 className='right-tittle1'>THE WORLD &#8690;</h1>
          <p data-aos="fade-up">We have written over 600+ travel guides and backpacking itineraries to provide all the information you need to help plan your dream trip around the world.</p>
          <Link href='/discover-world' className='link-blog'>
            <button className="btn matrix" data-aos="fade-up">
              <span>EXPLORE DESTINATION &#8608;</span>
              <div className="code-rain"></div>
            </button>
          </Link>
        </div>
      </main>
      <main className='about-section' >
        <div className='container-about'>
          {/* <h1>MY</h1> */}
          <h3>{displayedText}<span className="blinking-cursor">|</span></h3>
          <div className='main-about' >
            <div className="holographic-card" data-aos="slide-right">
              <Link href=''>
                <img src='/restaurants.jpg' alt='KATE' />
                <h6>Restaurants And Bars In Palm Jumeirah</h6>
                <p>By Katy</p>
              </Link>
            </div>
            <div className="holographic-card" data-aos="fade-down">
              <Link href=''>
                <img src='/beaches.jpg' alt='KATE' />
                <h6>Beach Club In Dubai</h6>
                <p>By Katy</p>
              </Link>
            </div>
            <div className="holographic-card" data-aos="slide-left">
              <Link href=''>
                <img src='/jlt.jpg' alt='KATE' />
                <h6>Places To Eat In JLT</h6>
                <p>By Katy</p>
              </Link>
            </div>
            <div className="holographic-card" data-aos="fade-up">
              <Link href=''>
                <img src='/public-beach.jpg' alt='KATE' />
                <h6>Public Beaches In Dubai</h6>
                <p>By Katy</p>
              </Link>
            </div>
          </div>
          <a href='/discover-dubai' className="btn matrix" >
            <span data-aos="fade-up">EXPLORE DUBAI &#8608;</span>
            <div className="code-rain"></div>
          </a>
        </div>
      </main>
    </div>
    </>
  );
}