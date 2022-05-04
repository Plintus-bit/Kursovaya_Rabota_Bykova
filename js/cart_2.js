
window.onload = function() {
    //localStorage.clear();
    let temp = document.querySelector('.shops');

    let array = document.querySelectorAll('.total');
    array.forEach(function (item) {
        item.textContent = parseInt(localStorage.getItem('total_cost'));
    });
    if (parseInt(localStorage.getItem('cart_values')) === 0) {
        let GOODS = document.getElementById('we_have_goods');
        if (!GOODS.classList.contains('hidden')) {
            GOODS.classList.add('hidden');
        }
        return;
    }
    let GOODS = document.getElementById('we_have_goods');
        if (GOODS.classList.contains('hidden')) {
            GOODS.classList.remove('hidden');
        }
    let CART = document.getElementById('empty_cart');
    if (!CART.classList.contains('hidden')) {
        CART.classList.add('hidden');
    }

    for(let i = 2; i <= localStorage.getItem('cart_values'); i = i + 2) {
        let good = JSON.parse(localStorage.getItem(`${i}`));
        let place_in_cart = `<div class="shop clicked">
                            <img class="shopping_img" src="${good.src}">
                            <div class="content">
                                <div>
                                    <div class="right_how_much tab_2">
                                        <p class="h2">${good.name}</p>
                                        <div class="how_much_goods">
                                            <button class="minus">-</button>
                                            <p class="text"><span class="how_much">${good.total}</span> шт</p>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <p class="text">${good.descript}</p>
                                </div>
                                <div class="about_good">
                                    <p class="text">
                                        ${good.info}
                                    </p>
                                    <div class="cost_block">
                                        <p class="text"><span class="how_much">${good.total}</span> шт</p>
                                        <p class="text"><span class="final_cost">${good.total * good.cost}</span> руб.</p>
                                    </div>
                                    <button class="out_of_cart">Убрать из корзины</button>
                                </div>
                            </div>
                        </div>`;
        temp.insertAdjacentHTML('beforeend', place_in_cart);
    }
};

window.addEventListener('storage', event => {
    let array = document.querySelectorAll('.total');
    array.forEach(function (item) {
        item.textContent = parseInt(localStorage.getItem('total_cost'));
    });

    if (event.key > 1 && event.key % 2 === 0) {
        const elements_in_cart_now = document.getElementsByClassName('shop').length;
        let new_good = JSON.parse(localStorage.getItem(event.key));
        
        if (new_good.IDENT === 'in_cart') {
            let array = document.getElementsByClassName('shop');
            console.log(array);

            if (elements_in_cart_now === 0) {

                let CART = document.getElementById('empty_cart');
                if (!CART.classList.contains('hidden')) {
                    CART.classList.add('hidden');
                }
                let GOODS = document.getElementById('we_have_goods');
                if (GOODS.classList.contains('hidden')) {
                    GOODS.classList.remove('hidden');
                }

                let place_in_cart = `<div class="shop">
                            <img class="shopping_img" src="${new_good.src}">
                            <div class="content">
                                <div>
                                    <div class="right_how_much tab_2">
                                        <p class="h2">${new_good.name}</p>
                                        <div class="how_much_goods">
                                            <button class="minus">-</button>
                                            <p class="text"><span class="how_much">${new_good.total}</span> шт</p>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <p class="text">${new_good.descript}</p>
                                </div>
                                <div class="about_good">
                                    <p class="text">
                                        ${new_good.info}
                                    </p>
                                    <div class="cost_block">
                                        <p class="text"><span class="how_much">${new_good.total}</span> шт</p>
                                        <p class="text"><span class="final_cost">${new_good.total * new_good.cost}</span> руб.</p>
                                    </div>
                                    <button class="out_of_cart">Убрать из корзины</button>
                                </div>
                            </div>
                        </div>`;
                        let temp = document.querySelector('.shops');
                        temp.insertAdjacentHTML('beforeend', place_in_cart);
            }
            else {
                for (let i = 0; i < elements_in_cart_now; ++i) {
                    console.log(new_good.name);
                    if (new_good.name === array[i].querySelector('.h2').textContent) {
                        array[i].querySelector('.how_much_goods .how_much').textContent = new_good.total;
                        array[i].querySelector('.cost_block .how_much').textContent = array[i].querySelector('.how_much_goods .how_much').textContent;
                        array[i].querySelector('.final_cost').textContent = parseInt(array[i].querySelector('.how_much_goods .how_much').textContent) * new_good.cost;
                        return;
                    }
                }
                let place_in_cart = `<div class="shop">
                        <img class="shopping_img" src="${new_good.src}">
                        <div class="content">
                            <div>
                                <div class="right_how_much tab_2">
                                    <p class="h2">${new_good.name}</p>
                                    <div class="how_much_goods">
                                        <button class="minus">-</button>
                                        <p class="text"><span class="how_much">${new_good.total}</span> шт</p>
                                        <button class="plus">+</button>
                                    </div>
                                </div>
                                <p class="text">${new_good.descript}</p>
                            </div>
                            <div class="about_good">
                                <p class="text">
                                    ${new_good.info}
                                </p>
                                <div class="cost_block">
                                    <p class="text"><span class="how_much">${new_good.total}</span> шт</p>
                                    <p class="text"><span class="final_cost">${new_good.total * new_good.cost}</span> руб.</p>
                                </div>
                                <button class="out_of_cart">Убрать из корзины</button>
                            </div>
                        </div>
                    </div>`;
                array[elements_in_cart_now - 1].insertAdjacentHTML('afterend', place_in_cart);
            }
        }
    }
});

