import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Travelling is an experience that can teach us so many things that you cannot possibly learn while living at home.

Firstly, it teaches you how to make new friends. The world is full of people who love interacting. You get to make friends when you travel to new places and spend quality time with them.

Moreover, it also helps you enhance your social skills. After that, travelling is great for learning new skills. For instance, going to mountain regions teaches you how to trek. Similarly, going to beaches helps you learn scuba diving or surfing.

You can also enjoy the beauty of nature when you travel. Similarly, you get to explore nature like never before and find discover the earth’s beauty. Travelling also helps us understand people.
          </p>
          <br />
          <p>
          International travel offers an unparalleled opportunity to immerse yourself in diverse cultures, where you can wander through ancient historical sites, savor exotic cuisines, and engage with people from different walks of life, broadening your perspective and creating memories that last a lifetime.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
