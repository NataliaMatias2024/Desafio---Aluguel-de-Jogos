function alterarStatus(id){

    //Reconhece o click
    let click = document.getElementById(`game-${id}`); 

    //Definir variavel responsável pelo elemnto ancora "Alugar/Devolver"
    let classeBotao = click.querySelector(".dashboard__item__button"); 

    //Definir variavel pela mudança de cor da imagem ao se "Alugar/Devolver"
    let classeImagem = click.querySelector(".dashboard__item__img"); 

       if ((classeImagem.classList.contains("dashboard__item__img--rented")) && (confirm("Você está prester a devolver esse jogo."))) {
           //a condiçao confirme cria uma caixa de dialogo com OK e cancelar, OK semrpe retorna true e cancelar false
           classeImagem.classList.remove("dashboard__item__img--rented");
           classeBotao.classList.remove("dashboard__item__button--return");
           classeBotao.innerHTML = `Alugar`; 
       } else {
           classeImagem.classList.add("dashboard__item__img--rented");
           classeBotao.classList.add("dashboard__item__button--return");
           classeBotao.innerHTML = `Devolver`;
       }
   }