fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        const domText = `userId: ${json.userId}
                         id: ${json.id}
                         title: ${json.title}
                         body: ${json.body}`
        console.log(json)
        const responseDiv = document.getElementById("apiResponse")
        responseDiv.innerText = domText;
    });