let radio_1 = document.getElementById('radio-1');
let radio_2 = document.getElementById('radio-2');
let byYourself = document.getElementById('by_yourself');
let delivery = document.getElementById('delivery');

radio_1.addEventListener('click', function () {
    if (byYourself.classList.contains('hide')) {
        byYourself.classList.remove('hide');
    }
    if (!delivery.classList.contains('hide')) {
        delivery.classList.add('hide');
    }
});
radio_2.addEventListener('click', function () {
    if (!byYourself.classList.contains('hide')) {
        byYourself.classList.add('hide');
    }
    if (delivery.classList.contains('hide')) {
        delivery.classList.remove('hide');
    }
});