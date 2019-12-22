// Return true if two words form an anagram.
// *An anagram is a word formed by rearranging the
// letters of another word. Egs. (Silent, Listen), (Cinema, Iceman).



//SOLUTION 1
const checkIfAnagram = (A, B) => {
  return A.split('').sort().join('') === B.split('').sort().join('')
}
