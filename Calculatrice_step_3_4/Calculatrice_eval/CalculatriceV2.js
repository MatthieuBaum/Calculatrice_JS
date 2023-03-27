

class BaseCalculator {

    constructor() {
        this.display=document.querySelector(".screen");
        this.result = document.querySelector(".resultat");
        this.keys = document.querySelectorAll("button");
        this.keys.forEach(key=>{
            key.addEventListener("click",this.calculate);
        });
    }

    ajoutchar(n){
        switch (n){
            case '×':
                n='*';
                break;
            case '÷':
                n='/';
                break;
        }
        (this.display).textContent += n;
        return
    }


    calculate(){
        var buttonText = this.innerHTML;
        console.log(buttonText);
        if(buttonText==="AC"){
            baseCalculator.clear();
            return;
        }
    
        if(buttonText === "DEL"){
            (this.display).innerHTML = this.display.innerHTML.substr(0,this.display.innerHTML.length-1);
            return;
        }
    
        if(buttonText === "="){
            baseCalculator.total();
        }
    
        else{ 
            this.ajoutchar(buttonText)
            //ajoutchar(buttonText)
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
