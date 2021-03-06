// 1.

function getAverage(...number) {  
    const num = number.filter(Number.isInteger); 
    return num.reduce((prev, item) =>  (prev + item)) / num.length;  
  }
   console.log(`getRandomArray(15, 1, 100) = ${getRandomArray(15, 1, 100)}`)

   

//2.
   
function getModa(...numbers){
    const result = [];
    const countNumbers = numbers.reduce( (acc, number) => {
        acc[number] = (acc[number] || 0) + 1 ;
        return acc;
      } , {})
    const maxOccurance = Math.max(...Object.values(countNumbers));
    const resultPairs = Object.entries(countNumbers);
    resultPairs.forEach((item, index) => {
     if(item[1] === maxOccurance){
      result.push(item[0]);}
    });
    return result; 
    }
    console.log(`getModa(1, 2, 3, 4, 5, 5, 5, 4, 3, 3) = ${getModa(1, 2, 3, 4, 5, 5, 5, 4, 3, 3)}`)
  
//3.

function getRandomArray(size, min, max) { 
    if (!Number.isInteger(size) || !Number.isInteger(min) || !Number.isInteger(max)){  
      return 'Не вірний формат' 
    } 
    let randomArray = [size]; 
    for(let i = 0; i < size; i++) 
     randomArray[i] = Math.floor(Math.random() * (max - min) + min); 
    return randomArray; 
   }
 console.log(`getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) = ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)


//4.

function getMedian(...numbers) { 
    const num = numbers.sort((a, b) => a - b).filter(Number.isInteger); 
    let median = 0; 
    if (num.length % 2 === 0){ 
      median = ((num[((num.length / 2) - 1)] + num[(num.length / 2)]) / 2) 
    }else{ 
      median = num[num.length / 2 - 0.5] 
    } 
    return median 
    }
    console.log(`getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) = ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)
  
  


//5.

function countNotEvenNumbers(...numbers){ 
    const num = numbers.filter(Number.isInteger);   
    if (Number.isNaN(num)){   
      return 'Ви не ввели жодного цілого числа'   
    }  
    const notEvenNumbers = []; 
    for(let i = 0; i < num.length; i++){ 
      if(num[i] % 2 !== 0 ){ 
        notEvenNumbers.push(num[i]) 
      } 
    } 
      return notEvenNumbers 
  }

  console.log(`countNotEvenNumbers(1, 2, 3, 4, 5, 6) = ${countNotEvenNumbers(1, 2, 3, 4, 5, 6)}`)

//6.

function countPositiveNumbers(...numbers){ 
    const num = numbers.filter(Number.isInteger);   
    if (Number.isNaN(num)){   
      return 'Ви не ввели жодного цілого числа'   
    } 
    const positiveNumber = []; 
    for(let i = 0; i < num.length; i++){ 
      if(Math.sign(num[i]) === 1 ){ 
        positiveNumber.push(num[i]) 
      } 
    } 
      return positiveNumber.length 
  }
  console.log(`countPositiveNumbers(1, -2, 3, -4, -5, 6) = ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`)

//7.

function getDividedByFive(...numbers) {
	if (!numbers.length) return "Помилка вводу!";
	const dividedByFive = numbers.filter((number) => number % 5 == 0);
	return dividedByFive;
}

console.log(`getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) = ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

//8.

function replaceBadWords(string, ...othersBadWords) {
	if (!string) return "Нічого не введено!";

	const badwordsArray = ["shit", "fuck", ...othersBadWords];
	const arrayWords = string.replace(/ +/g, " ").trim().split(" ");
	const arrayWithoutBadWords = arrayWords.map((word) => {
		const badWorsToRepace = badwordsArray.filter((badWord) => {
			return word.toLowerCase().includes(badWord);
		});

		badWorsToRepace.forEach((badWord) => {
			const stars = "*".repeat(badWord.length);
			word = word.toLowerCase().replaceAll(badWord, stars);
		});

		return word;
	});
	return arrayWithoutBadWords.join(" ");
}

console.log(replaceBadWords("Are you fucking kidding?", ""));

//9.

function divideByThree(str) { 
    str = str.replace(/\s/g, '').toLowerCase() 
    return str.match(/.{1,3}/g); 
  }
  
  console.log(`divideByThree ('Commander') = ${divideByThree('Commander')}`)

//10.


function generateCombinations(word) {
  
  function recursion(word) {
  const letters = word.split('');
  let combinations = [];
     
  if (letters.length === 0) return "not exist";
  if (letters.length === 1) return letters.join(' ');
  if (letters.length > 10) return "unable to be counted";
    
  for (let i = 0; i < letters.length; i++) {
    const firstLetter = letters[i];
    const restLetters = letters.slice(0, i).concat(letters.slice(i + 1));
    const restLettersCombinations = recursion(restLetters.join(''));
       
  for (let j = 0; j < restLettersCombinations.length; j++) {
    const combinationArray = [firstLetter].concat(restLettersCombinations[j]);
    let newWord = combinationArray.join('')
    if ( combinations.includes(newWord) ) continue;
    else combinations.push(newWord);
      } 
  }
   
  return combinations;
 }

return `"${word}" ${recursion(word)}.`
}
   
console.log(`generateCombinations = ${generateCombinations('man')}`);
