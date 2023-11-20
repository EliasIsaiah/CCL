const bakeButton = document.getElementById('bakeButton');
const loadingAnimation = document.getElementById('loadingAnimation');
const resultDiv = document.getElementById('result');
const cookiesDiv = document.getElementById('cookies');


// showFailureNotification();

bakeButton.addEventListener('click', async () => {

  cookiesDiv.innerHTML = "";
  toggleLoadingAnimation();
  let numberOfCookiesBaked
  try {
    numberOfCookiesBaked = await bakeCookies();
  } catch (error) {
    displayResult(`Error: ${error}`);
    showFailureNotification();
  }
  toggleLoadingAnimation();
  if (numberOfCookiesBaked) {
    displayResult(`Cookies baked successfully! You have ${numberOfCookiesBaked} cookies.`)
    addCookies(numberOfCookiesBaked);
  } else console.log("there was an error");
});

/**
 * @returns Promise
 */
const bakeCookies = async () => {
  // step 1.  clear out the display with displayResult("");
  // ...
  // step 2.  create a new promise object
  //
  // step 2a. inside of the promise use setTimeout to simulate the amount of time it takes to bake cookies (at least 2 seconds)
  //          calculate the chance of success (not burning the cookies) by using Math.random()
  //          sometimes you should burn the cookies - the rate of failure is up to you
  // step 3a. if the cookies are baked successfully:
  //          calculate a random number of cookies using Math.random()
  //          resolve the promise, returning then number of cookies baked
  // step 3b. if the cookies are burnt:
  //          reject the promise with the message "Failed to bake cookies"
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