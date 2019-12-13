//QUESTION

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
//
// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

/**
 * @param {string} address
 * @return {string}
 */

//Long Approach
const defangedAddress1 = (address) => {
  let newStr = address.split('');
    let finalStr = ""
    for(let i=0; i<newStr.length; i++){
        let currEle = newStr[i];

        if(currEle === "."){
            currEle = "[.]";
            finalStr += currEle
        }else {
            finalStr += currEle;
        }

    }
    return finalStr;
}



//Short, faster approach, using REGEX
const defangedAddress2 = (address) => {
  return address.replace(/\./g, '[.]')
}
