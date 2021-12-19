let place = document.querySelector('#number');
place.textContent = getStringNumber();
deleteCart();

function getStringNumber() {
    let order = localStorage.getItem('orders');
    let string_order = "";
    let length_of_null = 6 - order.length;
    for (let i = 0; i < length_of_null; ++i) {
        string_order += "0";
    }
    string_order += order;
    return string_order;
}

function deleteCart() {
    localStorage.setItem('total_cost', 0);
    let cartLength = localStorage.getItem('cart_values');
    for(let i = cartLength; i > 0; i = i - 2) {
        localStorage.removeItem(`${i}`);
        localStorage.setItem('cart_values', i - 2);
    }
    console.log(localStorage);
}