-- create table orders(
--  order_id int,
--  product_id int,
--  user_id int,
--  shipping_address varchar(100), 
--  quantity int,
--  price decimal(10,2) default 0,
--  payment_method enum('COD','Debit Card','Credit Card','UPI'),
--  isPaid bool default false,
--  isDelivered bool default false,
--  foreign key(product_id) references product(product_id),
--  foreign key(user_id) references user(user_id)
-- )

-- insert into orders(order_id,product_id,user_id,shipping_address,quantity,price,payment_method) values(301,1,2,'anyRandomAddres',2,60000,'COD');
-- insert into orders(order_id,product_id,user_id,shipping_address,quantity,price,payment_method) values(301,2,2,'anyRandomAddres',2,60000,'COD')

select * from orders