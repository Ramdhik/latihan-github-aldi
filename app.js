const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("===  simulator  ===");
console.log('=== Kalkulator Sederhana ===');
rl.question('Masukkan angka pertama: ', (input1) => {
  rl.question('Masukkan operator (+, -, *, /): ', (operator) => {
    rl.question('Masukkan angka kedua: ', (input2) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);

      if (isNaN(num1) || isNaN(num2)) {
        console.log('❌ Masukkan angka yang valid.');
      } else {
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
            result = num2 !== 0 ? num1 / num2 : '❌ Tidak bisa dibagi 0';
            break;
          default:
            result = '❌ Operator tidak dikenali';
        }

        console.log(`✅ Hasil: ${result}`);
      }

      rl.close();
    });
  });
});
