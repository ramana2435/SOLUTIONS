const char = document.querySelector(".char");
const word = document.querySelector(".word");
const textArea = document.querySelector("textarea");

textArea.addEventListener("input", () => {
  const value = textArea.value;
  char.textContent = value.length;
  word.textContent = value.trim() ? value.trim().split(/\s+/).length    :        0       ;
});
