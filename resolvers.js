class Client {
    constructor(id, {name, last_name, company, email, age, type}){
        this.id = id;
        this.name = name; 
        this.last_name = last_name;
        this.company = company;
        this.email = email;
        this.age = age;
        this.type = type;
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