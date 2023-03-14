//selector
const output = document.querySelector(".screen");
const result = document.querySelector(".resultat");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    var buttonText = this.innerHTML;
    if(buttonText==="AC"){
        clear();
        return;
    }

    if(buttonText === "DEL"){
        output.innerHTML = output.innerHTML.substr(0,output.innerHTML.length-1);
        return;
    }

    if(buttonText === "="){
        total();
    }

    else{
        ajoutchar(buttonText);
        return;
    }

  
}

function clear(){
    output.innerHTML = "";
    result.innerHTML = "0";
}

function ajoutchar(n){
    switch (n){
        case '×':
            n='*';
            break;
        case '÷':
            n='/';
            break;
    }
    output.textContent += n;
}

function total(){
    if((output.innerHTML).length==0){
        result.innerHTML = "ERROR"
        return;
    }
    result.innerHTML = eval(output.innerHTML);
}