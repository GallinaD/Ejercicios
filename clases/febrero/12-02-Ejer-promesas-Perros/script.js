function getUser() {

    let gitUser = document.getElementById('user').value;
    
    let gitApi = 'https://api.github.com/users/' + gitUser;

    fetch(gitApi)
            .then(res=>res.json())
            .then(json=>{
            console.log(json.name);
            console.log(json.public_repos);
            console.log(json.avatar_url);

            let pName = document.createElement("p");
            let textoName = document.createTextNode('Nombre: ' + json.name);
            pName.appendChild(textoName);
            document.body.appendChild(pName);

            let myBr = document.createElement("br");
            pName.appendChild(myBr);

            let pRepos = document.createElement("p");
            let textoRepos = document.createTextNode('Repositorios públicos: ' + json.public_repos);
            pName.appendChild(textoRepos);
            document.body.appendChild(pRepos);


            let imgAvatar = document.createElement('img');
            imgAvatar.setAttribute('src', json.avatar_url);
            imgAvatar.setAttribute('width', '100px');
            document.body.appendChild(imgAvatar);

            });

}