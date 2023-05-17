const { EventEmitter } = require('events');

const em = new EventEmitter();

em.addListener("FirstEvent", (data) => {
    console.log('first event', data);
})

em.on("SeccountEvent", (data) => {
    console.log("second event", data);
})

em.emit('FirstEvent', 'davodBeheshti');
em.emit('SeccountEvent', { name: "davod beheshti" })
