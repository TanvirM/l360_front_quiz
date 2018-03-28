<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import dash from './Dashboard';


  export default {
    data() {
      return {
        pageStack: [dash]
      }
    }
  }
</script>
