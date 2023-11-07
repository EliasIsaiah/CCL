const input = document.getElementById("input");
const italicCell = document.getElementById("italic");
const boldCell = document.getElementById("bold");
const codeCell = document.getElementById("code");


input.addEventListener("keyup", (e) => {
  italicCell.lastChild.innerText = e.target.value;
  boldCell.lastChild.innerText = e.target.value;
  codeCell.lastChild.innerText = e.target.value;
})

let highlightSpans = document.getElementsByClassName("demoTextSpan");

function toggleHighlight() {
  for(span of highlightSpans) {
    span.classList.toggle("highlight")
  }
}

let highlightCheckbox = document.getElementById("highlightCheckbox");

highlightCheckbox.addEventListener("click", toggleHighlight);