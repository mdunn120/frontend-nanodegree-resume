/*
This is empty on purpose! Your code to build the resume will go here.
 */

// JSON objects 
 var bio = {
  "name" : "Mariah Dunn",
  "role" : "Program Manager II",
  "contacts" : {
    "mobile": "978-879-6323",
    "email" : "mdunn120@gmail.com",
    "github": "mdunn120",
    "linkedin": "Mariah Dunn",
    "location": "Redmond"
  },
  "WelcomeMessage" : "Welcome!",
  "skills": ["mechanical engineer", "programmer", "writer", "inventor"],
  "bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/01f/1af/0b3e92f.jpg"
 }

 var education = {
	"schools": [
	{
		"name": "Franklin W. Olin College of Engineering",
		"location": "Needham, MA, US",
		"degree": "Undergraduate",
		"majors": "Mechanical Engineering",
		"dates": 2013,
		"url": "http://example.com"
	},
	{
		"name": "Wellesley College",
		"location": "Wellesley, MA, US",
		"degree": "Arts Concentration",
		"majors": "Creative Writing",
		"dates": 2013,
		"url": "http://example.com"
	},
	{
		"name": "National University of Singapore",
		"location": "Singapore, Singapore",
		"degree": "Study Abroad",
		"majors": "Engineering",
		"dates": 2012,
		"url": "http://example.com"
	}
	],
	"onlineCourses": [
	{
		"title": "Font End Web Development Nano-Degree",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://example.com"

	}
	]
}

 var projects = {
 	"projects": [
 	{
 		"title": "Sample Project 1",
 		"dates": "Aug 2013 - Current",
 		"description": "Write this later",
 		"images": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/01f/1af/0b3e92f.jpg"
 	},
 	{
 		"title": "Sample Project 2",
 		"dates": "May 2011 - Aug 2011",
 		"description": "Write this later",
 		"images": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/01f/1af/0b3e92f.jpg"
 	}

 	]
 }

 var work = {
 	"jobs": [
 	{
 		"employer": "Microsoft",
 		"title": "Program Manager",
 		"dates": "Aug 2013 - Current",
 		"description": "Write this later",
 		"location" : "Redmond, Washington"
 	},
 	{
 		"employer": "Naval Research Labs",
 		"title": "Mechanical Engineering Intern",
 		"dates": "May 2011 - Aug 2011",
 		"description": "Write this later",
 		"location" : "Washington DC"
 	}

 	]
 }







//------Layout of Page-------

function displayBio(){
//Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// 1. (3) Adding Photo
var formattedHeaderbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append( formattedHeaderbioPic )

// 1. (4) Adding skills
 if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    // For each skill
    for (i=0; i < bio.skills.length; i++) {
    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    	$("#header").append(formattedSkill);
    };

//Contact Info 
	//var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile); 
	//$("#topContacts").append(formattedContactGeneric);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);  
	$("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);  
	$("#topContacts").append(formattedEmail);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);  
	$("#topContacts").append(formattedLinkedin);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);  
	$("#topContacts").append(formattedGithub);
    //var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);  
	//$("#topContacts").append(formattedLocation);
 }

}
 function displayWork(){
//Adding job 
for (job in work.jobs){
 	$("#workExperience").append(HTMLworkStart);
 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
 	$(".work-entry:last").append(formattedEmployerTitle);
 	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
 	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	$(".work-entry:last").append(formattedDates);
 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

 }

}

function displayEducation(){
//for (job in work.jobs){
for (school in education.schools){
 	$("#education").append(HTMLschoolStart);
 	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
 	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 	var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
 	$(".education-entry:last").append(formattedNameDegree);
 	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 	$(".education-entry:last").append(formattedSchoolLocation);
 	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 	$(".education-entry:last").append(formattedSchoolDates);
 	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
 	$(".education-entry:last").append(formattedSchoolMajor);
 }
 
 for (onlineCourse in education.onlineCourses){
 	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
 	$(".education-entry:last").append(formattedOnlineTitle);
 }

}

function displayProjects(){
for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
	}
}

function displayLetsConnect(){
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);  
	$("#lets-connect").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);  
	$("#lets-connect").append(formattedEmail);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);  
	$("#lets-connect").append(formattedLinkedin);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);  
	$("#lets-connect").append(formattedGithub);
}

displayBio();
displayWork();
displayEducation();
displayProjects();
displayLetsConnect();
$("#mapDiv").append(googleMap);

//Get a users click locations
//$(document).click(function(loc){
//	var x = loc.pageX;
//	var y = loc.pageY;
//
//	logClicks(x,y);
//
//});




//function
//function locationizer(work_obj) {
//	var locationArray = [];
//
//	for (job in work_obj) {
//		var newLocation = work_obj.jobs[job].location;
//		locationArray.push(newLocation);
//	}
//
//	return locationArray;
//}
//
//console.log(locationizer(work));


