const buttonLogin = document.querySelector("#login");
const modal = document.querySelector("dialog");
const buttonFechar = document.getElementsByClassName("fechar");

buttonLogin.onclick = function() {
    modal.showModal();
}

buttonFechar.onclick = function() {
    modal.close();
}