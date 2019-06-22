import readline from 'readline-promise';
import { resolve } from 'path';
 
export const getInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});
 
let bar = null;
 
// rlp.questionAsync('Foo?').then(answer => {