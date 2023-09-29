function adicionarTexto(botao){    
    document.querySelector('[type=tel]').value = botao;
    console.log(botao);
}

const listaDeTeclas = document.querySelectorAll('[type=button]');

for (let contador=0; contador < listaDeTeclas.length;contador++){
    const botao = listaDeTeclas[contador]
    console.log(botao);
    botao.onclick = function(){
    adicionarTexto(botao.value);
    }
};