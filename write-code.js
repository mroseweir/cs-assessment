//Write-Code #4 Find Longest Word in an Array. 
//I started with this one since I felt like I could get it done the quickest
//before I move on to the harder ones. 

function findLongestWord(arr) {
    let longWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (longWord.length < arr[i].length) {
        longWord = arr[i];
      }
    }
    console.log(longWord)
    console.log(longWord.length)
    return longWord.length;
  };

let testArr = (['asdfasdfasdfasdfasf', 'this', 'is', 'a', 'function'])

findLongestWord(testArr)

//Write-Code #1 Sum-Zero
//was working on this one and was unable to complete it.

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j--)
    if (arr[i] + arr[j] === 0) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

addToZero([1, 2, 3, -2])
