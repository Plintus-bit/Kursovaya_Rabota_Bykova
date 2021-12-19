
window.onload = function() {
    let temp = document.querySelector('.goods');

    let array = document.querySelectorAll('.total');
    array.forEach(function (item) {
        item.textContent = parseInt(localStorage.getItem('total_cost'));
    });

    if (parseInt(localStorage.getItem('favourite')) === 1) {
        let GOODS = document.getElementById('you_have_fav');
        GOODS.classList.add('hidden');
        return;
    }
    
    let FAV = document.getElementById('you_havent_fav');
    FAV.classList.add('hidden');

    for(let i = 3; i <= localStorage.getItem('favourite'); i = i + 2) {
        let new_fav = JSON.parse(localStorage.getItem(`${i}`));

        let place_in_fav = `<div class="goods_card">
            <button class="favourites">
                <svg class="favour" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 65"><path class="fav filled" d="M402.08,597.59a18.5,18.5,0,1,0-31.16,17h0l31.58,30.08,31.58-30.08h0a18.5,18.5,0,1,0-31.16-17A.43.43,0,0,1,402.08,597.59Z" transform="translate(-363 -581)"/></svg>
            </button>
            <div class="wr">
                <div class="top_2">
                    <img src="${new_fav.src}">
                </div>
                <div class="top">
                    <a href="${new_fav.href}" class="h4 tab_2" title="${new_fav.descript}">${new_fav.name}</a>
                    <p class="text">
                        <span class="need_1">${new_fav.info_1}</span><span class="cost">${new_fav.cost}</span><span class="need_2">${new_fav.info_2}</span>
                    </p>
                </div>
            </div>

            <div class="bottom">
                <div class="how_much_goods">
                    <button class="minus">-</button>
                    <p class="text"><span class="how_much">0</span> шт</p>
                    <button class="plus">+</button>
                </div>

                <button class="in_shopping_cart">
                    <svg class="shopping_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.5 41.75"><path class="cart" d="M610,603H560.48a1.47,1.47,0,0,0-1.38,2l9.25,21.24a4,4,0,0,0,3.71,2.56h26.38a4,4,0,0,0,3.71-2.56L611.4,605A1.47,1.47,0,0,0,610,603Z" transform="translate(-558 -588)"/><path class="cart" d="M594,602.8v-5.1a8.71,8.71,0,0,0-8.7-8.7h0a8.71,8.71,0,0,0-8.7,8.7v5.1" transform="translate(-558 -588)"/></svg>
                </button>
            </div>
        </div>`;
        temp.insertAdjacentHTML('beforeend', place_in_fav);
    }
}

