console.log("Does this work?");

const isEven = (num) => num % 2 === 0;


document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  // Test
  const divElement = document.getElementById("output");
  //divElement.textContent = "You clicked submit!";

  // Get the value entered in the "n1" input box.
  // Can use form elements values or get the 
  //    element by id.
  // We'll get it by id for now
  //
  const n1 = document.getElementById("n1").value;
  //divElement.textContent = `You entered ${n1}`;

  const n1Value = Number.parseInt(n1);
  if (isEven(n1Value)) {
    divElement.textContent = `You entered ${n1} which is even`;
  } else {
    divElement.textContent = `You entered ${n1} which is odd`;
  }


  // Get the value of the number from the form element
  //  Use the element name (not the ID.  Same in this case)
  const n2 = e.target.elements.n1.value;
  divElement.innerHTML += `<br> A different way to get the value.  It is: ${n2}`;
})