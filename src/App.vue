<script setup>
import { ref } from 'vue'
import Immer from './components/immer/index.vue'
const msg = ref('Hello world')

</script>

<template>
  <div>
    <!-- {{ msg }} -->

    <immer></immer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
