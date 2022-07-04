let db = require("../model/db");




// Function to return a summary of the users on the response
let usersSummary = function (req, res) {
    console.log("userSummary");

    let sql = "select * from users2";
    db.query(sql, function (err, results) {
        if (err) {
            // handle the err
            console.log("could not execute the query", err);
            res.sendStatus(400);
        } else {
            res.json(results);
        }
    })
};
// function to return the detail of a single user on the response
let userDetails = function (req, res) {
    console.log("userDetails");

    let id = req.params.id;

    // when a sql statement uses a ?, this is called parameterized SQL
    let sql = "select id, first_name, last_name, description from users2 where id = ?";
    let params = []; // this arra will hodl the params for our sql statement
    params.push(id) // this is the first param in the sql statement

    //  bad way, subtle to sql injection, please do not do this !!!!!!!!!
    // let badSql = "select id, first_name, last_name, description from users2 where id = " +id;

    db.query(sql, params, function (err, results) {
        if (err) {
            console.log("failed to execute query:", err);
            res.sendStatus(500); // it is not the clients fault the query failed
        } else {
            if (results.length == 1) {
                res.json(results[0])
            } else if
                (results.length > 1) {
                console.log("Found more than one result for id", +id);
                res.sendStatus(500); // we send a 500 because this is a server bug, not the clients fault
            } else {
                // if the results is 0, so we send a 404 (not found)
                res.sendStatus(404);
            }
        }
    })

};

/*
    {
        "First_name": aldsjkfa --- this can't be empty
        "Last_name": a;lskdjfa --- this can't be empty
        "description":a;lksdjfa;lkd
    }
*/

// function to create a new user
let createUser = function (req, res) {
    console.log("createUser");

    let input = req.body;
    let first_name = input.first_name;
    let last_name = input.last_name;
    let description = input.description;

    if (!first_name) {
        res.status(500).send("First Name is required");
        return;
    }

    if (!last_name) {
        res.status(400).send("Last Name is Required");
        return;
    }
    // we are using parameterized sql again to avoid sql injection
    // we should ALWAYS use parameterized spl when accepting input from the client
    // and using in the spl statement, because we DO NOT TRUST THE CLIENT!!!!
    let sql = "insert into users2 (first_name, last_name, description) values (?, ?, ?)";
    let params = [first_name, last_name, description];

    db.query(sql, params, function (err, results) {
        if (err) {
            console.log("Couldn not execute sql insert", err)
            res.sendStatus(500);
        } else {
            res.sendStatus(204); // we do not have anything to return, but we want to let the client know that evertying went ok
        }
    })

}
/*

{
    "first_name": "slwlerkjwerlkj"
    "last_name": "a;lksdjfa;dlkj"
    "description":"welrkjewrw"
}


*/

// function to update a user given its id
let updateUser = function (req, res) {
    console.log("updateUser");

    // get the id from the path parameter
    let id = req.params.id;
    let body = req.body;

    let first_name = body.first_name;
    let last_name = body.last_name;
    let description = body.description;

    if (!first_name) {
        res.status(400).send("First Name is Required");
        return;
    }

    if (!last_name) {
        res.status(400).send("Last Name is Required");
        return;
    }
    // let isDone = body.is_done;
    // if(isDone != true && isDone !=false){
        // res.status(400).send("task is required");
        // return
    // }

    // let isDoneInt;
    // if(isDone == true){
    //     isDoneInt = 1;
    // } else {
    //     isDoneInt = 0;
    // }

    let sql = "update users2 set first_name = ?, last_name = ?, description = ? where id = ?";
    let params = [first_name, last_name, description, id]

    db.query(sql, params, function(err, results){
        if(err){
            console.log("could not execute update sql", err);
            res.sendStatus(500); // this is not the clients fault
        } else {
            res.sendStatus(204); // nodata to send back, but we want to let the client know everything went ok
        }
    });
}


// function to delete a user given its id
let deleteUser = function (req, res) {
    console.log("deleteUser");
    
    let id = req.params.id;

    let sql = "delete from users2 where id = ?" ;
    let params = [id];

    db.query(sql, params, function(err, results){
        if(err){
            console.log("failed to delete user with id:"+id, err);
            res.sendStatus(500)
        } else {
            res.sendStatus(204) // nothing to send back, but the ok status
        }
    })
}


module.exports = {
    userDetails, usersSummary, createUser, updateUser, deleteUser
}