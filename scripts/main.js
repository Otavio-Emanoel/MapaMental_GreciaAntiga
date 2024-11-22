
function clickMap(event){
    // x = event.x-415;
    // y = event.y - 28
    const mapa = event.target
    if(mapa.classList.contains("zoom_map")){
        mapa.classList.remove("zoom_map")
        // mapa.style.right = "0"
        // mapa.style.bottom  = "0"
    } else {
        mapa.classList.add("zoom_map")

        let imgX = window.innerWidth/2 -600
        let imgY = window.innerHeight*4/100
        console.log("Posição %:")
        console.log((event.x-imgX)*100/1200)
        console.log((event.y-imgY)*100/984)
        mapa.style.transformOrigin = `${((event.x-imgX)*100/1200)}% ${((event.y-imgY)*100/984)}%`


        // mapa.style.right = x+"px"
        // mapa.style.bottom  = y+"px"
    }
}
