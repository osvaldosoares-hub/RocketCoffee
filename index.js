const menuToggle = document.querySelector('.mobile1');
const navigation =  document.querySelector('.navigation2');

const mainContainer = document.querySelector('.container-main')
const section = document.querySelector('.section')

menuToggle.onclick = function(){
    navigation.classList.toggle('open')
    mainContainer.classList.toggle('open')
    section.classList.toggle('open')

}
