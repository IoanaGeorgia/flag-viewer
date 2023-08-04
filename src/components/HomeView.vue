<script setup>
import HeaderComponent from './HeaderComponent.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <HeaderComponent />
a
  </div>
</template>

