function Teste(){
    let idade = document.getElementById("idade").value;

    if(idade < 18){
        document.getElementById("resultado").innerText = "Menor de idade";
    }
    else{
        document.getElementById("resultado").innerText = "Maior de idade";
    }
}