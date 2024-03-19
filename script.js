document.addEventListener("DOMContentLoaded", function() {
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          if (this.value === "=") {
              try {
                  result.value = eval(result.value);
              } catch (error) {
                  result.value = "Error";
              }
          } else if (this.value === "C") {
              result.value = "";
          } else if (this.value === "DEL") {
              result.value = result.value.slice(0, -1);
          } else {
              result.value += this.value;
          }
      });
  });
});
