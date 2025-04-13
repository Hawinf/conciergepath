// 'use client'
// import { useEffect, useRef, useState } from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='container-header'>
      <div className='wrapper-header'>
          <header className='header-cp'>
              <h1>KATSIARYNA</h1>
              <h5>PUTSILOUSKAYA</h5>
              <img src='/header-cp5.png' alt='kate' />
              <div className='head-desc'>
                  <a href='' className='link-blog'>READ MY BLOG</a>
                  <a href='' className='link-video'>VIDEO</a>
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
          <a className='dc-explore' href=''>EXPLORE DESTINATION &#8608;</a>
        </div>
      </main>
    </div>
  );
}