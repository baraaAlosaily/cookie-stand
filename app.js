/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
let hoursOfWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// eslint-disable-next-line no-unused-vars
let LocationOne = {
  storeName: 'Seattle.',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (let i = 0; i < hoursOfWork.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      let liEl = document.createElement('li');
      liEl.textContent = hoursOfWork[i] + ' ' + this.avgCookiesHour;
      let firstUl = document.getElementById('Seattle');
      firstUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    let liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    let firstUl = document.getElementById('Seattle');
    firstUl.appendChild(liEl);
  }
};

// eslint-disable-next-line no-undef
LocationOne.render();
LocationOne.total();

let LocationTwo = {
  storeName: 'Tokyo.',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray:[],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (let i = 0; i < hoursOfWork.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      let liEl = document.createElement('li');
      liEl.textContent = hoursOfWork[i] + ' ' + this.avgCookiesHour;
      let seatacUl = document.getElementById('Tokyo');
      seatacUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    let liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    let seatacUl = document.getElementById('Tokyo');
    seatacUl.appendChild(liEl);
  }
};

LocationTwo.render();
LocationTwo.total();

let LocationThree = {
  storeName: 'Dubai.',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (let i = 0; i < hoursOfWork.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      let liEl = document.createElement('li');
      liEl.textContent = hoursOfWork[i] + ' ' + this.avgCookiesHour;
      let seacenterUl = document.getElementById('Dubai');
      seacenterUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    let liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    let seacenterUl = document.getElementById('Dubai');
    seacenterUl.appendChild(liEl);
  }
};

LocationThree.render();
LocationThree.total();

let LocationFour = {
  storeName: 'Paris.',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (let i = 0; i < hoursOfWork.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      let liEl = document.createElement('li');
      liEl.textContent = hoursOfWork[i] + ' ' + this.avgCookiesHour;
      let caphillUl = document.getElementById('Paris');
      caphillUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    let liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    let caphillUl = document.getElementById('Paris');
    caphillUl.appendChild(liEl);
  }
};
LocationFour.render();
LocationFour.total();

let LocationFive = {
  storeName: 'Lima.',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  avgCustomersHour: 0,
  avgCookiesHourcookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (let i = 0; i < hoursOfWork.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      let liEl = document.createElement('li');
      liEl.textContent = hoursOfWork[i] + ' ' + this.avgCookiesHour;
      let alkiUl = document.getElementById('Lima');
      alkiUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    let liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    let alkiUl = document.getElementById('Lima');
    alkiUl.appendChild(liEl);
  }

};

LocationFive.render();
LocationFive.total();
