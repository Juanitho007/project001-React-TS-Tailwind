import { useState, useEffect } from "react";
import spacePhrase from "./assets/spaceCuriosities.json";
import imgSpace from "../public/img/space/universeImg.json";
import famousPhrase from "./assets/famousPhrases.json";
import imgFamous from "../public/img/famous/famousImg.json";
import fortunePhrase from "./assets/fortunePhrases.json";
import imgFortune from "../public/img/fortune/fortuneImg.json";
import { getRandomNumber } from "./utilts/getRandomNumber";
import Card from "./components/Card";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  /* Cálculo de posición aleatoria en el arreglo de frases e imagenes*/
  const [phraseSpace, setPhraseSpace] = useState(
    getRandomNumber(0, spacePhrase.length - 1)
  );
  const [imageSpace, setImageSpace] = useState(
    getRandomNumber(0, imgSpace.length - 1)
  );
  const [phraseFamous, setPhraseFamous] = useState(
    getRandomNumber(0, famousPhrase.length - 1)
  );
  const [imageFamous, setImageFamous] = useState(
    getRandomNumber(0, imgFamous.length - 1)
  );
  const [phraseFortune, setPhraseFortune] = useState(
    getRandomNumber(0, fortunePhrase.length - 1)
  );
  const [imageFortune, setImageFortune] = useState(
    getRandomNumber(0, imgFortune.length - 1)
  );
  const [cachedImageUrlsSpace, setCachedImageUrlsSpace] = useState<string[]>(
    []
  );
  const [cachedImageUrlsFamous, setCachedImageUrlsFamous] = useState<string[]>(
    []
  );
  const [cachedImageUrlsFortune, setCachedImageUrlsFortune] = useState<
    string[]
  >([]);
  /* Carga de imagenes en cache */
  useEffect(() => {
    const imageUrlsSpace = [...imgSpace.map((item) => item.imgUrl)];
    imageUrlsSpace.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
    setCachedImageUrlsSpace(imageUrlsSpace);
  }, []);
  useEffect(() => {
    const imageUrlsFamous = [...imgFamous.map((item) => item.imgUrl)];
    imageUrlsFamous.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
    setCachedImageUrlsFamous(imageUrlsFamous);
  }, []);
  useEffect(() => {
    const imageUrlsFortune = [...imgFortune.map((item) => item.imgUrl)];
    imageUrlsFortune.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
    setCachedImageUrlsFortune(imageUrlsFortune);
  }, []);

  /* Cambio de posición aleatoria en el arreglo de frase y cambio de imagenes de fondo*/
  const handleClickSpace = () => {
    setImageSpace(getRandomNumber(0, imgSpace.length - 1));
    setPhraseSpace(getRandomNumber(0, spacePhrase.length - 1));
  };
  const handleClickFamous = () => {
    setImageFamous(getRandomNumber(0, imgFamous.length - 1));
    setPhraseFamous(getRandomNumber(0, famousPhrase.length - 1));
  };
  const handleClickFortune = () => {
    setImageFortune(getRandomNumber(0, imgFortune.length - 1));
    setPhraseFortune(getRandomNumber(0, fortunePhrase.length - 1));
  };

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-sky-500">
      <h1 className="text-black font-extrabold text-3xl p-5 rounded-b-3xl bg-sky-300 mx-auto sm:w-[640px] font-maho ">
        ¡Consulta la frase de tu día!
      </h1>
      <section className="flex flex-col gap-10 mx-auto w-full sm:w-[640px]  text-white justify-center h-full py-10">
        <Card
          imageUrl={cachedImageUrlsSpace[imageSpace]}
          phraseRandom={spacePhrase[phraseSpace]}
          propertiesRandom={JSON.stringify(imgSpace[imageSpace])}
          title="INFOGALAX"
          changePhrase={handleClickSpace}
          font="font-dig"
          size="18px"
        />
        <Card
          imageUrl={cachedImageUrlsFamous[imageFamous]}
          phraseRandom={famousPhrase[phraseFamous]}
          propertiesRandom={JSON.stringify(imgFamous[imageFamous])}
          title="FRASES CÉLEBRES"
          changePhrase={handleClickFamous}
          font="font-maho"
          size="28px"
        />
        <Card
          imageUrl={cachedImageUrlsFortune[imageFortune]}
          phraseRandom={fortunePhrase[phraseFortune]}
          propertiesRandom={JSON.stringify(imgFortune[imageFortune])}
          title="GALLETAS DE LA FORTUNA"
          changePhrase={handleClickFortune}
          font="font-fre"
          size="28px"
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
