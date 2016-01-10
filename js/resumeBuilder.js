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
  "skills": ["Program Management", "Organized", "Creative", "Technical"],
  "bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/01f/1af/0b3e92f.jpg"
 }

 var education = {
	"schools": [
	{
		"name": "Bellevue College",
		"location": "Bellevue, Washington",
		"degree": "Continuing Education",
		"majors": "Technical Writing, Professional Editing, Chinese II, Korean 4",
		"dates": "2013 - 2015",
		"url": "http://example.com"
	},
	{
		"name": "Seoul National University",
		"location": "Seoul, South Korea",
		"degree": "Continuing Education - Study Abroad",
		"majors": "Korean Language Immersion Program",
		"dates": "May - Aug 2013",
		"url": "http://example.com"
	},
	{
		"name": "Franklin W. Olin College of Engineering",
		"location": "Needham, MA, US",
		"degree": "B.S.in Mechanical Engineering",
		"majors": "Mechanics, Mechanical Prototyping, Mechanics and Solids and Structures, Dynamics, Thermodynamics, Transport Phenomena, Mechanical Design, Failure Analysis of Materials, Material Science and Solid State Chemistry, Vector Calculus, Linear Algebra, Statistics, Differential Equations, Nonlinear Dynamics and Chaos, Microelectromechanical Systems, User Oriented Collaborative Design, Sustainable Design, Software Design, Software Engineering, Principles of Engineering, Modeling and Simulation of the Physical World, Modeling and Control of Spatially Distributed Systems, Senior Capstone, Foundations of Business and Entrepreneurship, Design Nature, Biology, Six Books that changed the World, Historical Science Fiction",
		"dates": "2009 - 2013",
		"url": "http://example.com"
	},
	{
		"name": "Wellesley College",
		"location": "Wellesley, MA, US",
		"degree": "Arts Concentration - Fulfilled B.S. requirements",
		"majors": "Writing Historical Fiction, Writing Short Narrative",
		"dates": "2013",
		"url": "http://example.com"
	},
	{
		"name": "National University of Singapore",
		"location": "Singapore, Singapore",
		"degree": "Study Abroad - Fulfilled B.S. requirements",
		"majors": "Human Factors in Engineering, Chinese, Engineering Economy",
		"dates": "2012",
		"url": "http://example.com"
	},
	{
		"name": "Univeristy of California, Berkely",
		"location": "Berkely, California",
		"degree": "Summer Semester",
		"majors": "Studio Art, African Hatian Dance",
		"dates": "June - Aug 2010",
		"url": "http://example.com"
	}
	],
	"onlineCourses": [
	{
		"title": "Online: Font End Web Development Nano-Degree",
		"school": "Udacity",
		"dates": "Nov 2015 - July 2016",
		"url": "http://example.com"
	},
	{
		"title": "Online: Financial Analysis and Decision Making",
		"school": "TsinghuaX - edx",
		"dates": "2015",
		"url": "http://example.com"
	},
	{
		"title": "Online: Developing International Software",
		"school": "Microsoft - edx",
		"dates": "2015",
		"url": "http://example.com"
	}
	]
}

 var projects = {
 	"projects": [
 	{
 		"title": "Writing Prompt Generator",
 		"dates": "Dec 2015",
 		"description": "The Writing Prompt Generator is a simple app that generates writing prompts for creative writers. During the development of this app I learned Visual Studio, the app development process, localization, and how to put an app in the Windows Store. ",
 		"url": "https://www.microsoft.com/en-us/store/apps/writing-prompt-generator/9nblggh5ww72",
 		"images": ["images/WPG.png", "images/WPG1.png"]
 	},
 	{
 		"title": "Portfolio Website: Udacity",
 		"dates": "Dec 2015",
 		"description": "Learned HTML, Javascript, and Bootstrap to create my own portfolio website.",
 		"url": "https://github.com/mdunn120/PortfolioBootstrap",
 		"images": ["images/PortfolioSite.png"]
 	},
 	{
 		"title": "Improving the Optimization Process of a Boeing 777 Thrust Reverser (Boeing)",
 		"dates": "Aug 2012 - May 2013",
 		"description": "Improved the Optimization Process of a Boeing 777 Thrust Reverser. The project was on knowledge based engineering design for propulsion system structures of aircraft. Worked on a collaborative team of 5 engineers. This was my capstone project for my B.S. degree.",
 		"url": "http://digitalcommons.olin.edu/scope_2013/10",
 		"images": ["images/BoeingScope.png"]
 	},
 	{
 		"title": "Preserve - Sustainable Engineering Company",
 		"dates": "Dec 2010",
 		"description": "Worked with Preserve, a sustainable manufacturing company to investigate calcium carbonate fillers for use in recycled polypropylene. Worked with a team of six to determine the material properties of the combined substance. Specifically, I developed guidelines and tested wear and degradation of the material. This was part of a Material Science Failure Analysis Class.",
 		"url": "https://www.dropbox.com/s/8ve03rklx8kb4in/PreserveFinalPaper3.pdf?dl=0",
 		"images": ["images/preserve.png"]
 	},
 	{
 		"title": "Safety Glasses Failure",
 		"dates": "Nov 2010",
 		"description": "Investigated the failure analysis of a pair of polycarbonate safety glasses. Used a scanning electron microscope to conduct fractographic analysis. Used Solidworks to conduct finite element anaylsis to confirm the locations of stress concentrations.",
 		"url": "https://www.dropbox.com/s/tdkgjn4rvsvu6u4/Safetyglasses_meryl_mariah.pdf?dl=0",
 		"images": ["images/glasses.jpg", "images/glasses1.jpg", "images/glasses4.png"]
 	},
 	{
 		"title": "Old Fashion Mechanical Movie Projector",
 		"dates": "Dec 2011",
 		"description": "Built a mechanical film projector out of recycled materials on a team of three mechanical engineers. The projector was 3D modeled in Solidworks and prototyped using a mill, lathe, welding and 3D printing.",
 		"url": "https://www.dropbox.com/s/7ek50v0qmlftecz/FinalFinalReport.pdf?dl=0",
 		"images": ["images/projector1.jpg","images/projector2.png"]
 	},
 	{
 		"title": "Robotic Arm Design",
 		"dates": "Nov 2011",
 		"description": "Independently designed and 3D modeled a robotic arm. Used Solidworks for the 3D model and ran finite element analysis on the main components. This was my final project for Mechanical Design.",
 		"url": "https://www.dropbox.com/s/u3sdf0ryucrgrda/ROBOTIC_ARM_MARIAH_DUNN.pdf?dl=0",
 		"images": ["images/roboticarm1.jpg", "images/roboticarm2.png", "images/roboticarm3.png", "images/roboticarm4.jpg", "images/roboticarm5.png", "images/roboticarm6.png", "images/roboticarm7.png"]
 	},
 	{
 		"title": "Animatronic Hermit Crab",
 		"dates": "April 2011",
 		"description": "Designed and built a robotic hermit crab. Used Solidworks for the 3D model and motion design. Prototyping was done with 3D printing and epoxy. Worked on a team with five engineers. One of the goals for this project was to 3D print the entire transmission in one piece.",
 		"url": "https://www.youtube.com/watch?v=J4XJ-ZQuR88",
 		"images": ["images/hermit.png", "images/hermit1.png", "images/hermit2.png", "images/hermit3.png"]
 	},
 	{
 		"title": "Animatronic Flamboyant Squid Worm",
 		"dates": "March 2011",
 		"description": "Designed and built a flamboyant squid worm, a type of sea creature. Used Solidworks for the 3D model and motion design. Prototyping was done with water jet printing of aluminum. Worked on a team of six engineers.",
 		"url": "https://www.dropbox.com/s/60fxex9km05gk5f/Mariah%20Dunn%20FSW.pdf?dl=0",
 		"images": ["images/fsw1.png", "images/fsw2.jpg", "images/fsw3.png", "images/fsw4.jpg", "images/fsw5.jpg", "images/fsw6.png"]
 	},
 	{
 		"title": "Animatronic Starfish Design",
 		"dates": "April 2011",
 		"description": "Designed and 3D modeled a starfish. Used Solidworks for the 3D model and motion design. Worked independently for a Mechanical Prototyping class.",
 		"url": "https://www.dropbox.com/s/48bm4f5u5rvrq5g/STARFISH_MARIAH.pdf?dl=0",
 		"images": ["images/starfish.png", "images/starfish1.jpg", "images/starfish2.png", "images/starfish3.jpg", "images/starfish4.png", "images/starfish5.jpg", "images/starfish6.png", "images/starfish7.png", "images/starfish8.png"]
 	},
 	{
 		"title": "3D Olin Logo Design",
 		"dates": "Feb 2011",
 		"description": "Designed and 3D modeled a 3D Olin logo. Used Solidworks for the 3D model. Worked independently for a Mechanical Prototyping class. ",
 		"url": "https://www.dropbox.com/s/kv6f3ygxdinpy8g/OLIN-Mariah.pdf?dl=0",
 		"images": ["images/olin1.png", "images/olin2.png", "images/olin3.png"]
 	},
 	{
 		"title": "Printer Battery Housing 3D Model",
 		"dates": "Feb 2011",
 		"description": "Took apart a printer and modelled the power supply box. This was a project for a Mechanical Prototyping class.",
 		"url": "https://www.dropbox.com/s/0yfsnd649dy7gm7/Mariah%20Dunn.pdf?dl=0",
 		"images": ["images/printer1.png", "images/printer2.png"]
 	},
 	{
 		"title": "Jigsaw Casing 3D Model",
 		"dates": "Oct 2012",
 		"description": "Took apart a hand saw and modelled the outer casing using surfaces in Solidworks. This was a project for a Mechanical Design class.",
 		"url": "https://www.dropbox.com/s/kuk84z1763u9or3/Jigsaw_Mariah_Report_1.pdf?dl=0",
 		"images": ["images/saw1.png", "images/saw2.png", "images/saw3.png", "images/saw4.png", "images/saw5.png", "images/saw6.png"]
 	},
 	{
 		"title": "Comparison of bridge trusses - Stress and Strain",
 		"dates": "April 2011",
 		"description": "Analyzed the stress and strain of different bridge trusses with different fixtures. Worked on a team of three engineers. I did the 3D model and Solidworks analysis. This was a project for a mechanical solids and structures class.",
 		"url": "https://www.dropbox.com/s/p1w96dnvxdg7fdf/CombinedFinalReport.pdf?dl=0",
 		"images": ["images/bridge1.png", "images/bridge2.png", "images/bridge3.png"]
 	},
 	{
 		"title": "Campo Del Cielo Iron Nickel Meteorite Research",
 		"dates": "March 2010 - May 2011",
 		"description": "Analyzed a Campo Del Cielo iron nickel meteorite on a team of 3 scientists. Examined the microstructure and the material properties using various types of microscopy, and hardness testers.",
 		"url": "",
 		"images": ["images/meteorite1.png", "images/meteorite2.png", "images/meteorite3.jpg", "images/meteorite4.png", "images/meteorite5.jpg", "images/meteorite6.png"]
 	},
 	 	{
 		"title": "MEMS Wankel Engine",
 		"dates": "April 2010",
 		"description": "Analyzed and 3D Modeled a microelectromechanical Wankel engine. Used Solidwalks for the 3D model and the motion design. This was part of a MEMS course.",
 		"url": "",
 		"images": ["images/wankel1.png", "images/wankel2.png"]
 	},
 	 	{
 		"title": "Water Piano",
 		"dates": "March 2012",
 		"description": "Designed, 3D modelled and build a piano using test tubes filled with water, servo motors and a python program. Worked on a team with one other person for a class called Principles of Engineering.",
 		"url": "https://www.dropbox.com/s/y1efwvcv3uii12w/POE_LAB3_Mariah_Shane1.pdf?dl=0",
 		"images": ["images/piano2.png", "images/piano3.png", "images/piano4.png"]
 	},
 	{
 		"title": "AutoShelf - Self Organizing Bookshelf",
 		"dates": "May 2012",
 		"description": "Designed, 3D modelled, prototyped, machined and build a three axis self-organizing bookshelf. Worked on a team of four engineering. I was the mechanical lead and did all of the 3D modelling, machining and building. This project was for a class called Principles of Engineering.",
 		"url": "",
 		"images": ["images/AS1.png", "images/AS3.png", "images/AS5.jpg", "images/AS7.jpg", "images/AS9.png"]
 	},
 	{
 		"title": "Space Heater Redesign",
 		"dates": "April 2013",
 		"description": "Analyzed the sustainability of space heaters and redesigned their usability. Interviewed space heater users and built usability frameworks as well as did a life cycle analysis on space heaters. Worked on a team of three engineers. This project was for a Sustainable Design class.",
 		"url": "",
 		"images": ["images/heater1.png", "images/heater2.png"]
 	},

 	 	{
 		"title": "Everpresent  - A locket designed for blind children and their parents",
 		"dates": "April 2011",
 		"description": "Studied care takers of blind children to learn about the problems they face. Designed a specialized locket that took into account senses other than site to allow parents and children to connect on a more personal level, addressed the problem that sometimes parents find it difficult to connect with their blind child. Worked on a team of four engineers. This class was for a user oriented centered design class.",
 		"url": "",
 		"images": ["images/ep1.png", "images/ep2.png", "images/ep3.jpg", "images/ep4.jpg", "images/ep5.jpg"]
 	}
 	]
 }

 var work = {
 	"jobs": [
 	{
 		"employer": "Microsoft",
 		"title": "Program Manager",
 		"dates": "Aug 2013 - Current",
 		"description": "Currently work on the XAML (eXtensible Application Markup Language) Universal App Platform for Windows. XAML is the UI framework used to build the Windows shell as well as 1st and 3rd party applications, such as Office. I own the text and media feature areas. As the feature owner I write the technical specifications for new features and APIs in these areas. My features range from APIs to better handle East Asian languages to performance and security. I also collect, organize and prioritized new feature requests. I work on a large collaborative team of software developers, testers, designers, and managers to create new XAML features. I am the geopolitical and world readiness driver for my team. I have recently started working on accessibility features as well.",
 		"location" : "Redmond, Washington"
 	},
 	{
 		"employer": "Microsoft",
 		"title": "Program Manager Intern",
 		"dates": "May 2012 - Aug 2012",
 		"description": "Worked as a Program Manager on the Windows XAML team. Developed and wrote functional specs for controls, and used XAML and C# to develop new APIs.",
 		"location" : "Redmond, Washington"
 	},
 	{
 		"employer": "Naval Research Labs",
 		"title": "Mechanical Engineering Intern",
 		"dates": "May 2011 - Aug 2011",
 		"description": "Worked on three satellite programs. Designed, 3D modeled, and machined a mechanical tension indicator that was space and vacuum rated. Wrote two Labview executable programs, which integrated multiple sensors through Data Acquisition.",
 		"location" : "Washington DC"
 	},
 	 	{
 		"employer": "Frankin W. Olin College of Engineering",
 		"title": "Tutor",
 		"dates": "Aug 2010 - Dec 2010",
 		"description": "Taught 3D modeling in Solidworks and basic machining and prototyping of mechanical parts.",
 		"location" : "Needhan, Massachussetts"
 	},
 	 	 	{
 		"employer": "Gloucester Engineering",
 		"title": "Mechanical Engineering Intern",
 		"dates": "June 2009 - Aug 2009",
 		"description": "Computerized sophisticated machine parts into SolidWorks. Learned about the plastic making process. Worked independently.",
 		"location" : "Gloucester, Massachussetts"
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
 	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
 	var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
 	$(".education-entry:last").append(formattedTitleSchool);
 	var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
	$(".education-entry:last").append(formattedOnlineDate);
 	
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
		//var formattedProjectURL = HTMLprojectURL.replace("%data%", projects.projects[project].url);
		//$(".project-entry:last").append(formattedProjectURL);
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
			}
		}
		
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


