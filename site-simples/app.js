'use strict'
const swtcher = document.querySelector('.btn');
swtcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "light-theme";
    }
     
    console.log('Current class name: ' + className);
});
