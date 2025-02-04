import React, { useState, useEffect } from "react";

const testimonialList = [
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "Product Manager at EasyFrontend",
      content:
        "This service has transformed our business. We've been able to grow faster than ever before. Highly recommend!",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "Marketing Head at EasyFrontend",
      content:
        "Their support team is incredibly responsive and helpful. The experience has been seamless from day one.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
      name: "Maya Singh",
      position: "CTO at FutureTech",
      content:
        "Innovative solutions and exceptional service! This has been a game-changer for our operations.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_5.jpeg",
      name: "David Chen",
      position: "Lead Engineer at InnoSoft",
      content:
        "The platform is incredibly intuitive and user-friendly. It has made our work much easier.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_6.jpeg",
      name: "Sophia Brown",
      position: "Freelance Designer",
      content:
        "Absolutely love it! The design and functionality are just perfect. It fits all my needs as a designer.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_7.jpeg",
      name: "Lucas Wilson",
      position: "Entrepreneur",
      content:
        "The best decision we ever made! Our business growth has skyrocketed thanks to this solution.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_8.jpeg",
      name: "Emily Davis",
      position: "HR Manager at BrightFuture",
      content:
        "Great platform for team collaboration. It has significantly improved communication in our organization.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_9.jpeg",
      name: "Michael Jordan",
      position: "Consultant",
      content:
        "Amazing experience! The process is smooth, and the results are even better than expected.",
    },
  ],
];

function ShapeOne() {
	return (
		<svg
			className="absolute bottom-0 left-0 -z-[1]"
			width="404"
			height="572"
			viewBox="0 0 404 572"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="118"
				cy="286"
				r="265.5"
				stroke="#4175DF"
				strokeOpacity="0.2"
				strokeWidth="41"
			/>
		</svg>
	);
}

function ShapeTwo() {
	return (
		<svg
			className="absolute top-0 right-0 -z-[1]"
			width="269"
			height="479"
			viewBox="0 0 269 479"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="239.5"
				cy="239.5"
				r="239.5"
				fill="#FC4755"
				fillOpacity="0.25"
			/>
		</svg>
	);
}

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-switch testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
    <section className="ezy__testimonial23 light py-14 md:py-24 px-9 bg-white text-zinc-900 relative z-[1]">
    <ShapeOne/>
    <ShapeTwo/>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="text-[32px] font-bold text-black leading-normal">
              Everyone should believe in What Our Users Say.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.7] text-black opacity-80">
              
            </p>
          </div>
        </div>

        <div className="overflow-hidden relative">
          {/* Sliding container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonialList.map((group, groupIndex) => (
              <div
                className="flex-shrink-0 w-full grid grid-cols-3 gap-6"
                key={groupIndex}
              >
                {group.map((testimonial, i) => (
                  <div className="col-span-3 lg:col-span-1" key={i}>
                    <div className="bg-white dark:bg-[#ffffff] shadow-2xl h-full p-6 xl:p-10">
                      <div className="flex items-center mb-6">
                        <div className="mr-3">
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="max-w-full h-auto rounded-full border"
                            width="65"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl text-black font-medium">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-black mb-2">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <p className="opacity-75 text-black mb-2">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 m-0 mt-12">
          {testimonialList.map((_, i) => (
            <button
              className={`w-2 h-2 rounded-full ${
                index === i
                  ? "scale-125 bg-blue-600"
                  : " bg-gray-400 dark:bg-slate-800"
              } `}
              key={i}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
    <div className="FootMain">
        <div className="FootContent">
          <h1>ENVIRONMENTALLY-FRIENDLY INVITATIONS</h1>
          <p>Share your love with the planet.</p>
          <p>
            With a tree planted in your honor for every print order, your
            invitations are planet positive. And with online invitations and
            your connected guest list, you're saving more than time and money.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
