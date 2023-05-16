const fs = require("fs");

let persons = [
    { id: "1", fullname: "davod beheshti" },
    { id: "2", fullname: "tara hoseini" },
    { id: "3", fullname: "mona yari" },
];

// fs.writeFileSync("contacts.json" , JSON.stringify(persons));

const data = fs.readFileSync('contacts.json');
const obj = JSON.parse(data.toString());
console.log(obj)

// ----------------------------------
const command = process.argv[2];

switch (command) {
    case 'add':
        console.log('adding');
        break;
    case 'remove':
        console.log('removing');
        break;
    default:
        console.log('command is not valid');
        break;
}