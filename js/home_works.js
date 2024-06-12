
let gmail = /^[a-zA-Z.]+@gmail\.com$/
let error = document.querySelector('#gmail_result')
function checkInput(){
    const input = document.querySelector('#gmail_input').value
    if (gmail.test(input)){
        error.innerText = ""
    }
    else{
        error.style.color = "red"
        error.innerText = "Invalid email"
        
    }
}


let parentBlock = document.querySelector('.parent_block')
let childBlock = document.querySelector('.child_block')

const parentWidth = parentBlock.offsetWidth;
let childWidth = childBlock.offsetWidth;
let res = parentWidth - childWidth

const Recursion = () => {
    
    if(childWidth < res){
        childWidth++
        requestAnimationFrame(Recursion)
    }
    childBlock.style.left = `${childWidth}px`
}
Recursion()


