function inicializarModal() {

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("button");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function inicializarModalContato() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "block";
}

function fecharModalContato() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function inicializarModalCliente() {
    var modal = document.getElementById("clienteModal");
    modal.style.display = "block";
}

function fecharModalCliente() {
    var modal = document.getElementById("clienteModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("clienteModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function toggleContent(button) {

    var content = button.nextElementSibling;
    var arrow = button.querySelector(".arrow");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.classList.add("down");
    } else {
        content.style.display = "none";
        arrow.classList.remove("down");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var contents = document.querySelectorAll(".hidden-content");
    contents.forEach(function (content) {
        content.style.display = "none";
    });
});

let isPreto = false; // Controle para saber qual cor está aplicada

function toggleCor() {
    if (isPreto) {
        // Voltar à cor original
        document.body.style.background = "linear-gradient(120deg, #1a7e27, #00b35f)";
        document.body.style.color = "#fff";
    } else {
        // Alterar para preto
        document.body.style.background = "#2f2f2f";
        document.body.style.color = "#fff";
    }
    isPreto = !isPreto; 
}