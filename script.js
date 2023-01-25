const hamburguer = document.querySelector('.hamburguer')
const nav_ul = document.querySelector('ul')

hamburguer.addEventListener('click',function(){
    if(hamburguer.classList.contains('active')){
        hamburguer.classList.remove('active')
        nav_ul.classList.remove('active')
    }
    else{
        hamburguer.classList.add('active')
        nav_ul.classList.add('active')
    }
})