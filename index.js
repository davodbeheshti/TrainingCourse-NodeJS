const dbFile = "./db/chinook.db";

// sqlite database
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile , err => {
    if(err) {
        return console.log(err.message);
    }
    console.log('connect to chinook database.');
});

// redis
const redis = require('redis')
const client = redis.createClient(); // connect to localHost 6379
client.on('error' , (err) => console.log(err)); // handle error

// query
const query = "SELECT TrackId as track from playlist_track";
console.time("Query_Time")
 
// check t see if query result is in cache
client.get(query , (err , value) => {
    if(err) {
        return console.log(err);
    }

    if(value) {
        client.DEL(query);
        console.log("redis cache : number of records" , value);
        return console.timeEnd('Query_Time');
    } else {
        db.serialize*(() => {
            db.all(query , (err , valoue) => {
                if(err) {
                    return console.log(err);
                }

                if(value) {
                    console.timeEnd("Query_Time");
                    console.log('sqlite query : Number of recourds ' , value.length);
                }

                // how to set redis key , value
                client.set(query , value.length , err => {
                    if(err) {
                        return console.log('err')
                    }

                    // redis
                    // client.expire(query , 20)
                })
                // end of redis set
                return db.close();
            });
        })
    }
})