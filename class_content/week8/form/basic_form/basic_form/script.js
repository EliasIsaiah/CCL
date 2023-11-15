const basicForm = document.getElementById("basic_form");
const likesChocolateCheckbox = document.getElementById("likesChocolate");
const likesSpaghettiCheckbox = document.getElementById("likesSpaghetti");
const likesLemonsCheckbox = document.getElementById("likesLemons");
const emojiDisplay = document.getElementById("emojiDisplay")
let entries;

basicForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    entries = formData.entries()
    console.log("entries", entries);
    const formObject = Object.fromEntries(entries)
    console.log("data object:", formObject);

    realFormData = {
        "likesChocolate": "on",
        "likesSpaghetti": "on",
        "likesLemons": "on"
    }

    if (!formObject.likesChocolate &&
        !formObject.likesSpaghetti &&
        !formObject.likesLemons) {
        emojiDisplay.innerText = "YOU HAVE TO SELECT SOMETHING! 😡";
        basicForm.classList.toggle("red-border");
    }

    if (!likesChocolateCheckbox.checked &&
        !likesSpaghettiCheckbox.checked &&
        !likesLemonsCheckbox.checked) {

        emojiDisplay.innerText = "YOU HAVE TO SELECT SOMETHING! 😡";
        basicForm.classList.toggle("red-border");
    }

    if (likesSpaghettiCheckbox.checked) emojiDisplay.innerText = "🍝"
})