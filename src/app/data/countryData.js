export const countryData = {
    africa: [
      {
        id: 'egypt',
        name: 'EGYPT',
        writter : 'By Katy',
        description: "Discover the wonders of Egypt — from the majestic Pyramids of Giza and the ancient temples of Luxor to the bustling streets of Cairo and the beauty of the Nile. Plan your perfect Egypt travel itinerary with tips, guides, and must-see destinations.",
        image: '/egypt.jpg', 
      },
    ],
    asia: [
      {
        id: 'kyrgyzstan',
        name: 'KYRGYZSTAN',
        writter : 'By Katy',
        description: 'Explore the hidden beauty of Kyrgyzstan — from the alpine lakes of Issyk-Kul to the rugged Tien Shan mountains. Discover top travel tips, cultural insights, and adventure guides for your journey through Central Asia.',
        image: '/kyrgyzstan.jpg',
      },
      {
        id: 'qatar',
        name: 'QATAR',
        writter : 'By Katy',
        description: 'Explore Qatar, a captivating Middle Eastern destination where ancient traditions meet cutting-edge innovation. From the futuristic skyline of Doha to the serene beauty of the Inland Sea (Khor Al Adaid), Qatar offers a unique blend of experiences. Discover iconic attractions like the Museum of Islamic Art, the vibrant Souq Waqif, and the architectural wonder of The Pearl-Qatar. Whether youre interested in luxury travel, desert safaris, cultural tours, or 2022 FIFA World Cup landmarks, Qatar is a top travel destination for history lovers, adventurers, and modern explorers alike. Get practical Qatar travel tips, visa info, and must-see places to make the most of your journey through this rising Gulf gem.',
        image: '/qatar.jpg',
      },
      {
        id: 'uae',
        name: 'UNITED ARAB EMIRATES',
        writter : 'By Katy',
        description: 'The United Arab Emirates (UAE) is a top Middle East travel destination known for its iconic Dubai skyscrapers, Abu Dhabi beaches, rich culture, and thrilling desert adventures. From the towering Burj Khalifa to vibrant souks and luxury resorts, the UAE offers a perfect mix of modern wonders and traditional charm. Whether youre into shopping, food, history, or outdoor adventures, the UAE has something for every traveler.',
        image: '/uae.jpg',
      },
      {
        id: 'kazakhstan',
        name: 'KAZAKHSTAN',
        writter : 'By Katy',
        description: 'Discover the beauty of Kazakhstan, a vast and diverse country in Central Asia known for its dramatic landscapes, nomadic culture, and modern cities like Almaty and Astana (Nur-Sultan). From the breathtaking Charyn Canyon and Altai Mountains to the mysterious Steppe and ancient Silk Road sites, Kazakhstan offers a unique blend of adventure, culture, and history. Whether youre interested in eco-tourism, backpacking, or experiencing the rich traditions of Kazakh hospitality, this guide helps you plan your journey through one of the most underrated travel destinations in the world.',
        image: '/kazak.jpg',
      },
      {
        id: 'turkey',
        name: 'TÜRKİYE',
        writter : 'By Katy',
        image: '/turkey.jpg',
        description:
          'Türkiye is a land where East meets West, blending ancient history, stunning natural wonders, and vibrant modern cities. From the cultural depth of Istanbul to the fairy chimneys of Cappadocia, this 13-day journey covers the best of the country—filled with Roman ruins, Ottoman architecture, thermal springs, and breathtaking landscapes.',

        itinerary: {
          title: '13 Days in Türkiye',
          subtitle:
            'From bustling bazaars to volcanic valleys, this solo journey across Turkey offers a complete experience of culture, history, and adventure. Discover my route and highlights day by day.',

          days: {
            istanbul: {
              title: 'Day 1–3: Istanbul – The Crossroads of Empires',
              intro:
                'Formerly Byzantium and Constantinople, Istanbul was the capital of Roman, Byzantine, and Ottoman Empires. It connects Europe and Asia through rich history and diverse neighborhoods.',
              gettingThere:
                'Istanbul is a major transport hub with international flights. It’s the perfect place to start your Turkish adventure.',
              highlights: [
                'Hagia Sophia – A 6th-century monument that served as church, mosque, museum, and now again a mosque.',
                'Blue Mosque – Famous for its İznik tiles and grand Ottoman architecture.',
                'Topkapı Palace – Former Ottoman headquarters with relics, gardens, and museum collections.',
                'Basilica Cistern – Underground marvel with Medusa-head columns from the 6th century.',
                'Galata Tower – A panoramic view from this 14th-century Genoese-built watchtower.',
                'Istiklal Avenue & Kadıköy – Bustling areas reflecting modern Turkish life.',
              ],
            },

            izmir: {
              title: 'Day 4–6: Izmir – From Smyrna to a Modern Republic',
              intro:
                'Izmir, once ancient Smyrna, has evolved from Greek roots to a key Ottoman and now modern Turkish city. A hub of independence, it’s vibrant and full of charm.',
              transport: 'I took a flight from Istanbul to Izmir. Buses are also available.',
              highlights: [
                'Konak Square & Clock Tower – A symbol of Izmir with a clock gifted by Kaiser Wilhelm II.',
                'Kemeralti Bazaar – A lively historic market area from the 17th century.',
                'Ephesus – Roman capital of Asia Minor. Accessible via train and minibus or organized tour.',
                'Alaçatı & Urla – Quaint Aegean towns known for vineyards and arts.',
              ],
            },

            pamukkale: {
              title: 'Day 7–8: Pamukkale/Denizli – Sacred Waters of Hierapolis',
              transport:
                'Train from Izmir to Denizli (a small friendly city), followed by a minibus or tour to Pamukkale.',
              highlights: [
                'Hierapolis – An ancient Roman spa city and UNESCO site with temples and one of Anatolia’s largest necropolises.',
                'Pamukkale Travertines – Terraced white formations from calcium-rich thermal springs.',
                'Antique Pool – Thermal pool with Roman column ruins, rumored to have been visited by Cleopatra.',
                'Kaklık Cave – An underground version of Pamukkale, shaped by similar geology.',
              ],
            },

            cappadocia: {
              title: 'Day 9–11: Cappadocia – The Land of Volcanic Faith',
              transport:
                'I took an overnight bus to Göreme. Flights are available to Nevşehir Airport.',
              intro:
                'Cappadocia is a surreal landscape shaped by volcanic activity and inhabited for millennia. Early Christians carved monasteries and homes into soft rock.',
              highlights: [
                'Hot Air Balloon Ride – See fairy chimneys and valleys at sunrise.',
                'Göreme Open-Air Museum – Byzantine cave churches and frescoes.',
                'Red & Rose Valleys – Colored rock formations with hidden chapels.',
                'Avanos – Historic pottery town on the Kızılırmak River.',
                'Derinkuyu Underground City – 8 levels of tunnels once sheltering Christians.',
                'Ihlara Valley – A gorge with hiking paths and cave churches.',
              ],
              tip:
                'Explore independently or take a tour—horseback riding is a popular option.',
            },

            ankara: {
              title: 'Day 12: Ankara – The Modern Heart of a New Nation',
              transport:
                'Easy to reach via train, bus, or flight from Cappadocia or other cities.',
              intro:
                'Ankara became Türkiye’s capital in 1923, representing a shift toward secular republicanism under Atatürk.',
              highlights: [
                'Anıtkabir – Mausoleum of Atatürk with a ceremonial plaza and museum.',
                'Museum of Anatolian Civilizations – Showcasing 10,000+ years of Anatolian history.',
                'Hamamönü – Restored Ottoman neighborhood with crafts and tea gardens.',
              ],
            },

            trabzon: {
              title: 'Day 13: Trabzon – Byzantium in the Mist',
              transport:
                'Reachable via bus or flight from Ankara. Border city near Georgia, with onward travel options.',
              intro:
                'Trabzon was once the capital of the Empire of Trebizond and an important Silk Road port. It blends Black Sea traditions with Byzantine heritage.',
              highlights: [
                'Sumela Monastery – Built into a cliff in the 4th century with vivid frescoes.',
                'Boztepe Hill – Sunset viewpoint with ancient legends and local tea spots.',
              ],
              tip:
                'Organized tours are best for reaching Sumela. Return flights available to Istanbul or Ankara.',
            },
          },

          accommodation: {
            general: 'Use Booking.com to find and compare hotels across Türkiye.',
            recommendations: [
              {
                city: 'Denizli',
                hotel: 'Piskin Hotel – Affordable with excellent service.',
              },
              {
                city: 'Cappadocia',
                hotel:
                  'Kepez Hotel – Great value with homemade breakfast by a kind local woman.',
                food:
                  'Lunch at Göreme Kadın Kooperatifi – fresh, affordable home-cooked meals.',
              },
              {
                city: 'Trabzon',
                hotel: 'Zeytindalı Hotel – Comfortable and conveniently located.',
              },
            ],
          },
        },
        },
      {
        id: 'uzbekistan',
        name: 'UZBEKISTAN',
        writter : 'By Katy',
        description: 'Explore the wonders of Uzbekistan, a hidden gem in Central Asia known for its rich Silk Road history, ancient cities, and stunning Islamic architecture. Walk through the blue-tiled madrasas of Samarkand, the historic streets of Bukhara, and the desert citadel of Khiva. This culturally rich country offers a blend of traditional Uzbek hospitality, vibrant bazaars, and delicious cuisine like plov and samsa. Whether youre seeking a historical adventure, unique photo opportunities, or off-the-beaten-path experiences, Uzbekistan is a must-visit destination. Get essential Uzbekistan travel tips, guides, and itinerary ideas to help plan your journey through one of the worlds oldest civilizations.',
        image: '/uzbekistan.jpg',
      },
    ],
    europe: [
      {
        id: 'belarus',
        name: 'BELARUS',
        writter : 'By Katy',
        description: 'Uncover the beauty of Belarus, a peaceful and scenic country in Eastern Europe known for its Soviet-era history, untouched nature, and warm hospitality. Explore the charming capital Minsk, stroll through medieval castles like Mir and Nesvizh, and immerse yourself in the serene landscapes of Belovezhskaya Pushcha National Park, a UNESCO World Heritage Site. Belarus offers a unique blend of cultural heritage, architectural treasures, and tranquil countryside. Whether youre a history buff, nature lover, or off-the-beaten-path traveler, Belarus provides a safe and affordable adventure. Get insider Belarus travel tips, destination guides, and itinerary ideas for an unforgettable journey.',
        image: '/belarus.jpg',
      },
      {
        id: 'georgia',
        name: 'GEORGIA',
        writter : 'By Katy',
        image: '/georgia.jpg',
        description:
          'Discover the stunning beauty and rich culture of Georgia, nestled between Europe and Asia. From Tbilisi’s historic streets to the Black Sea coast, Georgia offers a rich blend of history, adventure, nature, and cuisine. Explore ancient monasteries, hike majestic mountains, bathe in thermal springs, and taste world-class wines. Whether youre a backpacker or luxury traveler, Georgia is an affordable and safe destination filled with hidden gems.',
  
        itinerary: {
          title: '8 Days Across Georgia: Tbilisi, Kutaisi & Batumi',
          subtitle:
            'From ancient monasteries to modern architecture, wild canyons to Black Sea sunsets, Georgia blends history, nature, and culture. This personal itinerary includes travel tips, local prices, and must-see places.',
          
          gettingThere: {
            title: 'Getting There:',
            description:
              'Arrive via Tbilisi International Airport. Bus No. 337 connects the airport to the city center (every 30 min, 7 AM–11 PM, card payment accepted).',
          },

          tbilisi: {
            title: 'Day 1–3: Tbilisi – The Cultural Capital',
            thingsToDo: {
              title: 'Things to Do in Tbilisi',
              description: 'Tbilisi’s charm lies in its diverse architecture and walkable streets. Allocate at least 3 days to explore:',
              list: [
                'Sameba Cathedral (Holy Trinity): A modern church with panoramic city views.',
                'Narikala Fortress: Ancient 4th-century ruins. Wear good shoes for the climb!',
                'Mother of Georgia (Kartlis Deda): Reachable by cable car (3 GEL), holding wine for friends and a sword for enemies.',
                'Liberty Square & Rustaveli Avenue: Central hub with historic buildings, shops, and cafés.',
                'Old Tbilisi & Sulphur Baths: Historic alleys, balconies, and traditional thermal bathhouses.',
                'Bridge of Peace: A modern pedestrian bridge—especially beautiful at night.',
              ],
            },
          },

          mtskheta: {
            title: 'Day Trip: Mtskheta – The Spiritual Heart of Georgia',
            howToGetThere: 'Take a minibus from Didube Bus Station (around 1 GEL).',
            whatToSee: [
              'Jvari Monastery: A 6th-century hilltop church with breathtaking views where two rivers meet.',
              'Svetitskhoveli Cathedral: One of Georgia’s holiest sites, located in the center of Mtskheta.',
            ],
            culturalTip:
              'Enter as many churches and monasteries as you like. They are often modest inside but architecturally stunning. Women should cover their heads—scarves are usually available at the entrance.',
          },

          kutaisi: {
            title: 'Day 4–5: Kutaisi – Nature, Monasteries & Waterfalls',
            gettingThere:
              'Train from Tbilisi to Kutaisi takes ~6 hours (8 GEL), or ~3 hours to Kutaisi Airport by express train.',
            thingsToDo: {
              title: 'Things to Do Around Kutaisi',
              description: 'While the city is modest, its surroundings are full of natural and cultural treasures:',
              list: [
                'Kinchkha Waterfall: A multi-tiered waterfall deep in the mountains. Entry: 17 GEL.',
                'Boga Canyon: A lesser-known gem with raw natural beauty.',
                'Gelati Monastery: A UNESCO-listed 12th-century monastery founded by King David the Builder. Free entry.',
                'Motsameta Monastery: Set above a blue river canyon. Hike from Gelati or take a ride.',
                'Martvili Canyon: Famous for boat rides through turquoise waters. High on my list!',
              ],
            },
            transportTip:
              'Marshrutkas (minibuses) are the main way to get around. Prices may vary for tourists, but locals are generous—many offered me rides for free.',
          },

          batumi: {
            title: 'Day 6–8: Batumi – Coastal Charm by the Black Sea',
            gettingThere:
              'Train from Kutaisi to Batumi takes ~4 hours (2 GEL). Tickets are sold only an hour before departure. Take a local bus to the center (card payment accepted).',
            thingsToDo: {
              title: 'What to See in Batumi',
              list: [
                'Ali and Nino Statue: A moving sculpture symbolizing a love story between a Georgian woman and an Azerbaijani man.',
                'Alphabetic Tower: Futuristic tower celebrating the Georgian script.',
                'Europe Square: Elegant plaza with great cafés and photo spots.',
                'Batumi Boulevard: Long seaside promenade, perfect for sunset walks.',
                'Armenian Church: Peaceful 19th-century church on Konstantine Gamsakhurdia Street.',
              ],
            },
            dayTrip: {
              title: 'Day Trip: Makhuntseti Waterfall & Queen Tamar Bridge',
              description:
                'Take Marshrutka No. 77 from the city center. Swim under the waterfall in summer and visit a 900-year-old stone bridge. The road to the site winds through rivers and hills.',
            },
          },

          ending: {
            title: "Getting Back & What’s Next",
            description:
              'From Batumi, I took a train back to Tbilisi (5 hours, 34 GEL). I visited Mtskheta as a final day trip before leaving.',
            airports: 'Both Batumi and Tbilisi have international airports. Check flights online.',
            stillToVisit: {
              title: 'Places I Still Want to Visit',
              list: [
                'Svaneti – The most mountainous and remote region, home to medieval towers.',
                'Kazbegi (Stepantsminda) – For breathtaking views of Mount Kazbek and the Gergeti Trinity Church.',
                'Tusheti National Park – A remote paradise for hikers and adventurers.',
              ],
            },
          },

          logistics: {
            howToGetToGeorgia:
              'International airports in Tbilisi and Batumi offer flights from various destinations. Book tickets online.',
            transport:
              'Minibuses (marshrutkas) are common for short trips. Trains are cheap and reliable for intercity travel. Check train schedules online.',
            tours:
              'If you want a hassle-free experience, consider booking an organized tour.',
            accommodation: {
              tbilisi: 'I stayed at Apart Hotel Console—very comfortable. Check it on booking.com.',
              kutaisi: 'Plenty of local hotels and apartments available.',
              batumi: 'Stayed in Orbi City Towers—great value and location. Check it on Airbnb.',
              },
            },
          },
      },
      {
        id: 'russia',
        name: 'RUSSIA',
        writter : 'By Katy',
        description: 'Uncover the wonders of Russia, the world’s largest country, offering a diverse mix of historic cities, natural beauty, and cultural treasures. From the majestic landmarks of Moscow like the Kremlin and Red Square, to the imperial elegance of St. Petersburg with its Hermitage Museum and palaces, Russia is a destination full of depth. Travel on the iconic Trans-Siberian Railway, explore ancient towns of the Golden Ring, or experience the remote beauty of Lake Baikal, the world’s deepest lake. Whether youre drawn to Russian architecture, Siberian landscapes, or local cuisine, our travel guide provides essential Russia travel tips, top attractions, and inspiration for your journey through this fascinating country.',
        image: '/russia.jpg',
      },
      {
        id: 'armenia',
        name: 'ARMENIA',
        writter : 'By Katy',
        description: 'Explore Armenia, a hidden gem in the South Caucasus known for its ancient monasteries, dramatic mountain landscapes, and deep-rooted Christian heritage. Visit the iconic Geghard Monastery, the ancient temple of Garni, and the spiritual heart of the nation at Etchmiadzin Cathedral. Wander the vibrant streets of Yerevan, enjoy local cuisine like khorovats and lavash, and admire breathtaking views of Mount Ararat. Whether youre a lover of history, adventure, or off-the-beaten-path destinations, Armenia offers a unique and authentic travel experience. Use our travel guide for the best Armenia travel tips, top attractions, and itinerary ideas for your journey through this culturally rich and hospitable country.',
        image: '/armenia.jpg',
      },
    ],
    northamerica: [
      {
        id: 'Mexico',
        name: 'MEXICO',
        writter : 'By Katy',
        description: 'COMING SOON',
        image: '/comingsoon.jpg', 

      },
    ],
    southamerica: [
      {
        id: 'argentina',
        name: 'ARGENTINA',
        writter : 'By Katy',
        description: 'COMING SOON',
        image: '/comingsoon.jpg', 

      },
    ],
    oceania: [
      {
        id: 'australia',
        name: 'AUSTRALIA',
        writter : 'By Katy',
        description: 'COMING SOON',
        image: '/comingsoon.jpg', 

      },
    ],
  };