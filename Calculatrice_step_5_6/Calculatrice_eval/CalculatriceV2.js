

class BaseCalculator {

    constructor() {
        this.display=document.querySelector(".screen");
        this.result = document.querySelector(".resultat");
        this.keys = document.querySelectorAll("button");
        this.keys.forEach(key=>{
            key.addEventListener("click", (event) =>this.calculate(event));
        });
    }

    ajoutchar(n){
        (this.display).textContent += n;
        return
    }


    calculate(event){
        var buttonText = event.srcElement.innerHTML;
        if(buttonText==="AC"){
            this.clear();
            return;
        }
    
        if(buttonText === "DEL"){
            (this.display).innerHTML = this.display.innerHTML.substr(0,this.display.innerHTML.length-1);
            return;
        }
        
        if(buttonText === "="){
            this.total();
            return;
        }

        if(buttonText === "×"){
            this.display.innerHTML+='*';
            return;
        }

        if(buttonText === "÷"){
            this.display.innerHTML+='/';
            return;
        }
    
        else{ 
            this.ajoutchar(buttonText)
            return;
        }    
    }

    clear(){
        (this.display).innerHTML = "";
        (this.result).innerHTML = "0";
    }

    total(){
        if(((this.display).textContent).length==0){
            this.result.textContent = "ERROR"
            return;
        }
        (this.result).textContent = eval(this.display.textContent);
    }
}

let baseCalculator = new BaseCalculator()
