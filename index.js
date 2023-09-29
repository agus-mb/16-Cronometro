/*pamtalla, oausa y bolita*/
const pantalla=document.getElementById('pantalla-visualizadora');
const botonPausa=document.getElementById('pausa-arranque');
const bolita=document.getElementById('circulo-segundero');

console.log(botonPausa)

let contadorIntervalo; /**stopwatchInterval */
let contadorTiempo=0; /**runningTime */


const pausaArranque=()=>{
    const estaPausado=!botonPausa.classList.contains('running');
    if(estaPausado){
        botonPausa.classList.add('running');
        start();
    }else{
        botonPausa.classList.remove('running');
        pause();
    }
}

/***************************************/

const pause=()=>{
    /**sobreescribimos styles */
    bolita.style.animationPlayState = "paused";
    clearInterval(contadorIntervalo);

}
/****************************************/
const parar=()=>{
    /**sobreescribimos styles */
    bolita.style.animation="none";
    bolita.style.transform="rotate(-90deg) translateX(60px)";

    botonPausa.classList.remove('running');
    contadorTiempo=0;
    clearInterval(contadorIntervalo);
    pantalla.textContent="00:00";
}


/*****************************************/


const start=()=>{
    /**empezar animaciones, sobreescribir los styles */
    bolita.style.animation="rotacion 60s linear infinite";
    bolita.style.animationPlayState= "running";

    /**establecer un tiempo de inicio */
    let inicioTiempo= Date.now()-contadorTiempo;

    /*********************** */

    /** le decimos que hara, agregando 1000 lo cual indica que esto se ejecutara cada 1000 segundos*/
    contadorIntervalo= setInterval( ()=>{
        tiempoTranscurrido= Date.now() - inicioTiempo;
        pantalla.textContent = calcularTiempo(tiempoTranscurrido);
    }, 1000)

}

const calcularTiempo = tiempoTranscurrido =>{
    const segundosTotales = Math.floor(tiempoTranscurrido/100);
    const minutosTotales = Math.floor(segundosTotales/60);

    /**traducimos a mas friendly */
    const displaySegundos= (segundosTotales%60).toString().padStart(2, '0'); /**llega hasta 60 y vuelve a iniciar */
    const displayMinutos= minutosTotales.toString().padStart(2, '0');/**padStart indica que el lugar desocupado permanezca asi hasta ser cambiado, que no desaparezca */

    return `${displaySegundos}:${displayMinutos}`/**retornamos a donde indicamos al inicio de la constante */
}