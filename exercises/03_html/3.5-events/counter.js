var max = 5;
var min = -5;

// Reset button event listener
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("counter").textContent = "0";
});

// Increment
document.getElementById("increment").addEventListener("click", function(){
    value = Number.parseInt(document.getElementById("counter").textContent);
    if(value === 5){
        document.getElementById("counter").textContent = "-5";
    }
    else{
        value += 1;
        document.getElementById("counter").textContent = value.toString();
    }
});

// Decrement
document.getElementById("decrement").addEventListener("click", function(){
    value = Number.parseInt(document.getElementById("counter").textContent);
    if(value === -5){
        document.getElementById("counter").textContent = "5";
    }
    else{
        value -= 1;
        document.getElementById("counter").textContent = value.toString();
    }
});
