import React from 'react';
import Navbar from '../Components/global/Navbar';
// import Footer from '../Components/global/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className={`h-full`}>
      <Navbar />
      <div className="h-[350vh] md:h-96 bg-[#1c1b1b]">
        <div className="w-full h-full">
          <div className="about-me flex justify-between">
            <Image
              src="/about-me.png"
              className="p-7"
              alt="about-me"
              width={350}
              height={800}
            />
            <div className="descr text-white">
              <div className="small mt-5 ml-16">
                <p className="text-gray-400">
                  <Link href="/" className="">
                    Culinary Canvas
                  </Link>{' '}
                  -> About 
                </p>
              </div>
              <h2 className="font-semibold text-3xl font-domaine mt-5 ml-16 text-[#CC5500]">
                ABOUT ME
              </h2>
              <p className="text-base font-arvo tracking-widest leading-relaxed mt-2 ml-16 mr-4">
                I'm more than just a home cook—I’m someone who finds pure joy in
                bringing people together through food. My love for cooking
                started as a simple curiosity and transformed into a deep
                passion that I’ve nurtured over the years. Cooking is my way of
                creating memorable experiences, and every dish I make reflects
                my love for fresh, flavorful ingredients and tried-and-true
                techniques. Friends and family have been my biggest supporters,
                always encouraging me to take this passion further. This
                platform is my way of connecting with more people who love food,
                crave adventure, and want to discover the joy of cooking at
                home.
              </p>
            </div>
          </div>
          <div className="h-[50vh] md:h-96 bg-[#1c1b1b]">
            <div className="food-love flex justify-between">
              <div className="descr text-white">
                <h2 className="font-semibold text-4xl tracking-tight font-domaine mt-5 ml-16 text-[#CC5500]">
                  I Love Food!
                </h2>
                <p className="text-base font-arvo tracking-widest leading-relaxed mt-2 ml-16 mr-4">
                  Food is my language of love. I'm captivated by flavors,
                  textures, and the limitless possibilities of creating dishes
                  that comfort, surprise, and satisfy. Whether it's a rich,
                  creamy pasta or a perfectly layered dessert, I dive into each
                  recipe, aiming to bring out its best qualities. For me, food
                  isn't just fuel; it's a journey into cultures, traditions, and
                  creative expression. Every recipe is a story, and I hope to
                  inspire others to find their own stories in the kitchen.
                </p>
              </div>
              <Image
                src="/food-love.png"
                className="p-7"
                alt="food-love"
                width={350}
                height={800}
              />
            </div>
          </div>
          <div className="h-[50vh] md:h-96 bg-[#1c1b1b]">
            <div className="food-love flex justify-between">
              <Image
                src="/star.png"
                className="p-7"
                alt="food-love"
                width={350}
                height={800}
              />
            <div className="descr text-white">
                <h2 className="font-semibold text-3xl font-domaine mt-5 ml-16 text-[#CC5500]">
                How It All Started
                </h2>
                <p className="text-base font-arvo leading-relaxed tracking-widest mt-2 ml-16 mr-4">
                My journey in cooking began simply: a love for good food and a desire to recreate my 
                favorite restaurant dishes. As I spent more time experimenting, learning from both successes
                and failures, I discovered the joys of blending flavors and techniques. Over time, my 
                collection of recipes grew, filled with those that earned the highest praises from loved ones.
                Now, I’m thrilled to take this journey to a new level, sharing each recipe along with the 
                insights, adjustments, and personal touches that make it unique. This website is an open invitation 
                to anyone who shares my love for food
                </p>
              </div>
            </div>
          </div>
          <div className="h-[50vh] md:h-96 bg-[#1c1b1b]">
            <div className="food-love flex justify-between">
              <div className="descr text-white">
                <h2 className="font-semibold text-4xl tracking-tight font-domaine mt-5 ml-16 text-[#CC5500]">
                Going Deeper:
                </h2>
                <p className="text-base font-arvo tracking-widest leading-relaxed mt-2 ml-16 mr-4">
                Cooking is an art that invites you to slow down, savor, and enjoy the process just as much as the final result. 
                This site isn’t just about recipes; it’s about immersing yourself in the details, from picking fresh ingredients to 
                mastering the small techniques that elevate a dish. Here, I’m sharing not only my best-loved recipes but also the tips,
                techniques, and little secrets that can help anyone bring out their inner chef. No matter your experience level, I hope to make
                this space a friendly kitchen where you can try new things, enjoy the journey, and, of course, savor the results!
                </p>
              </div>
              <Image
                src="/going.png"
                className="p-7"
                alt="food-love"
                width={350}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
