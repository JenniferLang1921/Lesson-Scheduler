  <template>
  <div>
    <Header>Swimming Lessons</Header>
    <span class="totalQuantity">{{ cart.length }} lessons in cart</span>

    <section class="swimmingLessons">
      <v-card width="200" v-for="lesson in lessons" :key="lesson.date"
        >{{ lesson.date }}
        <h3>{{ lesson.time }}</h3>
        <p>{{ lesson.employee }}</p>
        <v-btn @click="addItemToCart(lesson)">Add to Cart</v-btn>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {

cart: [],
      lessons: [
        {
          id: 1,
          date: "February 22, 2021",
          time: "11:30:00",
          employee: "Smith"
        },
        {
          id: 2,
          date: "February 23, 2021",
          time: "2:30:00",
          employee: "Jackson"
        },
        {
          id: 3,
          date: "February 24, 2021",
          time: "5:30:00",
          employee: "Hill"
        },
        {
          id: 4,
          date: "February 25, 2021",
          time: "16:30:00",
          employee: "Snow"
        },

      ],
    };
  },
  methods: {
    addItemToCart(lesson) {
      this.cart.push(lesson);
      console.log(this.cart)
    }
  }
}
  </script>
