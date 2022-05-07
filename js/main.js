function cargarPagina(){
    let redes = cargarLinks();
    document.getElementById('navbarAcercaDe').innerHTML = cargarAcercaDe();
    document.getElementById('navbarAcercaDeRedes').innerHTML = cargarAcercaDeRedes();
    document.getElementById('redes').innerHTML = redes;
    document.getElementById('navRedes').innerHTML = redes + '<li class="nav-item text-white"><a href="#navbarAcercaDe" class="nav-link text-white" role="button" data-bs-toggle="collapse">Acerca de</a></li>';
}


function cargarAcercaDe(){
    return `
    <div class="container">
        <div class="p-4">
            <h4 class="text-white h4">Acerca de mi</h4>
            <span class="text-muted">${acercaDeMi}</span>
        </div>
    </div>
    `;
}

function cargarAcercaDeRedes(){
    return `
    <div class="container">
            <div class="p-4">
                <h4 class="text-white h4">Acerca de mi</h4>
                <span class="text-muted">${acercaDeMi}</span>
            </div>
            <div class="p-4" id="div-redes">
                <h4 class="text-white h4">Mis redes Sociales</h4>
                <ul class="nav" id="redes"></ul>
            </div>
        </div>
    `
}

function cargarLinks(){
    let html = '';

    for( let link of redes ){
        html += cargarLink( link );
    }
    return html;
}

function cargarLink( link ){
    return `<li class="nav-item"><a class="nav-link text-white" href="${link.url}" target="_blank">${link.name}</a></li>`
}

