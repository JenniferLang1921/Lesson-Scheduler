<template>
 <v-container fluid>


      <v-row>

        <v-col><h1>Add Weekly Lesson</h1></v-col>
        <v-col>

        </v-col>
       <!-- <v-col>{{ students}}</v-col>-->
      </v-row>

</v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:
  mapState (['students']),

}
</script>

<style scoped>
.btn {
  float: right;
}
</style>
