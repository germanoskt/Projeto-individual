var botaoEnviar = document.getElementById("botao-enviar");
function pegaValores(){
    var lista = [];
    armazenar.innerHTML = ""
    var arm = 0;
        var pontos = document.getElementsByName("pontuacao");
        
        for(var i = 0; i < pontos.length; i++){
            var itemAtual = pontos[i];
            if(itemAtual.checked){
                console.log(`Seus pontos são: ${itemAtual.value}`);
                lista.push(itemAtual.value);
                arm += Number(itemAtual.value); 
                armazenar.innerHTML = `${arm}<br>`
            }
        }
        console.log(lista)
    }
botaoEnviar.addEventListener("click", pegaValores);
