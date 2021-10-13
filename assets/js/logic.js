const imgRoute = "./assets/images/projects";
var projects = [
  {
    name: "Record Label",
    info: "Record label site built for clients Dead Life Records.  Full stack app utilizing AMP, mongoDB, and emailJS.  Storefront developed using shopify. Sole Developer and Designer.",
    githubRepo: "https://github.com/connorbreault/DeadLifeRecords",
    liveSite: "https://deadliferecords.com/",
    image: `${imgRoute}/DeadLife.png`,
  },
  {
    name: "WA Clone",
    info: "Look-a-like prototype app of WhatsApp.  Full stack messenger app utilizing React Native, Expo, and AWS.",
    githubRepo: "https://github.com/connorbreault/DeadLifeRecords",
    image: `${imgRoute}/WhatsApp.png`,
  },
  {
    name: "Flub",
    info: "Simple site built for clients in the band 'Flub'.  App utilizing Firebase and emailJS. Sole Developer.",
    githubRepo: "https://github.com/connorbreault/Flub",
    liveSite: "https://flubmusic.com/",
    image: `${imgRoute}/Flub.png`,
  },
  {
    name: "TechSite",
    info: "Simple prototype website for a tech website. Utilizes Materialize, jQuery, and customized LottieFiles",
    githubRepo: "https://github.com/connorbreault/TechSitePrototype",
    liveSite: "https://connorbreault.github.io/TechSitePrototype/",
    image: `${imgRoute}/TechSite.png`,
  },
  {
    name: "WeHarmonyApp",
    info: "Front end prototype app for musicians. Utilizes React Native, Expo, and customized LottieFiles",
    githubRepo: "https://github.com/connorbreault/WeHarmony",
    image: `${imgRoute}/WeHarmonyApp.png`,
  },
  {
    name: "DoneWithIt",
    info: "Simple front end prototype app I built following the Coding With Mosh course. Utilizes React Native, Expo, and customized LottieFiles",
    githubRepo: "https://github.com/connorbreault/DoneWithIt",
    image: `${imgRoute}/DoneWithIt.png`,
  },
  {
    name: "BB quiz",
    info: "Which Bobs Burgers character are you?  Take this short quiz to find out!  Full stack app deployed through Heroku. Sole Developer.",
    githubRepo: "https://github.com/connorbreault/Friend-Finder",
    liveSite: "https://friend-finder-breault.herokuapp.com/",
    image: `${imgRoute}/Friend-finder.png`,
  },
  {
    name: "Burger app",
    info: "Full stack app using mySQL and deployed through Heroku. Sole Developer.",
    githubRepo: "https://github.com/connorbreault/burger",
    liveSite: "https://nameless-mesa-44263.herokuapp.com/",
    image: `${imgRoute}/Burger.png`,
  },
  {
    name: "Trivia",
    info: "Fallout based trivia game, currently deployed through Github.",
    githubRepo: "https://github.com/connorbreault/TriviaGame",
    liveSite: "https://connorbreault.github.io/TriviaGame/",
    image: `${imgRoute}/Trivia.png`,
  },
  {
    name: "Collector",
    info: "Math based memory game, currently deployed through Github.",
    githubRepo: "https://github.com/connorbreault/Crystal-Collector",
    liveSite: "https://connorbreault.github.io/Crystal-Collector/",
    image: `${imgRoute}/Crystal.png`,
  },
  {
    name: "Excursion",
    info: "Travel budget app prototype, group project 1 from the UC Davis Bootcamp.  Front-End developer. Currently deployed through Github.",
    githubRepo: "https://github.com/connorbreault/Excursion",
    liveSite: "https://connorbreault.github.io/Excursion/",
    image: `${imgRoute}/Excursion.png`,
  },
  {
    name: "WeHarmony",
    info: "Musician geolocation app prototype, group project 3 from the UC Davis Bootcamp.  Lead Developer. Deployed through Heroku.",
    githubRepo: "https://github.com/connorbreault/WeHarmonyPrototype",
    liveSite: "https://weharmonyprototype.herokuapp.com/",
    image: `${imgRoute}/WeHarmony.png`,
  },
];

