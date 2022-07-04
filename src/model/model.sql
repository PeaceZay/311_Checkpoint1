create table users2 ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name  VARCHAR(50),
    description VARCHAR(1000)
);

-- get the summary of all the items
"select id, first_name, last_name, description from users2" ;

-- get the details of a single user by id
"select id, first_name, last_name, description from users2 where id = ?" ;

-- delete a user given an id
"delete id from users2 where id = ?" ;

-- create a new user
"insert into users2(first_name, last_name, description)
values (?, ?, ?)" ;

-- update a user given its id
"update users2 set first_name = ?, last_name = ?, description = ? where id = ?" ;