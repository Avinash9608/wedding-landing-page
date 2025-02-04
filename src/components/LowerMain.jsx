import React, { useState } from 'react';
import wedding from '../assets/WeddingLower1.jpg';
import birthday from '../assets/birthdayLower1.jpg';
import dinner from '../assets/DinnerLower1.jpeg';
import ring from '../assets/RingLower1.jpg';
import cock from '../assets/CockLower1.jpg';
import hoverWedding from '../assets/WeddingLower1.jpg';;
import hoverBirthday from '../assets/birthdayLower1.jpg';
import hoverDinner from  '../assets/DinnerLower1.jpeg';
import hoverRing from'../assets/RingLower1.jpg';
import hoverCock from '../assets/CockLower1.jpg';

const LowerMain = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Mapping of original images to their hover images
  const hoverImageMap = {
    wedding: hoverWedding,
    dinner: hoverDinner,
    birthday: hoverBirthday,
    ring: hoverRing,
    cock: hoverCock,
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = (key) => {
    setHovered(true);
    setHoveredImage(hoverImageMap[key]); // Set the hover image from the mapping
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredImage('');
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <section className="text-gray-600 body-font mt-6">
        <div className="container px-16 py-24 mx-auto LowerMainSec">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-900">
              One Platform, All Template
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              { key: 'wedding', src: wedding },
              { key: 'dinner', src: dinner },
              { key: 'birthday', src: birthday },
              { key: 'ring', src: ring },
              { key: 'cock', src: cock },
              { key: 'cock', src: cock },
            ].map((item, index) => (
              <div
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4 relative"
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex relative tg-img-reveal">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={item.src}
                  />
                  <div className="px-8 py-10 z-10 w-full border-4 transition-all duration-700 border-orange-200 bg-white opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Invitation Title
                    </h1>
                    <p className="leading-relaxed">
                      Is your go-to solution for effortlessly managing
                      invitations and tracking guest responses.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hover Reveal Section */}
      {hovered && (
        <div
          className="tg-img-reveal-wrapper"
          style={{
            left: `${cursorPosition.x + 20}px`,
            top: `${cursorPosition.y + 20}px`,
          }}
        >
          <div className="tg-img-reveal-wrapper__inner">
            <div className="tg-img-reveal-wrapper__deco"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={hoveredImage}
              alt="Hovered"
            />
          </div>
        </div>
      )}

      
    </div>
  );
};

export default LowerMain;
