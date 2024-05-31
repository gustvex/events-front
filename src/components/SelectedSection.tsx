import { MapPin } from "lucide-react";

interface SectionProps {
  date?: string;
  title?: string;
  location?: string;
}

const ContentSection = [
  {
    date: "Mon, Apr 18 · 21:00 Pm",
    title: "Rosalia",
    location: "Palau Sant Jordi, Barcelona",
  },
];

export default function SelectedSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center p-4 gap-x-4 max-w-[1000px]">
        <div className="flex items-center bg-cover">
          <img src="img/banda_teste.webp" alt="Descrição da imagem" className="rounded-xl" />
        </div>

        <div className="hidden sm:flex ">
          {ContentSection.map((content, index) => (
            <div className="flex flex-1 flex-col gap-y-6 p-4 ">
              <h1>{content.title}</h1>
              <div className="">{content.date}</div>
              <div className="flex flex-row items-center">
                <MapPin size={18} color="#7E7E7E" />
                <div>{content.location}</div>
              </div>
              <div>
                <button
                  type="button"
                  className=" text-primary bg-secondary rounded-lg px-5 py-2.5 mr-2 mb-2"
                >
                  Veja detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
