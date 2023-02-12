const form = document.getElementById('form-atividade');
const atividades = [];
const contatos = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContato();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(contatos.includes(inputTelefoneContato.value)) {
        alert(`O número: ${inputTelefoneContato.value} já foi inserido`);
    } else {
    atividades.push(inputNomeContato.value);
    contatos.push(inputTelefoneContato.value);

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`;
    linha += `<td> ${inputTelefoneContato.value}</td>`;
    linha += '</tr>'

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

