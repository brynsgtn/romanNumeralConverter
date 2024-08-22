const convertBtnEl = document.getElementById("convert-btn") as HTMLButtonElement | null;

if (!convertBtnEl) {
  throw new Error("Element not found");
}

const numberInputEl = document.getElementById("number") as HTMLInputElement | null;

if (!numberInputEl) {
  throw new Error("Element not found");
}

const outputEl = document.getElementById("output") as HTMLDivElement | null;

if (!outputEl) {
  throw new Error("Element not found");
}

const clearBtnEl = document.getElementById("clear-btn") as HTMLButtonElement | null;

if (!clearBtnEl) {
  throw new Error("Element not found");
}

const convertToRoman = (): void => {
  const singles: string[] = ["","I","II","III","IV","V", "VI", "VII", "VIII", "IX"];
  const tens: string[] = ["","X","XX","XX","XL","L","LX","LXX","LXXX","XC"];
  const hundreds: string[] = ["","C","CC","CCC","CD","D","DC","DCC", "DCCC","CM"];
  const thousands: string[] = ["", "M", "MM", "MMM", "MMMM"];
  
  let inputValue: string = numberInputEl.value;
  let length: number = inputValue.length;
  let numbers: number[] = inputValue.split("").map(Number);
  let roman: string = "";
  let i: number = 0;

  if (inputValue.length === 0) {
    outputEl.innerHTML = `<p class="output-style">Please enter a valid number</p>`; 

  } else if (parseInt(inputValue) < 0) {
    outputEl.innerHTML = `<p class="output-style">Please enter a number greater than or equal to 1</p>`;
 
  } else if (parseInt(inputValue) >= 4000) {
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
 clearBtnEl.style.display = "inline";
  }
}

const clearInput = () : void => {
  numberInputEl.value = "";
  outputEl.innerHTML = "";
  clearBtnEl.style.display = "none";
}

convertBtnEl.addEventListener("click", convertToRoman);

clearBtnEl.addEventListener("click", clearInput)
