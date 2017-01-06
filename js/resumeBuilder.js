// JSON Data for personal information
var bio ={
    "name" : "Jason Morrissette",
    "role" : "Full Stack Developer",
    "contacts" :{
        "mobile": "360-908-2144",
        "email": "j.morrissette@jamdevs.com",
        "github" :"https://github.com/jmorr132",
        "linkedin":"https://www.linkedin.com/in/jasonmorrissette",
        "hackerrank": "https://www.hackerrank.com/j_morrissette",
        "location":"Seattle, Wa"
    },
    "welcomeMessage": "its a small world afterall",
    "skills":["Python","CSS","HTML","Javascript"],
    "display": ''
};

var education={
    "schools":[
    {
        "name": "Western Governours University",
        "years": "2015-present",
        "location": "Washington",
        "major":"Software Developement",
        "degree":"BA"
    },
    {
        "name": "Udacity",
        "years": "2016",
        "major": "Computer Science",
        "degree": "Full Stack Developer NanoDegree"
    }
    ]
};


// JSON data for Jobs worked.
var work = {
    'jobs':[
    {
        "employer":"North Kitsap School District",
        "title":"Systems Administrator",
        "location": "Poulsbo, Wa",
        "dates":"2015-Present",
        "description":"Wrote and edited Scripts to allow teachers to reset passwords\
                       for students Configured, Deployed and Managed File and Print\
                       servers I alson, Headed Up Tech Committee to discuss technology\
                       and how it can be implemented with Teachers and Staff."
    },
    {
        "employer": "Poulsbo Middle School",
        "title":"Coding Club Advisor",
        "location": "Poulsbo Wa",
        "dates": "2016-Preset",
        "description":" Club Dedicated to teaching children computer science fundamentals.\
                    	Used Programs like Scratch, hour of code and code combat for hands on learning\
                        Built a small game in Unity3D game engine"
    

}],
    "display":''
};
var projects={

    "name":"Trash for Cash",
    "description": "Application that allows users to post items for sale login was handled with oauth such as goole+ and facebook.",
    "display":''
};
// Displays Biography information provided by the JSON data

bio.display = function(){
    $('#header').prepend(
        HTMLheaderName.replace('%data%', bio.name),
        HTMLheaderRole.replace('%data%', bio.role)
    );

    $('#headerInfo').append(
        HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
        HTMLskillsStart
    );

    for(var skill =0; skill < bio.skills.length; skill++){
        $('#skills').append(
            HTMLskills.replace('%data%', bio.skills[skill])
        );
      }
    $('#topContacts').append(
        HTMLlocation.replace("%data%", bio.contacts.location),
        HTMLmobile.replace('%data%', bio.contacts.mobile),
        HTMLemail.replace('%data%', bio.contacts.email),
        HTMLgithub.replace('%data%', bio.contacts.github),
        HTMLlinkedin.replace("%data%", bio.contacts.linkedin), 
        HTMLhackerrank.replace("%data%", bio.contacts.hackerrank)  
        );
}

// Displays Work history provided by the JSON data
work.display = function(){
    for (var job =0; job < work.jobs.length; job++){
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(
            HTMLworkEmployer.replace('%data%', work.jobs[job].employer).replace('#', work.jobs[job].url)+
            HTMLworkTitle.replace("%data%", work.jobs[job].title),
            HTMLworkLocation.replace("%data%", work.jobs[job].location),
            HTMLworkDates.replace("%data%", work.jobs[job].dates),
            HTMLworkDescription.replace("%data%", work.jobs[job].description)
        );
    }
};

function displayMap(){
    $("#mapDiv").append(googleMap);
}


work.display();
bio.display();
displayMap();



