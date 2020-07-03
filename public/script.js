const receitas = document.querySelectorAll(".prato")


for(let i = 0; i < receitas.length; i++) {
    receitas[i].addEventListener("click", function(){
        window.location.href = `/receita/${i}`
    })
}

const esconder = document.querySelectorAll("#visibilidade")//armazenando na variável onde à ação vai ocorrer(ID).

for(let i = 0; i < esconder.length; i++) {
    esconder[i].addEventListener("click", function(){//se acontecer o click
      document.querySelector("#ing" + i).classList.toggle("esconder")//alternância, adciona/remove esse css ao ID (display none)
         if(document.querySelector("#ing" + i).classList.contains("esconder")){//se esse ID contém (display none)
             esconder[i].innerHTML = "mostrar"//trocar o texto esconder por mostrar
          } else {
              esconder[i].innerHTML = "esconder"//caso contrario manter esse texto. 
          }
      })
 }





















//let visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar

//function ocultarExibir() { // Quando clicar no botão.
 
 //   if (visibilidade[i]) {//Se a variável visibilidade for igual a true, então...
  //      document.getElementById("ing").style.display = "none";//Ocultamos a div
  //      visibilidade[i] = false;//alteramos o valor da variável para falso.
 //   } else {//ou se a variável estiver com o valor false..
   //     document.getElementById("ing").style.display = "block";//Exibimos a div..
    //    visibilidade[i] = true;//Alteramos o valor da variável para true.
  //  }
//}



