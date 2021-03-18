if(keys === 'equal') {
    value1[1]= display.value;
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
          return
    }
  }
    else if(keys === 'clear') {
      UpdateDisplay();
      display.style.fontSize = '28px';
    }
    else if(keys === 'percent') {
      let percent = display.value * 0.01;
      UpdateDisplay(percent)
      font();
    }
    else if(keys === 'negate') {
      UpdateDisplay(-display.value);
    }
    else if(keys === 'dot') {
      UpdateDisplay()
       if(display.value.includes('.')){
         return;
       }
       else{
        display.type = 'text';
        display.value +='.';
        display.value;
       }
      }
      else if(!isNaN(keys)) {
        NumberPress(keys);

      }
  }