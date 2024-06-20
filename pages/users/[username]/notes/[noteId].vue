<template>
  <div>
    <h2 class="text-h2">{{ params.noteId }}</h2>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
</script>
