<script setup>
import HeaderComponent from './HeaderComponent.vue'
import LandingContent from './LandingContent.vue'

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
    <LandingContent />
  </div>
</template>

