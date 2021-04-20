'use strickt';
let hoursOfWork=['6am ','7am ','8am ','9am ','10am ','11am ','12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm','7pm'];

let Seattle={
  name:'Seatle',
  cusMax:63,
  cusMin:23,
  AvrNumberCookies:6.3,
  customerPerHour:[],
  cookiesPerHour:[],
  avgCustomerConsuming:0,
  getavg:function(){
    for(let i=0;i<hoursOfWork.length;i++){
      let randomNumber=Math.ceil(getRandomIntInclusive(this.cusMin,this.cusMax)*this.AvrNumberCookies);
      console.log(randomNumber);
      this.cookiesPerHour.push(randomNumber);
      this.avgCustomerConsuming+=randomNumber;
      console.log('cookiesPerHour',this.cookiesPerHour);
      console.log(`${hoursOfWork}`+`${randomNumber}`);
    }
  },
  render:function(){
    const parentElemet=document.getElementById('class');
    let div=document.createElement('div');
    parentElemet.appendChild(div);

    const calssE=document.createElement('h1');
    calssE.textContent=this.name;
    div.appendChild(calssE);

    const uL=document.createElement('ul');
    div.appendChild(uL);

    for(let i=0;i<hoursOfWork.length;i++){
      const liEl=document.createElement('li');
      liEl.textContent=`${hoursOfWork[i]} :${this.cookiesPerHour[i]}`;
      uL.appendChild(liEl);
    }
    const liEl=document.createElement('li');
    liEl.textContent='Total:'+`${this.avgCustomerConsuming}`;
    uL.appendChild(liEl);

  }
};
Seattle.getavg();
Seattle.render();

let Seattle1={
  name:'Tokyo',
  cusMax:3,
  cusMin:24,
  AvrNumberCookies:1.2,
  customerPerHour:[],
  cookiesPerHour:[],
  avgCustomerConsuming:0,
  getavg:function(){
    for(let i=0;i<hoursOfWork.length;i++){
      let randomNumber=Math.ceil(getRandomIntInclusive(this.cusMin,this.cusMax)*this.AvrNumberCookies);
      console.log(randomNumber);
      this.cookiesPerHour.push(randomNumber);
      this.avgCustomerConsuming+=randomNumber;
      console.log('cookiesPerHour',this.cookiesPerHour);
      console.log(`${hoursOfWork}`+`${randomNumber}`);
    }
  },
  render:function(){
    const parentElemet=document.getElementById('class');
    let div=document.createElement('div');
    parentElemet.appendChild(div);

    const calssE=document.createElement('h1');
    calssE.textContent=this.name;
    div.appendChild(calssE);

    const uL=document.createElement('ul');
    div.appendChild(uL);

    for(let i=0;i<hoursOfWork.length;i++){
      const liEl=document.createElement('li');
      liEl.textContent=`${hoursOfWork[i]} :${this.cookiesPerHour[i]}`;
      uL.appendChild(liEl);
    }
    const liEl=document.createElement('li');
    liEl.textContent='Total:'+`${this.avgCustomerConsuming}`;
    uL.appendChild(liEl);

  }
};
Seattle1.getavg();
Seattle1.render();

