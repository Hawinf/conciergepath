import blogData from '../../../data/blogsData';
import Link from 'next/link';
import Navbar from '@/app/components/navbar/navbar';
import './country.css';



export default function CountryPage({ params }) {
    const { continent, country } = params;
    const data = blogData[continent]?.countries[country];
  
    if (!data) {
      return <div>Country not found.</div>;
    }
  
    return (
      <main className='section-country'>
        <Navbar />
        <div className='wrapper-country'>
            <h1>{country.toUpperCase()} Blog</h1>
            <p>{data.content}</p>
    
            <h2>Cities:</h2>
            <ul>
            {Object.keys(data.cities).map((city) => (
                <li key={city}>
                <Link href={`/discover-world/${continent}/${country}/${city}`}>
                    {city}
                </Link>
                </li>
            ))}
            </ul>
        </div>
      </main>
    );
  }
