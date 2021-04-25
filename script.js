let listNames = document.querySelectorAll('.dropdown');
listNames.forEach(elem => {
    elem.addEventListener('click', function() {
        this.classList.toggle('active');
    });
    let input = elem.querySelector('input');
    let listItems = elem.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            input.value = this.innerHTML;
            console.log(input.value);
        });
    });
});


