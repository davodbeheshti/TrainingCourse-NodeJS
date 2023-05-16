const yargs = require('yargs');

yargs.command({
    command: "create",
    aliases : ['c' , 'ct'], 
    describe: '[create new contact]',
    builder: {
        fullName: {
            alias : "f",
            describe: 'Person FullName',
            demandOption: true,
            type : "string"
        },
        phone : {
            alias : 'p',
            describe : "Person phone Number",
            demandOption : true,
            type : 'number',
        },
        email : {
            alias : 'e',
            describe : "Person Email Address",
            demandOption : true,
            type : 'string'
        }
    },
    handler({fullName , email , phone}) {
        console.log(fullName, email, phone);
    }
})


yargs.parse();