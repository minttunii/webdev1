let rolls = document.getElementById("rolls").querySelectorAll('div');
let total_rolls = document.getElementById("totals");
let button = document.getElementById("roll-button");
let templates = document.querySelectorAll('template');

console.log(button);

document.addEventListener('rollDice', function(event) {
    let value = event.detail.value;

    // Clone template and change dice
    const template_dice = templates.item(value-1).content.cloneNode(true);
    let current_dice = button.children.item(0);
    button.replaceChild(template_dice, current_dice);

    // Rolls and total rolls 
    let roll = rolls.item(value-1);
    let roll_value = roll.getElementsByTagName('p').item(0).innerHTML;
    let total_rolls_txt = total_rolls.getElementsByTagName('span').item(0).innerHTML;
    let total_rolls_value = parseInt(total_rolls_txt);

    if(roll_value == '-'){
        let value = 1;
        roll.children.item(1).innerHTML = value.toString();
        total_rolls_value = 1;
        total_rolls.getElementsByTagName('span').item(0).innerHTML = total_rolls_value.toString();

    }
    else{
        let value = parseInt(roll_value) + 1;
        roll.children.item(1).innerHTML = value.toString();
        total_rolls_value += 1;
        total_rolls.getElementsByTagName('span').item(0).innerHTML = total_rolls_value.toString();
    }
  });
  

button.addEventListener("click", rollDice);

