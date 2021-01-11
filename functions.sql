#date and time functions
#=================
#current date
#select curdate() as date
#===================
#current time
#select curtime() as time
#=======================
#add date
#select adddate(curdate(),30)
#========================
#add time
#select addtime(curtime(),'1:0:0')
#=========================
#extracts date from date
#select date('2003-12-31 01:02:03') as date
#========================
#date add
#SELECT DATE_ADD('2018-05-01',INTERVAL 1 YEAR);
#=========================
#date sub
#SELECT DATE_SUB('2018-05-01',INTERVAL 1 YEAR);
#==========================
#date format
#select date_format(curdate(),'%W %M %Y')
#==========================
#time to seconds
#SELECT TIME_TO_SEC('22:23:00');
#==========================
#weekday
#select weekday(curdate())

#***************************************************

#string functions
#concat
#select concat('suresh',' wangjam') as fullname
#===================
#finding substring position in a string
#select INSTR('this was great match','m') as substring;
#===================
#lowercase
#select lcase('SAM')
#=============
#upercase
#select ucase('sam')
#==============
#length
#select length('sam in the running')
#==========================
#locate subtrin position in string
#select locate('bar','foobarbar')
#==========================
#trimming
#select ltrim(' rishabh')
#======================
#padding
#select lpad('rishabh','4','$$')
#=====================
#repeat string
#select repeat('hey ',3)
#==============
#replace string
#SELECT REPLACE('www.mysql.com', 'w', 'Ww');
#===================
#reverse
#select reverse('rishabh')
#==========================


#**********************************
#mathematical functions
#abs value
#select abs(-60)
#=================
#ceil max close value
#select ceil(1.30)
#=================
#floor min close value
#select floor(1.30)
#=================
#modulus
#select mod(21,10)
#=================
#power
#select pow(2,4)
#===============
#random number
#select floor(rand() * 100)
#=================
#round
#select round(1.30003)
#truncate
#select truncate(2.404040,2)