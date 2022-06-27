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
            let res = 0;
            for (let i = 0; i < this.cart.length; i++) {
                res += this.products[this.cart[i].productIndex].price * this.cart[i].count;
            }
            res += this.selectedItemPrice * this.selected.count;
            return res;
        }

    },
    methods:{
        addInCart() {
            this.cart.push(Object.assign({}, this.selected))
        },
        deleteFromCart(id) {
            this.cart.splice(id, 1)
        },
        clearSelect() {
            this.selected.productIndex = null;
            this.selected.count = null;
        },
        readyToAdd() {
            return this.selected.productIndex !== null && this.selected.count !== null
        }
    }
    });
