// Return true if two words form an anagram.
// *An anagram is a word formed by rearranging the
// letters of another word. Egs. (Silent, Listen), (Cinema, Iceman).



//SOLUTION 1
const checkIfAnagram = (A, B) => {
  return A.split('').sort().join('') === B.split('').sort().join('')
}


//SOLUTION 2, using hash maps
const checkIfAnagram = (A, B) => {
      let finalWord = []
      let wordsHash = {}
      let word1 = A.split('');
      let word2 = B.split('')

      for(let i=0; i<word1.length; i++){
          let currLetter = word1[i]
          if(wordsHash[currLetter] === undefined){
              wordsHash[currLetter] = currLetter;
          }
      }

      for(let j=0; j<word2.length; j++){
        let currLetter = word2[j];
          if(wordsHash[currLetter]){
             finalWord.push(currLetter)
          }
      }
      return finalWord.join('').length === word1.length;
  }
