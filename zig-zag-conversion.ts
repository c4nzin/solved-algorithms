The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000


//my approach : 
function convert(s: string, numRows: number): string {
    let result = Array(numRows).fill('')
    let resultIndex = 0
    let step = 1

    if (numRows === 1) {
        return s
    }
    s.split('').forEach((char) => {
        result[resultIndex] += char
        if (resultIndex === numRows - 1) {
            step = -1
        }
        if (resultIndex === 0) {
            step = 1
        }
        resultIndex += step
    })

    return result.join('')
};
