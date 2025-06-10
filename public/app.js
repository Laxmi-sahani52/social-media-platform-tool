async function createPost() {
  const content = document.getElementById("post-content").value;
  const username = document.getElementById("username").value;

  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, content })
  });
  document.getElementById("post-content").value = "";
  loadPosts();
}

async function loadPosts() {
  const res = await fetch("/api/posts");
  const posts = await res.json();
  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<strong>${post.username}</strong><p>${post.content}</p>`;
    feed.appendChild(div);
  });
}

loadPosts();
