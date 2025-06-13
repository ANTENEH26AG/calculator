import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function calculator() {
  const num1 = parseFloat(await askQuestion('Enter first number: '));
  const operator = await askQuestion('Enter operator (+, -, *, /): ');
  const num2 = parseFloat(await askQuestion('Enter second number: '));

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Please enter valid numbers.');
    rl.close();
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log('Cannot divide by zero.');
        rl.close();
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operator.');
      rl.close();
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
}

calculator();