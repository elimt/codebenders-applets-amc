# populate the database with dummy data

USE organdatabase;

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Roly Roy, roly, iammean, 12345, 1999-05-02, A, 65, Demon Realm, roy@badguy.com, 666 666 - 6966, false);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (John Smith, johnsmith, john567, 7638, AB, 2015-05-05, 52, Rideau Street, johnsmith@gmail.com, 613-675-8473, true);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Killer, killer7, killerpass, 23332, O, 1988-09-30, 23, wow Road, killer7@capcom.com, (555) 656-1983, true);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Mishima, ewgf, thunder, 25332, AB, 1948-03-30, 71, Mishima Zaibatsu, heihachi@namco.com, (441) 456-1933, true);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (David Johnson, davidjohnson, david485, 5632, O, 2015-09-15, 71, Redrow Road, davidjohnson@gmail.com, 514-457-4574, false);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Ewan Taylor, quigon, obiwan, 23372, B 1988-09-30, 23, Halin Road, khama@starwars.com, (555) 656-1983);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Mary Jane, maryjane, mary057, 67859, B, 2011-10-05, 36, Greenbank Road, maryjane@gmail.com, 514-667-658, false);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Tiffany Johnson, tiff, tiffypass, 98765, AB, 1978-12-30, 76, zewa road, tiffyj@hotmail.com, (595) 236-1183, true);

INSERT INTO Donor (DonorID, DonorName, D_Username, D_Password, HealthCardNumber, Blood Type, MedicalID, DateOffered, Age, Address, Email, Phone, IsDeceased) VALUES (Omar Ahmed, oahmed, shaokhan, 43590, O, 1987-09-07, 29, Hyul Malik, munky@hotmail.com, (595) 236-1183, false);



INSERT INTO Hospital (HospitalID, HospitalName, H_Username, H_Password,
   Province, DateAsked, Address) VALUES (1, Royal Victoria Hospital, rvh, 12345, QB, 2005-12-11, 1001 Boulevard Décarie);


INSERT INTO Hospital (HospitalID, HospitalName, H_Username, H_Password,
   Province, DateAsked, Address) VALUES (2, Montreal General Hospital, mgh, 56374, QB, 2013-10-11, 1650 Avenue Cedar, Montréal);

INSERT INTO Hospital (HospitalID, HospitalName, H_Username, H_Password,
   Province, DateAsked, Address) VALUES (3, Richardson Hospital, richardson, 25643, QB, 2007-01-11, 5425, avenue Bessborough);

INSERT INTO Organ
(OrganID, OrganName) VALUES (1, Kidneys);
INSERT INTO Organ
(OrganID, OrganName) VALUES (2, Liver); 
INSERT INTO Organ
(OrganID, OrganName) VALUES (3, Heart);
INSERT INTO Organ
(OrganID, OrganName) VALUES (4, Lungs); 
INSERT INTO Organ
(OrganID, OrganName) VALUES (5, Eyes);
INSERT INTO Organ
(OrganID, OrganName) VALUES (6, Bone);
INSERT INTO Organ
(OrganID, OrganName) VALUES (7, Skin);
INSERT INTO Organ
(OrganID, OrganName) VALUES (8, Pancreas); 


INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(1, 1, false, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(1, 2, false, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(1, 3, false, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(1, 4, true, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(2, 5, false, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(2, 6, false, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(3, 7, true, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(3, 8, true, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(4, 1, false, true);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(4, 3, true, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(5, 5, true, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(5, 7, true, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(6, 2, false, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(6, 4, false, false);
INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(7, 6, true, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(7, 8, true, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(8, 3, false, false);

INSERT INTO Donor-Organ
(DO_ID, DonorID, OrganID, Transplant_or_BothTransResearch, Contacted) VALUES(8, 7, false, false);

commit;

