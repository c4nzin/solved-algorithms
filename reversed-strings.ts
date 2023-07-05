//Complete the solution so that reverses the string passed into it
//World => "dlrow"
//word => drow

export function solution(str: string): string {
  return str.split("").reverse().join("");
}
