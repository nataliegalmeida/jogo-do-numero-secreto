
let listaDeNumerosSorteados=[];
let numeroLimite = 10;
let numeroSecreto = criarNumAleatorio ();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
    
} 
function exibirMensagemInicial (){
 exibirTextoNaTela('h1','Jogo do número secreto');
 exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
function verificarChute(){
    let chute = document.querySelector('input').value;
      //console.log(numeroSecreto == chute);  
   if (chute == numeroSecreto ){
      exibirTextoNaTela ('h1','Você acertou!! Parabéns!!');
      let palavraTentativa = tentativas> 1?'tentativas' : 'tentativa';
      let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
      exibirTextoNaTela ('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
        exibirTextoNaTela('h1','O número secreto é menor');
         }else{
            exibirTextoNaTela('h1','O número secreto é maior');
            }
            limparCampo();
            tentativas++;
          }
          
               
  }
    
  
function criarNumAleatorio(){
let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite){
  listaDeNumerosSorteados= [];
}

if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return criarNumAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (numeroEscolhido)
    return numeroEscolhido;
  }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
    
}
function reiniciarJogo(){
  numeroSecreto = criarNumAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled',true);

}
