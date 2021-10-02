const words = ["HEPSIBURADA", "PATIKA", "REACTJS", "BOOTCAMP"];

export default function defineWord() {
  const word = Math.floor(Math.random() * words.length);
  return words[word];
}
