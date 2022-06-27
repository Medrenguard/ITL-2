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
            productIndex: null,
            count: null
        },
        cart:[]
    },
    computed: {
        selectedItemPrice() {
            return this.selected.productIndex !== null ? this.products[this.selected.productIndex].price : 0
        },
        getTotal() {
            return this.selectedItemPrice * this.selected.count || 0
        }
    },
    methods:{
        addInCart() {
            this.cart.push(Object.assign({}, this.selected))
        },
        clearSelect() {
            this.selected.productIndex = null;
            this.selected.count = null;
        }
    }
    });
