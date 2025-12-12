// You are managing participant data for a Tech Workshop Registration System. 
// All participant details are stored in a MongoDB collection named registrations.

// Use the following sample data:

// const sampleRegistrations = [
//   { name: 'John', city: 'Trivandrum' },
//   { name: 'Deepak', city: 'Kollam' },
//   { name: 'Dean', city: 'Trivandrum' },
//   { name: 'Rahul', city: 'Calicut' },
//   { name: 'Ashwin', city: 'Calicut' },
//   { name: 'Rolly', city: 'Alleppy' },
//   { name: 'Nikhil', city: 'Kottayam' },
//   { name: 'Raymond', city: 'Trivandrum' },
//   { name: 'Dean', city: 'Calicut' },
// ];
// Your Tasks:
// Insert the above participant data into the registrations collection.

// Update the participant named "John":

// Change the name to "Johnny"

// Change the city to "Chennai"

// Update the city of all participants named "Dean" to "Kollam".

// A participant named "Deepak" has cancelled their registration — delete that record.

// Remove all participants whose names start with the letter "D".

const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const sampleRegistrations = [
  { name: 'John', city: 'Trivandrum' },
  { name: 'Deepak', city: 'Kollam' },
  { name: 'Dean', city: 'Trivandrum' },
  { name: 'Rahul', city: 'Calicut' },
  { name: 'Ashwin', city: 'Calicut' },
  { name: 'Rolly', city: 'Alleppy' },
  { name: 'Nikhil', city: 'Kottayam' },
  { name: 'Raymond', city: 'Trivandrum' },
  { name: 'Dean', city: 'Calicut' },
];
    
    return db.collection("registrations").insertMany(sampleRegistrations)
      .then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myquery = { name: "John" };
    const newvalues = { $set: { name: "Johnny", city: "Chennai" } };
    
    return db.collection("registrations").updateOne(myquery, newvalues)
      .then(res => {
        console.log("1 document updated");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myquery = { name: 'Deepak' };

    return db.collection("registrations").deleteOne(myquery)
      .then(res => {
        console.log("1 document deleted");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const coll = db.collection("registrations");
    const myquery = { name: /^D/ };

    return coll.deleteMany(myquery)
      .then(result => {
        console.log("Number of documents deleted: " + result.deletedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
    client.close();
  });