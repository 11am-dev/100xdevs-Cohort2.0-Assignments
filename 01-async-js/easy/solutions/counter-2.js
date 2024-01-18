function counter2(n) {
  let i = 1;
  setTimeout(
    printinterval = () => {
      console.log(i);
      i++;

      if (i <= n) {
        setTimeout(printinterval, 1000);
      }
    },
    1000
  );
}

counter2(5);
