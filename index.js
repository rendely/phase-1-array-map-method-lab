const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //Loop through each title in the tutorials and run title case capitalization
  return tutorials.map(titleCase)
}

function titleCase(title){
  //Split into words separated by space
  const words = title.split(' ');

  //Loop through each and capitalize word
  const titleCasedWords = words.map(capitalizeWord);

  //Rejoin words into single string and return it
  return titleCasedWords.join(' ');
}

function capitalizeWord(word){
//For each word capitalize first letter and join to rest of word
const capitalizedWord = (
  word.slice(0,1).toUpperCase() +
  word.slice(1)
) 
return capitalizedWord
}