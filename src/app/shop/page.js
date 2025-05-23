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
            </main>
        </>
    );
};