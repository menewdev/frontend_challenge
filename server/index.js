const { ApolloServer, gql } = require('apollo-server');

const addDays = (date, days) => {
  const _date = new Date(date);
  _date.setDate(_date.getDate() + days);
  return _date.toISOString().split('T')[0];
};

const today = new Date();

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
  }

  type Schedule {
    id: Int!
    user_id: Int!
    date: String!
  }

  type Query {
    users: [User]
    schedules: [Schedule]
  }
`;

const mockData = {
  users: Array.from({ length: 2 }, (_, i) => ({
    id: i + 1,
    name: `user_${i + 1}`,
  })),
  schedules: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    user_id: i < 5 ? 1 : 2,
    date: addDays(today, i),
  })),
};

const resolvers = {
  Query: {
    users: () => mockData.users,
    schedules: () => mockData.schedules,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
