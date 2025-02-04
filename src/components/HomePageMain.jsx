import React from 'react'
import Hero from './Hero'
import MainMid1 from './MainMid1'
import Pricing from './Pricing'
import LowerMain from './LowerMain'
import Contact from './Contact'
import Testimonials from './Testimonials'

const HomePageMain = () => {
  return (
    <>
      <section id="Home">
        <Hero />
      </section>

      <section id="Features" className="Features">
        <MainMid1 />
      </section>

      <section id="Pricing" className="Pricing">
        <Pricing />
      </section>
   
      <section id="About" className="About">
        <LowerMain />
      </section>
      <Testimonials/>
   


    </>
  );
}


export default HomePageMain