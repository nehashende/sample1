var fs = require('fs');
var rs = fs.createReadStream('./sample.txt');
rs.on('open', function () {
  console.log('The file is open');
});

var events = require('events');
var eventEmitter = new events.EventEmitter();
console.log(eventEmitter);

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  //Assign the event handler to an event:
  eventEmitter.on('scream', myEventHandler);
  
  //Fire the 'scream' event:
  eventEmitter.emit('scream');

  var events = require('events');
  var eventEmitter = new events.EventEmitter();
  
  var myEH = function(a,b)
  {
      console.log(a+b);
  }

  eventEmitter.on('add', myEH(2,3));
  eventEmitter.emit('add');




