document.forms[0].onsubmit = function (){
    
    if (document.querySelector("#nome").value.length < 4 || document.querySelector("#nome").value.length > 20){
        document.querySelector("#msgNome").innerHTML = "O nome deve ter no mínimo 4 caracteres e no máximo 20.";        
        return false;
    }
    if (document.querySelector("#telefone").value.length != 11){
        document.querySelector("#msgTelefone").innerHTML = "O telefone deve ter 11 números."; 
        return false;
    }
    if (document.querySelector("#email").value =="" || document.querySelector("#email").value.indexOf('@') =="" -1 || document.querySelector("#email").value.indexOf('.') =="" -1){
        document.querySelector("#msgEmail").innerHTML = "É obrigatório digitar o campo: @";
        return false;
    }
    if (document.querySelector("#assunto").value.length < 5 || document.querySelector("#assunto").value.length > 60){
        document.querySelector("#msgAssunto").innerHTML = "O assunto deve ter no mínimo 5 caracteres e no máximo 60 caracteres.";
        return false;
    }
    if (document.querySelector("#mensagem").value.length < 10 || document.querySelector("#mensagem").value.length > 300){
        document.querySelector("#msgMensagem").innerHTML = "O assunto deve ter no  mínimo 10 caracteres e no máximo 300 caracteres.";
        return false;
    }
}