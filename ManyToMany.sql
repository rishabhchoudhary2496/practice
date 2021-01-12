#A row from one table can have multiple matching rows in another table, and a row in the other table can also have multiple matching rows in the first table 

#parent table
-- CREATE TABLE Alumno(
-- StudentID INT(10) PRIMARY KEY,
-- Name VARCHAR(100)
-- );

#second table
-- CREATE TABLE Class(
-- ClassID INT(10) PRIMARY KEY,
-- Course VARCHAR(100)
-- );

#bridging table
-- CREATE TABLE StudentClassRelation(
-- StudentID INT(15) NOT NULL,
-- ClassID INT(14) NOT NULL,
-- FOREIGN KEY (StudentID) REFERENCES Alumno(StudentID),
-- FOREIGN KEY (ClassID) REFERENCES Class(ClassID),
-- UNIQUE (StudentID, ClassID)
-- );

insert into Alumno values(1,'olu alfonso');
insert into Alumno values(2,'olu alfonso');
