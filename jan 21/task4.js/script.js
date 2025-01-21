var btn = document.querySelector("button");
var input = document.querySelector("input");
var unorderedList = document.querySelector("ul");
var list;

var deleteBtn;

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
  } else {
    list = document.createElement("li");

    deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete Element";
    list.textContent = input.value;

    unorderedList.appendChild(list);
    list.appendChild(deleteBtn);

    input.value = "";

    deleteBtn.addEventListener("click", () => {
        unorderedList.removeChild(list);
    });
  }
});
