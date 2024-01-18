

const myTimer = () => {
const clock = new Date();

const format = (value)=>{
return value < 10 ? '0'+ value : value}

const hours12 = clock.getHours() % 12 || 12;
const ampm = clock.getHours() >= 12 ? 'pm' : 'am'
const format12 = format(hours12) + ':' + clock.getMinutes() + ':' + clock.getSeconds() +' '+ ampm 

const format24 = format(clock.getHours())+':'+format(clock.getMinutes())+':'+format(clock.getSeconds())+' '+ ampm

  console.clear();
  console.log("24 hour format :" + format24);
  
  console.log("12 hour format :" + format12);
  setTimeout(myTimer, 1000);
};
myTimer();
