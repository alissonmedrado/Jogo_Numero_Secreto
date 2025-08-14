//let titulo = document.querySelector('h1');//seleciona a tag do html que deseja incluir algo
//titulo.innerHTML = 'Jogo do número secreto';//insere dentro do html o texto com uma variavel atribuida

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//evite repetições de codigos com uso de funções

let listaDeNumerosSorteados = []; //criação de uma lista vazia
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); //declarando variavel e usando a funcao
let tentativas = 1;

//Funcao que possui parametros (tag,texto)
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate: 1.2}); //responsavel por ler tudo que esta escrito atraves de uma IA , ele narra o texto"deve esta no import do html para funcionar 'responsive voice'"

    
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial()

//Funcao que nao possui nem retorno e nem parametros
function verificarChute(){ //criando uma funcao com um nome, responsavel por determinar alguma ação dentro do programa
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        exibirTextoNaTela('h1','Acertou!')
        let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número Secreto com ${tentativas} ${PalavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');//interação com html nos atributos do button
        
    } else {
        if (chute > numeroSecreto){

            exibirTextoNaTela('p','o número secreto é menor')



        }else{
            exibirTextoNaTela('p','O número secreto é maior')


        }
        tentativas++;
        limparCampo();
    

    }
    

}
//Funcao que possui um retorno "return"
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //jogamos a geração dos numeros aleatorios dentro de uma variavel numero escolhido
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //verficando a quantidade de elementos da lista
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];

    }




    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //utilizamos "includes metodo ja existe no javascript"(verifica se o elemento esta na lista)
        return gerarNumeroAleatorio(); //Funcao que chama a propria função chamada de recursão , ele vai gerar novamente caso o numero ja esteja na lista por isso o uso do if para condição
        
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);//inserindo na lista com "push"(adiciona item ao final da lista) 
        console.log(listaDeNumerosSorteados) //uso do console para testar o comportamento do que escrevemos e garantir que esta correto
        return numeroEscolhido;

    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


}



//Uso de Listas(Arrays)
//let numeros = [1, 5 , 9] //Criando uma lista array , sempre o indice começa com "0" 
//numeros.length //length exibe a quantidade de elementos que temos na lista
//numeros[0] //pega numero 1 que seria o indice 0 da nossa lista 
//Linguagens[Linguagens.length -1] //podemos pegar o ultimo valor da nossa lista utilizando o tamanh -1 , assim ele pega sempre o ultimo valor dado que o indice inicial é 0 
//frutas.push("Morango"); //inclui ao final da lista
//frutas.pop(); //remove ultimo elemento da lista