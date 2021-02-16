var selectedRow = null;

//Função para iniciar o cadastro
function onFormSubmit() {
    if (validateForm()) {
        var formData = readFormData(); //aqui ele lê os dados 
        if (selectedRow == null) insertNewRecord(formData); 
        else updateRecord(formData);
        resetForm();
    }
}

//Função para ler os dados
function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["sobrenome"] = document.getElementById("sobrenome").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}

//Função para inserir um novo registro
function insertNewRecord(data) {
    var table = document.getElementById("pessoa").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.lenth); //para enserir uma nova linha eu preciso saber o tamanho da Table
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sobrenome;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cidade;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<a onClick="onEdit(this)">Editar</a> | <a onClick="onDelete(this)">Excluir</a>';
}


//Função para limpar o formulário
function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("cidade").value = "";
    selectedRow = null;
}

//Função para editar o registro
function onEdit(data) {
    selectedRow = data.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sobrenome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[2].innerHTML;
}

//Função para excluir o registro
function onDelete(data) {
    if (confirm("Tem certeza de que deseja excluir este registro?")) {
        row = data.parentElement.parentElement;
        document.getElementById("pessoa").deleteRow(row.rowIndex);
        resetForm();
    }

}

//Função para atualizar o registro na tabela
function updateRecord(data) {
    selectedRow.cells[0].innerHTML = data.nome;
    selectedRow.cells[1].innerHTML = data.sobrenome;
    selectedRow.cells[2].innerHTML = data.cidade;
}

//Função para validar o campo obrigatório
function validateForm() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("validateName").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("validateName").classList.contains("hide")) {
            document.getElementById("validateName").classList.add("hide");
        }
        return isValid;
    }
}

