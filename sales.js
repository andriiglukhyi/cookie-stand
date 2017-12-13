'use strict';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

var hours = ['6am', '7am', '8am', '9am', '9am', '10am', '11am','12pm','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',]

var allStores = []
var store = document.getElementById('stores')


/////////////////////////////////////////////////////////////

var Stores = function( storeName, minCust, maxCust, avgCookies) {
  this.Name = storeName;
  this.mnCust = minCust;
  this.mxCust = maxCust;
  this.avCookies = avgCookies;
  this.custsEachHour = [];
  this.cookieEachHour = [];
  this.total = 0;
  allStores.push(this);
  this.rundNumCust = function() {
    for(var i = 0; i < hours.length; i++){
      console.log('sdf');
      this.custsEachHour.push(random(this.mnCust, this.mxCust));
    }
  };
  this.countCookieEachHour = function() {
    this.rundNumCust();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avCookies);
      this.cookieEachHour.push(oneHour);
    }
  };
  this.render = function(){
    this.countCookieEachHour()
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
      // give td content (Color for an individual cat
    tdEl.textContent = this.cookieEachHour[i];
    trEl.appendChild(tdEl);



    store.appendChild(trEl);
};
}

////////////////////////////////////////////////////////////////

new Stores('1st and pike', 23, 65, 6.3);
new Stores('qwer', 15, 30,5);
new Stores('pike2', 12, 34, 4);
new Stores('pike3', 2, 34, 2);
new Stores('pi333', 5, 31, 4);


/////////////////////////////////////////////////////////////////////////


function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');
  // create th
  var thEl = document.createElement('th');
  // give th content (Name for an individual cat)
  thEl.textContent = 'Stores';
  // append the th
  trEl.appendChild(thEl);


  for(var i=0; i<hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // create th


  thEl = document.createElement('th');
  // give th content (Color for an individual cat)
  thEl.textContent = 'Total';
  // append the tr to the table
  trEl.appendChild(thEl);
  store.appendChild(trEl);
}

/////////////////////////////////////////////////

function renderStore(){
  for(var i = 0; i < allStores.length; i++){
    console.log(i);
    allStores[i].render();
  }
}

makeHeaderRow();
renderStore();
