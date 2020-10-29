const main = document.getElementById('main');
const addUserButton = document.getElementById('adduser');
const doubleMoneyButton = document.getElementById('double');
const showMillionaires = document.getElementById('millionaire');
const sortButton =  document.getElementById('sort');
const totalButton = document.getElementById('total');
//data array
let data = [];  
// create initial user
generateRandomUser();
generateRandomUser();
generateRandomUser();

//function for fetching random 
//API:randomuser.me
async function generateRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    const newUser =  {
        name: `${user.name.first} ${user.name.last}`,
        worth: Math.round(Math.random()*100000)
    }
    addData(newUser);
}
//add newly generated user into data array
function addData(newUser){
    data.push(newUser);
    updateDOM();
}
//function to update the UI with DOM
function updateDOM(inputData = data){
    main.innerHTML = '<h2><strong>Name</strong> Net Worth</h2>';
    inputData.forEach( item =>{
       const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong>${item.worth}`;
        main.appendChild(element);
    });
}

