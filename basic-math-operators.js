function basicOp(operation, value1, value2)
{
  // Code
  if(operation == "+") {
    return value1 + value2
  }
  else if (operation == '-') {
    return value1-value2
  }
  else if(operation == '*') {return value1*value2}
  else if(operation == '/') {return value1/value2}
}

basicOp('+', 15,15)
basicOp('-', 15,33)
basicOp('*', 15,12)
basicOp('/', 15,1)
