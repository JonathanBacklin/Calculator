let display = document.getElementById("display")
let value1 = [];
value1[0] = 0;
value1[1] = 0;
// för att ta bort nollan innan talen, nästlad if statement,


let keys = document.getElementsByClassName('key');

  function font() { 
    for (let index = 0; index < display.value.length; index++) {
      if(display.value.length === 15) {
        display.style.fontSize = "26px"
      }
      else if (display.value.length === 17) {
        display.style.fontSize = "22px"
      }
      else if (display.value.length === 19) {
        display.style.fontSize = "20px"
      }
      else if(display.value.length === 21) {
        display.style.fontSize = "18px"
      }
      else if(display.value.length === 24) {
        display.style.fontSize = "17px"
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
      font();
    }
    else if(btn.id === 'dot') {
      dot();
    }
    else if(!isNaN(btn.id)) {
      NumberPress(btn.id);
    }
    else if(btn.id === 'add' || btn.id === 'subtract' || btn.id === 'multiply' || btn.id === 'divide') {
      value1[0] = display.value;
      display.value ='';
      value1[2] = btn.id;
      }
      else if (btn.id ==='equal'){
        console.log(value1)
        value1[1]=display.value;
        switch(value1[2]){
          case 'add':
            value1[0]*= 1;
            value1[1]*= 1;
            value1[0]+=value1[1];
            font();
            break

          case 'subtract':
              value1[0]-=value1[1];
              font();
              break

          case 'multiply':
              value1[0]= value1[0]*value1[1];
              font();
              break

          case 'divide':
            
              value1[0]= value1[0]/value1[1];
              font();
              break

          default:
            console.log('return')
            font();
              return
        }

        display.value=value1[0];

      }


      else{

          display.value += keys;
      }

}
  

  function NumberPress(num){
    if(display.value === '0') {
      display.value=num;
    }
    
    
    else {
      display.value+=num;
      
    
    UpdateDisplay(display.value);
    }
  };
 
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => Handler(keys[i]))
    
  }
