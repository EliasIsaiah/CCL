let list = document.getElementById("list");
let posts = [];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      let item = document.createElement("li");
      item.innerText = post.title;
      list.appendChild(item);
    });
  }, 1000);
}

function createPost(post) {
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
postPromises.push(createPost({ title: "Post 1", body: "This is post 4" }));
postPromises.push(createPost({ title: "Post 2", body: "This is post 5" }));
postPromises.push(createPost({ title: "Post 3", body: "This is post 6" }));
postPromises.push(createPost({ title: "Post 4", body: "This is post 7" }));

Promise.all(postPromises).then(getPosts);