import React from "react";
import { Home, AboutUs, Gallery } from "../../components";
const HomePage: React.FC = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Gallery />
    </div>
  );
};

export default HomePage;
