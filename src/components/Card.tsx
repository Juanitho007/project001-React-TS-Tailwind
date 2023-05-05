interface CardProps {
  phraseRandom: {
    phrase: string;
    author: string;
  };
  propertiesRandom: string;
  imageUrl: string;
  title: string;
  font: string;
  changePhrase: () => void;
}
const Card =({
  propertiesRandom,
  phraseRandom,
  imageUrl,
  title,
  font,
  changePhrase,
}: CardProps) => {
  const properties = JSON.parse(propertiesRandom);

  return (
    <div
      className={`flex flex-col items-center text-center gap-5 px-5 rounded-3xl opacity-60 hover:opacity-100 bg-cover bg-center bg-no-repeat ${font}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <h1 className="text-3xl p-5"       style={{
        textShadow: "0 0 20px white, 0 0 20px black, 0 0 20px white"}}>{title}</h1>
      <div
        className="px-5 rounded-r-3xl sm:w-3/4 backdrop-opacity-50 p-2"
        style={{
          boxShadow: properties.shadow,
        }}
      >
        <p
          className="text-xl invert"
          style={{
            color: properties.color,
          }}
        >
          {phraseRandom.phrase}
        </p>
      </div>
      <button onClick={changePhrase}>
        <i className="bx bx-skip-next-circle bx-flip-horizontal bx-fade-right text-white text-5xl invert" style={{
          color: properties.color}}></i>
      </button>
      <div
        className="text-white font-bold font-serif p-5 rounded-t-full opacity-70 sm:w-2/3"
        style={{
          boxShadow: properties.shadow,
          textShadow: "0 0 10px black, 0 0 10px black, 0 0 10px black",
        }}
      >
        {phraseRandom.author.toUpperCase()}
      </div>
    </div>
  );
}

export default Card;
