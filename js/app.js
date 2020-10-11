'use strict';

var hour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var branch1 = {
    location: 'seattle',
    max: 65,
    min: 23,
    averageNumberOfCookies: 6.3,
    numberOfCustPerHour: [],
    cookiesPerHour: [],
    // result: [],
    total :0,
    
    // create method to generate random number for the number of customers per hour .

    randomNumberOfCustomer: function (min, max) {
        for (var j = 0; j < hour.length; j++) {
            this.numberOfCustPerHour[j] = getRandom(min, max);
            console.log(this.numberOfCustPerHour[j]);
        }
    },
    // create a method :: to compute the sold cookies per hour --> we need to multiplay ave * numberofcu per hour  (6.3* number of customer per hour )

    soldCookies: function () {

        for (var i = 0; i < hour.length; i++) {
            this.cookiesPerHour[i] = Math.ceil(this.averageNumberOfCookies * this.numberOfCustPerHour[i]);  // 
            // this.result = `${hour[i]} : ${this.cookiesPerHour[i]} cookies`;
            // console.log(this.result);
            this.total += this.cookiesPerHour[i];
        }
        
        console.log(this.total);
        console.log(this.cookiesPerHour);
    },
    render: function () {
        var containerE1 = document.getElementById('container');
        var header = document.createElement('h1');
        containerE1.appendChild(header);
        header.textContent = this.location;
        var ulE1 = document.createElement('ul');
        containerE1.appendChild(ulE1);
       
        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hour[i]} : ${this.cookiesPerHour[i]} Cookies`;
            // console.log(this.cookiesPerHour[i]);
        }
        var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `Total : ${this.total} Cookies`  ;
    },
};


branch1.randomNumberOfCustomer(23, 65);
// console.log(branch1.randomNumberOfCustomer(23,65));
// console.log(getRandom(23,65));
branch1.soldCookies();
branch1.render();

// create global function to get a random number 

function getRandom(min, max) {
    var randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
    return randomNumber;
}


// Branch 2 



var branch2 = {
    location: 'Tokyo',
    max: 24,
    min: 3,
    averageNumberOfCookies: 1.2,
    numberOfCustPerHour: [],
    cookiesPerHour: [],
    // result: [],
    total :0,
    // create method to generate random number for the number of customers per hour .

    randomNumberOfCustomer: function (min, max) {
        for (var j = 0; j < hour.length; j++) {
            this.numberOfCustPerHour[j] = getRandom(min, max);
            console.log(this.numberOfCustPerHour[j]);
        }
    },
    // create a method :: to compute the sold cookies per hour --> we need to multiplay ave * numberofcu per hour  (6.3* number of customer per hour )

    soldCookies: function () {

        for (var i = 0; i < hour.length; i++) {
            this.cookiesPerHour[i] = Math.ceil(this.averageNumberOfCookies * this.numberOfCustPerHour[i]);  // 
            // this.result = `${hour[i]} : ${this.cookiesPerHour[i]} cookies`;
            // console.log(this.result);
            this.total += this.cookiesPerHour[i];
        }
        
        console.log(this.total);
        console.log(this.cookiesPerHour);
    },
    render: function () {
        var containerE1 = document.getElementById('container');
        var header = document.createElement('h1');
        containerE1.appendChild(header);
        header.textContent = this.location;
        var ulE1 = document.createElement('ul');
        containerE1.appendChild(ulE1);
       
        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hour[i]} : ${this.cookiesPerHour[i]} Cookies`;
            // console.log(this.cookiesPerHour[i]);
        }
        var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `Total : ${this.total} Cookies`  ;
    },
};


branch2.randomNumberOfCustomer(3, 24);
// console.log(branch1.randomNumberOfCustomer(23,65));
// console.log(getRandom(23,65));
branch2.soldCookies();
branch2.render();

// Branch 3  


