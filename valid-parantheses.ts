// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//Solution 1 : MY BEST SOLUTION

function isValid(s: string): boolean {
    const stack: string[] = [];

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();

            if (!top || (char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

//Solution 2 : WEAK PERFORMANCE AND COMPLEX(TRASH) SYNTAX

function isValid(s: string) {
  let status = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" && s[i + 1] === "}") {
      status = true;
    }
    if (s[i] === "{" && s[i + 1] !== "}") {
      status = false;
    }
    if (s[i] === "[" && s[i + 1] === "]") {
      status = true;
    }
    if (s[i] === "[" && s[i + 1] !== "]") {
      status = false;
    }
    if (s[i] === "(" && s[i + 1] === ")") {
      status = true;
    }
    if (s[i] === "(" && s[i + 1] !== ")") {
      status = false;
    }
  }
  return status;
}

console.log(isValid("()("));


