// import mogno tools / library 
const { MongoClient, ServerApiVersion } = require('mongodb');

// connect to Mongo/Atlas USING a URL connection string 
const { uri } = require('./dbsecrets.js')

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// connect to sample_mflix database
const db = client.db('sample_mflix');

// Query 

// let's get specific movie (doc) from the 'movies' collection
// seatch by title for "Back to the Future"

db.collection('movies')
.findOne({ title: "Back to the Future"}, (err, results) => {
    if (err) {
    console.error(err);
    }
    // lets output results
    console.log(results);
    client.close();
});

