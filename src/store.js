import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";

export const useStore = defineStore('main', {
    state: () => {
        return {
            products: useStorage('products', [
                {
                    id: 1,
                    name: 'Red Car',
                    price: 40,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                    image: '/images/car-1.jpg'
                },
                {
                    id: 2,
                    name: 'White Car',
                    price: 50,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                    image: '/images/car-2.jpg'
                },
                {
                    id: 3,
                    name: 'Blue Car',
                    price: 60,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                    image: '/images/car-3.jpg'
                },
                {
                    id: 4,
                    name: 'Yellow Car',
                    price: 70,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis delectus ducimus eaque earum, fuga maxime repellendus temporibus. Doloremque, soluta.',
                    image: '/images/car-4.jpg'
                },
            ]),
            cart: useStorage('shoppingCart', [])
        }
    },
    actions: {
        addCart(product) {
            let itemIndex = this.cart.findIndex(item => item.id === product.id)
            if (itemIndex !== -1) {
                this.cart[itemIndex].quantity += product.quantity
            } else {
                this.cart.push(product)
            }
        },
        increaseCart(id) {
            let itemIndex = this.cart.findIndex(item => item.id === id)
            this.cart[itemIndex].quantity += 1
        },
        decreaseCart(id) {
            let itemIndex = this.cart.findIndex(item => item.id === id)
            if (this.cart[itemIndex].quantity <= 1) {
                this.removeCart(id)
            } else {
                this.cart[itemIndex].quantity -= 1
            }
        },
        removeCart(id) {
            let itemIndex = this.cart.findIndex(item => item.id === id)
            this.cart.splice(itemIndex, 1)
        }
    }
})
