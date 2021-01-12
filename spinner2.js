const spinner = function(numberOfSpins, delay) {
  const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let delayCount = delay;
  for (let i = 0; i < numberOfSpins; i++) {
    for (let j = 0; j < spinnerArr.length; j++) {
      if (i === numberOfSpins - 1 && j === spinnerArr.length - 1) {
        setTimeout(() => {
          process.stdout.write(spinnerArr[j] + "\n");
        }, delayCount);
      } else {
        setTimeout(() => {
          process.stdout.write(spinnerArr[j]);
        }, delayCount);
        delayCount += delay;
      }
    }
  }
}

spinner(10, 200);