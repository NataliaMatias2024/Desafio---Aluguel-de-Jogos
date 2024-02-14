function alterarStatus(id){
    let click = document.getElementById(`game-${id}`);
    mudarStatusImagem(id);
    mudarStatusClasse(id);
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