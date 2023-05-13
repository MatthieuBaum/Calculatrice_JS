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

        if (this.startTime === null) {
            this.startTime = Date.now();
        }

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
        const timeTaken = Date.now() - this.startTime;
        this.sendTimeTaken(timeTaken);
        if(((this.display).textContent).length==0){
            this.result.textContent = "ERROR"
            this.sendErreurAt();
            return;
        }
        (this.result).textContent = eval(this.display.textContent);
    }

    sendTimeTaken(timeTaken) {
        let date1 = new Date();
      
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'});
      
        const url = 'http://localhost:3000/timer';
        const dataraw = {
          "timeTakenMS": timeTaken,
          "created_at" : dateLocale
        };
        fetch(url,{
          headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method:'POST',
          mode : 'no-cors',
          body:JSON.stringify(dataraw)
        })
      }
      
      sendErreurAt(){
        let date1 = new Date();
    
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'});
    
        const url = 'http://localhost:3000/erreur';
        const dataraw = {
          "created_at" : dateLocale
        };
    
        fetch(url,{
          headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method:'POST',
          mode : 'no-cors',
          body:JSON.stringify(dataraw)
        })
      }    
}



let baseCalculator = new BaseCalculator()
