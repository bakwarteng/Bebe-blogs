const themeToggle = document.getElementById(`light-dark`);
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  console.log("click");
});

document.getElementById("submitButton").addEventListener("click", function () {
  const title = document.getElementById("blogTitle");
  const username = document.getElementById("username");
  const content = document.getElementById("blogContent");
  let newBlog = [title.value, username.value, content.value];
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blog = {
    title: newBlog[0],
    username: newBlog[1],
    content: newBlog[2],
  };
  if (title.value === "") {
    alert("Must enter a title");
    return;
  }
  if (username.value === "") {
    alert("Must enter a username");
    return;
  }
  if (content.value === "") {
    alert("Must enter blog content");
    return;
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  window.location.href = "posts.html";
});
if (localStorage) {
  contentDisplay.textContent = "blogContent";
} else {
  contentDisplay.textContent = `No content stored.`;
}