document.getElementById('we_have_goods').addEventListener('click', function(event) {
    
    if (event.target.tagName === 'BUTTON') {
        //Удаление
        if (event.target.classList.contains('out_of_cart')) {
            let object = event.target.closest('.shop');
            for (let i = 2; i <= parseInt(localStorage.getItem('cart_values')); i = i + 2) {
                let temp_obj = JSON.parse(localStorage.getItem(`${i}`));
                if (object.querySelector('.h2').textContent === temp_obj.name) {
                    price(temp_obj.cost, -1 * temp_obj.total);
                    del(i);
                    object.parentElement.removeChild(object);
                    return;
                }
            }

        }

        //Уменьшение значения
        if (event.target.classList.contains('minus')) {
            let object = event.target.closest('.shop');
            let total_of_good_top = object.querySelector('.how_much_goods .how_much');
            let total_of_good = object.querySelector('.cost_block .how_much');

            for (let i = 2; i <= parseInt(localStorage.getItem('cart_values')); i = i + 2) {
                let temp_obj = JSON.parse(localStorage.getItem(`${i}`));
                if (object.querySelector('.h2').textContent === temp_obj.name) {
                    total_of_good.textContent = --total_of_good.textContent;
                    price(temp_obj.cost ,-1);
                    if (parseInt(total_of_good.textContent) > 0) {
                        temp_obj.total = total_of_good.textContent;
                        total_of_good_top.textContent = total_of_good.textContent;
                        object.querySelector('.final_cost').textContent = temp_obj.total * temp_obj.cost;
                        temp_obj = JSON.stringify(temp_obj);
                        localStorage.setItem(`${i}`, temp_obj)
                    } else {
                        del(i);
                        object.parentElement.removeChild(object);
                    }
                    return;
                }
            }
        }

        //Увеличение значения
        if (event.target.classList.contains('plus')) {
            let object = event.target.closest('.shop');
            let total_of_good_top = object.querySelector('.how_much_goods .how_much');
            let total_of_good = object.querySelector('.cost_block .how_much');

            for (let i = 2; i <= parseInt(localStorage.getItem('cart_values')); i = i + 2) {
                let temp_obj = JSON.parse(localStorage.getItem(`${i}`));
                if (object.querySelector('.h2').textContent === temp_obj.name) {
                    if (parseInt(total_of_good.textContent) < 1000) {
                        total_of_good.textContent = ++total_of_good.textContent;
                        total_of_good_top.textContent = total_of_good.textContent;
                        temp_obj.total = total_of_good.textContent;
                        object.querySelector('.final_cost').textContent = temp_obj.total * temp_obj.cost;
                        price(temp_obj.cost ,1);
                        temp_obj = JSON.stringify(temp_obj);
                        localStorage.setItem(`${i}`, temp_obj);
                    }
                    break;
                }
            }
        }

    }

});

function del(i) {
    if (i === parseInt(localStorage.getItem('cart_values'))) {
        localStorage.removeItem(`${i}`);
        let all_goods = parseInt(localStorage.getItem('cart_values')) - 2;
        localStorage.setItem('cart_values', `${all_goods}`);
        if (parseInt(localStorage.getItem('cart_values')) === 0) {
            let GOODS = document.getElementById('we_have_goods');
            let CART = document.getElementById('empty_cart');
            if (CART.classList.contains('hidden')) {
                CART.classList.remove('hidden');
            }
            if (!GOODS.classList.contains('hidden')) {
                GOODS.classList.add('hidden');
            }
        }
        return;
    }
    for (let j = i; j < parseInt(localStorage.getItem('cart_values')); j = j + 2) {
        let temp = localStorage.getItem(`${j + 2}`);
        localStorage.setItem(`${j}`, temp);
    }
    let temp = parseInt(localStorage.getItem('cart_values'));
    localStorage.removeItem(`${temp}`);
    let all_goods = temp - 2;
    localStorage.setItem('cart_values', `${all_goods}`);
}

function price(cost, total) {
    let total_price = parseInt(localStorage.getItem('total_cost'));
    total_price = total_price + cost * total;
    if (total_price < 0) total_price = 0;
    localStorage.setItem('total_cost', `${total_price}`)
    let array = document.querySelectorAll('.total');
    array.forEach(function (item) {
        item.textContent = parseInt(localStorage.getItem('total_cost'));
    });
}
