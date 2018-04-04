const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    userName: "Person 1",
    email: "person1@aol.com",
    password: "password1",
    date: new Date(Date.now())
  },
  {
    userName: "Person 2",
    email: "person2@aol.com",
    password: "password2",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
