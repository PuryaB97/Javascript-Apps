let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createPost();
  input.value = "";
};

let createPost = () => {
  posts.innerHTML += `
  
          <div class="">
            <p>${data.text}</p>
            <span class="options">
              <i class="fa-sharp fa-solid fa-pen-to-square" onclick="editPost(this)"></i>
              <i class="fa-solid fa-trash-can" onclick="deletePost(this)"></i>
            </span>
          </div>
  
  `;
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
