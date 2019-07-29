const name = document.getElementById("name");

const searchBtn = document.getElementById("search");




// this function 
function searchUsers(event) {

    event.preventDefault();
    return getUserList();

}


function getUserList() {
    const input = name.value;

    fetch(`https://api.github.com/search/users?q=${input}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(usersList = JSON.stringify(response));
            document.write(usersList);

        })
}



name.addEventListener("keydown", searchUsers);

searchBtn.addEventListener("click", searchUsers);