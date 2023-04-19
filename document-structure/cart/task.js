const quantityBtn = Array.from(document.getElementsByClassName('product__quantity-control'));
const productAddBtn = Array.from(document.getElementsByClassName('product__add'));
const cart = document.querySelector('.cart__products');

quantityBtn.forEach(elem => {
    elem.addEventListener('click', () => {
        const p = elem.closest('.product__quantity-controls');
        const count = p.querySelector('.product__quantity-value');

        if (elem.classList.contains('product__quantity-control_inc')) {
            count.textContent++;
        } else if (elem.classList.contains('product__quantity-control_dec') && count.textContent > 1) {
            count.textContent--;
        }
    })
})

productAddBtn.forEach(elem => {
    elem.addEventListener('click', () => {
        const p = elem.closest('.product');
        const count = p.querySelector('.product__quantity-value');
        const srcImage = p.querySelector('.product__image').src;
        const id = p.getAttribute('data-id');

        const productsId = Array.from(cart.children).find(i => i.getAttribute('data-id') === id);

        if (!productsId) {
            cart.insertAdjacentHTML(
                'beforeEnd',
                `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src=${srcImage}><div class="cart__product-count">${count.textContent}</div></div>`);
        } else {
            const cartProductCount = productsId.querySelector('.cart__product-count');
            cartProductCount.textContent = +cartProductCount.textContent + +count.textContent;
        }
    })
})