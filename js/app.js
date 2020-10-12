'use strict';

var hour = ['6:am', '7:am', '8:am', '9:am', '10:am', '11:am', '12:am', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm'];

// create a constructor for all Branches 
var allBranches = [];
console.log(allBranches);
var lastColSum=0;
var Branch = function (location, min, max, averageCookiesPerHour) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.averageCookiesPerHour = averageCookiesPerHour;
    this.randomCustPerHour = [];
    this.salesPerHour = [];
    this.dailyTotal = 0;

    allBranches.push(this);
}

Branch.prototype.getRandom = function () {
    for (var i = 0; i < hour.length; i++) {
        this.randomCustPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }

    // console.log(this.randomCustPerHour);
}


Branch.prototype.soldCookies = function () {
    for (var j = 0; j < hour.length; j++) {
        this.salesPerHour.push(Math.ceil(this.randomCustPerHour[j] * this.averageCookiesPerHour));
        this.dailyTotal += this.salesPerHour[j];

    }
    lastColSum += this.dailyTotal; 
    console.log(this.dailyTotal);
    // console.log(this.salesPerHour);
}

var seattle = new Branch('Seattle', 23, 65, 6.3);
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
var dubai = new Branch('Dubai', 11, 38, 3.7);
var paris = new Branch('Paris', 20, 38, 2.3);
var lima = new Branch('Lima', 2, 16, 4.6);



var tableE = document.getElementById('table');

function header() {
    var thead = document.createElement('thead');
    tableE.appendChild(thead);

    var trE = document.createElement('tr');
    thead.appendChild(trE);

    var thE = document.createElement('th');
    trE.appendChild(thE);
    thE.textContent = 'Branches';

    for (var i = 0; i < hour.length; i++) {
        var thE = document.createElement('th');
        trE.appendChild(thE);
        thE.textContent = hour[i];
    }
    var thE = document.createElement('th');
    trE.appendChild(thE);
    thE.textContent = 'Daily Total';

}
header();


Branch.prototype.render = function () {

    var tbody = document.createElement('tbody');
    tableE.appendChild(tbody);

    var trE = document.createElement('tr');
    tbody.appendChild(trE);

    var thE1 = document.createElement('th');
    trE.appendChild(thE1);
    thE1.textContent = this.location;

    for (var i = 0; i < hour.length; i++) {
        var tdE2 = document.createElement('td');
        trE.appendChild(tdE2);
        tdE2.textContent = this.salesPerHour[i];
    }
    var tdE3 = document.createElement('td');
    trE.appendChild(tdE3);
    tdE3.textContent = this.dailyTotal;

}




function footer() {

    var tfoot = document.createElement('tfoot');
    tableE.appendChild(tfoot);
    var trE = document.createElement('tr');
    tfoot.appendChild(trE);
    var tdE1 = document.createElement('td');
    trE.appendChild(tdE1);
    tdE1.textContent = 'Total';

    var hourlyTotal = [];
    for (var i = 0; i < hour.length; i++) {

        var tdE2 = document.createElement('td');
        trE.appendChild(tdE2);

        var colTotal = 0;
        for (var j = 0; j < allBranches.length; j++) {

            colTotal += (allBranches[j].salesPerHour[i]);
            console.log(hourlyTotal);
        }

        hourlyTotal.push(colTotal);

        tdE2.textContent = colTotal;
    }
    var tdElast = document.createElement('td');
    trE.appendChild(tdElast);
    tdElast.textContent = lastColSum;
    

        
  
   
}





for (var i = 0; i < allBranches.length; i++) {
    allBranches[i].getRandom();
    allBranches[i].soldCookies();
    allBranches[i].render();
    // console.log(allBranches[i]);
}
footer();










