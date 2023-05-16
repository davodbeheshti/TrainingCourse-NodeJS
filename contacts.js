const fs = require('fs')

const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync('contacts.json');
        const contacts = dataBuffer.toString();
        return JSON.parse(contacts);
    } catch (ex) {
        return [];
    }
}

const addContact = (fullName, phone, email) => {
    const contacts = loadContacts();

    const repeatUser = contacts.find(c => c.fullName === fullName);
    if (!contacts) {
        fs.writeFileSync('contacts.json', JSON.stringify([{ fullName, phone, email }]))
    } else if (!repeatUser) {
        contacts.push({ fullName, phone, email });
        fs.writeFileSync('contacts.json', JSON.stringify(contacts))
        console.log('added the successFully');
    } else {
        console.log("user is already exist");
    }
}

const listContacts = () => {
    const contacts = loadContacts();

    if (contacts.length > 0) {
        console.table(contacts);
    } else {
        console.log('is not users');
    }
}

const removeContact = (fullName) => {
    let contacts = loadContacts();
    const repeatUser = contacts.find(c => c.fullName === fullName);
    if (repeatUser) {
        contacts = contacts.filter(f => f.fullName !== fullName)
        fs.writeFileSync('contacts.json', JSON.stringify(contacts));
        console.log('removed the successFully');
    } else {
        console.log('user is not exist');
    }

}


module.exports = {
    addContact,
    removeContact,
    listContacts
}