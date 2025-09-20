const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      expression = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        display.value = eval(expression); // evaluate math expression
        expression = display.value;       // store result
      } catch (error) {
        display.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      display.value = expression;
    }
  });
});
