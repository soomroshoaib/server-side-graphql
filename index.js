const { ApolloServer, gql } = require('apollo-server');





const students = [
    {
        
        "name": "shoaib soomro",
        "email":"shoaibkhanu123@gmail.com",
        "age":   "12",

    },  {
        
      "name": "sana khan",
      "email":"shoaibkhanu123@gmail.com",
      "age":   "12",

  },

    {
        
      "name": "khizra",
      "email":"shoaibkhanu123@gmail.com",
      "age":   "12",

  },
    {
        
        "name": "satter ahmed ",
        "email": "shoaibkhanu123@gmail.com",
        "age":   "12",

    },
    {
        
        "name": "ahmed ali",
        "email": "ahmedkhanu123@gmail.com",
        "age":   "12",

    },
    {
        
        "name": "name ali king",
        "email": "namekhanu123@gmail.com",
        "age":   "12",

    },
    {
        
      "name": "soomro ali king",
      "email": "soomrokhanu123@gmail.com",
      "age":   "12",

  },
]

const resolvers = {
    Query: {
      students: () => students,
    },
    Mutation: {
      addStudent: (e, { input })=>{
       
        console.log(input)
        students.push(
          {
            name: input.name,
            age: input.age,
            email: input.email,
            id: input.id
          }
        )
        return {
          name: input.name,
          age: input.age,
          email: input.email,
          id: input.id
        }

      
      }
    }
  };
const typeDefs = gql`


 
   type student {
     id:  Int
    name: String
    email: String
    age:  Int
  }

  input StdInput{
    id: Int
    name: String
    email: String
    age: Int
  }


  type Query {
    students: [student]
  }
  type Mutation {
    addStudent(input: StdInput): student
  }
`;


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

