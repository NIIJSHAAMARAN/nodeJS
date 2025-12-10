// You are managing a simple lead tracker in a Node.js app.
// Step 1: Insert the following 3 leads into a MongoDB collection named leads in the mashupdb database:
// Arjun from Kannur
// Meera from Kochi
// Lakshmi from Calicut
// Step 2: After inserting, write a separate query that finds the first lead from the city Kochi, and displays their name and city (no _id field).

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url)
  .then(client => {
    const db=client.db("LeadDB");
    console.log("Connected to Databse!");
     const myobj = [
      { name: 'Arjun', city: 'Kannur' },
      { name: 'Meera', city: 'Kochi' },
      { name: 'Lakshmi', city: 'Calicut' },
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
    const db = client.db("LeadDB");
    return db.collection("leads").findOne({city:'Kochi'},{projection:{_id:0,name:1,city:1}})
      .then(result => {
        console.log(result);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });