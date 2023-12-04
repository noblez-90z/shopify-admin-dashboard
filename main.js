const bell = document.querySelector('.bell')
const notification = document.querySelector('.notification')
bell.addEventListener('click',function(){
    notification.classList.toggle('active')
})

const user = document.querySelector('.username')
const userTools = document.querySelector('.user-box')
user.addEventListener('click',function(){
    userTools.classList.toggle('active')
})


// main part

const x = document.querySelector('.side-trial svg')
const trials = document.querySelector('.trial-tag')
x.addEventListener('click',function(){
    trials.remove()
})
const listitem = document.querySelector('#listitem')
const setup = document.querySelector('.setup-container')
const down = document.querySelector('.setup-down')
down.addEventListener('click',function(){
    setup.classList.toggle('active');
    listitem.classList.toggle('active')
})
console.log(down)

const li = document.querySelectorAll('.setup li')
const listDescription = document.querySelector('.list-description')
console.log(Array.isArray(Array.from(li)))
const second =document.querySelector('#second')
const first =document.querySelector('#first')
const third =document.querySelector('#third')
const four =document.querySelector('#four')
const five =document.querySelector('#five')
li[0].addEventListener('click',function(){
    listDescription.classList.toggle('active');
    li[0].classList.toggle('active')
})
li[1].addEventListener('click',function(){
    // listDescription.classList.toggle('active');
    li[1].classList.toggle('active');
    second.classList.toggle('active')
})
li[2].addEventListener('click',function(){
    // listDescription.classList.toggle('active');
    li[2].classList.toggle('active');
    third.classList.toggle('active')

})
li[3].addEventListener('click',function(){
    // listDescription.classList.toggle('active');
    li[3].classList.toggle('active');
    four.classList.toggle('active')

})
li[4].addEventListener('click',function(){
    // listDescription.classList.toggle('active');
    li[4].classList.toggle('active');
    five.classList.toggle('active')

})
const icon = document.querySelectorAll('.icon-container')
const icon3 = document.querySelectorAll('.icon3')
// icon.addEventListener('click',function(){
//     icon3.classList.toggle('completed')
// })
console.log(icon)
console.log(icon3)
console.log(Array.isArray(Array.from(icon)))
console.log(Array.isArray(Array.from(icon3)))
icon[0].addEventListener('click',function(){
    icon3[0].classList.toggle('completed')
})
icon[1].addEventListener('click',function(){
    icon3[1].classList.toggle('completed')
})
icon[2].addEventListener('click',function(){
    icon3[2].classList.toggle('completed')
})
icon[3].addEventListener('click',function(){
    icon3[3].classList.toggle('completed')
})
icon[4].addEventListener('click',function(){
    icon3[4].classList.toggle('completed')
})



// document.addEventListener('DOMContentLoaded', function () {
//     const listItems = document.querySelectorAll('li');

//     listItems.forEach(function (item) {
//         item.addEventListener('click', function () {
//             this.classList.toggle('done');
//             desp.classList.toggle('active');
//         });
//     });
// });
