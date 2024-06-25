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

