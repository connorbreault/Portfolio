const imgRoute = "./assets/images/projects";
var projects = [
  {
    name: "Record Label",
    info:
      "Label site built for clients Dead Life Records!  Full stack app utilizing AMP, mongoDB, and emailJS.  Storefront developed using shopify. Sole Developer and Designer.",
    githubRepo: "https://github.com/connorbreault/DeadLifeRecords",
    liveSite: "https://deadliferecords.com/",
    image: `${imgRoute}/DeadLife.png`,
  },
  {
    name: "Flub",
    info:
      "Simplistic site built for clients in the band Flub!  Full stack app utilizing Firebase and emailJS. Sole Developer.",
    githubRepo: "https://github.com/connorbreault/Flub",
    liveSite: "https://flubmusic.com/",
    image: `${imgRoute}/Flub.png`,
  },
  {
    name: "BB quiz",
    info:
      "Which Bobs Burgers character are you?  Take this short quiz to find out!  Full stack app deployed through Heroku. Sole Developer.",
    githubRepo: "https://github.com/connorbreault/Friend-Finder",
    liveSite: "https://friend-finder-breault.herokuapp.com/",
    image: `${imgRoute}/Friend-finder.png`,
  },
  {
    name: "Burger app",
    info:
      "Full stack app using mySQL and deployed through Heroku. Sole Developer.",
    githubRepo: "https://github.com/connorbreault/burger",
    liveSite: "https://nameless-mesa-44263.herokuapp.com/",
    image: `${imgRoute}/Burger.png`,
  },
  {
    name: "Trivia",
    info: "Fallout based trivia game!  Currently deployed through Github.",
    githubRepo: "https://github.com/connorbreault/TriviaGame",
    liveSite: "https://connorbreault.github.io/TriviaGame/",
    image: `${imgRoute}/Trivia.png`,
  },

  {
    name: "Collector",
    info: "Math based memory game!  Currently deployed through Github.",
    githubRepo: "https://github.com/connorbreault/Crystal-Collector",
    liveSite: "https://connorbreault.github.io/Crystal-Collector/",
    image: `${imgRoute}/Crystal.png`,
  },
  {
    name: "Excursion",
    info:
      "Faux Travel budget app,  group project 1.  Co-lead developer of a group of 4. I created the entire visual layout.  Currently deployed through Github.",
    githubRepo: "https://github.com/connorbreault/Excursion",
    liveSite: "https://connorbreault.github.io/Excursion/",
    image: `${imgRoute}/Excursion.png`,
  },
  {
    name: "WeHarmony",
    info:
      "Find local musicians, group project 3.  Lead Developer of a group of 2.  I set up the database, all API calls, and created the entire front end.  Deployed through Heroku.",
    githubRepo: "https://github.com/connorbreault/WeHarmonyPrototype",
    liveSite: "https://weharmonyprototype.herokuapp.com/",
    image: `${imgRoute}/WeHarmony.png`,
  },
];

// === ON LOAD FUNCTIONS === //
$(document).ready(function () {
  M.AutoInit();
  $(".imgContainer").addClass("fade");
  $(".cardContainer").addClass("fade");
  setTimeout(slideUp, 1000);
});

function js_Load() {
  document.body.style.visibility = "visible";
}

function slideUp() {
  $(".cardContainer").addClass("slideUp");
  $(".cardContainer").removeClass("hidden");
  // renderProjects();
}

function renderProjects() {
  // === RENDER PROJECTS === //
  for (let i = 0; i < projects.length; i++) {
    let newCard = `
  <div class="card white-text col s12 l6" style="background: rgba(200, 200, 200, 0.5); border-radius: 15px;">
    <div class="card-image waves-effect waves-block waves-light">
        <img src=${projects[i].image} class="activator cardImg" style="height: 200px">
    </div>
    <div class="card-content activator" style="padding: 15px;">
      <span class="card-title activator white-text">${projects[i].name}
        <i class="material-icons right">more_vert</i>
      </span>
    </div>
    <div class="card-reveal" style="background: rgba(200, 200, 200, 0.9)">
      <span class="card-title text-darken-2" style="font-family: 'Jura', sans-serif;">${projects[i].name}
        <i class="material-icons right">close</i>
      </span>
      <div class="cardInfo">
        <p>${projects[i].info}</p>
      </div>
    </div>
    <div class="card-action center-align" style="background: transparent; padding: 10px 0px">
      <a href=${projects[i].githubRepo} class="cardLinks white-text" target=" _blank" style="margin: 15px">Github</a>
      <a href=${projects[i].liveSite} class="cardLinks white-text" target=" _blank" style="margin: 15px;">Live Site</a>
    </div>
  </div>
  `;
    $(".projectDiv").append(newCard);
  }
}

// === CONTACT ME FORM === //
$("#submitMessageButton").on("click", function () {
  var messageName = $("#name").val().trim();
  var messageEmail = $("#email").val().trim();
  var messageMessage = $("#message").val().trim();
  if (messageName === "" || messageEmail === "" || messageMessage === "") {
    alert("Please fill out all contact information!");
  } else {
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    $(".contactContainer").addClass("hidden");
    $(".loadingGif").removeClass("hidden");
    let templateParams = {
      name: messageName,
      email: messageEmail,
      message: messageMessage,
    };
    emailjs.send("default_service", "template_5MmNhXRS", templateParams).then(
      function (response) {
        console.log("Sucessful message send!");
        $(".loadingGif").addClass("hidden");
        $("#thanksMessage").removeClass("hidden");
      },
      function (error) {
        console.log("FAILED...", error);
        $(".loadingGif").addClass("hidden");
        $("#errorMessage").removeClass("hidden");
      }
    );
  }
});
