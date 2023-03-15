
import get from './src/getElement.js';
import fetchApi from './src/fetchApi.js';
const loginUrl = "https://reqres.in/api/login";

const nameUser = get('#text');
const passwordInput = get('#password');
const loginForm = get(".loginForm");

const data = fetchApi(loginUrl);

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('asd')
    const username = nameUser.value;
    const password = passwordInput.value;
    console.log(username);
    console.log(password);
    data.then((res) => {
        const user = res.data.find((user) => user.name === username);
        if (user && user.color === password) {
            setTimeout(() => {
                window.location.href = "./table.html";
            }, 1000)
        } else {
          alert("Wrong password or username!")
        }
    })
});
