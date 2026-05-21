const fondos = {

    betta: {

        img: 'IMAGENES/BETTA.jpg',
        nombre: 'BETTA'
    },

    disco: {

        img: 'IMAGENES/DISCO IM.jpg',
        nombre: 'DISCO'
    },

    mar: {

        img: 'IMAGENES/MAR.jpg',
        nombre: 'MAR'
    },

    raya: {

        img: 'IMAGENES/RAYA.jpg',
        nombre: 'RAYA'
    }
};

/* LIMPIAR BOTONES */

function limpiarBotones(){

    document.querySelectorAll('.btn').forEach(function(boton){

        boton.classList.remove('activo');

    });
}

/* CAMBIAR FONDO */

function cambiarFondo(key){

    limpiarBotones();

    const boton =
    document.querySelector(`.btn[data-fondo="${key}"]`);

    if(boton){

        boton.classList.add('activo');
    }

    const fondo = fondos[key];

    if(!fondo) return;

    document.body.style.backgroundImage =
    `url('${fondo.img}')`;
}

/* EVENTOS */

document.querySelectorAll('.btn').forEach(function(boton){

    boton.addEventListener('click', function(){

        const clave = boton.dataset.fondo;

        cambiarFondo(clave);

    });
});
