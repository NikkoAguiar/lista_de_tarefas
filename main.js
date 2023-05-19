$(document).ready(function(){
    let novoItem = '';
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#informe_a_atividade').val();
        novoItem = $(`<li style = "display: none"><img id="icone_rejeitado" style="height: 12px;" src="./images/icon_rejected.png"/>${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#informe_a_atividade').val('');

        $('li').click(function(){
            $('img').css("display", "none");
            novoItem = $(`<img id="icone_aprovado" style="height: 12px;" src="./images/icon_checked.png"/>`);
            $('#icone_aprovado').remove();
            $(novoItem).appendTo(this);
            $(this).css("text-decoration", "line-through");
        })
    })
})