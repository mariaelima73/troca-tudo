const buttonLogin = document.querySelector("#login");
const modal = document.querySelector("dialog");
const buttonFechar = document.querySelector("#fechar");
const buttonFechar2 = document.querySelector(".fechar");
buttonLogin.onclick = function() {
    modal.showModal();
}
buttonFechar.onclick = function() {
    modal.close();
}
buttonFechar2.onclick = function() {
    modal.close();
}
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});