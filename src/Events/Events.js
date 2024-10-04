const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('userLogin',(username,age,email)=>{
    console.log(`User Name Is  ${username} Has Logged In And My Age Is ${age} And My Email Is ${email}`);
})

eventEmitter.emit('userLogin','Sanidhya',19,'DwivediSanidhya55@gmail.com')

module.exports=eventEmitter