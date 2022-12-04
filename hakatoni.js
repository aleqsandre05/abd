

let buttons = document.querySelectorAll( '.bt')
let pasuxebi = document.querySelectorAll('.pasuxebi')
let pasuxeb = document.querySelectorAll('.pasuxeb')
let firstQuestion = document.querySelector('.firstQuestion')
let secondQuestion = document.querySelector('.secondQuestion')
let thirdQuestion = document.querySelector('.thirdQuestion')
let fourthQuestion = document.querySelector('.fourthQuestion')
let pasuxe = document.querySelectorAll('.pasuxe')
let fifthQuestion = document.querySelector('.fifthQuestion')
let pasux = document.querySelectorAll('.pasux')
console.log(buttons)

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        firstQuestion.style.display = 'none'
        secondQuestion.style.display = 'block'
    })
    
})


pasuxebi.forEach(btn => {
    btn.addEventListener('click', function(){
        secondQuestion.style.display = 'none'
        thirdQuestion.style.display = 'block'
    })
    
})

pasuxeb.forEach(btn => {
    btn.addEventListener('click', function(){
        thirdQuestion.style.display = 'none'
        fourthQuestion.style.display = 'block'
    })
    
})


pasuxe.forEach(btn => {
    btn.addEventListener('click', function(){
        
        fourthQuestion.style.display = 'none'
        fifthQuestion.style.display = 'block'
        
    })
    
})
// for(let i = 0; i< pasuxe.length;i++){
//     i.addEventListener('click', function(){
        
//             fourthQuestion.style.display = 'none'
//               fifthQuestion.style.display = 'block'
// })

// }
