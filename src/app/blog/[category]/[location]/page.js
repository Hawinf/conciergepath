import dubaiBlogs from '../../../data/dubaiBlogs';
import Head from 'next/head';

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
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700 mb-6">{post.description}</p>

        {/* Render blog content here */}
      </div>
    </>
  );
}
