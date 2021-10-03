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

export default function defineWord() {
  const word = Math.floor(Math.random() * words.length);
  return words[word];
}
