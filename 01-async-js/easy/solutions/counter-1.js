function counter1(n) {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > n) {
      clearInterval(interval);
    }
  }, 1000);
}

counter1(5);
