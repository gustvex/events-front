import React, { ReactNode, useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { GetId } from "../services/api";
import { useAtomValue } from "jotai";
import { idEventAtom } from "../components/Section";

export default function Event() {
  const [event, setEvent] = useState();
  const idEvent = useAtomValue(idEventAtom);

  useEffect(() => {
    GetId(idEvent)
      .then((data) => {
        setEvent(data);
        console.log('deu tudo certo', data);
      })
      .catch((error) => {
        console.log("Erro ao obter dados por EVENT_ID:", error);
      });
  }, []);

  const ContentSection = [
    {
      date: "Thu, Apr 21 · 22:00 Pm",
      title: "Bob Marley Tribute",
      location: "Reggae Club, Kingston",
    },
  ];
  return (
    <div className="">
      <div className="w-screen h-[35vh] bg-secondary"></div>

      <div className="flex flex-row justify-center  md:gap-x-12 lg:gap-x-24 xl:gap-x-48  px-4 ">
        <div className="w-[200px] h-[300px] mt-[-20px] bg-primary"></div>
        <div className="flex items-center">
          {ContentSection.map((content, index) => (
            <div className="flex flex-col gap-y-4 md:gap-y-6  p-4 ">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {content.title}
              </h1>
              <div className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {content.date}
              </div>
              <div className="flex flex-row items-center whitespace-nowrap">
                <MapPin size={18} color="#7E7E7E" />
                <div>{content.location}</div>
              </div>
              <div>
                <button
                  type="button"
                  className="text-black bg-secondary rounded-lg px-5 py-2.5 mr-2 mb-2"
                >
                  Comprar agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t-2 my-10"></div>

      <div className="flex justify-center px-6">
        <div className="flex flex-col text-start  max-w-[1000px]">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Descrição do evento
          </h2>
          <p className="text-gray-600">
            Save the Date 11/11 e 12/11, 22h às 18h, no Rancho Legramanti -
            Cuiabá MT
          </p>

          <p className="text-gray-600">Hey Lover's!</p>

          <p className="text-gray-600">
            É com muita emoção que compartilhamos com vocês a notícia mais
            esperada do ano! A data oficial de mais um incrível encontro de
            música eletrônica Love Beats! Preparem-se para viver momentos
            intensos, cheios de emoção e alegria! A Love Beats acontecerá nos
            dias 11 e 12 de Novembro, no local paradisíaco que todos nós amamos,
            o Rancho Legramanti. Será um fim de semana mágico, repleto de
            batidas eletrizantes, melodias envolventes e muita energia positiva!
            Marque na agenda e convide todos os seus amigos, vamos criar
            memórias incríveis juntos!
          </p>

          <p className="text-gray-600">
            Atração Nacional - INNDRIVE + NICOLAU MARINHO
          </p>

          <p className="text-gray-600">+ DE 15 ATRAÇÕES REGIONAIS</p>

          <p className="text-gray-600">+ DE 20 HORAS DE FESTA</p>

          <p className="text-gray-600">Atração Nacional - INNDRIVE</p>

          <p className="text-gray-600">
            INNDRIVE é dono do hit “Shake It” que, com mais de 35 milhões de
            streams no Spotify, entrou no Top 50 Viral de 17 países, sendo 11
            deles em 1°. Colecionando suportes de Calvin Harris, The
            Chainsmokers, Dillon Francis e Matroda, o duo está entre os Top 20
            DJs brasileiros de música eletrônica mais ouvidos no mundo no
            Spotify. O projeto de Tech House formado por Pedro e Gabriel já
            passou por mais de 15 estados brasileiros e 5 países, conquistando o
            público com seus sets energéticos e vibrantes.
          </p>

          <p className="text-gray-600">- Instagram @inndrive</p>

          <p className="text-gray-600">Atração Nacional - Nicolau Marinho</p>
        </div>
      </div>
    </div>
  );
}
