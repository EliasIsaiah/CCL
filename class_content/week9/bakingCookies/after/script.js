const bakeButton = document.getElementById('bakeButton');
const loadingAnimation = document.getElementById('loadingAnimation');
const resultDiv = document.getElementById('result');
const cookiesDiv = document.getElementById('cookies');


// showFailureNotification();

bakeButton.addEventListener('click', async () => {

  cookiesDiv.innerHTML = "";
  toggleLoadingAnimation();
  const numberOfCookiesBaked = await bakeCookies().catch((error) => {
    displayResult(`Error: ${error}`);
    showFailureNotification();
  });
  toggleLoadingAnimation();
  if (numberOfCookiesBaked) {
    displayResult(`Cookies baked successfully! You have ${numberOfCookiesBaked} cookies.`)
    addCookies(numberOfCookiesBaked);
  } else console.log("there was an error");
});

const bakeCookies = async () => {
  displayResult("");
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation with a timeout
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% success rate

      if (success) {
        const cookies = Math.floor(Math.random() * 20) + 1; // Random number of cookies (1-20)
        resolve(cookies);
      } else {
        reject('Failed to bake cookies.');
      }
    }, 2000); // Simulating 2 seconds of baking time
  });
}

function toggleLoadingAnimation() {
  loadingAnimation.classList.toggle('hidden');
}

function displayResult(message) {
  resultDiv.textContent = message;
  resultDiv.classList.remove('hidden');
}

function addCookies(numberOfCookies) {
  let cookieDiv;
  for (let i = 0; i < numberOfCookies; i++) {
    cookieDiv = document.createElement("div");
    cookieDiv.className = "cookie";
    cookieDiv.innerText = "🍪";
    cookiesDiv.appendChild(cookieDiv);
  }
}

function showFailureNotification() {
  let failureDiv = document.createElement("div");
  let burntDiv = document.createElement("div");
  burntDiv.className = "burnt";
  burntDiv.innerText = "🍪";
  failureDiv.className = "failed";
  failureDiv.innerText = "🔥🔥🔥🤡";
  cookiesDiv.appendChild(burntDiv);
  cookiesDiv.appendChild(failureDiv);
}