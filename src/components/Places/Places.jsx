import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "Iconic landmarks representing freedom and immigration historyTimes Square: Vibrant hub of Broadway theaters, LED billboards, and bustling energy.Central Park: A massive green oasis in the city, perfect for picnics, walks, and boating.Empire State Building: Offers stunning views of Manhattan from its observation decks.Museums: The Met (Metropolitan Museum of Art), MoMA (Museum of Modern Art), and the American Museum of Natural History.Why Visit: The Statue of Liberty is a global symbol of freedom and democracy. Ellis Island served as the gateway for millions of immigrants to the United States.What to Do: Take a ferry from Battery Park to Liberty Island and Ellis Island..",
    price: 7502,
    type: "Technology Volatile",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra The Taj Mahal is located in Agra, Uttar Pradesh, India. It is a mausoleum complex that sits on the banks of the Yamuna river. What it is: A white marble mausoleum, A symbol of love and devotion, A UNESCO World Heritage site, and A masterpiece of Mughal architectur The Taj Mahal attracts from 7 to 8 million visitors annually, with more than 0.8 million from overseas. Most tourists visit in the cooler months of October, November and February. The Taj Mahal attracts a large number of visitors each year, with estimates ranging from 7 to 8 million people coming to witness its stunning architecture and historical significance; this makes it one of the most visited monuments globally, drawing tourists from all corners of the world to experience its beauty and the story of love behind its creation. ",
    price: 540,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "Axial Seamount is an underwater volcano located in the northeast Pacific Ocean, about 300 miles off the coast of Oregon. It's the most active submarine volcano in the region. ",
    type: "Developed World",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: " One of the most recognizable architectural masterpieces in the world, known for its unique sail-like design.Sydney Harbour Bridge: Nicknamed the Coathanger,it's a marvel of engineering and offers breathtaking views of the city and harbor.Beaches: Bondi Beach, Manly Beach, and Coogee Beach are globally famous for their surf culture, golden sand, and vibrant atmosphere.Sydney Harbour: Renowned for its scenic beauty, the harbor is a hub for cruises, ferry rides, and waterfront dining.Royal Botanic Garden: A tranquil escape in the heart of the city, with stunning views of the Opera House and Harbour Bridge.Taronga Zoo: A popular spot to see native Australian wildlife and exotic animals, with views overlooking Sydney Harbour.Blue Mountains: Just outside Sydney, this UNESCO World Heritage Site features dramatic scenery, bushwalking trails, and the famous Three Sisters rock formation.Cultural Diversity: Known for its multicultural vibe, Sydney offers a wide range of international cuisines and cultural festivals..",
    price: 6700,
    type: "Famouse For Airports",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Stunning beaches like Santa Monica, Venice Beach, and Malibu, known for their boardwalks, surf culture, and sunsets.Beverly Hills: Famous for luxury shopping on Rodeo Drive, upscale living, and celebrity sightings.Film & TV Studios: Universal Studios, Warner Bros., and Paramount Pictures offer behind-the-scenes tours.Entertainment Venues: The Dolby Theatre (home of the Oscars), Staples Center, and the Hollywood Bowl are key landmarks.",
    price: 6800,
    type: "spreading wildfire",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "Golden Gate Bridge: An iconic suspension bridge in San Francisco.Hollywood: The heart of the global entertainment industry.Disneyland: The original theme park in Anaheim.Yosemite National Park: Known for granite cliffs, waterfalls, and giant sequoias.Death Valley: Home to some of the hottest temperatures on Earth and stunning desert landscapes.",
    price: 7900,
    type: "Economical and technology growth",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
