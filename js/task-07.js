
const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("change", e => {
    textRef.style.fontSize = `${e.target.value}px`;
});
