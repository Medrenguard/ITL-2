"use strict";
const app = new Vue({
    el: '#app',
    data: {
        products:[
            {id: 1, name: "Картофель", price: 20},
            {id: 2, name: "Сок", price: 100},
            {id: 3, name: "Мясо",  price: 500},
            {id: 4, name: "Бананы", price: 50}
        ],
        selected: {
            productId: null,
            count: null
        },
        cart:[]
    },
    computed: {
        selectedItemPrice() {
            return this.selected.productId !== null ? this.products.find(el => el.id === this.selected.productId).price : 0
        },
        getTotal() {
            return this.selectedItemPrice * this.selected.count || 0
        }
    },
    methods:{
        getProductById(desiredId) {
            return this.products.find(el => el.id === desiredId)
        },
        addInCart() {
            this.cart.push(Object.assign({}, this.selected))
        },
        clearSelect() {
            this.selected.productId = null;
            this.selected.count = null;
        }
    }
    });
