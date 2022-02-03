<template>
  <q-layout>
    <q-header class="q-my-lg bg-none">
      <Header />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
</template>

<script>

import {defineComponent} from 'vue'
import Header from "components/Header";

export default defineComponent({
  name: 'MainLayout',
  components: {Header},
  setup() {

    return {}
  }
})
</script>
<style>
.bg-none {
  background: none;
}

body {
  font-family: 'Montserrat', sans-serif;
}

</style>
