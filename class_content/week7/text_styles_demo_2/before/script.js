const input = document.getElementById("input");
const italicCell = document.getElementById("italic");
const boldCell = document.getElementById("bold");
const codeCell = document.getElementById("code");


input.addEventListener("keyup", (e) => {
  italicCell.lastChild.innerText = e.target.value;
  boldCell.lastChild.innerText = e.target.value;
  codeCell.lastChild.innerText = e.target.value;
})

let highlightSpans; // use document.getElementsByClassName to retrieve all elements with class name "demoTextSpan" 

function toggleHighlight() {
  
  // use a `for of` loop to iterate through the highlightSpans array.
  // for each span in the list, use <element>.classList.toggle("highlight") to toggle the "highlight" class on the element. this class applies hightlight styling.

  // for(span of highlightSpans) {
  //   span.classList.toggle("highlight")
  // }
}

let highlightCheckbox; // use document.getElementById to retrieve the element with id "highlightCheckbox"

// use highlightCheckbox.addEventListener to call the toggleHighlight function when a click event is emitted from the checkbox
highlightCheckbox.addEventListener("click", toggleHighlight);