// === ON LOAD FUNCTIONS === //
$(document).ready(function () {
  M.AutoInit();
  setTimeout(slideUp, 1000);
});

function js_Load() {
  $(".imgDiv").addClass("fade");
  document.body.style.visibility = "visible";
  renderProjects();
}

function slideUp() {
  $(".contentDiv").addClass("fade");
  $(".contentDiv").addClass("slideUp");
  $(".contentDiv").removeClass("hidden");
}

function renderProjects() {
  // === RENDER PROJECTS === //
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].liveSite) {
      let newCard = `
  <div class="card white-text col s12 l6" style="background: rgba(200, 200, 200, 0.5); border-radius: 15px;">
    <div class="card-image waves-effect waves-block waves-light">
        <img src=${projects[i].image} class="activator cardImg" style="height: 200px">
    </div>
    <div class="card-content activator" style="padding: 15px;">
      <span class="card-title activator amber-text text-lighten-3">${projects[i].name}
        <i class="material-icons right">more_vert</i>
      </span>
    </div>
    <div class="card-reveal" style="background: rgba(200, 200, 200, 0.9)">
      <span class="card-title black-text" style="font-family: 'Jura', sans-serif;">${projects[i].name}
        <i class="material-icons right black-text">close</i>
      </span>
      <div class="cardInfo">
        <p class="black-text">${projects[i].info}</p>
      </div>
    </div>
    <div class="card-action center-align" style="background: transparent; padding: 10px 0px">
      <a href=${projects[i].githubRepo} class="cardLinks white-text" target=" _blank" style="margin: 15px">Github</a>
      <a href=${projects[i].liveSite} class="cardLinks white-text" target=" _blank" style="margin: 15px;">Live Site</a>
    </div>
  </div>
  `;
      $(".projectDiv").append(newCard);
    } else {
      let newCard = `
      <div class="card white-text col s12 l6" style="background: rgba(200, 200, 200, 0.5); border-radius: 15px;">
        <div class="card-image waves-effect waves-block waves-light">
            <img src=${projects[i].image} class="activator cardImg" style="height: 200px">
        </div>
        <div class="card-content activator" style="padding: 15px;">
          <span class="card-title activator amber-text text-lighten-3">${projects[i].name}
            <i class="material-icons right">more_vert</i>
          </span>
        </div>
        <div class="card-reveal" style="background: rgba(200, 200, 200, 0.9)">
          <span class="card-title black-text" style="font-family: 'Jura', sans-serif;">${projects[i].name}
            <i class="material-icons right black-text">close</i>
          </span>
          <div class="cardInfo">
            <p class="black-text">${projects[i].info}</p>
          </div>
        </div>
        <div class="card-action center-align" style="background: transparent; padding: 10px 0px">
          <a href=${projects[i].githubRepo} class="cardLinks white-text" target=" _blank" style="margin: 15px">Github</a>
        </div>
      </div>
      `;
      $(".projectDiv").append(newCard);
    }
  }
}

// === CONTACT ME FORM === //
$("#submitMessageButton").on("click", function () {
  // === GATHER INPUT VALUES === //
  var messageName = $("#name").val().trim();
  var messageEmail = $("#email").val().trim();
  var messageMessage = $("#message").val().trim();
  let templateParams = {
    name: messageName,
    email: messageEmail,
    message: messageMessage,
  };

  if (messageName === "" || messageEmail === "" || messageMessage === "") {
    // === IF INPUTS ARE INVALID === //
    alert("Please fill out all contact information!");
  } else {
    // === IF INPUTS ARE VALID === //
    $(".contactDiv").addClass("hidden");
    $(".loadingGif").removeClass("hidden");
    emailjs.send("default_service", "template_5MmNhXRS", templateParams).then(
      // === IF SEND SUCCESS === //
      function (response) {
        console.log("Sucessful message send!");
        $(".loadingGif").addClass("hidden");
        $("#thanksMessage").removeClass("hidden");
      },

      // === IF SEND ERROR === //
      function (error) {
        console.log("FAILED...", error);
        $(".loadingGif").addClass("hidden");
        $("#errorMessage").removeClass("hidden");
      }
    );
    // === CLEAR INPUTS WHEN DONE === //
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  }
});
