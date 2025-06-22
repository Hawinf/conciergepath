import Navbar from '@/app/components/navbar/navbar';
import dubaiBlogs from '../../../data/dubaiBlogs';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '@/app/components/footer/footer';
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
        {/* Render blog content here */}
      </nav>
      <Footer/>
    </>
  );
}
