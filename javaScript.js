//Selecionando os elementos no html
let inputSenha = document.querySelector("#inputSenha");
let buttonGerar = document.querySelector("#buttonGerar");
let buttonCopiar = document.querySelector("#buttonCopiar");


// FUNÇÕES
    
    //Função - Gerar Números
    let geradorNumeros = () => {

    let numeros = Math.floor(Math.random()*10).toString(); //Gerando valores randômicos e convertendo para String
    return numeros;

    //*10 -> É a quantidade de números (0,1,2,3,4,5,6,7,8,9)
    //Math.random() -> Randomizar números quebrados
    //Math.floor() -> Aredonda os números gerados da função Math.random()
    //.toString() -> Converte o número gerado para string
        
    }

    //Testando a função geradorNumeros()
    //console.log(document.getElementById("inputSenha").value = geradorNumeros());


    //Função - Gerar Senha
    let gerarSenha = (getNumber) => {

        let senha = " ";
        
        let tamanhoSenha = 8; //tamanho da senha
        
        //Arrey de senha
        let geradorSenha =[
            geradorNumeros
        ]
        
        for(i=0; i<=tamanhoSenha; i=i+1){
            geradorSenha.forEach(() => {
                let valorAleatorio = geradorSenha[Math.floor(Math.random() * geradorSenha.length)]();
                
                console.log(senha);
                document.getElementById("inputSenha").value = senha;

                senha += valorAleatorio;

            })
        }
    
    }

    //Função - Copiar Senha
    let copiaSenha = () => {
        navigator.clipboard.writeText(document.getElementById("inputSenha").value)
    }

// Eventos

// Escutador de evento do botão Gerar
buttonGerar.addEventListener("click",  (event) =>{

    gerarSenha(geradorNumeros);

});

// Escutador de evento do botão Copiar
buttonCopiar.addEventListener("click",  (event) =>{

    copiaSenha();

});





