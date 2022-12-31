const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log("Please turn off the tap");
  setTimeout(() => {
    console.log("Gentle Reminder! Please turn off the tap.");
  }, 3000);
});
console.log("The script is running");
console.log("The script is still running");
myEmitter.emit('WaterFull');
//myEmitter.emit('event');