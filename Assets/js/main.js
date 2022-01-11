function escopoGlobal() {
  const form = document.querySelector(".form-padrao");
  const peso = form.querySelector("#peso");
  const altura = form.querySelector("#altura");
  let resultado = document.querySelector('.resultado')

  form.addEventListener("submit", (evento) => {

    const imc = (Number(peso.value)/(Number(altura.value)*2)).toFixed(2);
    
    /*---------------------------- Verificando Variáveis-----------------------------------------------------*/
    
    if(!peso.value || peso.value==0){
        onclick = alert('Peso Inválido')
        return
    } else if (!altura.value || altura.value==0){
        onclick = alert('Altura Inválida') 
        return      
    }

    /*--------------------------------------- Validando Resultados----------------------------------------------*/
        if (imc < 18.5) {
            resultado.innerHTML = `<p> Seu IMC é de ${imc} e Você Está Abaixo do Normal </p>`;
        } else if (imc > 18.5 && imc < 24.9) {
            resultado.innerHTML = `<p> Seu IMC é de ${imc} e Você Está com o Peso Normal </p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p> Seu IMC é de ${imc} e Você Está com Sobrepeso</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p> Seu IMC é de ${imc} e Você Está com Obesidade Grau 1 </p>`
        } else if (imc>= 35 && imc <=39.9){
            resultado.innerHTML = `<p> Seu IMC é de ${imc} e Você Está com Obesidade Grau 2 </p>`
        } else if(imc>40) {
            resultado.innerHTML = `<p> Seu IMC é de ${imc} e Você Está com Obesidade Grau 3 </p>`
        } else{
            resultado.innerHTML = `<p> Insira Valores Válidos e Tente Novamente!</p>`
        }
    
    evento.preventDefault();
  });
}

escopoGlobal()
