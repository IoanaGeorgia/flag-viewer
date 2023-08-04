<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './components/HomeView.vue'
</script>

<template>

    <div class="wrapper">
      <HomeView />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>

  <!-- <RouterView /> -->
</template>

