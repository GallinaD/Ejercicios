function getUser() {

    let gitUser = document.getElementById('user').value;
    
    let gitApi = 'https://api.github.com/users/' + gitUser;

    fetch(gitApi)
            .then(res=>res.json())
            .then(json=>console.log(json.name));

}