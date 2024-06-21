# My First API Client Exercise
## I want to get practice interacting with a RESTful api, using Axios!

## Deliverables
### You do any or all of these, at least one.
* change the ID on the JSONPlaceholder request URI:
  * example: change `https://jsonplaceholder.typicode.com/posts/2` to `https://jsonplaceholder.typicode.com/posts/3`
  * observe: how does this change the response?
* change what resource you are requesting from JSONPlaceholder
  * example: change `https://jsonplaceholder.typicode.com/posts/2` to `https://jsonplaceholder.typicode.com/posts` 
  * observe: how does this change the response?
* change the HTTP Verb to make a POST request instead of a GET request
  * example: 
    ```javascript
    axios.post('https://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body: 'bar',
    userId: 1,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });```
* make a better front-end view for the response object

  * if your response is an object structured like the following:
    ```json {
    id: 1,
    title: '...',
    body: '...',
    userId: 1
    }
    ```

    take those properties and place them into a table, or into h1s or p elements. experiment with taking that response object and extracting the values and presenting them.