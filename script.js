const prompt = require('prompt-sync')();

// ARMAZENA O MENU DO SISTEMA

let hamburgueria = [];

// FUNCAO PARA EXIBIR O MENU

function exibirMenu(){
    console.log('\n Menu da Hamburgueria');
    console.log('1. Adicionar Hambúrguer');
    console.log('2. Listar Hambúrgueres');
    console.log('3. Atualizar Hambúrguer');
    console.log('4. Deletar Hambúrguer');
    console.log('5. Sair');
}
///////////////////////////////////////////////

//////////////////ADICIONAR////////////////////

function adicionarHamburguer(){
const nome = prompt("Nome do Hambúrguer");
const preco = prompt("Preço do Hambúrguer");
hamburgueria.push( { nome, preco } );
console.log("Hambúrguer adicionado com sucesso!");
}

////////////////////LISTAR///////////////////////

function verHamburgueres(){

    if(hamburgueria.length === 0){
        console.log('Nenhum hambúrguer '
            +' encontrado!');
        return;
    }
    console.log('\nLista de Hambúrgueres');
    hamburgueria.forEach((hamburguer, index)=>{
       console.log(` ${index + 1}. 
        Nome: ${hamburguer.nome},
        Preco: R$ ${hamburguer.preco}`); 
    });
}
/////////////////ATUALIZAR///////////////////////

function atualizarHamburguer(){
    verHamburgueres();

    const index = 
        parseInt(prompt("Escolha o hambúrguer "+
            " para atualizar")) - 1;

    if( index < 0 || index >= hamburgueria.length){
        console.log('Número inválido.');
        return;
    }

    const novoNome =
     prompt("Informe o novo nome do Hambúrguer: ");
    
    const novoPreco =
     prompt("Informe o novo preço: ");

    hamburgueria[index] = {nome: novoNome, preco:novoPreco};

    console.log('Hambúrguer atualizado com sucesso!!!');

}

//////////////////////////DELETAR////////////////////////
function deletarHamburguer(){

    verHamburgueres();

    const index = 
        parseInt(prompt("Escolha o hambúrguer "+
            " para deletar")) - 1;
    
    if( index < 0 || index >= hamburgueria.length){
        console.log('Número inválido.');
        return;
    }
    
    hamburgueria.splice(index, 1);

    console.log('Hambúrguer deletado com sucesso!!!');
}


/*******************ESTRUTURA CASE******************/

function principal(){

    let opcao;

    do{
        exibirMenu();
        opcao = parseInt(prompt('Escolha uma opção:'));
        switch(opcao){
            case 1:
            adicionarHamburguer();
            break;

            case 2:
            verHamburgueres();
            break;

            case 3:
            atualizarHamburguer();
            break;

            case 4:
            deletarHamburguer();
            break;

            case 5:
            console.log('Saindo...');
            break;

            default:
            console.log('Opção inválida. Tente novamente. ');
        }
    }while (opcao !== 5);

}

principal();