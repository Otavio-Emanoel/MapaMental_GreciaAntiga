
function clickMap(event){
    console.log(event)
    x = event.x-415;
    y = event.y - 28
    const mapa = event.target
    if(mapa.classList.contains("zoom_map")){
        mapa.classList.remove("zoom_map")
        mapa.style.right = "0"
        mapa.style.bottom  = "0"
    } else {
        mapa.classList.add("zoom_map")
        console.log(event.x)
        console.log(event.y)
        mapa.style.right = x+"px"
        mapa.style.bottom  = y+"px"
    }
}
