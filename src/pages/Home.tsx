import React from "react";
import Search from "../components/Search";
import Caroucel from "../components/Caroucel";
import Category from "../components/Category";
import Section from "../components/Section";
import SelectedSection from "../components/SelectedSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="p-4">
        <Search />
      </div>

      <div className="p-4">
        <Caroucel content={<Category />} />
      </div>

      <div className=" p-4 ">
        <h2 className="text-black py-4">Mas populares</h2>
        <Caroucel content={<Section />} />
      </div>

      <div className="p-4">
        <SelectedSection />
      </div>

      <div className=" p-4 ">
        <h2 className="text-black py-4">Mas populares</h2>
        <Caroucel content={<Section />} />
      </div>
    </div>
  );
}
