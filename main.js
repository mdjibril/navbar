const menu = document.querySelector(".menu")
const navigation = document.querySelector(".navigation")
const close = document.querySelector(".close")

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
})

close.addEventListener('click', () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
})