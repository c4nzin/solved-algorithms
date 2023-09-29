function generateParantheses(n: number) {
  const result: string[] = [];

  function backtrack(combination = "", openCount = 0, closeCount = 0) {
    if (combination.length === 2 * n) collectedParanthesis.push(combination);

    if (openCount < n) {
      backtrack(combination + "(", openCount + 1, closeCount);
    }

    if (closeCount < openCount) {
      backtrack(combination + ")", openCount, closeCount + 1);
    }
  }

  backtrack();

  return result;
}

