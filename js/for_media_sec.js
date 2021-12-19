
let news = document.querySelector('#news');
let array_categories = document.querySelectorAll('.category_card');

window.addEventListener('click', function(event) {
    clear_category_click();
});

news.addEventListener('click', function(event) {
    if (window.matchMedia('(max-width: 1240px)')) {
        if (!news.classList.contains('clicked')) {
            news.classList.add('clicked');
        }
    }
});

array_categories.forEach(element => {
    element.addEventListener('click', function() {
        if (!element.classList.contains('clicked')) {
            element.classList.add('clicked');
        }
    }); 
});

function clear_category_click() {
    array_categories.forEach(item => {
        if (item.classList.contains('clicked')) {
            item.classList.remove('clicked');
        }
    });
}