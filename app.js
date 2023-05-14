const fs = require('fs');

// fs.writeFile('test.txt', 'hello world', (err) => {
//     if (err) throw err
//     console.log("data is saved");
// }) 
// fs.writeFileSync('testSync_fs.txt' , 'hello file system sync')

// fs.appendFile('test.txt' , '\nhello davodJonam'  , (err) => {
//     if(err) throw err;
//     console.log('data is appended');
// })

fs.rename('test.txt' , 'testRenam.txt' , (err) => {
    if(err) throw err;
    console.log('data is renamed');
})