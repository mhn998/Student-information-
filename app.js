'use strict'

let myForm = document.getElementById('formID');
let parentTable = document.getElementById('table');

// Global array

let arrayOfAll = [];


function Student(email,mobile,tuition) {
    this.email = email;
    this.name = this.email.substring(0,this.email.indexOf("@"));
    this.mobile=mobile;
    this.tuition=tuition;
    
    this.age= generaterandomAge(18,24);

    arrayOfAll.push(this)
    
    settingItems();
}

let table;
function createTable() {
    table = document.createElement('table');
    parentTable.appendChild(table);

    let thId = document.createElement("th");
    table.appendChild(thId);
    thId.textContent = "id";

    let thName = document.createElement("th");
    table.appendChild(thName);
    thName.textContent = "Name";

    let thEmail = document.createElement('th');
    table.appendChild(thEmail);
    thEmail.textContent = "Email";

    let thMobile = document.createElement('th');
    table.appendChild(thMobile);
    thMobile.textContent = "Mobile";

    let thAge = document.createElement('th');
    table.appendChild(thAge);
    thAge.textContent = "Age";

    let thTuition = document.createElement('th');
    table.appendChild(thTuition);
    thTuition.textContent = "Tutition";

    let Total = document.createElement('p');
    parentTable.appendChild(Total);
    let total = 0;
    total+=this.tuition;
    Total.textContent = "Total" + total;

}

createTable();


Student.prototype.render = function() {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    let tdId = document.createElement('td');
    tableRow.appendChild(tdId);
    tdId.textContent = arrayOfAll.length;
    // for(let i=0;i<arrayOfAll.length;i++) {
    //     // tdId=indexOf(arrayOfAll[i])+1
    // }
    // tableRow.appendChild(tdId);

    let tdName = document.createElement('td');
    tableRow.appendChild(tdName);
    tdName.textContent = this.name;

    let tdEmail = document.createElement('td');
    tableRow.appendChild(tdEmail);
    tdEmail.textContent = this.email;

    let tdMobile = document.createElement('td');
    tableRow.appendChild(tdMobile);
    tdMobile.textContent = this.mobile;

    let tdAge = document.createElement('td');
    tableRow.appendChild(tdAge);
    tdAge.textContent = this.age;

    let tdTuition = document.createElement('td');
    tableRow.appendChild(tdTuition);
    tdTuition.textContent = this.tuition;
    
}

function settingItems() {
    let data=JSON.stringify(arrayOfAll);
    localStorage.setItem('mystudents',data)
}



function generaterandomAge(min,max) {
    return Math.abs(Math.floor(Math.random()*(max-min)+min));
}

let newStudent;
function submitter(event) {
  
    event.preventDefault();

    let studentEmail = event.target.studentEmail.value;
    let studentNum = event.target.studentNum.value;
    let studentTuition = event.target.studentTuition.value;

    if(studentEmail && studentNum && studentTuition ) {
        newStudent = new Student (studentEmail,studentNum,studentTuition);
        newStudent.render();
        myForm.reset();

    } else {
        alert("please fill valid values");
    }
}

function checkLS() {
    parentTable.textContent="";
    if(localStorage.getItem('mystudents')) {
        let studentsfromLS = JSON.parse(localStorage.getItem('mystudents'));
        console.log(studentsfromLS);
        for (let i =0; i<studentsfromLS.length;i++) {
            let newestStudent = new Student (studentsfromLS[i].email,studentsfromLS[i].mobile,studentsfromLS[i].tuition);
            newestStudent.render();
            console.log(newestStudent)
        }
        
    }
}

myForm.addEventListener('submit',submitter);


checkLS();

