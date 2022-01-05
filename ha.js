const letters = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
}

const numbers = {
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
}

const nonEnglish = {
  A: '.--.-',
  B: '·−−·−',
  C: '·−·−',
  D: '·−−·−',
  E: '·−·−',
  F: '·−·−',
  G: '−·−··',
  H: '−·−··',
  I: '−·−··',
  J: '··−··',
  K: '··−−·',
  L: '··−··',
  M: '·−··−',
  N: '··−··',
  O: '−−·−·',
  P: '−−−−',
  Q: '·−−−·',
  R: '·−··−',
  S: '−−·−−',
  T: '−−·−−',
  U: '−−−·',
  V: '−−−·',
  W: '−−−·',
  X: '···−···',
  Y: '···−·',
  Z: '−−−−',
}

const punctuation = {
  '&': '.-...',
  "'": '.----.',
  '@': '.--.-.',
  '$': '···−··−',
  ')': '-.--.-',
  '(': '-.--.',
  ':': '---...',
  ',': '--..--',
  ';': '−·−·−·',
  '=': '-...-',
  '!': '-.-.--',
  '.': '.-.-.-',
  '-': '-....-',
  '+': '.-.-.',
  '"': '.-..-.',
  '?': '..--..',
}

const extra = {
  ' ': '/',
  '\n': '.-.-',
}

const toMorse = {
  ...letters,
  ...numbers,
  ...nonEnglish,
  ...punctuation,
  ...extra,
}

const fromMorse = Object.keys(toMorse).reduce(
  (obj, char) => ({ ...obj, [toMorse[char]]: char }),
  {}
)

const encode = (str) =>
  [...str.toLowerCase()].map((letter) => toMorse[letter]).join(' ')

const decode = (str) =>
  str
    .split(' ')
    .map((morse) => fromMorse[morse])
    .join('')

const encodeHa = (str) => encode(str).replaceAll('-', '哈').replaceAll('/', '～').replaceAll('.', '哈～～');

const decodeHa = (str) => decode(str.replaceAll('哈～～', '.').replaceAll('哈', '-').replaceAll('～', '/'));
