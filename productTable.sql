-- create table product(
--  product_id int primary key auto_increment,
--  product_name varchar(60),
--  number_in_stock int,
--  rating decimal(2,1),
--  price decimal(10,2) default 0,
--  product_description varchar(500),
--  brand varchar(50),
--  category varchar(50),
--  check (rating <= 5)
-- )

#inserting data into product db
-- insert into product(product_name,number_in_stock,rating,price,product_description,brand,category) values('apple airpords',7,4.5,30000,'wirless true','apple','electronics');
-- insert into product(product_name,number_in_stock,rating,price,product_description,brand,category) values('google pixel',5,4.5,40000,'smartphone','google','electronics');
-- insert into product(product_name,number_in_stock,rating,price,product_description,brand,category) values('ryzen 5',10,4.5,30000,'processor','Amd','electronics');

#==========
select * from product
