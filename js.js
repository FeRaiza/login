const botao = document.getElementById("btn-submit");
botao.addEventListener("click", function(e){
    e.preventDefault();
    
    
        const nome = document.getElementById("username");
        const senha = document.getElementById("password")
        const aviso = document.querySelector(".mensagem")
        const sucesso = document.querySelector(".aviso-sucesso")
        const container = document.querySelector(".container");
        if(nome.value == ""){
            aviso.innerHTML = "Há campos vazios. Por favor, preencha-os corretamente!"
        nome.focus();
        senha.focus();
        return;
        }
        if(senha.value == ""){
            aviso.innerHTML = "Há campos vazios. Por favor, preencha-os corretamente!"
        nome.focus();
        senha.focus();
        return;
        }else{
            aviso.innerHTML = ""
            container.style.display = "none";
            sucesso.innerHTML = "Obrigada por usar o meu formulário :)"
            
        }
        
     

    
})



