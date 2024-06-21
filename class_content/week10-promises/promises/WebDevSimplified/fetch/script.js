fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Elias Roussos'
    })
}).then(response => {
    console.log("response.status =", response.status);
    console.log(response.headers.get("Content-Type"))
    return response.json()
})
    .then(json => {
        console.log(json)
    })
    .catch(error => console.log('ERROR'))