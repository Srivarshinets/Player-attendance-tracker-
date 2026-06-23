const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Coach = require("./models/Coach");
const Player = require("./models/Players");
const Session = require("./models/Session");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await Coach.deleteMany();
    await Player.deleteMany();
    await Session.deleteMany();

    await Coach.insertMany([
      {
        name: "John Doe",
        username: "johndoe",
        password: "pass12345",
        ageGroup: "U12",
      },
      {
        name: "Jane Smith",
        username: "janesmith",
        password: "567890pass",
        ageGroup: "U16",
      },
    ]);
    await Player.insertMany([
      { name: "Rahul", ageGroup: "U12" },
      { name: "Anvit", ageGroup: "U12" },
      { name: "Kevin", ageGroup: "U12" },
      { name: "Riya", ageGroup: "U12" },
      { name: "Arav", ageGroup: "U12" },

      { name: "Anjali", ageGroup: "U14" },
      { name: "Joe", ageGroup: "U14" },
      { name: "Kriti", ageGroup: "U14" },
      { name: "Raj", ageGroup: "U14" },
      { name: "Dev", ageGroup: "U14" },
    ]);

    await Session.insertMany([
      {
        date: new Date(),
        sessionType: "Morning",
        ageGroup: "U12",
      },
      {
        date: new Date(),
        sessionType: "Evening",
        ageGroup: "U12",
      },
      {
        date: new Date(),
        sessionType: "Morning",
        ageGroup: "U14",
      },
      {
        date: new Date(),
        sessionType: "Evening",
        ageGroup: "U14",
      },
    ]);
    console.log("Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedData();
