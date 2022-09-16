let palabra;

const palabras = [
    'manzana',
    'Colombia',
    'celular',
    'ahorcado',
    'maiz',
    'trabajo',
    'facebook',
    'youtube',
    'araña',
    'concierto',
    'camisa',
    'murcielago',
    'tigre',
    'microfono',
    'pantalla',
    'leon',
    'casa',
    'cama',
    'camaleon',
    'fuego',
    'artificial',
    'colegio',
    'universidad',
    'parceros',
    'esternocleidomastoideo',
    'huesos',
    'ventana',
    'humano',
    'extraño',
    'presidente',
    'amor',
    'odio',
    'arriba',
    'abajo',
    'calles',
    'autopista',
    'edificio',
    'novia',
    'esposa',
    'esposo',
    'carcel',
    'empresa',
    'millonario',
    'alienigena',
    'marte',
    'luna',
    'infiel',
    'venado',
    'reto',
    'gorila',
    'barco',
    'titanic',
    'gente',
    'dama'
]

const btn = id('jugar');
const imagen = id('imagen');
const btn_letras = document.querySelectorAll('#letras button');

btn.addEventListener('click', inciar);

function inciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true
    cantidad_aciertos = 0;
    cantidad_errores = 0;


    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = false;
    }

    const cantidad_palabras = palabras.length;
    const valor_aleatorio = obtenerValor(0, cantidad_palabras);
    
    palabra = palabras[valor_aleatorio];
    console.log(palabra);
    const cantidad_letras = palabra.length;

    const parrafo = id('palabraAdivinar');
    parrafo.innerHTML = '';
    
    for( let i = 0; i < cantidad_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }
}

for(let i = 0; i < btn_letras.length; i++){
    btn_letras[i].addEventListener('click', click_letras)
}

function click_letras(event){
    const spans = document.querySelectorAll('#palabraAdivinar span')

    const button = event.target;
    button.disabled = true;

    const letra = button.innerHTML.toUpperCase();
    const palabraa = palabra.toUpperCase();

    let acierto = false;
    for(let i = 0; i < palabraa.length; i++){
        if(letra == palabraa[i]){
            spans[i].innerHTML = letra;
            cantidad_aciertos++;
            acierto = true;
        }
            
    }

    if(acierto == false){
        cantidad_errores++;
        const errores = `img/img${cantidad_errores}.png`
        imagen.src = errores;
    }

    if(cantidad_errores == 7){

        swal('Perdiste :(', 'La palabra era: ' + palabra.toUpperCase(), 'error');
        // id('resultado').innerHTML = "Perdiste :(, la palabra era: " + palabra.toUpperCase();
        game_over();
    }else if(cantidad_aciertos == palabra.length){
        // id('resultado').innerHTML = "¡GANASTE! Felicidades";
        swal('¡GANASTE!', 'Felicidades :)', 'success')
        game_over();
    }

    
}

function game_over(){
    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = true;
    }
    btn.disabled = false;
}

game_over();
