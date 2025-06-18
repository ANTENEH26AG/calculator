import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}


async function calculator() {
  try {
    const num1 = parseFloat(await askQuestion('Enter first number: '));
    const operator = await askQuestion('Enter operator (+, -, *, /): ');
    const num2 = parseFloat(await askQuestion('Enter second number: '));

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Please enter valid numbers.');
    rl.close();
    return;
  }

  let result = calculate(operator, num1, num2)
  console.log(`Result: ${result}`);
}
  catch (error) {
    console.log(error.message);
  }
  finally {
    rl.close();
  }
}

function calculate(operator, number1, number2) {
    let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 === 0) {
          throw new Error('Division by zero is not allowed.');  // thorw error
      }
      result = number1 / number2;
      break;
    default:
          throw new Error('Invalid operator.');  //throw
}
   return result;

}
calculator();