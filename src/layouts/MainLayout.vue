<template>
  <div>
    <q-bar>
      <q-space/>

      <q-btn @click="showIcons" dense flat icon="minimize"/>
      <q-btn dense flat icon="minimize"/>
      <q-btn dense flat icon="crop_square"/>
      <q-btn dense flat icon="close"/>
    </q-bar>
    <router-view/>
  </div>
</template>

<script>
import {openURL} from 'quasar'

export default {
  name: "MainLayout",
  mounted() {

  },
  methods: {
    showIcons() {
      window.electronAPI.showWinDialog({
        url: "/icons",
      });
    }
  },

}
</script>

<style scoped>

</style>
