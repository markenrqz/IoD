const postList = document.getElementById("post-list");

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((posts) => {
      displayPosts(posts);
    });
};

const displayPosts = (posts) => {
  postList.innerHTML = "";

  posts.forEach((post) => {
    postList.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
      </div>
    `;
  });
};

getPosts();