var branch3 = {
    location: 'Dubai',
    max: 38,
    min: 11,
    averageNumberOfCookies: 3.7,
    numberOfCustPerHour: [],
    cookiesPerHour: [],
    // result: [],
    total :0,
    // create method to generate random number for the number of customers per hour .

    randomNumberOfCustomer: function (min, max) {
        for (var j = 0; j < hour.length; j++) {
            this.numberOfCustPerHour[j] = getRandom(min, max);
            console.log(this.numberOfCustPerHour[j]);
        }
    },
    // create a method :: to compute the sold cookies per hour --> we need to multiplay ave * numberofcu per hour  (6.3* number of customer per hour )

    soldCookies: function () {

        for (var i = 0; i < hour.length; i++) {
            this.cookiesPerHour[i] = Math.ceil(this.averageNumberOfCookies * this.numberOfCustPerHour[i]);  // 
            // this.result = `${hour[i]} : ${this.cookiesPerHour[i]} cookies`;
            // console.log(this.result);
            this.total += this.cookiesPerHour[i];
        }
        
        console.log(this.total);
        console.log(this.cookiesPerHour);
    },
    render: function () {
        var containerE1 = document.getElementById('container');
        var header = document.createElement('h1');
        containerE1.appendChild(header);
        header.textContent = this.location;
        var ulE1 = document.createElement('ul');
        containerE1.appendChild(ulE1);
       
        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hour[i]} : ${this.cookiesPerHour[i]} Cookies`;
            // console.log(this.cookiesPerHour[i]);
        }
        var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `Total : ${this.total} Cookies`  ;
    },
};


branch3.randomNumberOfCustomer(23, 65);
// console.log(branch1.randomNumberOfCustomer(23,65));
// console.log(getRandom(23,65));
branch3.soldCookies();
branch3.render();


//Branch 4 


var branch4 = {
    location: 'Paris',
    max: 38,
    min: 20,
    averageNumberOfCookies: 2.3,
    numberOfCustPerHour: [],
    cookiesPerHour: [],
    // result: [],
    total :0,
    // create method to generate random number for the number of customers per hour .

    randomNumberOfCustomer: function (min, max) {
        for (var j = 0; j < hour.length; j++) {
            this.numberOfCustPerHour[j] = getRandom(min, max);
            console.log(this.numberOfCustPerHour[j]);
        }
    },
    // create a method :: to compute the sold cookies per hour --> we need to multiplay ave * numberofcu per hour  (6.3* number of customer per hour )

    soldCookies: function () {

        for (var i = 0; i < hour.length; i++) {
            this.cookiesPerHour[i] = Math.ceil(this.averageNumberOfCookies * this.numberOfCustPerHour[i]);  
            this.total += this.cookiesPerHour[i];
        }
        
        console.log(this.total);
        console.log(this.cookiesPerHour);
    },
    render: function () {
        var containerE1 = document.getElementById('container');
        var header = document.createElement('h1');
        containerE1.appendChild(header);
        header.textContent = this.location;
        var ulE1 = document.createElement('ul');
        containerE1.appendChild(ulE1);
       
        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hour[i]} : ${this.cookiesPerHour[i]} Cookies`;
        }
        var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `Total : ${this.total} Cookies`  ;
    },
};


branch4.randomNumberOfCustomer(23, 65);
branch4.soldCookies();
branch4.render();


// Branch 5 

var branch5 = {
    location: 'Lima',
    max: 16,
    min: 2,
    averageNumberOfCookies: 4.6,
    numberOfCustPerHour: [],
    cookiesPerHour: [],
    total :0,
    // create method to generate random number for the number of customers per hour .

    randomNumberOfCustomer: function (min, max) {
        for (var j = 0; j < hour.length; j++) {
            this.numberOfCustPerHour[j] = getRandom(min, max);
            console.log(this.numberOfCustPerHour[j]);
        }
    },


    // create a method :: to compute the sold cookies per hour --> we need to multiplay ave * numberofcu per hour  (6.3* number of customer per hour )

    soldCookies: function () {

        for (var i = 0; i < hour.length; i++) {
            this.cookiesPerHour[i] = Math.ceil(this.averageNumberOfCookies * this.numberOfCustPerHour[i]);  // 
            
            this.total += this.cookiesPerHour[i];
        }
        
        console.log(this.total);
        console.log(this.cookiesPerHour);
    },

    render: function () {
        var containerE1 = document.getElementById('container');
        var header = document.createElement('h1');
        containerE1.appendChild(header);
        header.textContent = this.location;
        var ulE1 = document.createElement('ul');
        containerE1.appendChild(ulE1);
       
        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${hour[i]} : ${this.cookiesPerHour[i]} Cookies`;
        
        }
        var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `Total : ${this.total} Cookies`  ;
    },
};


branch5.randomNumberOfCustomer(23, 65);
branch5.soldCookies();
branch5.render();


