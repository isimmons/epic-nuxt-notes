<template>
  <div class="flex justify-between border-8 border-blue-500">
    <div>
      <h1 class="text-h1">{{ params.username }} Notes</h1>

      <ul>
        <li>
          <NuxtLink :to="`/users/${params.username}`"
            >Back to {{ params.username }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="`/users/${params.username}/notes/some-note`"
            >Some Note</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="`/users/${params.username}/notes/some-other-note`"
            >Some Other Note</NuxtLink
          >
        </li>
      </ul>
    </div>

    <div class="container border-8 border-purple-500 pt-12">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();
</script>

<style></style>
