$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#informe_a_atividade').val();
        const novoItem = $('<li style = "display: none"></li>');
        $(`<li id="seila">${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#informe_a_atividade').val('');

        $('li').click(function(){
            $(this).css("text-decoration", "line-through");
        })
    })
})