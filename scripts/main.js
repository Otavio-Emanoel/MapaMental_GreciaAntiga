
function clickMap(event) {
    // x = event.x-415;
    // y = event.y - 28
    const mapa = document.querySelectorAll(".map");
    mapa.forEach(map => {
        if (map.classList.contains("zoom_map")) {
            map.classList.remove("zoom_map")
            // mapa.style.right = "0"
            // mapa.style.bottom  = "0"
        } else {

            map.classList.add("zoom_map")

            let imgX = window.innerWidth / 2 - 600
            let imgY = window.innerHeight * 4 / 100
            console.log("Posição %:")
            console.log((event.x - imgX) * 100 / 1200)
            console.log((event.y - imgY) * 100 / 984)

            map.style.transformOrigin = `${((event.x - imgX) * 100 / 1200)}% ${((event.y - imgY) * 100 / 984)}%`


            // mapa.style.right = x+"px"
            // mapa.style.bottom  = y+"px"
        }
    })
}

document.querySelector("#menu-open").addEventListener("click", () => {
    if (document.querySelector("#menu_nav").style.display == "none") {
        document.querySelector("#menu_nav").style.display = "block"
        document.querySelector("#menu_nav").style.opacity = "1"
    } else {
        document.querySelector("#menu_nav").style.display = "none"
        document.querySelector("#menu_nav").style.opacity = "0"
    }
}) // EU NAO AGUENTO MAIS 😭😭

// Abrir e fechar o modal das cidades

document.querySelector("#cidades").addEventListener("click", ()=>{
    document.querySelector("#modal_cidades").style.display = "flex"
})
document.querySelector("#modal_cidades_close").addEventListener("click", ()=>{
    document.querySelector("#modal_cidades").style.display = "none"
})

// A mesma coisa so que pros outros modais (ou modals?)

document.querySelector("#geografia").addEventListener("click", ()=>{
    document.querySelector("#modal_geografia").style.display = "flex"
})
document.querySelector("#modal_geografia_close").addEventListener("click", ()=>{
    document.querySelector("#modal_geografia").style.display = "none"
})

// Foi mais um 

document.querySelector("#figuras").addEventListener("click", ()=>{
    document.querySelector("#modal_figuras").style.display = "flex"
})
document.querySelector("#modal_figuras_close").addEventListener("click", ()=>{
    document.querySelector("#modal_figuras").style.display = "none"
})

// So falta mais 3

document.querySelector("#cultura").addEventListener("click", ()=>{
    document.querySelector("#modal_cultura").style.display = "flex"
})
document.querySelector("#modal_cultura_close").addEventListener("click", ()=>{
    document.querySelector("#modal_cultura").style.display = "none"
})

// Aveee mArIa DoIdO

document.querySelector("#guerras").addEventListener("click", ()=>{
    document.querySelector("#modal_guerras").style.display = "flex"
})
document.querySelector("#modal_guerras_close").addEventListener("click", ()=>{
    document.querySelector("#modal_guerras").style.display = "none"
})

// O ultimo

document.querySelector("#deuses").addEventListener("click", ()=>{
    document.querySelector("#modal_deuses").style.display = "flex"
})
document.querySelector("#modal_deuses_close").addEventListener("click", ()=>{
    document.querySelector("#modal_deuses").style.display = "none"
})

// ALELUUUUIA ACABOU ISSOOOO