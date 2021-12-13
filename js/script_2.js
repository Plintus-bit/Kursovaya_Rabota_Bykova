
if (!localStorage.length) {
    localStorage.setItem('cart_values', 0);
    localStorage.setItem('favourite', 1);
    localStorage.setItem('total', 0);
    localStorage.setItem('total_cost', 0);
}

window.onload = function() {
    // console.log(localStorage);
    let array = document.querySelectorAll('.total');
    array.forEach(function (item) {
        item.textContent = parseInt(localStorage.getItem('total_cost'));
    });

    let fav = parseInt(localStorage.getItem('favourite'));
    if (fav > 1) {
        let fav_array = document.getElementsByClassName('goods_card');
        for (let i = 3; i <= fav; i = i + 2) {
            let obj = JSON.parse(localStorage.getItem(`${i}`));
            for (let j = 0; j < fav_array.length; ++j) {
                if (fav_array[j].querySelector('.h4').textContent === obj.name) {
                    fav_array[j].querySelector('.fav').style.fill = 'var(--red)';
                    fav_array[j].querySelector('.fav').style.stroke = 'var(--red)';
                }
            }
        }
    }
}

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

    //Если нажали на "Добавить в избранное"
    if (event.target.classList[0] === 'favour' || event.target.classList[0] === 'favourites' || event.target.classList[0] === 'fav') {
        let like;
        if (event.target.attributes.class.nodeValue === 'fav') {
            like = event.target;
        }
        else {
            like = event.target.querySelector('.fav');
        }

        if (like.style.fill === 'var(--red)') {
            //тут будет удаление из избранного

            let favGood = event.target.closest('.goods_card');
            let top_of_good = favGood.querySelector('.top');
            let obj = top_of_good.querySelector('.h4').textContent;

            for (let i = 3; i <= parseInt(localStorage.getItem('favourite')); i = i + 2) {
                let temp_obj = JSON.parse(localStorage.getItem(`${i}`));
                if (obj === temp_obj.name) {
                    del(i);
                }
            }
            like.style.fill = 'none';
            like.style.stroke = 'var(--text_color)';

        } else {

            let favGood = event.target.closest('.goods_card');
            let top_of_good = favGood.querySelector('.top');
            let top_of_good_2 = favGood.querySelector('.top_2');

            let obj = {
                IDENT: 'in_fav',
                src: top_of_good_2.querySelector('img').attributes.src.nodeValue,
                name: top_of_good.querySelector('.h4').textContent,
                info_1: top_of_good.querySelector('.need_1').textContent,
                info_2: top_of_good.querySelector('.need_2').textContent,
                cost: top_of_good.querySelector('.cost').textContent,
                descript: top_of_good.querySelector('.h4').attributes.title.nodeValue,
                href: top_of_good.querySelector('a').attributes.href.nodeValue,
                fav: 1
            }
            let all_fav = parseInt(localStorage.getItem('favourite')) + 2;
            localStorage.setItem('favourite', `${all_fav}`);
            let good = JSON.stringify(obj);
            localStorage.setItem(`${all_fav}`, good);
            
            like.style.fill = 'var(--red)';
            like.style.stroke = 'var(--red)';
        }
        localStorage.clear();
        console.log(localStorage);
        return;
    }
    
    //Если нажали "Добавить в корзину"
    if (event.target.classList.contains('in_shopping_cart') || event.target.classList.contains('shopping_cart') || event.target.classList.contains('cart')) {
        if (event.target.closest('.goods_card')) {

            let myGood = event.target.closest('.goods_card');
            let top_of_good = myGood.querySelector('.top');
            let bottom_of_good = myGood.querySelector('.how_much_goods');
            let top_of_good_2 = myGood.querySelector('.top_2');
    
            let obj;
            if (parseInt(bottom_of_good.querySelector('.how_much').textContent)) {
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
                for (let i = 2; i <= parseInt(localStorage.getItem('cart_values')); i = i + 2) {
                    let temp_obj = JSON.parse(localStorage.getItem(`${i}`));
                    if (obj.name === temp_obj.name) {

                        obj.total = obj.total + temp_obj.total;
                        let obj_1 = JSON.stringify(obj);
                        localStorage.setItem(`${i}`, obj_1);
                        localStorage.removeItem(event.key);
                        console.log(localStorage);
                        return;
                    }
                }

                all_goods = parseInt(localStorage.getItem('cart_values')) + 2;
                localStorage.setItem('cart_values', `${all_goods}`);

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
    
});

window.addEventListener('storage', event => {
    if (event.key === 'favourite') {
        // location.reload();
        let fav = parseInt(localStorage.getItem('favourite'));
        if (fav > 1) {
            let fav_array = document.getElementsByClassName('goods_card');
            for (let i = 3; i <= fav; i = i + 2) {
                let obj = JSON.parse(localStorage.getItem(`${i}`));
                for (let j = 0; j < fav_array.length; ++j) {
                    if (fav_array[j].querySelector('.h4').textContent === obj.name) {
                        fav_array[j].querySelector('.fav').style.fill = 'var(--red)';
                        fav_array[j].querySelector('.fav').style.stroke = 'var(--red)';
                    }
                }
            }
        }
    } else {
        let array = document.querySelectorAll('.total');
        array.forEach(function (item) {
            item.textContent = parseInt(localStorage.getItem('total_cost'));
        });
    }
});

function del(i) {
    if (i === parseInt(localStorage.getItem('favourite'))) {
        localStorage.removeItem(`${i}`);
        let all_fav = parseInt(localStorage.getItem('favourite')) - 2;
        localStorage.setItem('favourite', `${all_fav}`);
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