let requestURL = "https://jsonplaceholder.typicode.com/todos/1";
fetch(requestURL)
      .then(response => response.json())
      .then(json => alertMe(JSON.stringify(json)))

function alertMe(message) {
    alert(message);
}