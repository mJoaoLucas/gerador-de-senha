/*created by: bozokk.exe*/



//fzndo a conexão com o HTML.

let elementorolador = document.querySelector("#rolador")
let botao = document.querySelector("#botao")
let numpass = document.querySelector("#valor")
let senha = document.querySelector("#senha")
let contpass = document.querySelector("#container-senha")

//definindo os caracteres q vai entrar a senha
let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"
var novasenha = ""

//vai colocar em numpass o valor de elementorolador
numpass.innerHTML = elementorolador.value

/*o "oinput" vai permitir q a variavel pegue o valor q o ususario deixar definido no rolador.
criou a função para o numpass.innerHTML pegar o valor exato (this.value) q o usuario deixar no rolador*/

elementorolador.oninput =  function() {
    numpass.innerHTML = this.value
}
//função para gerar a senha
function gerarsenha() {

    //let pass para armazenar a senha
    let pass = ""
    for (let ini = 0, nwp = caracteres.length; ini < elementorolador.value; ini++) {
        pass += caracteres.charAt(Math.floor(Math.random() * nwp))
        //charAt vai pegar uma posição(Math.floor)gerar um numero inteiro(Math.random) para ser aleatorio, nwp é a var q armazena o numero total de caracteres
    }
    senha.innerHTML = pass
    novasenha = pass
}

function copiarpass() {
    navigator.clipboard.writeText(novasenha)
    alert("Senha copiada com sucesso!")

}
