DROP DATABASE IF EXISTS organdatabase;

CREATE DATABASE organdatabase;

USE organdatabase;

CREATE TABLE Donor
(
   DonorID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   DonorName varchar(50) NOT NULL,
   D_Username varchar(50) NOT NULL,
   D_Password varchar(50) NOT NULL,
   HealthCardNumber int NOT NULL, 
   BloodType varchar (30) NOT NULL,
   MedicalID varchar(50),
   DateOffered varchar(50) NOT NULL,
   Age int NOT NULL,
   Address varchar(50),
   Email varchar(50),
   Phone varchar(50) NOT NULL,
   IsDeceased boolean NOT NULL
);

CREATE TABLE Hospital
(
   HospitalID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   HospitalName varchar(50) NOT NULL,
   H_Username varchar(50) NOT NULL,
   H_Password varchar(50) NOT NULL,
   Province varchar(50) NOT NULL,
   DateAsked varchar(50) NOT NULL,
   Address varchar(50) 
);

CREATE TABLE Organ
(
   OrganID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   OrganName varchar(50) NOT NULL
);

CREATE TABLE DonorOrgan
(
	DO_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	DonorID int NOT NULL,
	OrganID int NOT NULL,
	Transplant_or_BothTransResearch boolean NOT NULL,
   	Contacted boolean NOT NULL,
    FOREIGN KEY(DonorID) REFERENCES Donor(DonorID),
	FOREIGN KEY(OrganID) REFERENCES Organ(OrganID)
);
