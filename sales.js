// store info
var shops = {
  minCust : function() {
    var min = Math.ceil(0);
    var max = Math.floor(5);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  maxCust: function() {
    var min = Math.ceil(10);
    var max = Math.floor(15);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookieaverage : function() {
    var min = Math.ceil(3);
    var max = Math.floor(16);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  averNumberCustomer: function() {
    var min = this.minCust;
    var max = this.maxCust;
    return Math.floor(Math.random() * (max - min)) + min;

  },
  averamountOfCookies : function() {
    return cookieaverage*averNumberCustomer;

  },

  stor: [Magnolia, QueenAnne, Ballard, FirstHill],

  hours : function() {
      var min = Math.ceil(0);
      var max = Math.floor(12);
      return Math.floor(Math.random() * (max - min)) + min;
    }


}


function makeHTML() {
  var container = document.createElement('div');
  container.innerHTML = '<h1>' + shops.stor[i] + '</h1>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for (var i = 0; i < shops.store.length; i++) {
    listArr.push('<li>' + shops.hours + shops.averamountOfCookies '</li>');
  }










function makeHTML() {
  var container = document.createElement('div');

  container.innerHTML =
