function calcular() {
    var n1 = document.getElementById('nota_1').value;
    var n2 = document.getElementById('nota_2').value;
    var n3 = document.getElementById('nota_3').value;
    var n4 = document.getElementById('nota_4').value;
    
    // Converte as notas para números e garante que valores vazios sejam tratados como zero
    var nota1 = parseFloat(n1) || 0;
    var nota2 = parseFloat(n2) || 0;
    var nota3 = parseFloat(n3) || 0;
    var nota4 = parseFloat(n4) || 0;
    
    // Calcula a média
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    // Exibe o resultado arredondado para 2 casas decimais
    document.getElementById('media').innerHTML = media.toFixed(2);
    if(media < 7){
        document.getElementById('status').innerHTML = "Reprovado"
        }else{
            document.getElementById('status').innerHTML = "Aprovado"
        }
}