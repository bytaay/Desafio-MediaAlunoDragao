function calcularMedia(){

    var nome = document.getElementById("nomealuno").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    var media = ( parseInt(nota1) + parseInt(nota2) ) / 2;

    if(media >= 6){
        alert('Aluno: ' + nome + '\n' + 'Nota: ' + media + '\n' + "Resultado: PASSOU");
    }else{
        alert('Aluno: ' + nome + '\n' + 'Nota: ' + media + '\n' + "Resultado: NÃO PASSOU");
    }

}