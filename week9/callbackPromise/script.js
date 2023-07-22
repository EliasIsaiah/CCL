let list = document.getElementById("list");
let posts = [];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       let item = document.createElement("li");
//       item.innerText = post.title;
//       list.appendChild(item);
//     });
//   }, 1000);
// }


// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     let error = false;
//     if (!error) {
//       posts.push(post);
//       resolve();
//     } else {
//       reject("Something went wrong!!!!!!!!");
//     }
//   });
// }
async function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Something went wrong!!!!!!!!");
      }
    }, Math.floor(Math.random() * 1001) + 1000);
  });
}

let postPromises = [];
// postPromises.push(createPost({ title: "Post 1", body: "This is post 1" }));
// postPromises.push(createPost({ title: "Post 2", body: "This is post 2" }));
// postPromises.push(createPost({ title: "Post 3", body: "This is post 3" }));
// postPromises.push(createPost({ title: "Post 4", body: "This is post 4" }));
let post1 = { title: "Post 1", body: "This is post 1" };
let post2 = { title: "Post 2", body: "This is post 2" };
let post3 = { title: "Post 3", body: "This is post 3" };
let post4 = { title: "Post 4", body: "This is post 4" };

// getPosts();

// example of async/await usage:
// <button id="getNewOrders">Get new orders<button>
let newOrderButton = document.getElementById("getNewOrders");

newOrderButton.onclick = () => {
  getMealOrders();
}

async function getMealOrders() {
  let newOrders = await retrieveOrdersFromDatabase();
  for (order in newOrders) {
    let item = document.createElement("li");
    item.innerText = post.title;
    list.appendChild(item);
  }
}

async function getPosts() {
  await createPost(post1);
  await createPost(post2);
  await createPost(post3);
  await createPost(post4);
  posts.forEach((post) => {
    let item = document.createElement("li");
    item.innerText = post.title;
    list.appendChild(item);
  });
}

getPosts();
    // Promise.all(postPromises).then(getPosts);