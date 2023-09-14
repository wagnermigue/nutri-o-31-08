    let titulo = document.querySelector ("h1").textContent;

console.log(titulo);

titulo.textContent = "fica grandao bill"

//-------aqui vamos mexer na tabela de imc----

let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura")

    console.log()

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;


    let tdImc = paciente.querySelector(".info-imc");
    
    //validação dos dados
    let pesoEhValido = true;
    let alturaEhValida = true;

    if(peso < 0 || peso > 1000){
        console.log("peso inválido");
        tdImc.textContent = "peso inválido";
        pesoEhValido = false;
    }
    if(peso < 0 || peso > 1000){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida";
        alturaEhValida = false;
    }

    if(pesoEhValido === true && alturaEhValida === true) 
    {
    //realizar o calculo do imc
    let imc = peso/(altura * altura);
    console.log(imc);
    tdImc.textContent = imc;
    }else{
        tdImc.textContent = "peso e/ou altura inválidos!";
    }