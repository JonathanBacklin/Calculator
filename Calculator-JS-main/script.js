let display = document.getElementById("display")
let value1 = [];
value1[0] = 0;
value1[1] = 0;

// för att ta bort nollan innan talen, nästlad if statement,

let keys = document.getElementsByClassName('key');

  function font() { 
    for (let index = 0; index < display.value.length; index++) {
      if(display.value.length === 14) {
        display.style.fontSize = "24px"
      }
      else if (display.value.length === 18) {
        display.style.fontSize = "20px"
      }
      else if (display.value.length === 22) {
        display.style.fontSize = "18px"
      }
      else if(display.value.length === 28) {
        display.style.fontSize = "15px"
      }
      else if(display.value.length === 32) {
        display.style.fontSize = "12px"
      }
      else {
        return
      }
    }
  }

  function dot() {
    if(display.value.includes('.')) {
      return
    }

  else {
    display.type = 'text';
    display.value += '.';
    UpdateDisplay(display.value);
  }
}

  function UpdateDisplay(num = '0') {
    display.value = num;
    font();
  }
  function Handler(btn) {
    //push to store numbers,else if = equal, else switch,statement for operators add,multiply etc. !isNaN(parseint(keys)) call Numberpress function
    if(btn.id === 'clear') {
      display.value = '0';
      display.style.fontSize = '28px';
    }
    else if(btn.id === 'negate') {
      display.value = -display.value;
    }
    else if(btn.id === 'percent') {
      display.value *= 0.01;
    }
    else if(btn.id === 'dot') {
      dot();
    }
    else if(!isNaN(btn.id)) {
      NumberPress(btn.innerHTML);
    }
    else {
      value1[0] = display.value; //nummer
      value1[1] = btn.innerHTML; // operator
      console.log('operators')
      console.log(value1[0],value1[1]);
    }
  }

  function NumberPress(num){
    if(display.value === '0') {
      display.value=num;
    }
  /*  else if(btn.id === 'equal') {
        switch {

          case 'add' 
        }
        } */
    
    else {
      display.value+=num;

    }
    UpdateDisplay(display.value);
  //append them update currentnumber and display.
  };
 
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => Handler(keys[i]))
    
  }
