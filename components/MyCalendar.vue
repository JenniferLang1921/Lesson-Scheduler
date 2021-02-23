<template>
<div>
  <v-container fluid>
   <v-row class="fill-height" >
    <v-col>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Swimmers {{students.length}}<v-icon class="ml-4" right>mdi-swim</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="student in students"
          :key="student"
        >
          <v-list-item-title>{{ students }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
{{ students.first_name }}

          <v-btn color="primary">
            Days <v-icon class="ml-4" right>mdi-calendar-month-outline</v-icon>
          </v-btn>
          <v-btn color="primary">
            Instructors <v-icon class="ml-4" right>mdi-account</v-icon>
          </v-btn>
        </v-col>
  </v-row>

  <!----Cart---->

   <v-card width="300" class="totalQuantity">
    <h3>{{ cart.length }} lessons in cart</h3>
    <div v-for="cart in cart" :key="cart.lesson" class="floatLeft" >
    <h3 >{{cart.date}}</h3>
    <!-- <v-btn class="btn" @click="removeItemFromCart(lesson)">X</v-btn>-->
     </div>
      </v-card>
    <!-----Calendar goes here--->


 <v-card width="200" v-for="lesson in lessons" :key="lesson.date"
        >{{ lesson.date }}
        <h3>{{ lesson.time }}</h3>
        <p>{{ lesson.employee }}</p>
        <v-btn  @click="addItemToCart(lesson)">Add to Cart</v-btn>
      </v-card>


  </v-container>
</div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => {
    return {
        cart: [],
    }
  },


computed:
  mapState (['lessons', 'cart', 'students']),

 methods:{
            test(){
                this.$store.commit('addItemToCart')
            },

    addItemToCart(lesson) {
      this.cart.push(lesson);
      console.log(this.cart)
    },
    removeItemFromCart(lesson) {
      this.cart.delete(lesson);
      console.log(this.cart)
    },

        }

}
</script>


<style scoped>
.totalQuantity {
  float: right;
}

.btn {
  float: right;
}

.floatLeft {
  float: left;
}

</style>
