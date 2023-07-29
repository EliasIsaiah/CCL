async function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form);
    const entries = formData.entries();

    // Convert the form data to a JSON object
    const data = Object.fromEntries(entries);

    // Send the data to the weather endpoint
    try {
        const response = await fetch('http://localhost:3000/weather', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const responseData = await response.json();
        const resultDiv = document.getElementById('result');
        // resultDiv.innerHTML = `Weather for ${responseData.city}: ${responseData.weather}`;
        resultDiv.innerHTML = JSON.stringify(responseData);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Attach event listener to the form submit event
const weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', submitForm);