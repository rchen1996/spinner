process.stdout.write('hello from spinner1.js... \rheyyy\n');

// output is "heyyy from spinner1.js..."
// first few characters are replaced by "heyyy" - \r brought cursor back to beginning

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 1700);

// each character is a delayed write using setTimeout
// with each delayed write - start with \r then write next character in animation
// spaces added after character so cursor moves far enough away from animation
// removing space padding at end - cursor sits on top fo animation (hard to see)