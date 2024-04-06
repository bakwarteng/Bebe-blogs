document.getElementById("submit").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const username = document.getElementById("username").value;
  const content = document.getElementById("content").value;
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const newBlog = { title, username, content };
  blogs.push(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
});
