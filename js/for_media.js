// Медиа условие, проверяющее viewports на ширину не более 1080 пикселей.
if (window.matchMedia('(max-width: 1080px)')) {
    if (document.querySelector('#categories_on_home_page')) {
        let array = document.querySelector('#categories_on_home_page').getElementsByClassName('category_card');
        let img_path = ['media/30.jpg', 'media/31.jpg', 'media/32.jpg', 'media/28.jpg', 'media/27.jpg','media/29.jpg'];

        for (let i = 0; i < array.length; ++i) {
            array[i].querySelector('img').attributes.src.nodeValue = img_path[i];
        }
    }
}

if (window.matchMedia('(min-width: 1081px)')) {
    if (document.querySelector('#categories_on_home_page')) {
        let array = document.querySelector('#categories_on_home_page').getElementsByClassName('category_card');
        let img_path = ['img_less_size/30.jpg', 'img_less_size/31.jpg', 'img_less_size/32.jpg', 'img_less_size/28.jpg', 'img_less_size/27.jpg','img_less_size/29.jpg'];

        for (let i = 0; i < array.length; ++i) {
            array[i].querySelector('img').attributes.src.nodeValue = img_path[i];
        }
    }
}
