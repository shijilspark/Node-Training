console.log('Starting app');

setTimeout(() => {
  console.log("Inside callback");
},2000);

setTimeout(() => {
  console.log('Second Timeout');
}, 0);

console.log('Finishing app');
