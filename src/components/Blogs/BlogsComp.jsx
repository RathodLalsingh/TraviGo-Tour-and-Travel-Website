import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra The Taj Mahal is located in Agra, Uttar Pradesh, India. It is a mausoleum complex that sits on the banks of the Yamuna river. What it is: A white marble mausoleum, A symbol of love and devotion, A UNESCO World Heritage site, and A masterpiece of Mughal architectur The Taj Mahal attracts from 7 to 8 million visitors annually, with more than 0.8 million from overseas. Most tourists visit in the cooler months of October, November and February. The Taj Mahal attracts a large number of visitors each year, with estimates ranging from 7 to 8 million people coming to witness its stunning architecture and historical significance; this makes it one of the most visited monuments globally, drawing tourists from all corners of the world to experience its beauty and the story of love behind its creation. he Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect IT services are a major export, with the U.S. and Europe as key markets.Emerging technologies like cloud computing, AI, and cybersecurity are boosting export AI is being adopted in agriculture, healthcare, and governance to improve efficiency and accessibility.Example: AI-powered tools for crop monitoring, medical diagnosis, and smart governance Known for its breathtaking landscapes, high-altitude mountains, monasteries, and adventure activities.Must-visit places: Pangong Lake, Nubra Valley, Magnetic Hill, and Hemis Monastery Known for their crystal-clear waters, coral reefs, and adventure activities like scuba diving and snorkeling.Must-visit places: Radhanagar Beach, Cellular Jail, Ross Island, and Neil Island Known as the Silicon Valley of India Bengaluru is the tech hub of the country.Must-visit places: Lalbagh Botanical Garden, Cubbon Park, and Bannerghatta National Pa",
    author: "Someone",
    date: "April 22, 2023",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "Iconic landmarks representing freedom and immigration historyTimes Square: Vibrant hub of Broadway theaters, LED billboards, and bustling energy.Central Park: A massive green oasis in the city, perfect for picnics, walks, and boating.Empire State Building: Offers stunning views of Manhattan from its observation decks.Museums: The Met (Metropolitan Museum of Art), MoMA (Museum of Modern Art), and the American Museum of Natural History.Why Visit: The Statue of Liberty is a global symbol of freedom and democracy. Ellis Island served as the gateway for millions of immigrants to the United States.What to Do: Take a ferry from Battery Park to Liberty Island and Ellis Island. Climb up to the pedestal or crown of the statue for panoramic views.Pro Tip: Book tickets in advance, especially for crown access, as it sells out months ahead One of the Seven Natural Wonders of the World, the Grand Canyon is a stunning geological marvel carved by the Colorado River over millions of years.Its sheer size, colorful layers of rock, and breathtaking views make it one of the most visited natural attractions in the U.S.What to Do: Hike trails like the Bright Angel or South Kaibab, take a helicopter tour, or raft the Colorado River. An engineering marvel and one of the most photographed bridges in the world, the Golden Gate Bridge connects San Francisco to Marin County.Its red-orange hue stands out beautifully against the often foggy backdrop.What to Do: Walk or bike across the bridge, and enjoy views from nearby viewpoints like Battery Spencer America’s development and technological leadership are the result of a combination of factors, including its economic strength, cultural emphasis on innovation, world-class education system, and access to resources. These elements work together to create a fertile environment for continuous growth and advancement, making the U.S. a global powerhouse in technology and development.Let me know if you'd like to explore any of these aspects further.",
    author: "Someone",
    date: "April 10, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "The bustling capital of Japan, Tokyo is a blend of futuristic technology, traditional culture, and vibrant city life.Known for its skyscrapers, shopping districts, and iconic attractions Known for its food, nightlife, and friendly locals, Osaka is a vibrant city that contrasts with Kyoto’s traditional charm Japan’s most iconic natural landmark and a UNESCO World Heritage Site.Revered as a symbol of Japan’s natural beautyA city of peace and resilience, Hiroshima is known for its history, peace monuments, and nearby natural beauty.Top Attractions:Hiroshima Peace Memorial Park and Museum: Dedicated to the victims of the atomic bombing.Atomic Bomb Dome: A haunting reminder of the citys past.Miyajima Island (Itsukushima Shrine): Known for its floating torii gate and deer roaming freely.What to Do:Take a ferry to Miyajima, explore local food like okonomiyaki, and reflect on history at the Peace Memorial. NaraWhy Visit:Japans first capital city, Nara is known for its historical sites and friendly, roaming deer.Top Attractions:Todai-ji Temple: Home to the Great Buddha (Daibutsu), one of the largest bronze Buddha statues in the world.Nara Park: A park where you can interact with freely roaming deer.Kasuga Taisha Shrine: A historic Shinto shrine with thousands of stone and bronze lanterns. Japan introduced land reforms, democratized labor policies, and established financial systems to promote savings and investment.Zaibatsu to Keiretsu: Japan transitioned from pre-war conglomerates (zaibatsu) to post-war corporate alliances (keiretsu), fostering industrial collaboration and innovati Japan’s transformation into a developed and technologically advanced nation is the result of a unique combination of strategic planning, government-industry collaboration, cultural values, and a relentless focus on quality and innovationo",
    author: "Someone",
    date: "April 1, 2023",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
