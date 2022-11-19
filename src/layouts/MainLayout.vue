<template>
  <div>
    <q-bar>
      <q-space />

      <q-btn dense flat icon="minimize" />
      <q-btn dense flat icon="crop_square" />
      <q-btn dense flat icon="close" />
    </q-bar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped>

</style>
