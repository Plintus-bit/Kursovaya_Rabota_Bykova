
//отслеживание кликов по изображениям
window.addEventListener('click', function(event) {

    //смена изображения по клику
    if (event.target.tagName === 'IMG' && event.target.className != 'sorry') {
        let current_img = event.target.attributes.src;
        let main_img = document.querySelector('.image').attributes.src;
        
        if (main_img.nodeValue != current_img.nodeValue) {
            let temp = main_img.nodeValue;
            main_img.nodeValue = current_img.nodeValue;
            current_img.nodeValue = temp;
        }
        return;
    }

    if (event.target.tagName === 'BUTTON') {
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
        if (event.target.id === 'in_cart') {
            let myGood = event.target.closest('.good');
            let top_of_good = myGood.querySelector('.good_images');
            let bottom_of_good = myGood.querySelector('#good_describing');
            let all_goods;

            let obj;
            let total_ = parseInt(bottom_of_good.querySelector('.how_much').textContent);
            let p = myGood.closest('.content-container').querySelector('.good_description');

            if (total_) {
                all_goods = parseInt(localStorage.getItem('cart_values')) + 2;
                this.localStorage.setItem('cart_values', `${all_goods}`);

                obj = {
                    IDENT: 'in_cart',
                    src: top_of_good.querySelector('#good_and_fav').querySelector('.image').attributes.src.nodeValue,
                    name: bottom_of_good.querySelector('.h2').textContent,
                    info: bottom_of_good.querySelector('.price').textContent,
                    cost: parseInt(bottom_of_good.querySelector('.cost').textContent),
                    total: total_,
                    descript: p.textContent
                }
                bottom_of_good.querySelector('.how_much').textContent = 0;
            }

            if (obj) {
                let good = JSON.stringify(obj);
                this.localStorage.setItem(`${all_goods}`, good);
                let total_price = parseInt(this.localStorage.getItem('total_cost'));
                total_price = total_price + obj.cost * obj.total;
                this.localStorage.setItem('total_cost', `${total_price}`)
                document.querySelector('.total').textContent = total_price;
            }
            //this.localStorage.clear();
            console.log(this.localStorage);
        }
    }
    
})