// /app/discover-world/[continent]/page.js
import blogData from '../../data/blogsData';
import Navbar from '@/app/components/navbar/navbar';
import Link from 'next/link';
import './continent.css';

export default function ContinentPage({ params }) {
  const { continent } = params;
  const data = blogData[continent];

  if (!data) {
    return <div>Continent not found</div>;
  }

  return (
    <main className="wrapper-continent" >
      <Navbar />
      <div className='section-continent'>
        <h1>{continent.toUpperCase()} Blog</h1>
        <p>{data.content}</p>

        <h2>Countries:</h2>
        <ul>
          {Object.keys(data.countries).map((country) => (
            <li key={country}>
              <Link href={`/discover-world/${continent}/${country}`}>
                {country}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
