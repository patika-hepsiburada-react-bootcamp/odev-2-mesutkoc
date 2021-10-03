const words = [
  "REACTJS",
  "SOFTWARE",
  "JAVASCRIPT",
  "FRAMEWORK",
  "UNITTEST",
  "FUNCTION",
  "FRONTEND",
  "BACKEND",
  "ARROW",
];
//this function select word randomly from the defined array.
export default function defineWord() {
  const word = Math.floor(Math.random() * words.length);
  return words[word];
}
