function num(res) {
    let inpt = document.getElementById("input");
    inpt.value += res
}

// function 

function eqRes() {
    let inpt = document.getElementById("input");
     inpt.value = eval(inpt.value);
    
   if (inpt.value > 8) {
    
   }
}

function clearRes() {
    let inpt = document.getElementById("input");
    inpt.value = ""
}
