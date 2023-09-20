$(document).ready(function(){
    const listaTarefas = [];
    $('form').on('submit', function(e){
        e.preventDefault(); 
        
        const novaTarefa = $("#nome-tarefa").val();
        //verificar se já existe a mesma atividade na lista
        if(listaTarefas.includes(novaTarefa)){
            alert("Atividade já foi cadastrada!")
        }else{
            listaTarefas.push(novaTarefa);
            const novoItem = $(`<li>${novaTarefa}</li>`);
            $(novoItem).appendTo('ul');
        }
        $("#nome-tarefa").val('');

    })

    $('ul').on('click','li',function(){
        //verifica se o item clicado já está riscado
        if($(this).css("text-decoration") ==="line-through solid rgb(255, 255, 255)"){
            //se estiver riscado, tira o risco
            $(this).css("text-decoration","none");
        }else{
            //se não estiver riscado, coloca o risco
            $(this).css("text-decoration","line-through");
        }
    });

})