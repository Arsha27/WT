function multiplyBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        result= num1*num2;
        alert(num1+ "* " +num2+ "=" +result);
      }
      
      function divideBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        result= num1/num2;
        alert(num1+ "/" +num2+ "=" +result);
      }
      
      function additionBy() {
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        result= num1+num2;
        alert(num1+ "+ " +num2+ "=" +result);
        
      }
      
      function subtractionBy() {
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        result= num1-num2;
        alert(num1+ "- " +num2+ "=" +result);
      }