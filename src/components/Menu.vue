<template>
    <div class="row">
      {{ $route.params.items }}
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item['.key']">
                    <tr>
                        <td><strong>{{ item.name }}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{ option.size }}</td>
                        <td>{{ option.price }}</td>
                        <td>
                        <button
                            class="btn btn-sm btn-outline-success"
                            type="button"
                            @click="addToBasket( item, option )">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- shopping basket -->
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket">
                    <tr>
                            <td>
                                <buttton class="btn btn-sm"
                                type="button"
                                @click="decreaseQuantity(item)">-</buttton>
                                <span>{{ item.quantity }}</span>
                                <buttton class="btn btn-sm"
                                type="button"
                                @click="increaseQuantity(item)">+</buttton>
                            </td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.price * item.quantity }}</td>
                    </tr>
                    </tbody>
                </table>
                <p>Order total:</p>
                <button
                @click="addNewOrder"
                class="btn btn-success btn-block">
                    Place Order
                </button>
            </div>
            <div v-else>
                <p>{{ basketText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { dbOrdersRef } from '../firebaseConfig'
export default {
    data(){
        return {
            basket: [],
            basketText: "Your basket is empty"
        }
    },
    computed:{
      ...mapGetters([
        'getMenuItems'
      ])
    },
    methods: {
        addToBasket(item,option){
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            })
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item),1);
        },
        increaseQuantity(item){
            item.quantity++;
        },
        decreaseQuantity(item){
            item.quantity--;
            if(item.quantity === 0){
                this.removeFromBasket(item)
            }
        },
        addNewOrder(){
          dbOrdersRef.push(this.basket)
          this.basket = []
          this.basketText = "Thank you, your order has been placed! :)"
        }
    }
}
</script>
