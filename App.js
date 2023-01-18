import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
// collect information from the user
let numberOfDice = prompt("How many dice would you like to roll?");
let numberOfSidesArray = [];
let diceRolls = [];
let newInt = 0;

// turn a string into an integer
const changeStringToInt = (stringInput) => {
    newInt = parseInt(stringInput);
    return newInt;
}

// determine dice sides
const collectNumberOfSides = (inputInt) => {
    let i = 0;
    while (i < inputInt) {
        let sidesStr = prompt("How many sides does this die have?");
        let sidesInt = parseInt(sidesStr);
        numberOfSidesArray.push(sidesInt);
        i++;
    };
    return numberOfSidesArray;
}

// put roll values into an array
const rollTheDie = (dice) => {
    let i = 0;
    while (i < dice) {
        let diceValue = Math.floor(Math.random() * numberOfSidesArray[i]);
        diceRolls.push(diceValue);
        console.log(diceRolls[i]);
        i++;
        console.log(diceRolls);
    };
    return diceRolls;
}      

// run the program


changeStringToInt(numberOfDice);
collectNumberOfSides(newInt);
rollTheDie(numberOfDice);
