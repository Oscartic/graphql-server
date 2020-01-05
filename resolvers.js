class Client {
    constructor(id, {name, last_name, company, emails, age, type, orders}){
        this.id = id;
        this.name = name; 
        this.last_name = last_name;
        this.company = company;
        this.emails = emails;
        this.age = age;
        this.type = type;
        this.orders = orders;
    }
}

const clientsDB = {}

// resolver 
const resolvers = {
    getClient: ({id}) => {
        return new Client(id, clientsDB[id])
    },
    createClient: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientsDB[id] = input;
        return new Client(id, input);
    }
}

export default resolvers;