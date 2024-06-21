const button = document.getElementById("button");
const output = document.getElementById("output");
const codeElement = document.createElement("code");

// add an event listener by setting an element's onclick property

button.addEventListener("click", (event) => {
  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts/2")
  //   .then((response) => console.log(response.data));

  // const payload = {
  //   title: "foo",
  //   body: "bar",
  //   userId: 1,
  // };

  // axios
  //   .post("https://jsonplaceholder.typicode.com/post", payload)
  //   .then((response) => console.log(response.data))
  //   .catch((e) => console.log(e));

  axios("https://jsonplaceholder.typicode.com/elias")
    .then((response) => {
      codeElement.innerText = JSON.stringify(response.data);
      output.appendChild(codeElement);
    })
    .catch((e) => {
      if (e.response.status === 404) {
        console.log("invalid user request");
      } else if (e.response.status === 500) {
        console.log("internal server error");
      } else {
        console.log(e.message);
      }
    });
});

// button.addEventListener("click", async (event) => {
//   const response = await axios({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//   });

//   codeElement.innerText = JSON.stringify(response.data);
//   output.appendChild(codeElement);
// });
