<template>
  <div class="grid grid-cols-8 gap-4">
    <div class="text-center" v-for="(item, index) in lists" :key="index">
      <q-icon size="lg" :name="item"/>
      <div class="truncate">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import icons from '@quasar/extras/material-icons/icons.json';
import _ from 'lodash/string';

export default {
  name: "icons",
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    let lists = [];
    for (let i = 0; i < icons.length; i++) {
      lists.push(_.snakeCase(icons[i]))
    }
    this.lists = lists
  }
}
</script>

<style scoped>

</style>
