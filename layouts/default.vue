<template>
  <v-app dark>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-btn  to="/" color="primary">
            <v-icon mr-8>mdi-home</v-icon>
          </v-btn>



      <v-spacer />
        <v-btn to="cart" color="primary">
            <v-icon>mdi-cart</v-icon>
          </v-btn>

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>



    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-cart',
          title: 'Checkout Cart',
          to: '/cart'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
