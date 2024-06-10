<template>
  <div class="container pt-12 border-8 border-red-500">
    <h2 class="text-h2">{{ params.noteId }}</h2>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();

const props = defineProps<{
  sayHello: () => void;
  sayGoodbye: () => void;
}>();

props.sayHello();

onBeforeUnmount(() => {
  props.sayGoodbye();
});
</script>
