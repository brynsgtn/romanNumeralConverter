const convertBtnEl = document.getElementById("convert-btn");
const numberInputEl = document.getElementById("number");
const outputEl = document.getElementById("output");


const convertToRoman = () => {
  const singles = ["","I","II","III","IV","V", "VI", "VII", "VIII", "IX"];
  const tens = ["","X","XX","XX","XL","L","LX","LXX","LXXX","XC"];
  const hundreds = ["","C","CC","CCC","CD","D","DC","DCC", "DCCC","CM"];
  const thousands = ["", "M", "MM", "MMM", "MMMM"];
  let inputValue = numberInputEl.value;
  let length = inputValue.toString().length;
  let numbers = inputValue.toString().split("").map(Number);
  let roman = "";
  let i = 0;

  if (inputValue.length === 0) {
    outputEl.innerHTML = `<p class="output-style">Please enter a valid number</p>`; 

  } else if (inputValue < 0) {
    outputEl.innerHTML = `<p class="output-style">Please enter a number greater than or equal to 1</p>`;
 
  } else if (inputValue >= 4000) {
    outputEl.innerHTML = `<p class="output-style">Please enter a number less than or equal to 3999</p>`;

  } else {
    switch (length) {
      
    case 4:
      roman = thousands[numbers[i]];
      i++;
      
    case 3:
      roman += hundreds[numbers[i]];
      i++;
      
    case 2:
      roman += tens[numbers[i]];
      i++;
      
    case 1 :
      roman += singles[numbers[i]];
  }
 outputEl.innerHTML = `<p class="output-style">${roman}</p>`;
  }
}



convertBtnEl.addEventListener("click", convertToRoman);


