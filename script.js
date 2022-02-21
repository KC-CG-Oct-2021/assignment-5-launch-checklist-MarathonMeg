// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planetVar = pickPlanet(listedPlanets);
      console.log(planetVar);

      addDestinationInfo(
        document,
        planetVar.name,
        planetVar.diameter,
        planetVar.star,
        planetVar.distance,
        planetVar.moons,
        planetVar.image
      );
    });

  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // stop the form from refreshing and submission
    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]");
    let coPilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let faultyItemList = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    //pass in arguements with variable names I declared
    formSubmission(
      document,
      faultyItemList,
      pilotName.value,
      coPilotName.value,
      fuelLevel.value,
      cargoMass.value
    );
  });
});
