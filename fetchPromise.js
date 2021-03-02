const fetchPromise = fetch('https://jsonplaceholder.typicode.com/albums/');
const second = document.getElementById('second');
var btn = document.getElementById('fetch');
btn.addEventListener('click', function() {
    fetchPromise.then(response => {
        return response.json();
    }).then(albums => {
        listOfAlbums(albums);
    });
});
function listOfAlbums(albums) {
    var list = "";
    const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users/');
    fetchUsers.then(response => {
        return response.json();
    }).then(users => {
        for (i = 0; i < albums.length; i++) {
            list += "<p>" + albums[i].title + " was written by " + users[albums[i].userId - 1].name + ".</p>";
        }
        second.innerHTML = list;
    });
}