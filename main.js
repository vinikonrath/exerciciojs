const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
event.preventDefault();

const campoA = document.getElementById("campoA").value;
const campoB = document.getElementById("campoB").value;

if (campoB > campoA) {
    // formulário válido
    alert("Formulário válido!");
} else {
    // formulário inválido
    alert("Formulário inválido!");
}
});