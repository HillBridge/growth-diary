<script setup>
</script>

<template>
  <div>
    <router-view />

    <router-link :to="{ name: 'home' }">
      Home
    </router-link>

    <router-link :to="{ name: 'simple-list' }">
      Simple array
    </router-link>

    <router-link :to="{ name: 'test-chats' }">
      Simple array
    </router-link>
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
