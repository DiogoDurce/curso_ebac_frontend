$(document).ready(function() {
    // Captura o evento de submit do formulário
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Pega o valor digitado no input
        const tarefa = $('#input-tarefa').val().trim();

        if (tarefa !== "") {
            // Cria um novo <li> com botão de exclusão
            const novaTarefa = $('<li></li>').text(tarefa);
            const botaoExcluir = $('<button class="delete-btn">X</button>');

            // Adiciona o botão ao lado do texto da tarefa
            novaTarefa.append(botaoExcluir);
            $('#lista-tarefas').append(novaTarefa);

            // Limpa o input
            $('#input-tarefa').val('');
        }
    });

    // Evento de clique para riscar a tarefa ao clicar
    $('#lista-tarefas').on('click', 'li', function(event) {
        if (!$(event.target).hasClass('delete-btn')) {
            $(this).toggleClass('completed'); // Adiciona ou remove a classe "completed"
        }
    });

    // Evento de clique para excluir a tarefa
    $('#lista-tarefas').on('click', '.delete-btn', function(event) {
        $(this).parent().remove(); // Remove a <li> inteira
    });
});
