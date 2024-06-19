<template>
  <div class="mt-36 border-4 border-[#00DC82]">
    <h1 class="text-h1">{{ params.username }}</h1>
    <NuxtLink :to="`/users/${params.username}/notes`">Notes</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();
</script>
