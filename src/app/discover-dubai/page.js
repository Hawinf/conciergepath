import Link from "next/link";
import Head from "next/head";
import dubaiBlogs from "../data/dubaiBlogs";

export default function DiscoverDubai() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Head>
        <title>Discover Dubai</title>
        <meta name="description" content="Explore food, beaches, and attractions in Dubai." />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Discover Dubai</h1>
      <p className="text-gray-700 mb-6">
        Discover the best that Dubai has to offer — from culinary delights and hidden gems to
        stunning beaches and must-do activities. Whether you're here for a short trip or a long
        stay, explore handpicked guides for an unforgettable experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dubaiBlogs.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.category}/${post.location}`}
            className="block border rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-800 hover:underline">{post.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}