(function(window, undefined) {
  var dictionary = {
    "ac2d2f49-e520-41d8-b8ef-36fb596dfd51": "Donor Organs Screen",
    "082f1768-7354-403c-9a02-e9bb8fcde90e": "Donar Details",
    "3acdbdd2-23ae-4dbc-97f3-61bfb08699fa": "Why Donate Organ Screen",
    "7b0bdd3a-e9c0-4e0d-a7c3-cd8edb5e5962": "Hospital Tips",
    "8ce63004-c2d1-4af8-b1c9-6cb231bb4ee2": "Hospital Login Screen",
    "2605cfe0-cb4b-43cf-874c-1a33e675adbe": "Donor Login Screen",
    "5b315b82-8340-4c8a-9dd1-f97ff6d388ac": "Hospital Landing Page",
    "77cb4a60-17f7-43f3-a662-e2fdb7b3c973": "Donor Address Screen",
    "4bb0a649-0b08-448b-8878-a61542b49282": "Donor Sign Up Screen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Screen",
    "f38da27a-5d3a-463a-8eb0-d7cd3f77c9bf": "Hospital Location Screen",
    "f63bf967-ca39-478e-990f-7640a4b9a10d": "Donar Account Screen",
    "8ecd44d5-bbc0-435b-8bcf-bdbbbc1b78ab": "Health&Fitness",
    "3ba22081-31ed-4a2e-9d0e-7fafbcdee686": "Account Personal Details Screen",
    "35dd1379-9899-4ecc-ab64-007e308001fb": "Hospital Filter Option",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);