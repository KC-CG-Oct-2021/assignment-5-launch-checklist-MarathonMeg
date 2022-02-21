// Write your helper functions here!

require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  let missionTarget = document.querySelector("#missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
          <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
           <li>Number of Moons: ${moons}</li>
          </ol>
          <img src="${imageUrl}">`;
}
//addDestinationInfo(pickPlanets(planets));

function validateInput(testInput) {
  //validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
  if (testInput === "") {
    return "Empty";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  } else if (typeof String(testInput) === "string") {
    return "Not a Number";
  }
}

//you will use validateInput() to complete the formSubmission() function.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //console.log("formSubmission");
  //if any of these input variables is blank, throw and alert
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required!");
  }
  //Pilot and CoPilot Names should be a String, and Fuel Level and Cargo Mass should be a Number
  if (
    validateInput(pilot) !== "Not a Number" ||
    validateInput(copilot) !== "Not a Number" ||
    validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoLevel) !== "Is a Number"
  ) {
    //alert the user
    alert("Enter text for names and numbers for fuel and cargo levels");
  }
  //if Fuel and Cargo are in good range, then it meets all the requirements, set the InnerHTML to say its ready to launch - show the list as visible before all the checks

  if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    // make faulty items list visible.
    list.style.visibility = "visible";
    //If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
    let launchStatus = document.getElementById("launchStatus");
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";

    //tell it what to show for the list items
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot, ${pilot}, is Ready for Launch`;

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `CoPilot, ${copilot}, is Ready for Launch`;

    let fuelStatus = document.getElementById("fuelStatus");
    fuelStatus.innerHTML = "Fuel level high enough for launch";

    let cargoStatus = document.getElementById("cargoStatus");
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    //test if both fuel and cargo are out of required bounds
  } else if (fuelLevel <= 10000 && cargoLevel >= 10000) {
    list.style.visibility = "visible";

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot, ${pilot}, is Ready for Launch`;

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `CoPilot, ${copilot}, is Ready for Launch`;

    let fuelStatus = document.getElementById("fuelStatus");
    fuelStatus.innerHTML = "There is not enough fuel for the journey";

    let cargoStatus = document.getElementById("cargoStatus");
    cargoStatus.innerHTML =
      "There is too much mass for the shuttle to take off";
    //change h2 element
    let launchStatus = document.getElementById("launchStatus");
    launchStatus.innerHTML = "Shuttle not ready for launch";
    //color change to red
    launchStatus.style.color = "red";
    //will get to here if only one fuel or mass is out of bounds, if fuel is what it out of bounds it will stop after fuel, if cargo mass is what is out of bounds it will continue.
  } else if (fuelLevel < 10000) {
    //change faultyItems to visible with an updated fuel status.
    list.style.visibility = "visible";

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot, ${pilot}, is Ready for Launch`;

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `CoPilot, ${copilot}, is Ready for Launch`;

    let fuelStatus = document.getElementById("fuelStatus");
    fuelStatus.innerHTML = "There is not enough fuel for the journey";

    let cargoStatus = document.getElementById("cargoStatus");
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    //change h2 element
    let launchStatus = document.getElementById("launchStatus");
    launchStatus.innerHTML = "Shuttle not ready for launch";
    //color change to red
    launchStatus.style.color = "red";
    //code will continue to here, if cargo mass is the item that is out of bounds
  } else if (cargoLevel > 10000) {
    //change the list to visible with an updated cargo status.
    list.style.visibility = "visible";

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot, ${pilot}, is Ready for Launch`;

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `CoPilot, ${copilot}, is Ready for Launch`;

    let fuelStatus = document.getElementById("fuelStatus");
    fuelStatus.innerHTML = "Fuel level high enough for launch";

    let cargoStatus = document.getElementById("cargoStatus");
    cargoStatus.innerHTML =
      "There is too much mass for the shuttle to take off";
    //change h2 element
    let launchStatus = document.getElementById("launchStatus");
    launchStatus.innerHTML = "Shuttle not ready for launch";
    //color change to red
    launchStatus.style.color = "red";
  }
}

async function myFetch() {
  let planetsReturned;

  //you need to add the URL and return response.json().
  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json().then(function (json) {
      console.log(json);
      return json;
    });
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  console.log(planets);
  //Using Math.random(), return one planet from the list with a randomly-selected index.
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
