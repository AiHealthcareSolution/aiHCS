var menu = document.getElementById('menu')

function openMenu(){
    menu.classList.add('open')
    document.body.style.overflow = "hidden"
}

function closeMenu(){
    menu.classList.remove('open')
    document.body.style.overflow = "auto"
}