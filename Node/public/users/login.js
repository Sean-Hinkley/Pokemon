const first = document.getElementById('pass');
const form = document.querySelector('#form');
const user = document.querySelector("#user");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('/checkuser', {
        method: 'post',

        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: user.value,
            password: first.value,
        })
    })
})