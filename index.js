import { writeFile } from 'fs';
let name = process.argv[2];
<<<<<<< HEAD
writeFile('data.json', name, (err) => console.error('err ->', err));

console.log(`good day ${name}, are you well DK?`);
=======
console.log(`hello ${name.toUpperCase()}! How are you?`);

console.log('Chicken McSpicy');
>>>>>>> 4b6ca55 (edit 1)
