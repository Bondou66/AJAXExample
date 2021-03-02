var btn = document.getElementById("xml");
var firstContainer = document.getElementById("first");
var request = new XMLHttpRequest();
var postsPosition = 0;
btn.addEventListener("click", function() {
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts/');        
    request.onload = function() {
        var posts = JSON.parse(request.responseText);
        request.open('GET', 'https://jsonplaceholder.typicode.com/users/');
        request.onload = function() {
            var users = JSON.parse(request.responseText);
            renderHtml(posts, users, postsPosition);
        }
        request.send();
    };
    request.send();
    postsPosition += 5;
    if (postsPosition > 100) {
        btn.classList.add('hide-me');
    }
});

function renderHtml(posts, users, postsPosition) {
    var htmlString = "";
    for (i=postsPosition; i < postsPosition + 5; i++) {
        htmlString += "<p>" + users[posts[i].userId - 1].name + " posted " + 
            posts[i].body + " with a title of " + posts[i].title + ".</p>";
    }
    firstContainer.insertAdjacentHTML('beforeend', htmlString);
}