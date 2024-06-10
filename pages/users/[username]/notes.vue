<template>
  <div class="flex justify-between h-full pb-12 border-8 border-blue-500">
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
      </ul>
    </div>

    <div>
      <div v-if="isDefault" class="container pt-12 border-8 border-purple-500">
        <p class="text-body-md">Select a note</p>
      </div>
      <NuxtPage :sayHello="sayHello" :sayGoodbye="sayGoodbye" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();
const isDefault = ref(true);

const sayHello = () => (isDefault.value = false);
const sayGoodbye = () => (isDefault.value = true);
</script>

<style></style>
