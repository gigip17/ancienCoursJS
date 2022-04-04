//SELECTEURS
//document.getElementById('h4').style.background = "yellow";

//const baliseHTML = document.querySelector('h4');
//baliseHTML.style.background = "yellow";

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector("p");


questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('question-clicked');

});

btn1.addEventListener("click", () => {
    response.style.visibility = "visible";
});
btn1.addEventListener("click", () => {

});

