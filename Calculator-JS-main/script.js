
let display = document.getElementById("display")
let value1 = [];
let resultat;
let prevNumber = 0;
let currentNumber = 0;

// för att ta bort nollan innan talen, nästlad if statement,


document.body.onclick = function(anEvent) {
        
  let keys = anEvent.target.id;

  function font() {
    for (let index = 0; index < display.value.length; index++) {
      if(display.value.length === 14) {
        display.style.fontSize = "24px"
      }
      else if (display.value.length === 18) {
        display.style.fontSize = "20px"
      }
      else if (display.value.length === 22) {
        display.style.fontSize = "16px"
      }
      else if (display.value.length === 26) {
        display.style.fontSize = "12px"
      }
      else if (display.value.length === 36) {
        display.style.fontSize = "10px"
      }
      else if (display.value.length === 42) {
        display.style.fontSize = "8px"
      }
    }
  }

  console.log(keys) 
 
    if(keys === 'clear') {
      display.value = '0';
      display.style.fontSize = '28px';
      
    }
    else if(keys === 'percent') {
      display.value *=0.01;
      font();
    }
    else if(keys === 'negate') {
      display.value *= -1;
    }
    else if(keys === 'divide') {
      
      display.value = '';
    }
    else if(keys === 'multiply') {
      
      display.value = '';
      
    }
    else if(keys === 'subtract') {
      
      display.value = '';
    
    }
    else if(keys === 'add') {
      
      display.value = '';
      
    }
    else if(keys === 'dot') {
       if(display.value.includes('.')){
         return;
       }
       else{
        display.type = 'text';
        display.value +='.';
        display.value;
       }
      }
   
    else if(keys === 'equal') {
      display.value = parseInt(value1[0]);
      console.log(value1[0])
    }

    else if(display.value === '0')  {
      display.value=keys;
      
    }
    else {
      display.value+=keys;
      value1 = parseInt(display.value);
      currentNumber = display.value;
      console.log(currentNumber)
      font(); 
    }
};
 

 // lägg till font grejen, uppdatera statements, 
 