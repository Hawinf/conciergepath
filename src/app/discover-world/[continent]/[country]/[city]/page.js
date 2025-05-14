import blogData from '../../../../data/blogsData';
import Navbar from '@/app/components/navbar/navbar';
import './city.css';


export default function CityPage({ params }) {
    const { continent, country, city } = params;
    const data = blogData[continent]?.countries[country]?.cities[city];
  
    if (!data) {
      return <div>City not found.</div>;
    }
  
    return (
      <main className='section-city'>
        <Navbar />
        <div className='wrapper-city'>
            <h1>{city.toUpperCase()} Blog</h1>
            <p>{data.content}</p>
        </div>
      </main>
    );
  }