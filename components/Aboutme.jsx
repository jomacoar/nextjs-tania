'use client';

import React from 'react';
import Image from 'next/image';
import { Cloud2, Cloud3 } from './Ornaments';

const Aboutme = () => {
  return (
    <div className="grid grid-cols-2 place-items-center justify-items-center gap-6 mx-4 xl:gap-2">
      <Cloud2
        className="absolute top-60 left-20 flex justify-start items-start opacity-10"
        width="600"
        height="600"
      />
      <Cloud2
        className="absolute top-30 right-20 flex justify-start items-start opacity-10 z-10"
        width="480"
        height="480"
      />
      <Cloud3
        className="absolute bottom-50 right-[50%] flex justify-start items-start opacity-10 z-10"
        width="300"
        height="300"
      />
      <div className="bg-zinc-100 w-full h-full px-6 py-8 rounded-[64px] grid place-items-center justify-items-center">
        <h1 className="font-boldonse text-3xl text-violetMain font-bold text-center mb-8 max-w-xl z-10">
          Sobre Mim
        </h1>
        <p className="font-montserrat text-lg text-center max-w-xl mb-4 z-10">
          Apaixonada pelo comportamento humano e pelo mundo que carregamos
          dentro de nós, sempre me questionei: o que é, afinal, a felicidade? E
          como podemos cultivá-la no dia a dia?
        </p>

        <p className="font-montserrat text-lg text-center max-w-xl mb-4">
          Formada em Biologia Humana e pós graduada em Gestão de Pessoas e
          Felicidade Organizacional, é no equilíbrio entre a lógica e a
          criatividade que me sinto em casa. Sou viciada em viajar, meditar,
          chocolate e acima de tudo nos abraços e gargalhadas do meu filho. Ser
          mãe é a experiência mais transformadora da minha vida — desafia-me,
          ensina-me e reforça a minha determinação em prepará-lo para um futuro
          feliz. Se tens filhos, tenho a certeza que sabes do que falo!
        </p>

        <p className="font-montserrat text-lg text-center max-w-xl mb-4">
          Após mais de 10 anos a dedicar-me a compreender e promover o bem-estar
          das pessoas, tanto no contexto pessoal quanto profissional, hoje,
          dedico-me a uma missão que me enche o coração: ajudar pais a educar
          crianças emocionalmente inteligentes, preparando-as para enfrentar o
          mundo com resiliência, empatia e coragem.
        </p>

        <p className="font-montserrat text-lg text-center max-w-xl mb-4">
          Foi assim que nasceu a STORIES TO GROW — um projeto feito de histórias
          e conteúdos que convidam pais e filhos a explorarem juntos o universo
          rico das emoções. Acredito que só assim, podemos transformar as
          crianças de hoje nos adultos felizes e realizados de amanhã.
        </p>
        <p className="font-montserrat italic text-lg text-center max-w-xl">
          História a história, criamos essa realidade juntos.
        </p>
      </div>
      <div className="relative bg-zinc-100/80 w-full h-full p-6 rounded-[64px] flex justify-center items-center">
        <Image
          src="/AboutMe.jpeg"
          alt="Sobre Mim"
          width={800}
          height={800}
          className="rounded-xl shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Aboutme;