window.addEventListener('storage', function(event) {
    let array_1 = document.querySelectorAll('.total');
    array_1.forEach(function (item) {
        item.textContent = parseInt(localStorage.getItem('total_cost'));
    });
    
    if (event.key > 2 && event.key % 2 === 1) {
        const element_in_fav_now = document.getElementsByClassName('goods_card').length;

            let array = document.getElementsByClassName('goods_card');

            if (1 + (2 * element_in_fav_now) < parseInt(localStorage.getItem('favourite'))) {
                let new_fav = JSON.parse(localStorage.getItem(event.key));
                if (element_in_fav_now === 0 && parseInt(localStorage.getItem('favourite')) === 3) {
                    let FAV = document.getElementById('you_havent_fav');
                    FAV.classList.add('hidden');
                    let GOODS = document.getElementById('you_have_fav');
                    GOODS.classList.remove('hidden');

                    let place_in_fav = `<div class="goods_card">
                        <button class="favourites">
                            <svg class="favour" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 65"><path class="fav filled" d="M402.08,597.59a18.5,18.5,0,1,0-31.16,17h0l31.58,30.08,31.58-30.08h0a18.5,18.5,0,1,0-31.16-17A.43.43,0,0,1,402.08,597.59Z" transform="translate(-363 -581)"/></svg>
                        </button>
                        <div>
                            <div class="top_2">
                                <img src="${new_fav.src}">
                            </div>
                            <div class="top">
                                <a href="${new_fav.href}" class="h4 tab_2" title="${new_fav.descript}">${new_fav.name}</a>
                                <p class="text">
                                    <span class="need_1">${new_fav.info_1}</span><span class="cost">${new_fav.cost}</span><span class="need_2">${new_fav.info_2}</span>
                                </p>
                            </div>
                        </div>
        
                        <div class="bottom">
                            <div class="how_much_goods">
                                <button class="minus">-</button>
                                <p class="text"><span class="how_much">0</span> шт</p>
                                <button class="plus">+</button>
                            </div>
        
                            <button class="in_shopping_cart">
                                <svg class="shopping_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.5 41.75"><path class="cart" d="M610,603H560.48a1.47,1.47,0,0,0-1.38,2l9.25,21.24a4,4,0,0,0,3.71,2.56h26.38a4,4,0,0,0,3.71-2.56L611.4,605A1.47,1.47,0,0,0,610,603Z" transform="translate(-558 -588)"/><path class="cart" d="M594,602.8v-5.1a8.71,8.71,0,0,0-8.7-8.7h0a8.71,8.71,0,0,0-8.7,8.7v5.1" transform="translate(-558 -588)"/></svg>
                            </button>
                        </div>
                    </div>`;
                    let temp = document.querySelector('.goods');
                    temp.insertAdjacentHTML('beforeend', place_in_fav);
                }
                else {
                    let place_in_fav = `<div class="goods_card">
                        <button class="favourites">
                            <svg class="favour" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 65"><path class="fav filled" d="M402.08,597.59a18.5,18.5,0,1,0-31.16,17h0l31.58,30.08,31.58-30.08h0a18.5,18.5,0,1,0-31.16-17A.43.43,0,0,1,402.08,597.59Z" transform="translate(-363 -581)"/></svg>
                        </button>
                        <div>
                            <div class="top_2">
                                <img src="${new_fav.src}">
                            </div>
                            <div class="top">
                                <a href="${new_fav.href}" class="h4 tab_2" title="${new_fav.descript}">${new_fav.name}</a>
                                <p class="text">
                                    <span class="need_1">${new_fav.info_1}</span><span class="cost">${new_fav.cost}</span><span class="need_2">${new_fav.info_2}</span>
                                </p>
                            </div>
                        </div>
        
                        <div class="bottom">
                            <div class="how_much_goods">
                                <button class="minus">-</button>
                                <p class="text"><span class="how_much">0</span> шт</p>
                                <button class="plus">+</button>
                            </div>
        
                            <button class="in_shopping_cart">
                                <svg class="shopping_cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.5 41.75"><path class="cart" d="M610,603H560.48a1.47,1.47,0,0,0-1.38,2l9.25,21.24a4,4,0,0,0,3.71,2.56h26.38a4,4,0,0,0,3.71-2.56L611.4,605A1.47,1.47,0,0,0,610,603Z" transform="translate(-558 -588)"/><path class="cart" d="M594,602.8v-5.1a8.71,8.71,0,0,0-8.7-8.7h0a8.71,8.71,0,0,0-8.7,8.7v5.1" transform="translate(-558 -588)"/></svg>
                            </button>
                        </div>
                    </div>`;
                    array[element_in_fav_now - 1].insertAdjacentHTML('afterend', place_in_fav);
                }
            } else if (1 + (2 * element_in_fav_now) >= parseInt(localStorage.getItem('favourite'))) {
                for (let j = 0; j < array.length; ++j) {
                    let success = false;
                    for (let i = 3; i <= parseInt(localStorage.getItem('favourite')); i = i + 2) {
                        let temp_obj = JSON.parse(localStorage.getItem(`${i}`));
                        if (array[j].querySelector('.h4').textContent === temp_obj.name) {
                            success = true;
                        }
                    }
                    if (!success) {
                        array[j].parentElement.removeChild(array[j]);
                    }
                    if (parseInt(localStorage.getItem('favourite')) === 1) {
                        let FAV = document.getElementById('you_havent_fav');
                        FAV.classList.remove('hidden');
                        let GOODS = document.getElementById('you_have_fav');
                        GOODS.classList.add('hidden');
                    }
                }
            }
            return;
        }
    // this.location.reload();
});

