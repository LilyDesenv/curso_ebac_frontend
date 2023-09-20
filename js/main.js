$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00',{
        placeholder : "000.000.000-00"
    });

    $('#cep').mask('00.000-000',{
        placeholder : "00.000-000"
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Informe o seu nome completo',
            email: 'Informe seu e-mail',
            telefone: 'Informe seu telefone',
            cpf: 'Informe seu CPF',
            endereco: 'Informe o seu endereço completo',
            cep: 'Informe seu CEP',
        },
        submitHandler: function(form){
            
            alert("Sucesso!!");
            $("#nome").val('');
            $("#email").val('');
            $("#telefone").val('');
            $("#cpf").val('');
            $("#endereco").val('');
            $("#cep").val('');
        }
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();
    })  

})