function buscar() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
            console.log(json)

            let dogUrl = json.message;

            let dogImg = document.createElement("img");

            dogImg.setAttribute("src", dogUrl);
            dogImg.setAttribute("width", "150px");
            dogImg.setAttribute("height", "150px");
            document.body.appendChild(dogImg);

        });
}

function tabla() {

    let tabla = document.createElement("table");
    document.body.appendChild(tabla);
    tabla.setAttribute("border", "solid black 5px")

    for (let i = 0; i < 4; i++) {

        let trow = document.createElement("tr");
        tabla.appendChild(trow);

        for (let j = 0; j < 5; j++) {

            let tdata = document.createElement("td");
            trow.appendChild(tdata);
            tdata.setAttribute("width", "150px");
            tdata.setAttribute("height", "150px");

        }
    }

    let boton = document.createElement("button");
    document.body.appendChild(boton);
    boton.setAttribute("onclick", "buscar()")
    boton.innerHTML = "Let de dogs out";
}


tabla()
