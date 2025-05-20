// import Link from 'next/link';
// import Navbar from '../components/navbar/navbar';
// import {blogData} from '../data/continents';
import './discover.css';

// export const metadata = {
//   title: "Discover Destinations – ConciergePath",
//   description: "Explore continents, countries, and cities around the world.",
// };


// export default function DiscoverWorld() {
//   const continents = Object.keys(blogData);

//   return (
//     <>
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "CollectionPage",
//           name: "Discover the World – ConciergePath",
//           description:
//             "Explore continents, countries, and cities around the world with in-depth travel blogs and insider tips.",
//           url: "https://yourdomain.com/discover-world",
//         }),
//       }}
//     />

//     <div className='section-dc'>
//       <Navbar />
//       <div className='wrapper-dc'>
//         <h1>Discover the World &#8658;</h1>
//         <h2>Welcome to my travel blog — your go-to guide for exploring the world, one destination at a time. I share travel stories, destination guides, and insider tips as I journey across continents, from the bustling cities of Asia to the hidden gems of Africa and beyond.
//             Whether you're looking for the best places to visit in Japan, must-see attractions in Indonesia, or cultural experiences in Egypt, you'll find detailed travel insights tailored for curious explorers and adventure seekers.
//             Start planning your next trip with in-depth country and city blogs, practical travel tips, and real experiences designed to help you explore the world with confidence.
//             ✈️ Follow along and discover your next destination with me!</h2>
//         <ul>
//           {continents.map((continent) => (
//           <li key={continent}>
//             <Link href={`/discover-world/${continent}`}>
//               <button>{continent.toUpperCase()}</button>
//             </Link>
//           </li>
//            ))}
//         </ul>
//       </div>
//     </div>
//   </>
//   );
// }


// /app/discover-world/page.jsx
  import Head from 'next/head';
  import Link from 'next/link';
  import { continents } from '../data/continents';

  export default function DiscoverWorld() {
    const baseUrl = 'https://yourdomain.com'; // ✅ Update this to your actual domain

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Discover Continents",
      "description": "Browse continents and start planning your trip.",
      "url": `${baseUrl}/discover-world`,
      "itemListElement": continents.map((continent, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${baseUrl}/continent/${continent.id}`,
        "name": continent.name,
      })),
    };

    // console.log("continentId:", continentId);


    return (
      <main className='main-discovery-world'>
        <Head>
          <title>Discover the World – Travel by Continent</title>
          <meta name="description" content="Browse continents and start planning your trip." />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>

        <h1>Discover the World</h1>
        <ul>
          {continents.map(continent => (
            <li key={continent.id}>
              <Link href={`/continent/${continent.id}`}>
                {continent.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
