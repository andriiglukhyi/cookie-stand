'use strict';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}


var hours = ['6am', '7am', '8am', '9am', '9am', '10am', '11am','12pm','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',]
var store = document.getElementById('store_form');
var table = document.getElementById('store');


var allStores = []
//constractor

var Stores = function( storeName, minCust, maxCust, avgCookies) {
  this.Name = storeName;
  this.mnCust = minCust;
  this.mxCust = maxCust;
  this.avCookies = avgCookies;
  this.custsEachHour = [];
  this.cookieEachHour = [];
  this.total = 0;
  this.rundNumCust = function() {
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.mnCust, this.mxCust));
    }
  };
  this.countCookieEachHour = function() {
    this.rundNumCust();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avCookies);
      this.cookieEachHour.push(oneHour);
      this.total +=oneHour;
    }
  };

  allStores.push(this);

  this.render = function(){
    this.rundNumCust();
    this.countCookieEachHour();

    var row = document.createElement('tr');
    var col = document.createElement('td');

    col.textContent = this.Name;
    row.appendChild(col);

    for(var i=0; i<hours.length; i++) {
      col = document.createElement('td');
      col.textContent = this.cookieEachHour[i];
      row.appendChild(col);
    }

    col = document.createElement('td');
    col.textContent = this.total;
    row.appendChild(col);

    store.appendChild(row);
};
}
new Stores('1st and pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitoll Hill', 20, 38, 2.3);
new Stores('Alki', 2, 16, 4.6);

////////////////////////////////////////////////////////////////




function makeHeaderRow() {
  // create tr
  var row = document.createElement('tr');
  // create th
  var col = document.createElement('th');
  // give th content (Name for an individual cat)
  col.textContent = 'Stores';
  // append the th
  row.appendChild(col);


  for(var i=0; i<hours.length; i++) {
    col = document.createElement('th');
    col.textContent = hours[i];
    row.appendChild(col);
  }
  col = document.createElement('th');

  col.textContent = 'Total';

  row.appendChild(col);
  store.appendChild(row);
}

function renderStore(){
  for(var i = 0; i < allStores.length; i++){

    allStores[i].render();
  }
}


function formData(event) {
  event.preventDefault();

var name = event.target.storeName.value;
var maxC = event.target.maxCust.value;
var minC = event.target.minCust.value;
var avgC = event.target.avgCookies.value;
allStores.push(new Stores(name, maxC, minC, avgC));
  store.reset();
  renderStore()
}

// function createTable(){
//
//   this.rundNumCust();
//   this.countCookieEachHour();
//
//   var row = document.createElement('tr');
//   var col = document.createElement('td');
//
//   col.textContent = this.Name;
//   row.appendChild(col);
//
//   for(var i=0; i<hours.length; i++) {
//     col = document.createElement('td');
//     col.textContent = this.cookieEachHour[i];
//     row.appendChild(col);
//   }
//
//   col = document.createElement('td');
//   col.textContent = this.total;
//   row.appendChild(col);
//
// }
//


makeHeaderRow();
renderStore();
store.addEventListener('submit', formData);
