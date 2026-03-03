

const myBox = document.getElementById("myBox");

// function changeColor(event){
//     event.target.style.backgroundColor="tomato";
// }
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor="tomato";
    event.target.textContent = "hello";
});