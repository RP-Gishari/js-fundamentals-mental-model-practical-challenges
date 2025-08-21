function createContactManager() {
    
    const contactDatabase = [];
    const contactTypes = ['family', 'friend', 'colleague', 'business'];

    return {
        
        addContact(name, phone, email, type) {
            if (!contactTypes.includes(type)) {
                console.log('Invalid contact type');
                
            }
            if(phone.length!= 10 ){
                
                return 'invalid phone number'
            }
            console.log(phone.length)
            const Contact = {
                id: contactDatabase.length + 1,
                name,
                phone,
                email,
                type,
                getDisplayName() {
                    return `${this.name} (${this.type})`;
                }
            };
             contactDatabase.push(Contact);
             return contactDatabase
           
        },
        findContact(searchTerm){
            const found = contactDatabase.find((item)=> item.name.toLowerCase() === searchTerm.toLowerCase())
            return found;
        },
        updateContact(contactId, newInfo) {
            const foundId=contactDatabase.find((item)=>item.id === contactId)
            foundId.name=newInfo.name
            foundId.phone=newInfo.phone
            foundId.email=newInfo.email
            foundId.type=newInfo.type
            return foundId;

        },
         sortedNumber(){
           return contactDatabase.sort((a,b)=>b.id-a.id)
            

        }
        

    }
};
const res=createContactManager()
console.log(res.addContact('sabine','12334456','ingsad@gmail.com','family'))
console.log(res.findContact('sabine'))
console.log(res.updateContact(1, {name:'jane',phone:'1233445678',email:'ingsad@gmail.com',type:'family'}))
console.log(res.sortedNumber())
