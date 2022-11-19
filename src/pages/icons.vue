<template>
  <div>
    <q-icon v-for="item in lists" :name="item" />
  </div>
</template>

<script>
import icons from '@quasar/extras/material-icons/icons.json';
import _  from 'lodash/string';

export default {
  name: "icons",
  data(){
    return {
      lists:[]
    }
  },
  mounted() {
    let lists = [];
    for(let i=0;i<icons.length;i++){
      lists.push(_.snakeCase(icons[i]))
    }
    this.lists = lists
  }
}
</script>

<style scoped>

</style>
