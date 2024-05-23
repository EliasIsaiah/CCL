const addEmojiButton = document.getElementById("add-emoji-btn");

const demoButton = document.getElementById("demo-btn");

// add an event listener by setting an element's onclick property

function createEmojiDiv(event) {
  console.log(event.target.textContent);

  const wrapperDiv = document.getElementById("wrapper");
  const emojiDiv = document.createElement("div");
  emojiDiv.textContent = "😁";
  emojiDiv.classList.add("emoji");

  wrapperDiv.prepend(emojiDiv);
}

// add an event listener by calling the "addEventListener" method
// addEmojiButton.addEventListener("click", createEmojiDiv);
addEmojiButton.addEventListener("click", createEmojiDiv);
