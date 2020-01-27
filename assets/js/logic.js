var projects = [
    {
        name: "Flub",
        info: "Simplistic site built for clients in the band Flub!  Full stack app utilizing Firebase and emailJS. Sole Developer.",
        githubRepo: "https://github.com/connorbreault/Flub",
        liveSite: "https://flubmusic.com/",
        image: "./assets/images/Flub.png"
    },
    {
        name: "Chracacter test",
        info: "Which Bobs Burgers character are you?  Take this short quiz to find out!  Full stack app deployed through Heroku. Sole Developer.",
        githubRepo: "https://github.com/connorbreault/Friend-Finder",
        liveSite: "https://friend-finder-breault.herokuapp.com/",
        image: "./assets/images/Friend-finder.png"
    },
    {
        name: "Burger app",
        info: "Full stack app using mySQL and deployed through Heroku. Sole Developer.",
        githubRepo: "https://github.com/connorbreault/burger",
        liveSite: "https://nameless-mesa-44263.herokuapp.com/",
        image: "./assets/images/Burger.png"
    },
    {
        name: "Trivia",
        info: "Fallout based trivia game!  Currently deployed through Github.",
        githubRepo: "https://github.com/connorbreault/TriviaGame",
        liveSite: "https://connorbreault.github.io/TriviaGame/",
        image: "./assets/images/Trivia.png"
    },
    {
        name: "GifTastic",
        info: "Gif search site!  Currently deployed through Github.",
        githubRepo: "https://github.com/connorbreault/GifTastic",
        liveSite: "https://connorbreault.github.io/GifTastic/",
        image: "./assets/images/Gif.png"
    },
    {
        name: "Crystal Collector",
        info: "Math based memory game!  Currently deployed through Github.",
        githubRepo: "https://github.com/connorbreault/Crystal-Collector",
        liveSite: "https://connorbreault.github.io/Crystal-Collector/",
        image: "./assets/images/Crystal.png"
    },
    {
        name: "Excursion",
        info: "Faux Travel budget app,  group project 1.  Co-lead developer of a group of 4. I created the entire visual layout.  Currently deployed through Github.",
        githubRepo: "https://github.com/connorbreault/Excursion",
        liveSite: "https://connorbreault.github.io/Excursion/",
        image: "./assets/images/Excursion.png"
    },
    {
        name: "BanderRip",
        info: "Choose your own path game, group project 2. Lead Developer of a group of 5. I set up the back end and created the entire front end design and logic.  Deployed through Heroku.",
        githubRepo: "https://github.com/connorbreault/bandersnatch",
        liveSite: "https://fast-hollows-27557.herokuapp.com/home",
        image: "./assets/images/Bandersnatch.png"
    },
    {
        name: "WeHarmony",
        info: "Find local musicians, group project 3.  Lead Developer of a group of 2.  I set up the database, all API calls, and created the entire front end.  Deployed through Heroku.",
        githubRepo: "https://github.com/connorbreault/WeHarmonyPrototype",
        liveSite: "https://weharmonyprototype.herokuapp.com/",
        image: "./assets/images/WeHarmony.png"
    },
]

$(document).ready(function () {
    M.AutoInit();
});
function js_Load() {
    document.body.style.visibility = 'visible'
}

// === RENDER PROJECTS === //
for (let i = 0; i < projects.length; i++) {
    let newCard = (` <div class="card"><div class="card-image waves-effect waves-block waves-light"><img src=${projects[i].image} class="activator cardImg"></div><div class="card-content activator"><span class="card-title activator grey-text text-darken-4">${projects[i].name}<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title cyan-text text-darken-2">${projects[i].name}<i class="material-icons right">close</i></span><div class="cardInfo text-darken-1"><p>${projects[i].info}</p></div></div><div class="card-action gray"><a href=${projects[i].githubRepo} class="cardLinks cyan-text" target=" _blank">Github Repo</a><a href=${projects[i].liveSite} class="cardLinks cyan-text" target=" _blank">Live Site</a></div></div> `)
    $(".projectDiv").append(newCard)
}

// === CONTACT ME FORM === //
$("#submitMessageButton").on("click", function () {
    var messageName = $("#icon_prefix").val().trim()
    var messageNumber = $("#icon_telephone").val().trim()
    var messageEmail = $("#icon_email").val().trim()
    var messageMessage = $(".messageMessage").val().trim()
    var prefMethod = $("input[name=group1]:checked").next().text()
    if (messageName === "" || messageNumber === "" || messageEmail === "" || messageMessage === "") {
        alert("Please fill out all contact information!")
    } else {
        $("#icon_prefix").val("")
        $("#icon_telephone").val("")
        $("#icon_email").val("")
        $(".messageMessage").val("")
        $(".contactDiv").addClass("hidden")
        $(".myContact").addClass("hidden")
        $(".loadingGif").removeClass("hidden")
        let templateParams = {
            name: messageName,
            number: messageNumber,
            email: messageEmail,
            method: prefMethod,
            message: messageMessage,
        }
        emailjs.send('default_service', 'template_5MmNhXRS', templateParams)
            .then(function (response) {
                console.log('Sucessful message send!')
                $(".loadingGif").addClass("hidden")
                $("#thanksMessage").removeClass("hidden")
            }, function (error) {
                console.log('FAILED...', error)
                $(".loadingGif").addClass("hidden")
                $("#errorMessage").removeClass("hidden")
            });
    }
})