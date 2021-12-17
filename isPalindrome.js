// Write your code below

// function isPalindrome (word){
//     let wordArr = word.split('')
//     for (let i = 0;i < (wordArr.length/2);i++ ){
//         for (let x = wordArr.length; x>i; x--){
//             if (wordArr.every((i,x) => wordArr[i]===wordArr[x])){
//                 return true
//             }else{
//                 return false
//             }
//         }
//     }
// }


function isPalindrome (word){
    let wordArr = [...word]
        if (wordArr.every(letter => wordArr[letter]===wordArr[wordArr.length-letter])){
            return true
        }else{
            return false
        }
    }


console.log(isPalindrome("elle"))
console.log(isPalindrome("boxy"))
console.log(isPalindrome("racecar"))
