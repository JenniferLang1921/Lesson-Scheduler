<template>
<div>
  <h1>hello</h1>
  <h1>{{students}}</h1>
  <h1>{{getStudentByName}}</h1>

<h1>test</h1>


  </div>

</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {


computed:
  mapState (['students']),



}

</script>


<style>

</style>
