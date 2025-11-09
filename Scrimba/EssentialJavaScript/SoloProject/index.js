import { menuArray } from './data.js'

const menuDiv = document.getElementById('menu-div')
const cartDiv = document.getElementById('cart-div')
const cartItemsContainer = document.getElementById('cart-items-container')
const cartTotal = document.getElementById('cart-total')
const checkoutModal = document.getElementById('checkout-modal')
const paymentForm = document.getElementById('payment-form')

let cart = []
let price = 0

const getMenuHtml = () => {
    return menuArray.map(({ name, ingredients, id, price, emoji }) => {
        return `
<div class="menu-item-container">
    <div class="menu-item-img" id="menu-item-img-container">${emoji}</div>
    <div class="space-between">
        <div id="menu-item-details">
            <h1>${name}</h1>
            <p class="ingredient">${ingredients.map((ingredient) => ingredient).join(', ')}</p>
            <h2>$${price}</h2>
        </div>
        <button id="add-item" class="add-item-btn" data-add="${id}">+</button>
    </div>
</div>
        `
    }).join('')
}

const getCartItemsHtml = () => {
    if (cart.length > 0) {
        return cart.map(({ name, ingredients, id, price, emoji }) => {
            return `
<div class="cart-div">
    <div class="cart-item-name">${name}</div>
    <div class="space-between">
        <button id="remove-item" class="remove-item-btn" data-remove="${id}">remove</button>
        <h2>$${price}</h2>
    </div>
</div>
            `
        }).join('')
    }
    return ''
}

document.addEventListener('click', (e) => {
    if (e.target.dataset.add) {
        handleAddItem(e.target.dataset.add)
    } else if (e.target.dataset.remove) {
        handleRemoveItem(e.target.dataset.remove)
    } else if (e.target.closest('#complete-order-btn')) {
        handleCompleteOrderBtnClick()
    }
})

const handleAddItem = (id) => {
    const item = (menuArray.find((item) => item.id === Number(id)))
    
    if (item) {
        if (cart.length === 0) {
            cartDiv.classList.remove('hidden')
        }
        cart.push(item)
        price += item.price
        render()
    } 
}

const handleRemoveItem = (id) => {
    const itemIndex = (cart.findIndex((item) => item.id === Number(id)))
    const item = cart[itemIndex]
    
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1)
        if (cart.length === 0) {
            cartDiv.classList.add('hidden')
        }
        price -= item.price
        render()
    }
}

const handleCompleteOrderBtnClick = () => {
    checkoutModal.classList.remove('hidden')
}

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handlePayBtnClick()
})

const handlePayBtnClick = () => {
    const name = document.getElementById('name-input').value
    checkoutModal.classList.add('hidden')
    
    const orderCompletemodal = document.getElementById('order-complete-modal')
    orderCompletemodal.classList.remove('hidden')
    orderCompletemodal.innerText = `Thanks, ${name}! Your order is on its way!`
    
    cartDiv.classList.add('hidden')
    cart = []
    price = 0
    render()
}


const render = () => {
    menuDiv.innerHTML = getMenuHtml()
    cartItemsContainer.innerHTML = getCartItemsHtml()
    cartTotal.innerText = price
}

render()