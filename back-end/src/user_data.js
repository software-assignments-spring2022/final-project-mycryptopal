// some mock user data... in a real app, this would be stored in a database.
const users = [
    {
      id: 1,
      username: "foo",
      password: "$2b$10$kTj5ZCDZ8jxy5zE0tA.OkeQYLYEwGyA3UWzUsfVkXeiOTqmHm8Eke", // you would normally encrypt the password using bcrypt() rather than keep it as plain text in the database
    },
    {
      id: 2,
      username: "baz",
      password: "bum", // you would normally encrypt the password using bcrypt() rather than keep it as plain text in the database
    },
  ]
  
  module.exports = users