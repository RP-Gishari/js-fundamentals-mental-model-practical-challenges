// 1. VARIABLES & SCOPE: Contact data protection
// Challenge: Secure contact information management
const ContactManager = (function () {
  const contactDatabase = []; // private

  const contactTypes = ['family', 'friend', 'colleague', 'business'];

// 2. FUNCTIONS: Contact operations
  function addContact(name, phone, email, type) {
    if (!contactTypes.includes(type)) return console.log("Invalid type");
    const id = contactDatabase.length + 1;
    const contact = { id, name, phone, email, type };
    contactDatabase.push(contact);
    return contact;
  }

  function findContact(searchTerm) {
    return contactDatabase.find(c => c.name.toLowerCase() === searchTerm.toLowerCase());
  }

  function updateContact(contactId, newInfo) {
    const contact = contactDatabase.find(c => c.id === contactId);
    if (!contact) return console.log("Contact not found");
    Object.assign(contact, newInfo);
    return contact;
  }

  function getAllContacts() {
    return [...contactDatabase]; 
  }



  // 3. OBJECTS: Contact records
const contact = {
  id: 1,
  name: 'John Doe',
  phone: '555-123-4567',   
  email: 'john@email.com',
  type: 'friend',
  getDisplayName() {
    return `${this.name} (${this.type})`;
  }
};

console.log(contact.getDisplayName())

// 4. Sort contacts, group by type, handle duplicates
function organizeContacts(contacts) {
  const unique = contacts.filter((c, i, arr) =>
    i === arr.findIndex(x => x.name === c.name && x.phone === c.phone)
  );

  unique.sort((a, b) => a.type.localeCompare(b.type));

  const grouped = unique.reduce((acc, contact) => {
    acc[contact.type] = acc[contact.type] || [];
    acc[contact.type].push(contact);
    return acc;
  }, {});

  return grouped;
}


// 5.Validate contact info, merge duplicates, categorize contacts
function isValidContact({ name, phone, email, type }) {
  return name && phone && email && contactTypes.includes(type);
}

function mergeContacts(existing, incoming) {
  return { ...existing, ...incoming };
}


// 6. Format phone numbers, validate emails, create contact cards
function formatPhone(phone) {
  phone = phone.toString();
  return phone.slice(0, 3) + '-' + phone.slice(3, 6) + '-' + phone.slice(6);
}


function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}


function createContactCard(contact) {
  return `${contact.name} | ${formatPhone(contact.phone)} | ${contact.email} | ${contact.type}`;
}


// 7. Clean up messy contact data input
function cleanContactInput(raw) {
  let phone = String(raw.phone);
  let digits = '';
  for (let char of phone) {
    if (char >= '0' && char <= '9') {
      digits += char;
    }
  }

  const validPhone = digits.length === 10 ? digits : 'Invalid';

  return {
    name: String(raw.name).trim(),
    phone: validPhone,
    email: String(raw.email).toLowerCase(),
    type: String(raw.type).toLowerCase()
  };
}




// 8. Control access to sensitive contact information
function getPublicContact(contact) {
  const { name, type } = contact;
  return { name, type };
}

return {addContact, findContact, updateContact, getAllContacts,organizeContacts,isValidContact,
         mergeContacts,formatPhone,isValidEmail,createContactCard,cleanContactInput,getPublicContact};
})();


ContactManager.addContact("Iranzi", "0781763011", "iranzi@gmail.com", "friend");
ContactManager.addContact("Dieme", "0791763033", "dieme@gmail.com", "colleague");
ContactManager.addContact("Damour", "0731763022", "damour@gmail.com", "business");
ContactManager.addContact("Sabine", "0721763033", "sabine@gmail.com", "colleague");

ContactManager.updateContact(1, { name: "Gady" });
console.log(ContactManager.findContact("Dieme"));

console.log(ContactManager.cleanContactInput({id: 1,
  name: 'John Doe',
  phone: '555-(123)-4567',   
  email: 'JOhn@email.com',
  type: 'friend'}))
