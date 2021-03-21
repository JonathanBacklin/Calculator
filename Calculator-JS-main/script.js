let display = document.getElementById("display")  // takes id from html and declares a variable called display.
display.readOnly = true
const maxNum = 24; // dont want unlimited numbers 
let value1 = [];  // creates an empty array.
value1[0] = 0; // takes that arrays first position and sets it to 0
value1[1] = 0; 
display.type = 'text' // enables me to do 1/0 = infinity, it doesnt break the code so i can have it here.

let keys = document.getElementsByClassName('key'); //simple declaration for the variable key to get all the elements with the classname keys from html

  function font() { // to change fontsize.
    for (let index = 0; index < display.value.length; index++) {
      if(display.value.length === 15) { // 
        display.style.fontSize = "26px"
      }
      else if (display.value.length >= 17) {
        display.style.fontSize = "22px"
      }
      else if (display.value.length >= 19) {
        display.style.fontSize = "20px"
      }
      else if(display.value.length >= 21) {
        display.style.fontSize = "16px"
      }
      else if(display.value.length >= 24) {
        display.style.fontSize = "10px"
      }
      
      else {
        return
      }
    }
  }

  function dot() { // simple function for the dot key 
    if(display.value.includes('.')) { // if there already includes a dot in display value u can't add another one.
      return
    }

  else {
    display.value += '.'; // adds the dot to display.value
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
      display.value *= 0.01; // takes display.value * 0.01 which is the same as /100 to get %
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
        console.log(value1[2])
        switch(value1[2]){
          case 'add':
            value1[0]*= 1;
            value1[1]*= 1;
            value1[0]+=value1[1];
            
            break

          case 'subtract':
              value1[0]-=value1[1];
              
              break

          case 'multiply':
              value1[0]= value1[0]*value1[1];
              break

          case 'divide':
            
              value1[0]= value1[0]/value1[1];
              
              break

          default:
            console.log('return')
            
              return
        }

        
        display.value=value1[0];
        font();
      }


      else{
        font();
          display.value += keys;
      }

}
  

  function NumberPress(num){
    if(display.value === '0') {
      display.value=num;
      font();
    }
    
    else if (display.value.length >= maxNum) {
      alert("Too many numbers on the screen sorry :( ")
      return
    }
    else {
      font();
      display.value+=num;
      
    
    UpdateDisplay(display.value);
    }
    font();
  };
 
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => Handler(keys[i]))
    
  }
