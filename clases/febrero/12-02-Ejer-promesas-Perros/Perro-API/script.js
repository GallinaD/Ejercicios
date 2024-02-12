function buscar(){
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(json=>{
        console.log(json)

        let dogUrl = json.message;        

        let dogImg = document.createElement("img");

        dogImg.setAttribute("src", dogUrl);
        dogImg.setAttribute("width", "200px");
        dogImg.setAttribute("height", "200px");
        document.body.appendChild(dogImg);

    });
}