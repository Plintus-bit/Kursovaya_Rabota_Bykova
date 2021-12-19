let radio_1 = document.getElementById('radio-1');
let radio_2 = document.getElementById('radio-2');
let byYourself = document.getElementById('by_yourself');
let delivery = document.getElementById('delivery');
if (radio_1 && radio_2) {
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
}
let place_order = document.querySelector('#buy');

if (place_order) {
    place_order.onclick = function() {
        let input_name = document.querySelector('#name');
        let input_tel = document.querySelector('#tel');
        // localStorage.setItem('orders', -1);
        if (input_name.value.length === 0 || input_tel.value.length === 0) {
            if (input_name.value.length === 0) {
                if (!input_name.classList.contains('failed')) {
                    input_name.classList.add('failed');
                }
                setTimeout(() => {
                    input_name.classList.remove('failed');
                }, 1000);
            }
            if (input_tel.value.length === 0) {
                if (!input_tel.classList.contains('failed')) {
                    input_tel.classList.add('failed');
                }
                setTimeout(() => {
                    input_tel.classList.remove('failed');
                }, 1000);
            }
            return;
        }
        input_name.value = "";
        input_tel.value = "";
        if (!localStorage.getItem('orders')) {
            localStorage.setItem('orders', -1);
        } else {
            let orders = parseInt(localStorage.getItem('orders'));
            ++orders;
            if (orders >= 999999) {
                orders = 0;
            }
            localStorage.setItem('orders', orders);
            // console.log(localStorage.getItem('orders'))
        }
        window.location.href = 'place_order.html#';
    }
}