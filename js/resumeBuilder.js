var bio ={
    "name" : "Jason Morrissette",
    "role" : "Full Stack Developer",
    "contacts" :{
        "mobile": "360-908-2144",
        "email": "j.morrissette@jamdevs.com",
        "github" :"https://github.com/jmorr132",
        "location":"Seattle, Wa"
    },
    "welcomeMessage": "its a small world afterall",
    "skills":["Python","CSS","HTML","Javascript"]
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
        "degree": "Full Stack Developer Nano Degree"
    }
    ]
};
var work = {
    'jobs':[
    {
        "employer":"North Kitsap School District",
        "title":"Systems Administrator",
        "location": "Poulsbo, Wa",
        "dates":"current",
        "description":"will fill this out"
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
};

function displayWork(){
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

displayWork();




