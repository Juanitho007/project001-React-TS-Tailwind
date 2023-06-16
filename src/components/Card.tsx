interface CardProps {
  phraseRandom: {
    phrase: string;
    author: string;
  };
  propertiesRandom: string;
  imageUrl: string;
  title: string;
  font: string;
  size: string;
  changePhrase: () => void;
}
const Card =({
  propertiesRandom,
  phraseRandom,
  imageUrl,
  title,
  font,
  size,
  changePhrase,
}: CardProps) => {
  const properties = JSON.parse(propertiesRandom);

  return (
    <div
      className={`flex flex-col justify-between items-center text-center gap-5 px-5 rounded-tr-[18%] rounded-bl-[18%] sm:opacity-80 hover:opacity-100 bg-cover bg-center bg-no-repeat min-h-[500px] ${font} shadow-box sm:hover:scale-125`}
      style={{
        backgroundImage: `url(${imageUrl})` ,
      }}
    >
      <h1
        className="p-5 text-3xl"
        style={{
          textShadow: "0 0 20px white, 0 0 20px black, 0 0 20px white",
        }}
      >
        {title}
      </h1>
      <div
        className="flex justify-center  items-center px-5 rounded-br-[80px] sm:w-3/4 backdrop-opacity-50 p-2 min-h-[250px] border-dashed border-[1px] border-white"
        style={{
          fontSize: size,
          boxShadow: properties.shadow,
        }}
      >
        <p
          className="invert"
          style={{
            color: properties.color,
          }}
        >
          {phraseRandom.phrase}
        </p>
      </div>
      <button onClick={changePhrase}>
        <i
          className="bx bx-skip-next-circle bx-flip-horizontal bx-fade-right text-white text-5xl invert"
          style={{
            color: properties.color,
          }}
        ></i>
      </button>
      <div
        className="text-white font-bold font-serif p-5 rounded-t-full opacity-70 sm:w-2/4"
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
