import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDispaly/FoodDispaly";
import AppDownlode from "../../components/AppDownlode/AppDownlode";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownlode />
    </>
  );
}

export default Home;
