const first = document.getElementById('pass');
const re = document.getElementById('retype');
const form = document.querySelector('#form');
const user = document.querySelector("#user");
form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(first.value);
    console.log(re.value);

    if(first.value === re.value) {
        fetch('/user', {
            method: 'post',

            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user.value,
                password: first.value,
            })
        }).then(console.log("Hello"))
    }
})