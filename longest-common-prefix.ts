// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 1 && strs.length >= 200) throw new Error("Range Error!");
  if (strs[0].length <= 0 && strs[0].length >= 200) throw new Error("Range Error!");

  let firstString = strs[0];

  let minimumPrefix = firstString.toLowerCase(); //First index will present here

  for (let i = 1; i < strs.length; i++) {
    const currentString = strs[i].toLowerCase();

    let j = 0;

    while (j < minimumPrefix.length && j < currentString.length && minimumPrefix[j] === currentString[j]) {
      j++;
    }

    minimumPrefix = minimumPrefix.substring(0, j);
  }
  return minimumPrefix;
}

console.log(longestCommonPrefix(["Can", "Camera", "Canli"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
