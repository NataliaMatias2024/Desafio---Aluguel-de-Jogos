function alterarStatus(id){
    reconhecerClick(id);
    conferirDados(id);
    mudarStatusImagem(id);
    mudarStatusClasse(id);
   }
   
   function reconhecerClick(id) {
       let click = document.getElementById(`game-${id}`);
       console.log(id);
   }
   
   function conferirDados(id){
       let click = document.getElementById(`game-${id}`);
       let classeImagem = click.querySelector(".dashboard__item__img");
       let classeStatus = click.querySelector(".dashboard__item__button");
       let nomeJogo = click.querySelector(".dashboard__item__name")
       console.log(classeImagem/*.textContent*/);// essa tag é da imagem do jogo, por isso n tm "nome"dentro dela
       console.log(classeStatus.textContent); //textContent vai imprimir o nome dentro da tag e n a tag td. 
       console.log(nomeJogo.textContent); //textContent vai imprimir o nome dentro da tag e n a tag td. 
   }
   
   function mudarStatusImagem(id){
       let click = document.getElementById(`game-${id}`);
       let classeImagem = click.querySelector(".dashboard__item__img");
       if (classeImagem.classList.contains("dashboard__item__img--rented")) {
           classeImagem.classList.remove("dashboard__item__img--rented");  
       } else {
           classeImagem.classList.add("dashboard__item__img--rented");
       }
   }
   
   function mudarStatusClasse(id){
       let click = document.getElementById(`game-${id}`);
       let classeStatus = click.querySelector(".dashboard__item__button");
       if (classeStatus.classList.contains("dashboard__item__button--return")) {
           classeStatus.classList.remove("dashboard__item__button--return");
           classeStatus.innerHTML = `Alugar`;
       } else {
           classeStatus.classList.add("dashboard__item__button--return");
           classeStatus.innerHTML = `Devolver`;
       }
   }