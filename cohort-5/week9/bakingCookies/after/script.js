const bakeButton = document.getElementById('bakeButton');
const loadingAnimation = document.getElementById('loadingAnimation');
const resultDiv = document.getElementById('result');

bakeButton.addEventListener('click', async () => {

  showLoadingAnimation();
  const myApiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(myApiResponse.json());
  const numberOfCookiesBaked = await bakeCookies().catch((error) => {
    displayResult(`Error: ${error}`);
  });
  hideLoadingAnimation();
  numberOfCookiesBaked ? displayResult(`Cookies baked successfully! You have ${numberOfCookiesBaked} cookies.`) : console.log("there was an error");

  //   displayResult(`Error: ${numberOfCookiesBakedOrFailureMessage}`);
  // } else displayResult(numberOfCookiesBakedOrFailureMessage);

  // const bakeCookiesPromise = bakeCookies();
  //   bakeCookiesPromise.then(cookies => {
  //     displayResult(`Cookies baked successfully! You have ${cookies} cookies.`);
  //     console.log("cookies retrieved cosole log");
  //   })
  //   .then(() => {
  //     console.log("you should have retrieved your cookies by now, or errored and skipped me");
  //   })
  //   .catch(error => {
  //     displayResult(`Error: ${error}`);
  //   })
  //   .finally(() => {
  //     hideLoadingAnimation();
  //   });
  // console.log("clicked the cookies button!");
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

function showLoadingAnimation() {
  loadingAnimation.classList.remove('hidden');
}

function hideLoadingAnimation() {
  loadingAnimation.classList.add('hidden');
}

function displayResult(message) {
  resultDiv.textContent = message;
  resultDiv.classList.remove('hidden');
}