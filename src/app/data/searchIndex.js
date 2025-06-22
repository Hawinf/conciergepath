// /app/data/searchIndex.js
import dubaiBlogs from './dubaiBlogs'; // ✅ correct for default export
import { continents } from './continents';
import { countryData } from './countryData';
import { cityData } from './cityData';

export const searchIndex = [
  // Add continents
  ...continents.map(continent => ({
    id: continent.id,
    name: capitalize(continent.name),
    type: 'continent',
    url: `/continent/${continent.id}`,
  })),

  // Add countries
  ...Object.entries(countryData).flatMap(([continentId, countries]) =>
    countries.map(country => ({
      id: country.id,
      name: capitalize(country.name),
      type: 'country',
      url: `/country/${country.id}`,
    }))
  ),

  // Add cities
  ...Object.entries(cityData).flatMap(([countryId, cities]) =>
    cities.map(city => ({
      id: city.id,
      name: capitalize(city.name),
      type: 'city',
      url: `/city/${city.id}`,
    }))
  ),

  // Add Dubai Blogs
  // Add Dubai Blogs
  ...dubaiBlogs.map((post) => ({
  id: `${post.category}-${post.location}`,
  name: capitalize(post.title),
  type: 'dubai-blog',
  url: `/blog/${post.category}/${post.location}`,
})),

];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
