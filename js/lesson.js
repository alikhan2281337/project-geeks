const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')



somInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        if(somInput.value === ''){
            usdInput.value = ''
            eurInput.value = ''
        }
        else{
            usdInput.value = (somInput.value / data.usd).toFixed(2)
            eurInput.value = (somInput.value / data.eur).toFixed(2)
        }
    }
}
usdInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        if(usdInput.value === ''){
            somInput.value = ''
            eurInput.value = ''
        }
        else{
            somInput.value = (usdInput.value * data.usd).toFixed(2)
            eurInput.value = (somInput.value / data.eur).toFixed(2)
        }
    }
}
eurInput.oninput = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        if(eurInput.value === ''){
            somInput.value = ''
            usdInput.value = ''
        }
        else{
            somInput.value = (eurInput.value * data.eur).toFixed(2)
            usdInput.value = (somInput.value / data.usd).toFixed(2)
        }
    }
}



const load = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })




const card = document.querySelector('.card')
const next = document.querySelector('#btn-next')
const prev = document.querySelector('#btn-prev')
const ending = 200
const start = 1
let currentUser = 1
let first = currentUser

const one = fetch (`https://jsonplaceholder.typicode.com/todos/${first}`)
    .then((response) => response.json())
    .then((data) => {
        card.innerHTML = `
        <p>${data.title}</p>
        <p> id: ${data.id}</p>
        `
    })
async function loadUser(userId) {
    
    try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                card.innerHTML = `
                    <p>${data.title}</p>
                    <p>id: ${data.id}</p>
                `;
            });
        }catch (error){
            console.error('Error fetching data: ', error);
        }
}
    
function updateUser(increment) {
    currentUser += increment;
        if (currentUser > ending) {
                currentUser = start;
        } else if (currentUser < start) {
            currentUser = ending;
        }
        loadUser(currentUser);
    
}
    
loadUser(currentUser);
    
next.onclick = () => updateUser(1);
prev.onclick = () => updateUser(-1);


const buttons = document.querySelector('.buttonSwitcher')
buttons.onclick = () => {
    window.location.href = '../pages/cards.html'
}


