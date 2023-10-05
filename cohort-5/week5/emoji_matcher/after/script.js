    const emojis = [
      '😀', '😀', '😄', '😁', '😅', '😂',
      '🙂', '🙃', '😉', '😊', '😇', '😍'
    ];

    // Duplicate the list to create matching pairs
    const emojiPairs = emojis.concat(emojis);

    // Shuffle the array to randomize card positions
    shuffleArray(emojiPairs);

    // Create the game board
    const gameBoard = document.getElementById('game-board');
    emojiPairs.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = '📦';
      card.addEventListener('click', () => {
        revealCard(card, emoji);
      });
      gameBoard.appendChild(card);
    });

    let firstCard = null;
    let secondCard = null;
    let isProcessing = false;

    // Function to reveal a card
    function revealCard(card, emoji) {
      if (isProcessing || card === firstCard) {
        return;
      }

      card.textContent = emoji;

      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        isProcessing = true;

        // Check if the two revealed cards match
        if (firstCard.textContent === secondCard.textContent) {
          // Match!
          setTimeout(() => {
            firstCard.style.backgroundColor = 'lightgreen';
            secondCard.style.backgroundColor = 'lightgreen';
            resetCards();
          }, 500);
        } else {
          // No match, hide the cards again
          setTimeout(() => {
            firstCard.textContent = '📦';
            secondCard.textContent = '📦';
            resetCards();
          }, 1000);
        }
      }
    }

    // Reset the current card selection
    function resetCards() {
      firstCard = null;
      secondCard = null;
      isProcessing = false;
    }

    // Function to shuffle an array
    // JavaScript implementation of the Durstenfeld shuffle
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }