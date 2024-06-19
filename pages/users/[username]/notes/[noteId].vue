<template>
  <div>
    <h2 class="text-h2">{{ params.noteId }}</h2>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();

const props = defineProps<{
  sayHello: () => void;
  sayGoodbye: () => void;
}>();

onMounted(() => {
  props.sayHello();
});

onBeforeUnmount(() => {
  props.sayGoodbye();
});
</script>
