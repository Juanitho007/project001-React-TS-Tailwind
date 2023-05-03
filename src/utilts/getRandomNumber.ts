export const getRandomNumber = (min: number, max: number) => {
  const amplitude = max - min;
  const randomNumber = min + Math.round(Math.random() * amplitude);
  return randomNumber;
};
