const fs = require('fs');

fs.writeFile('test.txt', 'hello world', (err) => {
    if (err) throw err
    console.log("data is saved");
}) 

fs.appendFile('test.txt' , '\nhello davodJonam'  , (err) => {
    if(err) throw err;
    console.log('data is appended');
})