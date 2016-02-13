# Applets Mobile Challenge, 3rd Edition

<img align="right" src="https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/organator/www/img/logo.jpg" width="120">

## Team Name: Code Benders
### Team Members: 
* [Elim T.](https://ca.linkedin.com/in/elimt)
* [Ronald E.](https://ca.linkedin.com/in/ronaldekambi)
* [Pranav P.](https://ca.linkedin.com/in/ipranavpatel)
* [Nignesh P.](https://ca.linkedin.com/in/nignesh)
* [Ammar K.](https://ca.linkedin.com/in/ammar-khan-3a4a4121)

# Motivation
Among all of the philanthropic initiatives that lie on the core principle of giving yourself towards a certain cause or person while expecting nothing in return, one of the most selfless acts possible by any human being is the act of donating one of their own organs to another needy individual. Along with being such a noble cause, it has incalculable tangible benefits to the progression of humanity with the means by which an enormous magnitude of lives can be spared. With the [statistics](http://www.organdonor.gov/about/data.html) rapidly showing a larger and larger amount of individuals accross all age groups in need of organ donations while the number of willing people out there offering their organs remaining stagnant, a mobile application that can spark a new surge of willing participants to donate their organs once their life reaches its eventual end. An app needed to be designed that can reach a grand audience, while providing motivational material to intice others into giving their bodies up for donation can be a source for great change in this philanthropic endeavour. And with these intentions the Code Benders ventured forth to create Organ Donator application for mobile phones that led to the birth of the *Organator*. 

![alt homeScreen] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Home%20Screen.png)
![alt registerDonor] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Donor%20Sign%20Up%20Screen.png)

![alt donorLogin] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Donor%20Login%20Screen.png)
![alt hospitalLogin] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Hospital%20Login%20Screen.png)

![alt allDonor] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Donor%20Landing%20Page.png)
![alt hospitalFilter] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Hospital%20Filter%20Option.png)

![alt viewDonor] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Donar%20Details.png)
![alt HospitalLocation] (https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/Prototype/Hospital%20Location%20Screen.png)


# Introduction
Organator is a multi-platform developed mobile application which promotes Organ and Tissue donation. It has a donor and hospital type of account which has different a unique view with different functionalities that will be elaborated in the features section. The application is split between two different functionalities. One is for all the gracoius donors out there in the public and the other for the various Hospitals that can take advantage of the massive list of Organ Donors the application will generate. Reaching this final idea is a product of exhaustive brainstorming and refinement among the team members to capture the delicate balance of novelty and urgent need amongst the community today.

Members of society that are in need of Organ Donations are often overlooked in comparision to many of the other epidemmics that occur. There are a [staggering amount of fatalities](https://www.cihi.ca/en/types-of-care/specialized-services/organ-replacements/e-statistics-on-organ-transplants-waiting) that take place because of the ever enlarging waiting lists and the lack of other healthy individuals stepping up to offer their organs once they are no longer in need. With this problem in mind, a new app on a phone that can reach as large of an audience as possible to give them a means to offer some much needed help to the organ needy. With the focus on reaching a mass audience taking priority a cross-platform framework for developing the software was decided upon in order to reach both the Android and iOS users via the Ionic framework.

# Features
##### Donor Features
- Sign up with iOS Medical ID or email address

Donors have the option of signing up for donation with their iOS Medical ID. This iOS Medical ID would have statistics about the health of the donor which would be used to setup the profile of the donor. The donor also has the option of signing up via an email address as well which would be followed by a series of questions to setup
the profile of the donor.

- Select organs or tissues to donate

During the signing up process of the donors, the donors has the option to choose between organs and tissues (Kidneys, Heart, Eyes, Bone, Liver, Lungs, Skin and Pancreas) which they would like to donate. These options can be edited after signing up by login into their account and making changes to the selections.

- Organ Donation Card

The donor would have an electronic donor card once the donor signs up to become a donor. This donor card can be used where applicable

- Health Tips  

The donor would recieve frequest tips on how to stay healthy. There would be a lot of tips directed towards keeping the selected organs for donation healthy as well.

##### Hospital Features
- Sign in with authorized account

To prevent anyone from signing up as a hospital we would have a set of authorized logins which would be used by hospitals to have access to donor information. Hospitals which do not have accounts can request a login in code which would involve going through authentication steps

- View donor information and Filter according to required donor info

Hospitals which have access would be able to view information of donors. This information would include donation, blood type, age and other necessary fields. There would be a filter option which would enable the hospital to filter the information according to the to the organ or tissue needed. A selected donor can be contacted by the hospital for donation.

- Contact options

The Hospitals will be able to access the user information from various Donors to be  approached during the applicable times to take advantage of any sudden happenings that occur to bring about the most utilitarian outcomes possible.

- Hospital Locator

This feature enables the user to find the current location of the hospital and also find the location of hospitals around.

# Setup + Open Source Libraries
The [Ionic Framework](http://ionicframework.com/docs/guide/installation.html) was setup by first setting up a Cordova framework which will allow the Angular Javascript technologies developed by Google to generate an application that will work on both the Web outlets, Android Devices, _and_ even iOS Devices. Alongside Angular, Cordova, and Ionic, the Charts.JS open source libraries were also utilized to take advantage of the Google News, Hospital Location, and Organ Donar statistic API's that facilitated the aims of the application.

# License
You can check out the full license [here](https://github.com/roncodingenthusiast/codebenders-applets-amc/blob/master/LICENSE)
<br>
This project is licensed under the terms of the MIT license.
