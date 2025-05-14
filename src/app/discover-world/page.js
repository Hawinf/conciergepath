import Link from 'next/link';
import Navbar from '../components/navbar/navbar';
import blogData from '../data/blogsData';
import './discover.css';


export default function DiscoverWorld() {
  const continents = Object.keys(blogData);

  return (
    <div className='section-dc'>
      <Navbar />
      <div className='wrapper-dc'>
        <h1>Discover the World &#8658;</h1>
        <h2>Welcome to my travel blog — your go-to guide for exploring the world, one destination at a time. I share travel stories, destination guides, and insider tips as I journey across continents, from the bustling cities of Asia to the hidden gems of Africa and beyond.
            Whether you're looking for the best places to visit in Japan, must-see attractions in Indonesia, or cultural experiences in Egypt, you'll find detailed travel insights tailored for curious explorers and adventure seekers.
            Start planning your next trip with in-depth country and city blogs, practical travel tips, and real experiences designed to help you explore the world with confidence.
            ✈️ Follow along and discover your next destination with me!</h2>
        <ul>
          {continents.map((continent) => (
          <li key={continent}>
            <Link href={`/discover-world/${continent}`}>
              <button>{continent.toUpperCase()}</button>
            </Link>
          </li>
           ))}
        </ul>
      </div>
    </div>
  );
}
