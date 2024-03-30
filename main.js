$(document).ready(function(){
    const username = 'LilyDesenv';
    const endpoint = `https://api.github.com/users/${username}`;

    const profileAvatar = $('#profileAvatar');
    const profileName = $('#profileName');
    const profileUserName = $('#profileUserName');
    const profileRepository = $('#profileRepository');
    const profileFollowers = $('#profileFollowers');
    const profileFollowing = $('#profileFollowing');
    const profilelink = $('#profilelink');


    fetch(endpoint)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json){
            profileAvatar.attr('src', json.avatar_url);
            profileName.text(json.name);
            profileUserName.text('@'+json.login);
            profileRepository.text(json.public_repos);
            profileFollowers.text(json.followers);
            profileFollowing.text(json.folowing);
            profilelink.attr('href', json.html_url);
        })
        .catch(function(error){
            alert("Ocorreu um erro ao tentar buscar os dados de perfil, tente novamente mais tarde!")
        })

})