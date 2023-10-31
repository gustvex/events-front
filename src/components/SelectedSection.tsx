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
    <div className="flex justify-center items-center p-4 gap-x-4 max-w-[1350px]">
      <div className="flex items-center bg-cover border-2">
        <img src="img/banda.jpg" alt="Descrição da imagem" />
      </div>

      <div className="hidden sm:flex ">
        {ContentSection.map((content, index) => (
          <div className="flex flex-1 flex-col gap-y-6 p-4 ">
            <h1>{content.title}</h1>
            <div className="text-black">{content.date}</div>
            <div className="flex flex-row items-center">
              <MapPin size={18} color="#7E7E7E" />
              <div>{content.location}</div>
            </div>
            <div>
              <button
                type="button"
                className="text-black bg-secondary rounded-lg px-5 py-2.5 mr-2 mb-2"
              >
                Veja detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
