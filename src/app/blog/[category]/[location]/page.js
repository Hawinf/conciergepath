
import Navbar from '@/app/components/navbar/navbar';
import dubaiBlogs from '../../../data/dubaiBlogs';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '@/app/components/footer/footer';
import Link from 'next/link';
import './blogs.css';

export async function generateStaticParams() {
  return dubaiBlogs.map(post => ({
    category: post.category,
    location: post.location,
  }));
}

export default function BlogPost({ params }) {
  const { category, location } = params;

  const post = dubaiBlogs.find(
    p => p.category === category && p.location === location
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <Navbar/>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
      </Head>

      <nav>
        <Image
          width={100} height={100}
          src={post.image}
          alt={post.title}
          className='blogs-header'
        />
        <main className='blog-headerdesc'>
            <h1 className='blog-headertittle'>{post.title}</h1>
            <p className='blog-headerdescriptions'>{post.description}</p>
        </main>

        <nav className='continentpage-aff'>
        <h1 className='cp-afftittle' data-aos="fade-up">ITINERARIES</h1>
        <main className='affiliate-section'>
          {['flight', 'bus', 'car-rent', 'jogging', 'ticket', 'guide', 'food', 'simcard'].map((type) => (
            <nav key={type} className='cp-affbox' data-aos="slide-left">
              <Link href=''>
                <Image 
                  src={`/${type}.png`} 
                  width={30} 
                  height={30} 
                  alt={`Find cheap ${type} for ${post?.title}`} 
                />
                <h6>
                  Find cheap {type} to{" "}
                  {post?.title?.charAt(0).toUpperCase() + post?.title?.slice(1).toLowerCase()}
                </h6>
              </Link>
            </nav>
          ))}
        </main>
      </nav>

        {/* Render Itinerary */}
        {post.itinerary && (
          <section className="blog-itinerary">
            <h2 className="blog-section-title">Itinerary</h2>
            {post.itinerary.map((day, index) => (
              <div key={index} className="itinerary-day">
                <h3>{day.day}: {day.title}</h3>
                <p>{day.details}</p>
              </div>
            ))}
          </section>
        )}

        {/* Best Time to Visit */}
        {post.bestTimeToVisit && (
          <section className="blog-besttime">
            <h2 className="blog-section-title">Best Time to Visit</h2>
            <p>{post.bestTimeToVisit}</p>
          </section>
        )}

        {/* Extra Notes */}
        {post.note && (
          <section className="blog-note">
            <h2 className="blog-section-title">Travel Notes</h2>
            <p>{post.note}</p>
          </section>
        )}
      </nav>
      <Footer/>
    </>
  );
}
