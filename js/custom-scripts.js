  document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".type-effect");
    const text = "Olá, sou a Kevellyn"; // Your desired text
    let index = 0;
    
    // Function to simulate typing
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust this value to change typing speed (100ms per letter)
      } else {
        // Once the typing is done, make the cursor blink
        element.style.animation = "blink 0.75s step-end infinite";
      }
    }

    // Start typing
    type();
  });
