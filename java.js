'use struct'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "ESCURO";
    }
    else {
        this.textContent = "CLARO";
    }
    console.log('current classs name (nome da classe atual):' + className);
});