// Grab Dom Elements
const word = document.getElementById('word');
const wrongletters = document.getElementById('wrong-letters');
const restartButton = document.getElementById('restart');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('slider-container');
const message = document.getElementById('win-lose');
const hangmanParts = document.querySelectorAll('.hangman-part')

const wordPool = ['javascript','computer','hangman','youtube','facebook','instagram','twitter'];

let selectedWord = wordPool[Math.floor(Math.random()* wordPool.length)];

const correctLetter = [];
const incorrectLetter  = [];
//function to display word on screen
function displaySelectedWord(){
    word.innerHTML = ` 
        ${selectedWord
            .split('')
            .map(
                letter => `
                    <span class="letter">
                        ${correctLetter.includes(letter) ? letter : '' }
                    </span>
                `
            )
            .join('')
        }
    `;
    const wordText = word.innerText.replace(/\n/g,'');
    if(wordText === selectedWord){
        message.innerText = 'You Won!';
        popup.style.display = 'flex';
    }
};
//Function for sliding Notification
function showNotification(){
    notification.classList.add('show');
    setTimeout( () => {
        notification.classList.remove('show');
    },3000); 
}
//Function to update incorrect letter
function updateWrongLetters(){
    //updating display for wrong letter
    wrongletters.innerHTML = `
        ${incorrectLetter.length > 0 ? `<p>Wrong</wrong>` : ""}
        ${incorrectLetter.map(letter => `<span>${letter}</span>`)}
    `
    //Display hangman on wrong letter input
    hangmanParts.forEach( (part,index) => {
        const errors = incorrectLetter.length;
        if(index < errors){
            part.style.display = 'block';
        }else{
            part.style.display ='none';
        }
    });
    //show popup if loss
    if(incorrectLetter.length === hangmanParts.length){
        message.innerText = 'You lost';
        popup.style.display = 'flex';
    }

}
// displaySelectedWord();
//EVent Handlers
//1. Event Handler for keyboard press button
window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letterS = e.key;
        if(selectedWord.includes(letterS) ){
            if(!correctLetter.includes(letterS)){
                correctLetter.push(letterS);
                displaySelectedWord();
            } else{
                showNotification();
            }
        } else {
            if(!incorrectLetter.includes(letterS)){
                incorrectLetter.push(letterS);
                updateWrongLetters();
            }else{
                showNotification();
            }
        }
    }
});
//2. event handler for restart game
restartButton.addEventListener('click',()=>{
    //Empty arrays
    correctLetter.splice(0);
    incorrectLetter.splice(0);
    //Get a slected word
    selectedWord = wordPool[Math.floor(Math.random()* wordPool.length)];
    displaySelectedWord();
    //clear the wrong letters
    updateWrongLetters();
    //hide popup
    popup.style.display = 'none';

});