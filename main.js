// let name = document.location.pathname.slice(1);
if (!name) {
  console.log("no place name specfied");
} else {
  console.log("fetching place named '" + name + "'");

  fetch(name + ".json")
    .then(function(response) {
      return response.text();
    })
    .then(function(myText) {
      console.log(myText);
    });
}

function getRestaurantNames() {
  fetch("all.json")
    .then(response => response.json())
    .then(object => {
      console.log(object)
    });
};

getRestaurantNames();

function getWebsite(address) {
  // fetch(name + ".json");
}

let getLatLong = function(address) {
  fetch(`https://nominatim.openstreetmap.org/search/?q=${address}&format=json`) // fetching address from nominatim
    .then(function(response) {
     console.log("hey hey hey")
      // response converts the fetched address to .json
      return response.json();
    })
    .then(function(squag) {
      let lat = squag[0].lat;
      let lon = squag[0].lon;
      return [lat, lon];
      // console.log(getLatLong("131 Crescent St. Rutland, VT"))
    }) // squag returns the latitude + longitude from the .json array
    .then(function(squagArray) {
      L.marker(squagArray)
        .addTo(map)
        .on("click", () => {
          console.log("got it baby");
        });
    });
};

getLatLong("182 Main Street Burlington, VT");
getLatLong("163 Main St. Burlington, VT"); // Ahli Baba's
getLatLong("115 St Paul St, Burlington, VT 05401"); // American Flatbread
getLatLong("115 St. Paul St. Burlington, VT 05401"); // August First
getLatLong("82 S Winooski Ave. Burlington, VT 05401"); // City Market
getLatLong("189 Bank St. Burlington, VT 05401"); // El Cortijo
getLatLong("160 Bank St. Burlington, VT 05401"); // Farmhouse Bar and Grill
getLatLong("55 Cherry St, Burlington, VT 05401"); // Hen of the Wood
getLatLong("156 Church Street"); // Honey Road
getLatLong("155 Main St. Burlington, VT 05401"); // Kountry Kart Deli
getLatLong("206 Main St. Burlington, VT 05401"); // Mr. Mikes
getLatLong("155 Main St. Burlington, VT 05401"); // Ristorante

// fetch('/all.json')
// .then(
//   forEach
// )

//fetch all.json
//iterates over array --> forEach
//fetches with each array the specific .json file
//pull target

var map = L.map("map").setView([44.4759, -73.2121], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// var marker = L.marker([])
//   .addTo(map)
//   // .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//   .openPopup();
