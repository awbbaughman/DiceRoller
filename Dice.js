function diceRoll(num, num2, Name1) {
    console.log("this is how many sides:", num, num2)
    document.getElementById(Name1).innerHTML = numberMinMax(num, num2)
}

function d6() {
    console.log("button clicked")
    console.log("this is the d6 die")
    numberMinMax(1, 6) // calls numberMinMax function that is definied above^^

}

function d8() {
    console.log("button clicked")
    console.log("this is the d8 die")
    numberMinMax(1, 8) // calls numberMinMax function that is definied above^^

}

function numberMinMax(min, max) {
    const diceRoll = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(diceRoll)
    return diceRoll;

}