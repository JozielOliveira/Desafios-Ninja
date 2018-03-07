function add() {

    let entrada = document.getElementById("entrada").value
    let item = document.createElement("li")

    item.innerHTML = entrada

    item.setAttribute("onclick", "apagar(this)")
    
    document.getElementById("lista").appendChild(item)

}

function apagar(i) {
    
    lista.removeChild(i)

}