const convertNum = document.getElementById("number");
const convertButton = document.getElementById("convert-button");
const errorMessage = document.querySelector(".error");
const convertedNumber = document.getElementById("output");

function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

convertButton.addEventListener('click', function(){
    let number = convertNum.value;
    convertedNumber.textContent = "";
    if (number == ""){
    errorMessage.textContent = "Please input a number";
    }else if(number<=0){
      errorMessage.textContent = "Please input a positive number ";
    }else if(number>4000000){
      errorMessage.textContent = "Please input a number between 1 to 4000000 ";
    }else 
         {errorMessage.textContent = "";
          convertedNumber.textContent = (number) + "=" + intToRoman(number)}

  })

   