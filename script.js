const tarefa = document.getElementById ('inputTarefa');         //Todo elemento do DOM que será alterado, 
const botao = document.getElementById ('botao');                //tem que ser "declarado/pego"!!!
const listaDeTarefa = document.getElementById ('listaDeTarefa');
const semTarefas = document.getElementById ('semTarefas'); 


function nenhumaMensagem (){
    if (listaDeTarefa.children.length === 0) {
        semTarefas.style.display = 'block';  //Função que retira o texto quando algum item é iserido a lisata
    } else {
        semTarefas.style.display = 'none';
    }
}

botao.addEventListener('click',() => {  //Adicionando evento click ao botão
    const texto = tarefa.value.trim(); //Declarando texto e tirando os spaços vazios trim() se estiver vazio ele nãocria e encerra o return
    if (texto === '') return; //só será implementado a lista o que for string

    const novaTarefa = document.createElement('li') //Criando uma <li>
    novaTarefa.className = 'itemTarefa'; //Criando uma classe CSS para a <li>

    const textoSpan = document.createElement ('span') //criando um <span> que ocupara a <li>
    textoSpan.textContent = texto; //Adicionando o texto digitado pelo input na <span>
    textoSpan.className = 'textoSpan' //Criando uma classe CSS para <span>

    const botaoRemover = document.createElement ('button'); //Criando um botão de remover item que foi adicionado
    botaoRemover.textContent = 'EXCLUIR'; //Texto de dentro do botão
    botaoRemover.className = 'botaoRemover';  //Criando classe CSS do botão que removerá o intem

    textoSpan.addEventListener('click', () => { //Criando evento de click para <span> criada na <li>
        textoSpan.classList.toggle('completo'); //O evento é um risco no item que foi adicionado anteriormente
    });
    
    botaoRemover.addEventListener('click', () => { //Criando um evento ao botão remover
        novaTarefa.remove(); //O evento é remover o item da lista
        linha.remove(); //Remove a linha 
        nenhumaMensagem();//Caso todos os itens sejam removidos, retorna a mensagem presente no html
    });

    const linha = document.createElement ('hr') // Criando linha de seperação a baixo da <li><span><span></li>
    
    //A BAIXO MONTANDO A <LI> 
    listaDeTarefa.appendChild(novaTarefa); //Adicionando a <li> dentro da <lu>
    novaTarefa.appendChild(textoSpan); //Adicionando o texto digitado no input dentro <span>, dentro da <li>, ao HTML
    novaTarefa.appendChild(botaoRemover); //Adicionando botão remover junto ao texto digitado no input
    listaDeTarefa.appendChild(linha); //Adicionando a linha que é gerada junto ao <li> e <span> 

    tarefa.value = ''; //se a lista estiver vazia
    nenhumaMensagem(); //retorna a mensagem inicial do HTML
});

 //CONSIDERAÇÕES//
 //PODEMOS DECLARAR NOVOS ELEMENTOS DENTRO DAS FUNÇÕES
 //ANTERIORMENTE AO INVEZ DE <SPAN> USEI TEXTCONTENT!MAS NÃO DEIXAVA ADICIONAR EVENTOS AO TEXTO SEM AFETAR O BOTÃO
