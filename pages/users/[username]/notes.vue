<template>
  <div class="flex flex-grow justify-between h-[calc(100vh-148px)] pb-12 border-8 border-blue-500">
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

    <div class="container pt-12 border-8 border-purple-500">
      <!-- default content -->
      <!-- shows only if not showing a page (default for the /notes route )-->
      <div v-if="isDefault" >
        <p class="text-body-md">Select a note</p>
      </div>

      <!-- shows the /[noteId] page for the /notes/[noteId] route -->
      <NuxtPage :sayHello="sayHello" :sayGoodbye="sayGoodbye" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();
const isDefault = ref(true);

// route.name does not change when url changes so the noteId page has to announce
// its presence or its leaving to show or hide the default content
const sayHello = () => (isDefault.value = false);
const sayGoodbye = () => (isDefault.value = true);
</script>

<style></style>
