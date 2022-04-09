const morse = {
  a : ".-",
  b : "-...",
  c : "-.-.",
  d : "-..",
  e : ".",
  f : "..-.",
  g : "--.",
  h : "....",
  i : "..",
  j : ".---",
  k : "-.-",
  l : ".-..",
  m : "--",
  n : "-.",
  o : "---",
  p : ".--.",
  q : "--.-",
  r : ".-.",
  s : "...",
  t : "-",
  u : "..-",
  v : "...-",
  w : ".--",
  v : "...-",
  x : "-..-",
  y : "-.--",
  z : "--.."
}

function toMorse(word){
  return word.split("").map(char=>morse[char]).join(" ")
}

const firstWord = "hello world";
const firstWordToMorse = firstWord.split(" ").map(toMorse).join("    ")
console.log(firstWordToMorse)
const secondWord = "we love javascript";
const secondWordToMorse = secondWord.split(" ").map(toMorse).join("    ")
console.log(secondWordToMorse)


function toChar(dotsLines){
  return dotsLines.split(" ").map(code=>Object.keys(morse).find(key=> morse[key] === code)).join("")
}

const firstMorse = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."
const firstMorseToChar = firstMorse.split("    ").map(toChar).join(" ")
console.log(firstMorseToChar)

const secondMorse = ".... .- -. --.    --- -.    -.-- --- ..-    --. --- -    - .... .. ..."
const secondMorseToChar = secondMorse.split("    ").map(toChar).join(" ")
console.log(secondMorseToChar)