let Seattle2={
  name:'Dubai',
  cusMax:38,
  cusMin:11,
  AvrNumberCookies:3.7,
  customerPerHour:[],
  cookiesPerHour:[],
  avgCustomerConsuming:0,
  getavg:function(){
    for(let i=0;i<hoursOfWork.length;i++){
      let randomNumber=Math.ceil(getRandomIntInclusive(this.cusMin,this.cusMax)*this.AvrNumberCookies);
      console.log(randomNumber);
      this.cookiesPerHour.push(randomNumber);
      this.avgCustomerConsuming+=randomNumber;
      console.log('cookiesPerHour',this.cookiesPerHour);
      console.log(`${hoursOfWork}`+`${randomNumber}`);
    }
  },
  render:function(){
    const parentElemet=document.getElementById('class');
    let div=document.createElement('div');
    parentElemet.appendChild(div);

    const calssE=document.createElement('h1');
    calssE.textContent=this.name;
    div.appendChild(calssE);

    const uL=document.createElement('ul');
    div.appendChild(uL);

    for(let i=0;i<hoursOfWork.length;i++){
      const liEl=document.createElement('li');
      liEl.textContent=`${hoursOfWork[i]} :${this.cookiesPerHour[i]}`;
      uL.appendChild(liEl);
    }
    const liEl=document.createElement('li');
    liEl.textContent='Total:'+`${this.avgCustomerConsuming}`;
    uL.appendChild(liEl);

  }
};
Seattle2.getavg();
Seattle2.render();
let Seattle3={
  name:'Paris',
  cusMax:38,
  cusMin:20,
  AvrNumberCookies:2.3,
  customerPerHour:[],
  cookiesPerHour:[],
  avgCustomerConsuming:0,
  getavg:function(){
    for(let i=0;i<hoursOfWork.length;i++){
      let randomNumber=Math.ceil(getRandomIntInclusive(this.cusMin,this.cusMax)*this.AvrNumberCookies);
      console.log(randomNumber);
      this.cookiesPerHour.push(randomNumber);
      this.avgCustomerConsuming+=randomNumber;
      console.log('cookiesPerHour',this.cookiesPerHour);
      console.log(`${hoursOfWork}`+`${randomNumber}`);
    }
  },
  render:function(){
    const parentElemet=document.getElementById('class');
    let div=document.createElement('div');
    parentElemet.appendChild(div);

    const calssE=document.createElement('h1');
    calssE.textContent=this.name;
    div.appendChild(calssE);

    const uL=document.createElement('ul');
    div.appendChild(uL);

    for(let i=0;i<hoursOfWork.length;i++){
      const liEl=document.createElement('li');
      liEl.textContent=`${hoursOfWork[i]} :${this.cookiesPerHour[i]}`;
      uL.appendChild(liEl);
    }
    const liEl=document.createElement('li');
    liEl.textContent='Total:'+`${this.avgCustomerConsuming}`;
    uL.appendChild(liEl);

  }
};
Seattle3.getavg();
Seattle3.render();

let Seattle4={
  name:'Lima',
  cusMax:16,
  cusMin:2,
  AvrNumberCookies:4.6,
  customerPerHour:[],
  cookiesPerHour:[],
  avgCustomerConsuming:0,
  getavg:function(){
    for(let i=0;i<hoursOfWork.length;i++){
      let randomNumber=Math.ceil(getRandomIntInclusive(this.cusMin,this.cusMax)*this.AvrNumberCookies);
      console.log(randomNumber);
      this.cookiesPerHour.push(randomNumber);
      this.avgCustomerConsuming+=randomNumber;
      console.log('cookiesPerHour',this.cookiesPerHour);
      console.log(`${hoursOfWork}`+`${randomNumber}`);
    }
  },
  render:function(){
    const parentElemet=document.getElementById('class');
    let div=document.createElement('div');
    parentElemet.appendChild(div);

    const calssE=document.createElement('h1');
    calssE.textContent=this.name;
    div.appendChild(calssE);

    const uL=document.createElement('ul');
    div.appendChild(uL);

    for(let i=0;i<hoursOfWork.length;i++){
      const liEl=document.createElement('li');
      liEl.textContent=`${hoursOfWork[i]} :${this.cookiesPerHour[i]}`;
      uL.appendChild(liEl);
    }
    const liEl=document.createElement('li');
    liEl.textContent='Total:'+`${this.avgCustomerConsuming}`;
    uL.appendChild(liEl);

  }
};
Seattle4.getavg();
Seattle4.render();
// eslint-disable-next-line no-undef
CookieStore.prototype.render = function () {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  // eslint-disable-next-line no-undef
  for (let i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);

  // eslint-disable-next-line no-undef
  storeNameTable.appendChild(trEl);
};

function getRandomIntInclusive(min,max){
  console.log('min,max',min,max);
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min);
}
