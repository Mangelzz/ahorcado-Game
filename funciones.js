function id(str){
    return document.getElementById(str);
}


function obtenerValor(num_min, num_max){
    const rango = num_max - num_min;
    const valor_aleatorio = Math.floor(Math.random() * rango) + num_min;
    return valor_aleatorio;
}