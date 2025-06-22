import Link from "next/link";
import Head from "next/head";
import dubaiBlogs from "../data/dubaiBlogs";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from 'next/image';
import './discoverdubai.css';

export default function DiscoverDubai() {
  return (
    <>
    <Navbar/>
    <main className="wrapper-discoverdubai">
      <Head>
        <title>Discover Dubai</title>
        <meta name="description" content="Explore food, beaches, and attractions in Dubai." />
      </Head>
      
      <nav className="discoverdubai-navbar">
        <h1 className="discoverdubai-tittle">DISCOVER DUBAI</h1>
        <p className="discoverdubai-desc">
        Planning your Dubai trip? Uncover the best local restaurants, free public beaches, and unforgettable experiences in Dubai. From iconic destinations like Palm Jumeirah to hidden gems in JLT, this guide is your go-to resource for discovering what to see, eat, and do in Dubai.
        </p>
      </nav>

      <main className="discoverdubai-cardsection">
        {dubaiBlogs.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.category}/${post.location}`}
          >
            <Image src={post.image} alt={post.title} width={100} height={100} className="discoverdubai-cards"/>
            <nav className="discoverdubai-eachcard">
              <h2 className="discoverdubai-eachcard-tittle">{post.title}</h2>
              <p className="discoverdubai-eachcard-desc">
                    {post.description.length > 20
                    ? `${post.description.slice(0, 40)}...`
                    : post.description}
              </p>
            </nav>
          </Link>
        ))}
      </main>
      
    </main>
    <Footer/>
    </>
  );
}