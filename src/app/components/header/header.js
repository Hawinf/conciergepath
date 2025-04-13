// 'use client'
// import { useEffect, useRef, useState } from 'react';
import './header.css';

export default function Header() {
  return (
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
  );
}