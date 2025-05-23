import './shop.css';
import Navbar from '../components/navbar/navbar';
import Link from 'next/link';

export default function Shop() {

    return (
        <>
            <Navbar />
            <main className='shop-wrapper'>
                <nav className='shop-nav'>
                    <h1>"Get a Stunning Website – Custom Design Services"</h1>
                    <Link href='' className='nav-orderbtn'>Shop</Link>
                </nav>
                <main className='shop-section'>
                    <nav className='shop-branch'>
                        <h1>Empowering Your Business Online – One Pixel at a Time.</h1>
                    </nav>
                    <nav className='shop-branch2'>
                        <main className='section-branch-top'>
                            <h1>More Than a Website – It's Your Bridge to the World.</h1>
                        </main>
                        <main className='section-branch-down'>
                            <h1>Engage. Inspire. Convert. Websites That Speak to Your Audience.</h1>
                        </main>
                    </nav>
                </main>
            </main>
        </>
    );
};``