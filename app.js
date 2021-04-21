'use strickt';
let hoursOfWork=['6am ','7am ','8am ','9am ','10am ','11am ','12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm','7pm'];
let stores=[];
let total=0;
const parentElemet=document.getElementById('class');
const addForm=document.getElementById('myForm');

function CookiesStore(name,cusMax,cusMin,AvrNumberCookies){
  this.name=name;
  this.cusMax=cusMax;
  this.cusMin=cusMin;
  this.AvrNumberCookies=AvrNumberCookies;
  this.customerPerHour=0;
  this.cookiesPerHour=[];
  this.cookiesPerHour=[];
  this.avgCustomerConsuming=0;
  this.getavg=function(){
    for(let i=0;i<hoursOfWork.length;i++){
      let randomNumber=Math.ceil(getRandomIntInclusive(this.cusMin,this.cusMax)*this.AvrNumberCookies);
      console.log(randomNumber);
      this.cookiesPerHour.push(randomNumber);
      this.avgCustomerConsuming+=randomNumber;
      console.log('cookiesPerHour',this.cookiesPerHour);
      console.log(`${hoursOfWork}`+`${randomNumber}`);
    }
  };
  this.getavg();
  stores.push(this);
}
const seatle = new CookiesStore('Seatle',23,65,6.3);
// eslint-disable-next-line no-unused-vars
const tokyo = new CookiesStore('Tokyo',3,24,1.2);
// eslint-disable-next-line no-unused-vars
const dubai = new CookiesStore('Dubi',11,38,3.7);
// eslint-disable-next-line no-unused-vars
const paris = new CookiesStore('Paris',20,38,2.3);
// eslint-disable-next-line no-unused-vars
const lima = new CookiesStore('lima',2,16,4.6);

console.log('seatle',seatle);

CookiesStore.prototype.render=function(){
  let raw=document.createElement('tr');
  let colomn=document.createElement('td');
  colomn.textContent=this.name;
  raw.appendChild(colomn);
  parentElemet.appendChild(raw);
  for(let i=0;i<hoursOfWork.length;i++){
    colomn = document.createElement('td');
    colomn.textContent=this.cookiesPerHour[i];
    raw.appendChild(colomn);}
  console.log(this.cookiesPerHour);
  colomn=document.createElement('td');
  colomn.textContent=this.avgCustomerConsuming;
  raw.appendChild(colomn);
  parentElemet.appendChild(raw);

};
tableHeader();
for (let index = 0; index <stores.length; index++) {
  stores[index].render();
}

function tableHeader(){
  let raw=document.createElement('tr');
  parentElemet.appendChild(raw);
  let colomnTwo=document.createElement('th');
  raw.appendChild(colomnTwo);
  colomnTwo.textContent='location';
  for(let i=0;i<hoursOfWork.length;i++){
    colomnTwo=document.createElement('th');
    colomnTwo.textContent=hoursOfWork[i];
    raw.appendChild(colomnTwo);
  }
  colomnTwo=document.createElement('th');
  raw.appendChild(colomnTwo);
  colomnTwo.textContent='Daily Total';
}
function tableHeader2(){
  // eslint-disable-next-line no-undef
  raw=document.createElement('tr');
  // eslint-disable-next-line no-undef
  parentElemet.appendChild(raw);
  let colomnTwo=document.createElement('th');
  // eslint-disable-next-line no-undef
  raw.appendChild(colomnTwo);
  colomnTwo.textContent='Total';
  for (let i = 0; i < hoursOfWork.length; i++) {
    for (let index = 0; index < stores.length; index++) {
      total = total + stores[index].cookiesPerHour[i];
    }
    // eslint-disable-next-line no-undef
    columnTwo = document.createElement('td');
    // eslint-disable-next-line no-undef
    raw.appendChild(columnTwo);
    // eslint-disable-next-line no-undef
    columnTwo.textContent = total;
    total=0;
  }
  colomnTwo=document.createElement('th');
  // eslint-disable-next-line no-undef
  raw.appendChild(colomnTwo);
  for (let j = 0; j < stores.length; j++) {
    total = total + stores[j].avgCustomerConsuming;
  }
  colomnTwo.textContent=total;
  total=0;
}

// s
addForm.addEventListener('submit',clickHandler);

function clickHandler(event){
  let footer=parentElemet.lastChild;
  event.preventDefault();
  console.log(event.target.branchName);
  const nameValue =event.target.branchName.value;
  const maxCus=event.target.maxCusNum.value;
  const minCus=event.target.minCusNum.value;
  const avg=event.target.avgCook.value;

  let newSotre= new CookiesStore(nameValue,maxCus,minCus,avg);
  newSotre.getavg();
  newSotre.render();
  parentElemet.appendChild(footer);
  addForm.reset();
}

tableHeader2();


function getRandomIntInclusive(min,max){
  console.log('min,max',min,max);
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);
}

// eslint-disable-next-line no-unused-vars
let y=1;
console.log(y);

