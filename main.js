const form = document.getElementById('form-numeros');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
let formValido = false;

function validaNumero(num1, num2){
    n1 = parseInt(num1);
    n2 = parseInt(num2);
    return n2 > n1;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const mensagemSucesso = 'Números validados com sucesso!';

    formValido = validaNumero(num1.value, num2.value);
    if(formValido){
        const containetMessagemSuceso = document.querySelector('.sucess-message');
        containetMessagemSuceso.innerHTML = mensagemSucesso;
        containetMessagemSuceso.style.display = 'block';

        alert(mensagemSucesso);

        num1.value = '';
        num2.value = '';
    }else{
        document.querySelector('.error-message').style.display = 'block';
        num2.classList.add('error');
    }

})

//função para esconder a mensagem de sucesso ao começar a digitar outros valores novamente
num1.addEventListener('keyup',function(e){
    const containetMessagemSuceso = document.querySelector('.sucess-message');
        containetMessagemSuceso.style.display = 'none';
})


num2.addEventListener('keyup', function(e){
    formValido = validaNumero(num1.value, num2.value);
    
    if(formValido){
        num2.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }else{
        num2.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
})
