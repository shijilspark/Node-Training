const EventEmitter = require('events');
//EventEmitter is a class
//Now lets create an object of this class EventEmitter

const emitter = new EventEmitter();

// Register an eventlister emitter.adListener or emitter.on it takes two arguments, event name and a function

emitter.on('messagelogged', function(arg){
  console.log('Called Message', arg);
})

// Arrow function, here we replace function(arg) with (arg) => to make it simpler from ES6 onwards

// emitter.on('messagelogged', (arg) =>{
//   console.log('Called Message', arg);
// })


//Register an Event, we can also raise additional argument

emitter.emit('messagelogged',{id:1, url:'http://'});

//now if you run this code we are raising an even with an argument and it is passed to the function
// in the listener and get executed
//the result will be: Called Message { id: 1, url: 'http://' }