window.addEventListener('click', function(event) {
    let counter_for_plus_minus;

    if(event.target.className === 'minus' || event.target.className === 'plus') {
        const how_much_goods = event.target.closest('.how_much_goods');
        counter_for_plus_minus = how_much_goods.querySelector('.how_much');
    }
    //Если нажали Минус
    if (event.target.className === 'minus') {
        if (!(counter_for_plus_minus.textContent == 0)) counter_for_plus_minus.textContent = --counter_for_plus_minus.textContent;
        return;
    }

    //Если нажали Плюс
    if (event.target.className === 'plus') {
        if (!(counter_for_plus_minus.textContent == 999)) counter_for_plus_minus.textContent = ++counter_for_plus_minus.textContent;
        return;
    }

    //Если нажали "Добавить в корзину"
    if (event.target.classList.contains('in_shopping_cart') || event.target.classList.contains('shopping_cart') || event.target.classList.contains('cart')) {
        if (event.target.closest('.goods_card')) {

            let myGood = event.target.closest('.goods_card');
            let top_of_good = myGood.querySelector('.top');
            let top_of_good_2 = myGood.querySelector('.top_2');
            let bottom_of_good = myGood.querySelector('.how_much_goods');

            let obj;
            if (parseInt(bottom_of_good.querySelector('.how_much').textContent)) {
                all_goods = parseInt(localStorage.getItem('cart_values')) + 2;
                localStorage.setItem('cart_values', `${all_goods}`);

                obj = {
                    IDENT: 'in_cart',
                    src: top_of_good_2.querySelector('img').attributes.src.nodeValue,
                    name: top_of_good.querySelector('.h4').textContent,
                    info: top_of_good.querySelector('.text').textContent,
                    cost: parseInt(top_of_good.querySelector('.cost').textContent),
                    total: parseInt(bottom_of_good.querySelector('.how_much').textContent),
                    descript: top_of_good.querySelector('.h4').attributes.title.nodeValue
                }
                bottom_of_good.querySelector('.how_much').textContent = 0;
            }
    
            if (obj) {
                let good = JSON.stringify(obj);
                localStorage.setItem(`${all_goods}`, good);
                let total_price = parseInt(localStorage.getItem('total_cost'));
                total_price = total_price + obj.cost * obj.total;
                localStorage.setItem('total_cost', `${total_price}`)
                document.querySelector('.total').textContent = total_price;
            }
            //localStorage.clear();
            console.log(localStorage);
            return;
        }
    }

    if (event.target.classList[0] === 'favour' || event.target.classList[0] === 'favourites' || event.target.classList[0] === 'fav') {
        let good_card = event.target.closest('.goods_card');
        let name = good_card.querySelector('.h4').textContent;
        for (let j = 3; j <= parseInt(localStorage.getItem('favourite')); j = j + 2) {
            let temp_obj = JSON.parse(localStorage.getItem(`${j}`));
            if (name === temp_obj.name) {
                del_2(j);
                good_card.parentElement.removeChild(good_card);
                return;
            }
        }
        return;
    }
});

function del_2(i) {
    if (i === parseInt(localStorage.getItem('favourite'))) {
        localStorage.removeItem(`${i}`);
        let all_fav = parseInt(localStorage.getItem('favourite')) - 2;
        localStorage.setItem('favourite', `${all_fav}`);

        if (parseInt(localStorage.getItem('favourite')) === 1) {
            let GOODS = document.getElementById('you_have_fav');
            GOODS.classList.add('hidden');
            let FAV = document.getElementById('you_havent_fav');
            FAV.classList.remove('hidden');
        }
        return;
    }
    for (let j = i; j < parseInt(localStorage.getItem('favourite')); j = j + 2) {
        let temp = localStorage.getItem(`${j + 2}`);
        localStorage.setItem(`${j}`, temp);
    }
    let temp = parseInt(localStorage.getItem('favourite'));
    localStorage.removeItem(`${temp}`);
    let all_fav = temp - 2;
    localStorage.setItem('favourite', `${all_fav}`);
}