const arrPositions = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let time = 100;

for (const position of arrPositions) {
  setTimeout(() => {
    process.stdout.write(`\r ${position}    `);
  }, time);
  time += 200;
};



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);


// setTimeout(() => {
//   for (let i = 0; i < 4; i++) {
//     if (i === 0) {
//       process.stdout.write('\r|   ')
//     }
//     else if (i === 1) {
//       process.stdout.write('\r/   ')
//     }
//     else if (i === 2) {
//       process.stdout.write('\r-   ')
//     }
//     else if (i === 3) {
//       process.stdout.write('\r\\   ')
//       i = 0
//     }
//   }
// });

