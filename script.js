//first we create variables for input which will allow us to enter our birth date
//we also create a variable for the result
//with userInput.max we set a condition that we can only select the date of birth the current date or before

let userInput = document.getElementById("enterdate");

userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("resultDisplay");

//here we create a function with calculations to come out with the result.
//d1, m1, y1 variables represent the input user will give
//d2, m2, y2 variables represent the current date, month, year
//d3, m3, y3 variabbles represent the result which will come out. There are a lot of calculations.
//then we console the result to see if it is working
//finally we display the results in the html <p> tag which is connected with result variable

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    
    if(m2 >= m1){
        m3 = m2 - m1;
    } else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    } else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    console.log(y3, m3, d3);

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}

//we also here have a function to get the days in the months which is for calculation purposes

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}

//we have successfully completed the program
//made using a tutorial for practice and understanding the concepts