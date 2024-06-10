<template>
  <div class="container mb-48 border-4 border-green-500 mt-36">
    <h1 class="text-h1">{{ params.username }}</h1>
    <NuxtLink :to="`/users/${params.username}/notes`">Notes</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();
</script>

<style></style>
