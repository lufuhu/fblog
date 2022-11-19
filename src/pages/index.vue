<template>
<div>
  <q-icon name="mat6k_plus" />
<!--  <q-icon v-for="item in lists" :name="item" />-->
</div>
</template>

<script>
import icons from '@quasar/extras/material-icons/icons.json'
export default {
  name: "index",
  data(){
    return {
      lists:[]
    }
  },
  mounted() {
    console.log(icons)
    this.lists = icons
  }
}
</script>

<style scoped>

</style>
