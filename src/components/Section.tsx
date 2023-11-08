import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; // Adicione o useState e useEffect para atualizar os dados
import { GetAll } from "../services/api";

interface SectionProps {
  title?: string;
}

export default function Section({ title }: SectionProps) {
  const [contentData, setContentData] = useState<any[]>([]);

  useEffect(() => {
    GetAll()
      .then((data) => {
        setContentData(data);
      })
      .catch((error) => {
        console.log("Erro ao obter dados da API:", error);
      });
  }, []);

  const ItemClick = (value: string) => {
    console.log(value);
  }

  return (
    <div className="">
      {/* <Link to="/event"> */}
        <div className="flex flex-row max-w-[1350px]">
          {contentData.map((content, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] flex flex-none flex-col items-center bg-primary border-2 border-primary mr-4"
              onClick={() => ItemClick(content._id)}
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
      {/* </Link> */}
    </div>
  );
}
