

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export const getInput = (text:string) => {
  return new Promise ( (resolve,reject) => {
    rl.question(text, (answer) => {
      try {
        resolve(answer)
        rl.close();
      } catch (error) {
        reject(error)
      }
    });
  })
}

