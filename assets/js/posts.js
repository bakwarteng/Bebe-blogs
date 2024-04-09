const themeToggle = document.getElementById(`light-dark`);
const ul = document.querySelector("#postContent");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
function retriveBlog() {
  const blogPosts = JSON.parse(localStorage.getItem("blogs")) || [];

  console.log(blogPosts);
  for (let i = 0; i < blogPosts.length; i++) {
    let li = document.createElement("li");
    li.textContent = blogPosts[i].username;
    ul.appendChild(li);
    let li2 = document.createElement("li");
    li2.textContent = blogPosts[i].title;
    ul.appendChild(li2);
    let li3 = document.createElement("li");
    li3.textContent = blogPosts[i].content;
    ul.appendChild(li3);
  }
}
retriveBlog();
