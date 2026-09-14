document.getElementById("BtnSomar").addEventListener("click", function () {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let valor = n1+n2;
    document.getElementById("resultado").innerText = valor;
    
});