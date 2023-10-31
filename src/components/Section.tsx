import { MapPin } from "lucide-react";
import { Link } from 'react-router-dom';
interface SectionProps {
  date?: string;
  title?: string;
  location?: string;
}

const ContentSection = [
  {
    date: "Mon, Apr 18 · 21:00 Pm",
    title: "La Rosalia",
    location: "Palau Sant Jordi, Barcelona",
  },
  {
    date: "Tue, Apr 19 · 20:30 Pm",
    title: "John Smith",
    location: "The Concert Hall, New York",
  },
  {
    date: "Wed, Apr 20 · 19:00 Pm",
    title: "Adele",
    location: "O2 Arena, London",
  },
  {
    date: "Thu, Apr 21 · 22:00 Pm",
    title: "Bob Marley Tribute",
    location: "Reggae Club, Kingston",
  },
  {
    date: "Thu, Apr 21 · 22:00 Pm",
    title: "Bob Marley Tribute",
    location: "Reggae Club, Kingston",
  },
];

export default function Section({ title }: SectionProps) {
  return (
    <div className="">
    <Link to="/event">
      <div className="flex flex-row max-w-[1350px]">
        {ContentSection.map((content, index) => (
          <div
            key={index}
            className="w-[300px] h-[200px] flex flex-none flex-col items-center bg-primary border-2 border-primary mr-4"
          >
            <div className="flex flex-1 w-full bg-secondary"></div>
            <div className="flex flex-1 flex-col w-full p-2 gap-y-1 bg-white text-black">
              <div>{content.date}</div>
              <h4>{content.title}</h4>
              <div className="flex flex-row items-center">
                <MapPin size={18} color="#7E7E7E" />
                <div>{content.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
}
