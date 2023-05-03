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
function Card({
  propertiesRandom,
  phraseRandom,
  imageUrl,
  title,
  font,
  changePhrase,
}: CardProps) {
  const properties = JSON.parse(propertiesRandom);

  return (
    <div
      className={`flex flex-col items-center text-center gap-5 px-5 rounded-3xl opacity-60 hover:opacity-100 ${font}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontStyle: font,
      }}
    >
      <h1 className="text-3xl p-5">{title}</h1>
      <p
        className="px-5 text-gray-200 rounded-r-full sm:w-3/4 backdrop-opacity-50"
        style={{ boxShadow: properties.shadow }}
      >
        {phraseRandom.phrase}
      </p>
      <button onClick={changePhrase}>
        <i className="bx bx-skip-next-circle bx-flip-horizontal bx-fade-right text-white text-5xl "></i>
      </button>
      <p
        className=" text-neutral-950 font-bold font-serif p-5 rounded-t-full opacity-70 sm:w-2/3"
        style={{ boxShadow: properties.shadow }}
      >
        {phraseRandom.author.toUpperCase()}
      </p>
    </div>
  );
}

export default Card;
