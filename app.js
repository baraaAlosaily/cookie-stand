'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let storeName = [];
let storeNameTable = document.getElementById('class06-constractor');


function CookieStore(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.avgCustomersHour = 0;
  this.avgCookiesHour = 0;
  this.customersArray = [];
  this.cookiesArray = [];
  this.totalCookies = 0;
  this.getAvgCustomersHour = function (){
    for (let i = 0; i < hours.length; i++){
      this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersArray.push(this.avgCustomersHour);
    }
  };
  this.getAvgCookiesHour = function(){
    for (let i = 0; i < this.customersArray.length; i++){
      this.avgCookiesHour = Math.ceil(this.customersArray[i] * this.avgSale);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  };
  this.getTotalSold = function(){
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
  };
  this.getHourlyTotal = function(){
    this.hourlyTotal = this.hourlySalesArray.map(function (a,b) {
      return a + b;
    }, 0);
  };
  this.getAvgCustomersHour();
  this.getAvgCookiesHour();
  this.getTotalSold();
  storeName.push(this);
}


new CookieStore('seatle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai',11, 38, 3.7);
new CookieStore('paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);


CookieStore.prototype.render = function () {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for (let i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);

  storeNameTable.appendChild(trEl);
};

function renderAll() {
  for (let i in storeName) {
    storeName[i].render();
  }
}

function renderHeaders() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = 'name';
  trEl.appendChild(thEl);
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily location Total';
  trEl.appendChild(thEl);
  storeNameTable.appendChild(trEl);
}
function renderfooter() {
  let trEl1 = document.createElement('tr');
  let thEl2 = document.createElement('tfoot');
  thEl2.textContent = 'Total';
  trEl1.appendChild(thEl2);
  for (let i = 0; i < hours.length; i++) {
    thEl2 = document.createElement('tfoot');
    thEl2.textContent = this.avgCookiesHour;
    trEl1.appendChild(thEl2);
  }
}

renderHeaders();

renderAll();
renderfooter();

