
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
const parentHeight = parentBlock.offsetHeight;

let childWidth = childBlock.offsetWidth;
let childHeight = childBlock.offsetHeight;
let defauldWidth = 0
let position = childHeight


let res = parentWidth - childWidth
let resHeight = parentHeight - childHeight

let defaultHeight = 0

const Recursion = () => {
    
    if(childWidth < parentWidth ){
        defauldWidth++
        childWidth++
        
        requestAnimationFrame(Recursion)
        childBlock.style.left = `${defauldWidth}px`
        if (defauldWidth === res){
            
            HeightRecursion()
        }
    }
    
}


Recursion()
const HeightRecursion = () => {
    if (childHeight < parentHeight){
        defaultHeight++
        childHeight++
        requestAnimationFrame(HeightRecursion)
        childBlock.style.top = `${defaultHeight}px`
        if (defaultHeight === resHeight){
            RightWidth()
        }
    }
    
}


const RightWidth = () => {
    
    if(defauldWidth === res || defauldWidth > 0){
        defauldWidth--
        childWidth--
        
        requestAnimationFrame(RightWidth)
        childBlock.style.left = `${defauldWidth}px`
        if (defauldWidth === position){
            
            UpperGo()
        }
    }
}


const UpperGo = () => {
    // if(childHeight <=){
    //     childHeight--
    //     defaultHeight--
    //     requestAnimationFrame(UpperGo)
    //     childBlock.style.top = `${defaultHeight}px`
    // }
    // console.log(childHeight);
}


let sec = document.querySelector('#seconds')
let counter = 0
const resetCounter = 0
let checker 
let temp 

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

function start(){
    if(counter === 0 || checker === counter ){
        let interval = setInterval(() => {
            counter++
            sec.innerText = counter
            temp = interval
        }, 1000);
    }
    startButton.disabled = true
}
function stopp(){
    if (counter > 0){
        clearInterval(temp)
        checker = counter 
    }
    startButton.disabled = false
}
function reset(){
    sec.innerText = resetCounter
    stopp()
    counter = 0
    checker = 0 
}




