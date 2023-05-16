const yargs = require('yargs');

// 
const { addContact, removeContact, listContacts } = require('./contacts')

yargs.command({
    command: "create",
    aliases: ['c', 'ct'],
    describe: '[create new contact]',
    builder: {
        fullName: {
            alias: "f",
            describe: 'Person FullName',
            demandOption: true,
            type: "string"
        },
        phone: {
            alias: 'p',
            describe: "Person phone Number",
            demandOption: true,
            type: 'number',
        },
        email: {
            alias: 'e',
            describe: "Person Email Address",
            demandOption: true,
            type: 'string'
        }
    },
    handler({ fullName, email, phone }) {
        addContact(fullName, phone, email);
    }
})
yargs.command({
    command: "list",
    aliases: ['l'],
    describe: '[listing the saved contacts]',
    handler() {
        listContacts();
    }
})

yargs.command({
    command: 'remove',
    aliases: ['r', 'd'],
    describe: '[remvoe the user]',
    builder: {
        fullName: {
            alias: "f",
            describe: 'Person FullName',
            demandOption: true,
            type: "string"
        },
    },
    handler({ fullName }) {
        removeContact(fullName);
    }
})


yargs.parse();