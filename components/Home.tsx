"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import OurClients from "./Client/OurClients";
import WeDo from "./WeDo/WeDo";
import SelectProjects from "./SelectProjects/SelectProjects";
import TrustingClient from "./TrustingClient/TrustingClient";
import Profissonales from "./Profissonales/Profissonales";

import Aos from "aos";
import "aos/dist/aos.css";
import ToggleChooses from "./ToggleChooses/ToggleChooses";
import Map from "./Map/Map";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease",
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <OurClients />
      <WeDo />
      <ToggleChooses />
      <SelectProjects />
      <TrustingClient />
      <Profissonales />
      <Map />
      <ContactUs />
    </main>
  );
};

export default Home;
