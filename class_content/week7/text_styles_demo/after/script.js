let cells = [
  document.getElementById("input"),
  document.getElementById("italic"),
  document.getElementById("bold"),
  document.getElementById("code"),
  document.getElementById("strikethrough")
]

input.addEventListener("keyup", (e) => {
  cells.forEach(cell => cell.innerText = e.target.value);
})