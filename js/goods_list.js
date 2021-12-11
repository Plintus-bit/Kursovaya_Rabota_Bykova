
//Сортировка 
window.addEventListener('click', function(event) {
    // console.log(event.target.tagName)

    if (event.target.tagName === 'BUTTON' && event.target.closest('.sort')) {

        const all_sorting_buttons = event.target.closest('.sort');
        
        const current = all_sorting_buttons.querySelector('.now');

        if (event.target.id != current.id) {
            current.classList.remove('now');

            let sort_array = document.querySelectorAll('.goods');

            if (event.target.id === "cost") {
                sort_array.forEach( item => {
                    for(let i = 0; i < item.children.length; ++i) {
                        for(let j = i; j < item.children.length; ++j) {
                            if (parseInt(item.children[i].querySelector('.cost').textContent) > parseInt(item.children[j].querySelector('.cost').textContent)) {
                                let replace = item.replaceChild(item.children[j], item.children[i]);
                                item.children[i].insertAdjacentElement('afterend', replace);
                            }
                        }
                    }
                });
            }
            else if (event.target.id === "names") {
                sort_array.forEach( item => {
                    for(let i = 0; i < item.children.length; ++i) {
                        for(let j = i; j < item.children.length; ++j) {
                            if (item.children[i].querySelector('.h4').textContent[0].toUpperCase() > item.children[j].querySelector('.h4').textContent[0].toUpperCase()) {
                                let replace = item.replaceChild(item.children[j], item.children[i]);
                                item.children[i].insertAdjacentElement('afterend', replace);
                                continue;
                            }
                            let g = 0;
                            if (item.children[i].querySelector('.h4').textContent[g].toUpperCase() === item.children[j].querySelector('.h4').textContent[g].toUpperCase()) {
                                let min;
                                if (item.children[i].querySelector('.h4').textContent.length < item.children[j].querySelector('.h4').textContent.length) {
                                    min = item.children[i].querySelector('.h4').textContent.length;
                                } else {
                                    min = item.children[j].querySelector('.h4').textContent.length;
                                }
                                do {
                                    ++g;
                                } while (g < min - 1 && item.children[i].querySelector('.h4').textContent[g].toUpperCase() === item.children[j].querySelector('.h4').textContent[g].toUpperCase());
                                if (item.children[i].querySelector('.h4').textContent[g].toUpperCase() > item.children[j].querySelector('.h4').textContent[g].toUpperCase()) {
                                    let replace = item.replaceChild(item.children[j], item.children[i]);
                                    item.children[i].insertAdjacentElement('afterend', replace);
                                }
                            }
                        }
                    }
                });
            }
            else if (event.target.id === "not_sort") {
                this.location.reload();
            }
            event.target.classList.add('now');
        }


    }


})
