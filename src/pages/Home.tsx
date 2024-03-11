import Search from "../components/Search";
import Caroucel from "../components/carousel/Caroucel";
import Category from "../components/Category";
import {Section} from "../components/Section";
import SelectedSection from "../components/SelectedSection";
import CaroucelTitle from "../components/carousel/CaroucelTitle";

export default function Home() {
  return (
    <div className=" space-y-6">
        <Search />

        <Caroucel content={<Category />} />
        
        <SelectedSection />

      <CaroucelTitle content={<Section />} title="Mais populares" />
      <CaroucelTitle content={<Section />} title="Mais sertanejo" />
      <CaroucelTitle content={<Section />} title="Música eletrônica" />
  
    </div>
  );
}
