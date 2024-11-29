document.addEventListener('DOMContentLoaded', function () {
    const accessButton = document.getElementById('access-btn');
    const loginModal = document.getElementById('login-modal');
    const closeButton = document.getElementById('close-btn');
  
    accessButton.addEventListener('click', function () {
      loginModal.style.display = 'block';
    });   
    closeButton.addEventListener('click', function () {
      loginModal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  });
function inicializarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
function fecharModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function inicializarModalContato() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "block";
}
function fecharModalContato() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var contactModal = document.getElementById("contactModal");
    var myModal = document.getElementById("myModal");

    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }

    if (event.target == myModal) {
        myModal.style.display = "none";
    }
};
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


function abrirCadastroModal() {
    var modal = document.getElementById("cadastro-modal");
    modal.style.display = "block"; // Torna o modal visível
}

function fecharCadastroModal() {
    var modal = document.getElementById("cadastro-modal");
    modal.style.display = "none"; 
}

function fecharLoginModal() {
    var modal = document.getElementById("login-modal");
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    var loginModal = document.getElementById("login-modal");
    var cadastroModal = document.getElementById("cadastro-modal");

    if (event.target == loginModal) {
        loginModal.style.display = "none"; 
    }
    if (event.target == cadastroModal) {
        cadastroModal.style.display = "none"; 
    }
};
 

// MODO ESCURO IMPORT NOVO

let isPreto = false; // Controle para saber qual cor está aplicada

function toggleCor() {
    if (isPreto) {
        // Voltar à cor original
        document.body.style.background = "linear-gradient(120deg, #1a7e27, #00b35f)";
        document.body.style.color = "#fff";
    } else {
        // Alterar para preto
        document.body.style.background = "#000";
        document.body.style.color = "#fff";
    }
    isPreto = !isPreto; // Alterna o estado
}

//IMPORT TOGGLECONTENTE NOVA
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

//IMPORTAÇÃO MODALCLIENTE DUVIDAS
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

function inicializarModalContato_client() {
    var modal = document.getElementById("contactModal.client");
    modal.style.display = "block";
}

function fecharModalContato_client() {
    var modal = document.getElementById("contactModal.client");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("contactModal.client");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Função para alternar a visibilidade do formulário de solicitação de orçamento
function toggleRequestForm() {
    var form = document.getElementById("request-form");
    var arrow = document.querySelector(".arrow");
  
    // Verifica se o formulário está visível ou não
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block"; // Exibe o formulário
      arrow.classList.add("down"); // Gira a seta para baixo
    } else {
      form.style.display = "none"; // Esconde o formulário
      arrow.classList.remove("down"); // Restaura a seta para a posição original
    }
  }
  
  