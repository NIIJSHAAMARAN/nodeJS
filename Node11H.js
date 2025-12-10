// You run a small digital marketing agency and collect leads (interested customers) from various cities in Kerala. You want to store these leads in a MongoDB database and later retrieve only the names of those leads who are from Calicut.
// Create a Node.js script that:
// Inserts a list of 8 leads with their name and city into a MongoDB collection named leads.
// Reads and prints the names of all leads who are from Calicut, and only display their names (not cities).
// Use a database named mashupdb. The leads to be inserted are:
// John – Trivandrum
// Rahul – Calicut
// Dean – Trivandrum
// Deepak – Kollam
// Ashwin – Calicut
// Rolly – Alleppy
// Nikhil – Kottayam
// Raymond – Trivandrum
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url)
  .then(client => {
    const db=client.db("mashupdb");
    console.log("Connected to Databse!");
     const myobj = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Dean', city: 'Trivandrum' },
      {name:'Deepak',city:'Kollam'},
      {name:'Ashwin',city:'Calicut'},
      {name:'Rolly',city:'Alleppy'},
      {name:'Nikhil',city:'Kottayam'},
      {name:'Raymond',city:'Trivandrum'},
    ];
    return db.collection("leads").insertMany(myobj)
      .then(res => {
        console.log("documents inserted");
    client.close();
      })
  })
   .catch(err => {
    console.error(err);
  });

   MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    return db.collection("leads").find({city:'Calicut'},{projection:{_id:0,name:1}}).toArray()
      .then(result => {
        console.log(result);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });