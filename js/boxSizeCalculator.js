function NumberOrder(enteredDims){
        // Declare Variables for NumberOrder
        var calculatedArray = 0;
        var a = enteredDims[0];//length
        var b = enteredDims[1];//width
        var c = enteredDims[2];//height

        // Order enteredDims in descending order 
        /* For sorting three numbers in descending order, I tired to figure out a solution myself by comparing each value to one another and making a decision based off of that. I could never get this process to work so I ended up finding this solution for number ordering on GitHub. This is not my solution and I had to modify it for my application. Here is a link to the code I used to create my algorithm for this function: https://github.com/joyns/javascript-exercises/blob/master/loops-and-conditional/sort-three-numbers.html I needed to add another condition to ensure that all three numbers being equal did not cause an error.*/
        if (a >= b && a >= c){ // Determine if a is largest value
          if (b >= c){ // compare b to c
            calculatedArray = [a,b,c]; // sort values
          }else{
            calculatedArray = [a,c,b]; // sort values
          }
        }else if (b >= a && b >= c){ // Determine if b is largest value
          if (a >= c){
            calculatedArray = [b,a,c];
          }else{
            calculatedArray = [b,c,a];
          }
        }else if (c >= a && c >= b){ // Determine if c is largest value
          if (a >= b){
            calculatedArray = [c,a,b];
          }else{
            calculatedArray = [c,b,a];
          }
        }else if (a === b && b === c){ // determine if all values are equal
          calculatedArray = [a,b,c];
        }
        return calculatedArray; //output var to main function
      }

      function BreakCalculator(breakability,calculatedDims){
        // add breakability factor to each dimension to ensure adequate room is accounted for
        calculatedDims[0] += breakability;
        calculatedDims[1] += breakability;
        calculatedDims[2] += breakability;
      }

      function BoxSizeCalculator(calculatedDims){
      // Declare Vars for BoxSizeCalculator
        var result = 'Box Size Calculation Error';
        var l = calculatedDims[0]; //length
        var w = calculatedDims[1]; //width
        var h = calculatedDims[2]; //height

        if (l <= 4 && w <= 4 && h <= 4){ //determine if smallest box size dimension is small enough
          result = [4,4,4]; // choose smallest box
        }else if(l <= 6 && l > 4){
            result = [6,6,6];
        }else if(l <= 8 && l > 6){
            result = [8,8,8];
        }else if(l <= 10 && l > 8){
            result = [10,10,10];
        }else if((l <= 11.75 && l > 10) && (w <= 8.75) && (h <= 4.75)){
            result = [11.75,8.75,4.75];
        }else if((l <= 12 && l > 11.75) && (w <= 12) && (h <= 6)){
            result = [12,12,6];
        }else if((l <= 12 && l > 10) && (w <= 12) && (h <= 12)){
            result = [12,12,12];
        }else if((l <= 14 && l > 12) && (w <= 14) && (h <= 8)){
            result = [14,14,8];
        }else if((l <= 14 && l > 12) && (w <= 14) && (h <= 14)){
            result = [14,14,14];
        }else if((l <= 15 && l > 14) && (w <= 12) && (h <= 10)){
            result = [15,12,10];
        }else if((l <= 16 && l > 14) && (w <= 16) && (h <= 4)){ //need to have next closest cube box size as lower boundary
            result = [16,16,4];
        }else if((l <= 16 && l > 14) && (w <= 16) && (h <= 12)){
            result = [16,16,12];
        }else if((l <= 16 && l > 14) && (w <= 16) && (h <= 16)){
            result = [16,16,16];
        }else if((l <= 17 && l > 16) && (w <= 11) && (h <= 8)){
            result = [17,11,8];
        }else if((l <= 18 && l > 16) && (w <= 14) && (h <= 4)){
            result = [18,14,4];
        }else if((l <= 18 && l > 16) && (w <= 18) && (h <= 12)){
            result = [18,18,12];
        }else if((l <= 18 && l > 16) && (w <= 18) && (h <= 18)){
            result = [18,18,18];
        }else if((l <= 20 && l > 18) && (w <= 10) && (h <= 8)){
            result = [20,10,8];
        }else if((l <= 20 && l > 18) && (w <= 12) && (h <= 12)){
            result = [20,12,12];
        }else if((l <= 20 && l > 18) && (w <= 20) && (h <= 12)){
            result = [20,20,12];
        }else if((l <= 20 && l > 18) && (w <= 20) && (h <= 20)){
            result = [20,20,20];
        }else if((l <= 22 && l > 20) && (w <= 14) && (h <= 12)){
            result = [22,14,12];
        }else if((l <= 22 && l > 20) && (w <= 22) && (h <= 22)){
            result = [22,22,22];
        }else if((l <= 24 && l > 22) && (w <= 18) && (h <= 6)){
            result = [24,18,6];
        }else if((l <= 24 && l > 22) && (w <= 10) && (h <= 10)){
            result = [24,10,10];
        }else if((l <= 24 && l > 22) && (w <= 12) && (h <= 12)){
            result = [24,12,12];
        }else if((l <= 24 && l > 22) && (w <= 16) && (h <= 12)){
            result = [24,16,12];
        }else if((l <= 24 && l > 22) && (w <= 18) && (h <= 18)){
            result = [24,18,18];
        }else if((l <= 24 && l > 22) && (w <= 24) && (h <= 16)){
            result = [24,24,16];
        }else if((l <= 24 && l > 22) && (w <= 24) && (h <= 24)){ // Watch For Errors after this point
            result = [24,24,24];
        }else if(l > 24){
          result = 'Custom Box';
        }
        
        return result;
      }

      function Display(enteredDims, calculatedDims, boxSize, breakability){
        var viewPort = '';
        var displayEnteredDims = '';
        var displayCalculatedDims = '';
        var displayBoxSize = '';

        displayEnteredDims = '<strong>Entered Dimensions:</strong><br>Length: ' + enteredDims[0] + '<br>Width: ' + enteredDims[1] + '<br>Height: ' + enteredDims[2] + '<br>';
        displayCalculatedDims = '<strong>Breakability Factor: </strong>' + breakability + '<br><strong>CalculatedDims: </strong>' + '<br>Length: ' + calculatedDims[0] + '<br>Width: ' + calculatedDims[1] + '<br>Height: ' + calculatedDims[2] + '<br>';
        if (typeof boxSize === 'string'){
          displayBoxSize = '<strong>Box Size:</strong><br> ' + boxSize;
        }else{
        displayBoxSize = '<strong>Box Size: </strong><br>Length: ' + boxSize[0] + '<br>Width: ' + boxSize[1] + '<br>Height: ' + boxSize[2];
        }

        viewPort = displayEnteredDims + displayCalculatedDims + displayBoxSize;
        document.write(viewPort);
      }

      function Main (){
        var enteredDims = []; //(length, width, height)
        var breakability = 0;
        var calculatedDims = 0;
        var boxSize = '';


        for (var count = 0; count <= 2; count++) {
          var dims = ['length:', 'width:', 'height:'];
          enteredDims[count] = Number(prompt('Enter ' + dims[count]));
        }
        breakability = Number(prompt('Enter breakability value: (0 = not breakable, 2 = slightly breakable, 4 = breakable'));

        calculatedDims = NumberOrder(enteredDims);
        BreakCalculator(breakability, calculatedDims);
        boxSize = BoxSizeCalculator(calculatedDims);

        Display(enteredDims, calculatedDims, boxSize, breakability);

      }

    Main();
