import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const emps = [
    { id: 1, name: "Disha Patel", age: 30, salary: 53000 },
    { id: 2, name: "Bhavesh Patel", age: 23, salary: 35000 },
    { id: 3, name: "Harsh Parmar", age: 29, salary: 25000 },
];

const typeDefs = ` 
  type Query { 
    getUsers: [Emp] 
  } 
  type Mutation { 
    createUser(name: String!, age: Int!,salary:Int!): Emp 
  } 
  type Emp { 
    id: ID 
    name: String 
    age: Int 
    salary:Int
  } 
`;

const resolvers = {
    Query: {
        getUsers: () => emps,
    },
    Mutation: {
        createUser: (parent, args) => {
            const { name, age, salary } = args;
            const newUser = {
                id: emps.length + 1, // ID should be a number 
                name,
                age,
                salary
            };
            emps.push(newUser);
            return newUser; // Return the newly created user 
        }
    }
};
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    listen: { port: 4200 },
});
console.log(`Server running at: ${url}`);