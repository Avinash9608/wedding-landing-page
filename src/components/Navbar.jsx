import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Features",
    link: "#Features",
  },
  {
    id: 3,
    title: "Pricing",
    link: "#Pricing",
  },
  {
    id: 4,
    title: "About",
    link: "#About",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (link) => {
    if (link.startsWith("#")) {
      // Handle section scrolling
      const sectionId = link.substring(1); // Remove the "#"
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Handle route navigation
      navigate(link);
    }
  };

  useEffect(() => {
    // Scroll to the section if the URL contains a hash
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the "#"
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img
            src="https://www.indtechmark.com/images/logo.svg"
            alt="Logo"
            className="max-w-[200px] invert"
          />
        </div>

        {/* Desktop Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.link);
                    }}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}

            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <NavLink to="https://invitation-backend-admin-dashboard-lj7p.vercel.app/">
                <button className="text-xl ps-14">
                  <FaRegUser />
                </button>
              </NavLink>
            </UpdateFollower>
          </ul>
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden" onClick={toggleMenu}>
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>

      {/* Mobile Menu Section */}
      <div
        className={`md:hidden bg-gray-800 absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 z-50" : "opacity-0 z-[-1]"
        }`}
        onClick={toggleMenu}
      >
        <ul className="flex flex-col gap-6 text-white">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.link);
                  toggleMenu();
                }}
                className="text-lg font-semibold py-2 px-3 uppercase"
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <NavLink
              to="https://invitation-backend-admin-dashboard-lj7p.vercel.app/"
              className="border-red-600"
            >
              <button className="text-xl">
                <FaRegUser />
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
