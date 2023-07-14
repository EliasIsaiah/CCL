const bakeButton = document.getElementById('bakeButton');
const loadingAnimation = document.getElementById('loadingAnimation');
const resultDiv = document.getElementById('result');

bakeButton.addEventListener('click', () => {
  showLoadingAnimation();

  bakeCookies()
    .then(cookies => {
      displayResult(`Cookies baked successfully! You have ${cookies} cookies.`);
    })
    .catch(error => {
      displayResult(`Error: ${error}`);
    })
    .finally(() => {
      hideLoadingAnimation();
    });
});

function bakeCookies() {
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