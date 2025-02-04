import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Contact from "./components/Contact";
import MainLogin from "./components/LoginReg/MainLogin";
import RegisterNow from "./components/LoginReg/RegisterUser";
import { UpdateFollower } from "react-mouse-follower";
import HomePageMain from "./components/HomePageMain";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">

        <UpdateFollower
          mouseOptions={{
            backgroundColor: "orange",
            zIndex: 10,
            followSpeed: 1.5,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePageMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<MainLogin />} />
            
            <Route path="/register" element={<RegisterNow />} />
          </Routes>
        </UpdateFollower>
      </main>
    </Router>
  );
};

export default App;
