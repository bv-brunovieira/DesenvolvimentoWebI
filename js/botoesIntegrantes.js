document.querySelector("#botaoAdicionarIntegrante").onclick = function() {
    var campoIntegrante = document.createElement("input")
    campoIntegrante.type = "text"
    campoIntegrante.classList.add("form-control")
    campoIntegrante.classList.add("mt-1")
    campoIntegrante.placeholder = "Digite o nome do integrante"
    campoIntegrante.name = "integrantes[]"
    document.querySelector("#divIntegrantes").appendChild(campoIntegrante)

    document.querySelector("#botaoRemoverIntegrante").disabled = false
    document.querySelector("#botaoRemoverIntegrante").classList.remove("disabled")

    var camposIntegrantes = document.querySelectorAll("input[name='integrantes[]']")

    if (camposIntegrantes.length >= 5) {
        document.querySelector("#botaoAdicionarIntegrante").disabled = true
        document.querySelector("#botaoAdicionarIntegrante").classList.add("disabled")
    }
}

document.querySelector("#botaoRemoverIntegrante").onclick = function() {
    var camposIntegrantes = document.querySelectorAll("input[name='integrantes[]']");
    var quantidadeCampos = camposIntegrantes.length;
    camposIntegrantes[quantidadeCampos - 1].remove();
    document.querySelector("#botaoAdicionarIntegrante").disabled = false;
    document.querySelector("#botaoAdicionarIntegrante").classList.remove("disabled");

    quantidadeCampos--;

    if (quantidadeCampos == 1) {
        document.querySelector("#botaoRemoverIntegrante").disabled = true;
        document.querySelector("#botaoRemoverIntegrante").classList.add("disabled");
    }
}

document.forms[0].onsubmit = function() {
    var campoAlgoritmo = document.querySelector("#algoritmo");

    if (campoAlgoritmo.value == "Bubble Sort" || campoAlgoritmo.value == "Selection Sort" || campoAlgoritmo.value == "Insertion Sort") {
        return true;
    } else {
        if (document.querySelector("#divAlerta") == null) {
            var divAlerta = document.createElement("div");
            divAlerta.id = "divAlerta";
            divAlerta.classList.add("bg-danger2");
            divAlerta.classList.add("rounded");
            divAlerta.classList.add("mt-3");
            divAlerta.classList.add("p-3");
            var textoAlerta = document.createElement("h4");
            textoAlerta.innerText = "O algoritmo escolhido não é válido!";
            divAlerta.appendChild(textoAlerta);
            document.querySelector("div.container").appendChild(divAlerta);
            campoAlgoritmo.select();
            return false;
        }
    }
}

document.querySelector("#algoritmo").onblur = function() {
    var divAlerta = document.querySelector("#divAlerta");
    if (divAlerta != null) {
        divAlerta.remove();
    }
};