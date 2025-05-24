import './shop.css';
import Navbar from '../components/navbar/navbar';
import Link from 'next/link';
import Footer from '../components/footer/footer';

export default function Shop() {

    return (
        <>
            <Navbar />
            <main className='shop-wrapper'>
                <nav className='shop-nav'>
                    <h1>"Get a Stunning Website – Custom Design Services"</h1>
                    <Link href='/web-guide.pdf' download="My-Guide.pdf" target='blank' className='nav-orderbtn'>Details</Link>
                </nav>
                <main className='shop-section'>
                    <nav className='shop-branch'>
                        <h1>Empowering Your Business Online – One Pixel at a Time.</h1>
                        <Link href='https://wa.me/971506841998?text=Hi%20I%20am%20interested%20in%20your%20services' target='blank' className='shop-btn'>Shop</Link>
                    </nav>
                    <nav className='shop-branch2'>
                        <main className='section-branch-top'>
                            <h1>More Than a Website – It's Your Bridge to the World.</h1>
                        </main>
                        <main className='section-branch-down'>
                            <h1>Engage. Inspire. Convert. Websites `That Speak to Your Audience.</h1>
                        </main>
                    </nav>
                </main>
                <main className='shop-desc'>
                    <h1>Build a Stunning Website — We Do the Work, You Focus on Your Business</h1>
                    <h6>We specialize in creating professional websites for businesses, startups, and entrepreneurs across the globe. Whether you need a landing page, a corporate company profile, or a fully functional ecommerce store, we design and deliver websites that reflect your brand and convert visitors into customers.</h6>
                </main>
                <main className='shop-content'>
                    <nav className='content-left'>
                        <h5>We build responsive, SEO-friendly websites tailored to your business</h5>
                        <ul>
                            <li>Landing Pages – Optimized for lead generation and conversion.</li>
                            <li>Company Profile Websites – Highlight your team, services, and achievements.</li>
                            <li>Ecommerce Websites – Sell products with secure payment integration, product pages, and inventory management.</li>
                        </ul>
                    </nav>
                    <nav className='content-right'>
                        <h5>Want to keep your website fresh without lifting a finger? Choose our monthly management plan, and we’ll</h5>
                        <ul>
                            <li>Update content, images, and text as needed.</li>
                            <li>Publish blog posts or articles provided by you.</li>
                            <li>Add new pages or promotions.</li>
                            <li>Ensure site security, backups, and performance.</li>
                        </ul>
                    </nav>
                </main>
            </main>
            <Footer />``
        </>
    );
};``