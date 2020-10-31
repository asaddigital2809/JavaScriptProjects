const main = document.getElementById('main');
const addUserButton = document.getElementById('adduser');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesBtn = document.getElementById('millionaire');
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
        worth: Math.round(Math.random()*1000000)
    }
    addData(newUser);
}
// function to double the number
function doubleWorth(){
    data = data.map( item => {
        return {...item, worth: item.worth * 2}
    });
    updateDOM();
}
// sort function by richest
function sortRichest(){
    data.sort( (a,b) => b.worth - a.worth );
    updateDOM();
}
//function to filter
function showMillionaires(){
    data = data.filter(
        item => item.worth >  1000000
    );
    updateDOM();
}
//function to calculate the total networth
function calculateNetworth(){
    const totalworth = data.reduce(
        (acc, item) => (acc+=item.worth), 0
    ); 
    const totalNetWorthElement = document.createElement('div');
    totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${formatCurrency(totalworth)}</strong></h3>`
    main.appendChild(totalNetWorthElement);
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
        element.innerHTML = `<strong>${item.name}</strong> ${formatCurrency(item.worth)}`;
        main.appendChild(element);
    });
}
//function to change the no into currency format
function formatCurrency(num){
    return 'PKR' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event listener
//1. Add User event listener

addUserButton.addEventListener('click',generateRandomUser);

//2. Add double money event
 doubleMoneyButton.addEventListener('click',doubleWorth);

 //3. Sort
 sortButton.addEventListener('click',sortRichest);

//4. add show millionaires
showMillionairesBtn.addEventListener('click',showMillionaires);

//5. calculate total wealt eventlistener
totalButton.addEventListener('click',calculateNetworth);