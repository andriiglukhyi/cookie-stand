'use strict';

var firstandPike = {
  minCust : 23,
  maxCust : 65,
  avgCookie : 6.3,
  rundNumCust : function() {
    min=this.minCust;
    max=this.maxCust;
    return  Math.floor(Math.random() * (max - min)) + min;
  },
  amountOfCookies : function() {
    return this.rundNumCust * this.avgCookie;
  }
}
var seatac = {
  minCust : 3,
  maxCust : 24,
  avgCookie : 1.2,
  rundNumCust : function() {
    min=this.minCust;
    max=this.maxCust;
    return  Math.floor(Math.random() * (max - min)) + min;
  },
  amountOfCookies : function() {
    return this.rundNumCust * this.avgCookie;
  }
}
var seattleCenter = {
  minCust : 11,
  maxCust : 38,
  avgCookie : 3.7,
  rundNumCust : function() {
    min=this.minCust;
    max=this.maxCust;
    return  Math.floor(Math.random() * (max - min)) + min;
  },
  amountOfCookies : function() {
    return this.rundNumCust * this.avgCookie;
  }
}
var capitollHill = {
  minCust : 20,
  maxCust : 38,
  avgCookie : 2.3,
  rundNumCust : function() {
    min=this.minCust;
    max=this.maxCust;
    return  Math.floor(Math.random() * (max - min)) + min;
  },
  amountOfCookies : function() {
    return this.rundNumCust * this.avgCookie;
  }
}
var alki = {
  minCust : 2,
  maxCust : 16,
  avgCookie : 4.6,
  rundNumCust : function() {
    min=this.minCust;
    max=this.maxCust;
    return  Math.floor(Math.random() * (max - min)) + min;
  },
  amountOfCookies : function() {
    return this.rundNumCust * this.avgCookie;
  }
}

var hours = ['6am', '7am', '8am', '9am', '9am', '10am', '11am','12pm','12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',]

function makeHTML() {

  // 1st exemple
  var container = document.createElement('div');
  container.innerHTML = '<p>' + '1st and Pike' + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < hours.length; i++) {
    listArr.push('<li>' + hours[i] + ' : ' + firstandPike.amountOfCookies + '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);

  //2nd SeaTac Airport

  var container = document.createElement('div');
  container.innerHTML = '<p>' + 'SeaTac Airport' + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < hours.length; i++) {
    listArr.push('<li>' + hours[i] + ' : ' + seatac.amountOfCookies + '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);

  // seattleCenter

  var container = document.createElement('div');
  container.innerHTML = '<p>' + 'Seattle center' + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < hours.length; i++) {
    listArr.push('<li>' + hours[i] + ' : ' + seattleCenter.amountOfCookies + '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);

  // capitollHill

  var container = document.createElement('div');
  container.innerHTML = '<p>' + 'Capitoll Hill' + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < hours.length; i++) {
    listArr.push('<li>' + hours[i] + ' : ' + seattleCenter.amountOfCookies + '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);

  //alki

  var container = document.createElement('div');
  container.innerHTML = '<p>' + 'Alkai' + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < hours.length; i++) {
    listArr.push('<li>' + hours[i] + ' : ' + alki.amountOfCookies + '</li>');
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);









}

makeHTML();
