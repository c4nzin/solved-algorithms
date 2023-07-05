//Complete the solution so that reverses the string passed into it
//World => "dlrow"
//word => drow

export function solution(str: string): string {
  let modifiedString: string[] = [];
  for (const iterator of str) {
    modifiedString.push(iterator);
  }
  modifiedString.reverse();
  return modifiedString.join("").toLowerCase();
}
