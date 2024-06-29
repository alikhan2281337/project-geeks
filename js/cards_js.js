
let start = 0
let limit = 10
const next = 10
const response = async () => {
    
    try{
        const load = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await load.json()
        let startingOfCards = data.slice(start, limit)
        addingCards(startingOfCards)
        limit += next
        start += next
    }catch(error){
        console.log('Error with fetching: ' + error);
    }
}
response()

function addingCards(posts) {
    const mainBlock = document.querySelector('.mainBlock');
    posts.forEach(elements => {
        const postElement = document.createElement('div')
        postElement.classList.add('cardElementBlocks')
        postElement.innerHTML = `
            <h1>${elements.title}</h1>
            <p>${elements.body}</p>
        `
        mainBlock.appendChild(postElement)
    });
}

const loadMore = document.querySelector('#LoadMore')
loadMore.onclick = () =>{
    response()  
}

