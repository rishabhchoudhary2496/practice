#OneToMany
#A row in a table can have multiple matching rows in another table
#primary key - foreign key

#parent table
-- create table owner(
--  owner_id int primary key auto_increment,
--  owner_name varchar(30),
--  owner_address varchar(200),
--  owner_phone int
-- )

#inserting data into parent table
-- insert into owner (owner_name,owner_address,owner_phone) values('suresh','benguluru',12345);
-- insert into owner (owner_name,owner_address,owner_phone) values('apuia','manipur',32345);
-- insert into owner (owner_name,owner_address,owner_phone) values('liston','goa',62345);
-- insert into owner (owner_name,owner_address,owner_phone) values('hitesh','hyderabad',82345);
-- insert into owner (owner_name,owner_address,owner_phone) values('akash','lucknow',92345);

#selecting data from parent table
#select * from owner



#child table
-- create table pet(
--  pet_id int primary key,
--  pet_name varchar(30),
--  pet_category varchar(10),
--  fk_owner int,
--  foreign key(fk_owner) references owner(owner_id)
-- )


#inserting data into child table
-- insert into pet values(201,'crusoe','dog',1);
-- insert into pet values(202,'bella','cat',1);
-- insert into pet values(203,'gohan','dog',2);
-- insert into pet values(204,'togo','dog',3);
-- insert into pet values(205,'bolt','dog',4);
-- insert into pet values(206,'ham','hamster',5);

#selecting data from child table
#select * from pet


#joining data from both tables
#select owner.owner_id,owner.owner_name, pet.pet_name from owner inner join pet on pet.fk_owner=owner.owner_id