var input = document.getElementById('input'), //l'écran
  number = document.querySelectorAll('.numbers div'), //nombres
  operator = document.querySelectorAll('.operators'), //opérateurs
  operator2 = document.querySelectorAll('.operators2'), //parenthèses
  result = document.getElementById('result'), //=
  clear = document.getElementById('clear'), //le bouton C
  resultDisplayed = false; //booléen permettant de savoir si oui ou non un calcul est déjà afficher sur l'écran


//on fait une boucle permettant de vérifier si un chiffre est clické si oui alors on l'ajoute au string de la div input
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {
    //si il n'y a pas eu de calcul auparavant on rajoute juste au string les chiffres 
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else {
      //sinon on efface le string d'avant et on rajoute le chiffre clické au nouveau string.
      resultDisplayed = false;
      input.innerHTML = e.target.innerHTML;
    }

  });
}

//Même principe pour les opérateurs
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {
    //on créer deux variables pour garder en mémoire le string ansi que le dernier caractère entrée notament pour vérifier si c'est déjà un opérateur
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // on vérifie si le dernier caractère est un opérateur
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      //si oui on retire celui d'avant et on le rmeplace par le nouveau
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // si le string est vide l'ulisateur ne peux pas entré directement un opérateur
      input.innerHTML = "veuillez rentrer un nombre avant un opérateur.";
      resultDisplayed = true;
    } else {
      //si il n'y à aucun problème on ajoute juste l'opréteur au reste
      input.innerHTML += e.target.innerHTML;
    }

  });
}

for (var i = 0; i < operator2.length; i++) {
    operator2[i].addEventListener("click", function(e) {
      //on créer deux variables pour garder en mémoire le string ansi que le dernier caractère entrée notament pour vérifier si il y a un opérateur avant ou si le string est vide si non alors on ne peut pas écrire de parenthèses
      var currentString = input.innerHTML;
      var lastChar = currentString[currentString.length - 1];
      //on vérifie si le caractère d'avant est un opérateur,si l'écran est vide et si le chiffre situé avant possède un opérateur juste avant lui.
      if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || currentString.length == 0 || currentString[currentString.length - 2] === "+" || currentString[currentString.length - 2] === "-" || currentString[currentString.length - 2] === "×" || currentString[currentString.length - 2] === "÷") {
        input.innerHTML += e.target.innerHTML;
      }
      else{
        input.innerHTML=input.innerHTML; 
      }
    });
  }

//lorsque l'on appui sur "="
result.addEventListener("click", function() {

    //le calcul à effectuer
    var inputString = input.innerHTML;

      if ((inputString.includes("(")==true)){
        var Dcalculsec = (input.innerHTML).indexOf('(');
        var Fcalculsec = (input.innerHTML).indexOf(')');
        var inputStringtmp = inputString.substr(Dcalculsec,Fcalculsec+1);

      var numbers2 = inputStringtmp.split(/\+|\-|\×|\÷|\(|\)/g);
      for(var i =0;i<numbers2.length;i++){
        if(numbers2[i] == ""){
          numbers2.splice(i,1);
        }
      }
      var operators2 = inputStringtmp.replace(/[0-9]|\./g, "").split("");
    
      var divide = operators2.indexOf("÷");
      while (divide != -1) {
        numbers2.splice(divide, 2, numbers2[divide-1] / numbers2[divide]);
        operators2.splice(divide, 1);
        divide = operators2.indexOf("÷");
      }
    
      var multiply = operators2.indexOf("×");
      while (multiply != -1) {
        numbers2.splice(multiply, 2, numbers2[multiply-1] * numbers2[multiply]);
        operators2.splice(multiply, 1);
        multiply = operators2.indexOf("×");
      }
    
      var subtract = operators2.indexOf("-");
      while (subtract != -1) {
        numbers2.splice(subtract, 2, numbers2[subtract-1] - numbers2[subtract]);
        operators2.splice(subtract, 1);
        subtract = operators2.indexOf("-");
      }
    
      var add = operators2.indexOf("+");
      while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers2.splice(add, 2, parseFloat(numbers2[add-1]) + parseFloat(numbers2[add]));
        operators2.splice(add, 1);
        add = operators2.indexOf("+");
      }
      inputString.replace(inputStringtmp,inputString[Fcalculsec])
      inputString[Fcalculsec]=numbers2[1];
      inputString=inputString.substr(inputStringtmp.length-1);
      console.log(inputStringtmp);
      for(var i =0;i<inputStringtmp.length;i++){
        console.log(inputStringtmp[i]);
      }
  
      //problème je ne comprend pas comment modifier l'input final avec mon resultat.pour résumé j'ai le resultat mais je n'arrive pas à l'incorporer dans mon inputstring
  }

    //on créer deux tableaux chacun comportant respectivement les opérateur et les numéraux.
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
  
    //on commence par les calcules prioritaires soit x et ÷
    //por cela on cherche dans le tableau opérateur si il existe l'un des opérateurs et si oui il prend l'undexe de ce dernier et viens chercher les numéraux présent au index adjacents de l'opérateur et effectue le calcule demandé.
    var divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      //après le calcul effectué on retire les valeurs utilisé ainsi que l'opérateur des tableaux et on le remplace par la valeur obtenu.
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
    
    var multiply = operators.indexOf("×");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("×");
    }
  
    var subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  
    var add = operators.indexOf("+");
    while (add != -1) {
      //petit changement ici on utilise parsefloat sinon les deux élément ne s'additionerais pas mais fusionnerons en un plus grand string
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
    
    //on affiche le calcule sur l'écran
    input.innerHTML = inputString
    input.innerHTML += "="
    input.innerHTML += numbers[0];
  
    resultDisplayed = true;
  });

//si le bouton C est appui on efféce ce qu'il y a sur l'écran.
clear.addEventListener("click", function() {
  input.innerHTML = "";
})