# A procedure is invoked using a CALL statement and can only pass back values using output variables
-- delimiter // 
-- create procedure getOwnerPhone(in owner_name varchar(20),out phone_no int)
--  Begin
--   select phone_no from owner where owner_name=owner_name;
--  End //
--  
--  delimiter ;

#call getOwnerPhone('liston',@phone_no)  
select @phone_no