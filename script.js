function inserir(num) {
    let numero = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = numero + num;
}
function limpar() {
    document.querySelector("#resultado").innerHTML = '';
}
function limparMenos() {
    let volta = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = volta.substring(0, volta.length -1);
}
function calcular() {
    let calc = document.querySelector("#resultado").innerHTML;
    if(calc) {
        document.querySelector("#resultado").innerHTML = eval(calc);
    }
}