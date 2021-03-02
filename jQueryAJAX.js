$(document).ready(function(){
    var users;
    var todos;
    $("#jquery").click(function() {
        $.get("https://jsonplaceholder.typicode.com/users/", function(data, status){
            users = data;
        });
        $.get("https://jsonplaceholder.typicode.com/todos/", function(data, status){
            todos = data;
        });
        $.each(todos, function(key, todo){
            var str = '';
            console.log(todo);
            str += '<p>' + users[todo.userId - 1].name + ' has a todo titled ' + todo.title + ' and it is ';
            if (todo.completed) {
                str += 'complete.';
            } else {
                str += 'incomplete.';
            }
            str += '</p>'
            $("#third").append(str);

        });
    });
});