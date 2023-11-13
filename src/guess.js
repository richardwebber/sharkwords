// declaring a variable and setting it to a string of the alphabet. 
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// creating a function that will create a button for each letter in the alphabet.
function setupGuesses(element, handleGuess) {
  // itterate through the alphabet array.
  alphabet.split('').forEach((letter) => {
    // create a button for each letter.
    const btn = document.createElement('button');
    // set the inner text to the current letter of the alphabet we are working with.
    btn.innerText = letter;
    // add an event listener to the new button you created.
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // append button to its respected element.
    element.append(btn);
  });
}

export default setupGuesses;
