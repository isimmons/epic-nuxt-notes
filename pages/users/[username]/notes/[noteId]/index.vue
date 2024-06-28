<template>
  <div class="absolute inset-0 flex flex-col px-10">
    <h2 class="mb-2 pt-12 text-h2 lg:mb-6">{{ note.title }}</h2>
    <div class="overflow-y-auto px-3 pb-24">
      <p class="whitespace-break-spaces text-sm md:text-lg">
        {{ note.content }}
      </p>
    </div>

    <FloatingToolbar>
      <form @submit.prevent="emits('note-deleted', note.id)">
        <UiButton type="submit" variant="destructive">Delete</UiButton>
      </form>
      <UiButton as-child>
        <NuxtLink :to="`${noteId}/edit`">Edit</NuxtLink>
      </UiButton>
    </FloatingToolbar>
  </div>
</template>

<script setup lang="ts">
import { assertNotNot } from '~/utils/misc';

const emits = defineEmits<{
  (e: 'note-deleted', id: string): void;
  (e: 'deleted-note-unmounted'): void;
}>();

onUnmounted(() => emits('deleted-note-unmounted'));

const {
  params: { noteId, username },
} = useRoute();

if (typeof noteId !== 'string' || typeof username !== 'string')
  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid parameter in request URL.',
  });

const { data, error } = await useAsyncData(`note.${noteId}`, async () => {
  const note = db.note.findFirst({
    where: { id: { equals: noteId } },
  });

  if (!note)
    throw createError({
      statusCode: 404,
      statusMessage: 'Note not found.',
    });

  return { id: note.id, title: note.title, content: note.content };
});

if (error.value) throw createError(error.value);

assertNotNot(data.value);

const note = data.value;

// const deleteNote = async () => {
//   try {
//     // await $fetch(`/api/notes/${noteId}`, {
//     //   method: 'DELETE',
//     // });

//     db.note.delete({
//       where: { id: { equals: noteId } },
//     });

//     console.log('Note deleted successfully');

//     emits('note-deleted', noteId);

//     await navigateTo(`/users/${username}/notes`);
//   } catch (error) {
//     const errorMessage = `Failed to delete todo: ${error}`;
//     console.error(errorMessage);
//     throw createError({
//       statusCode: 500,
//       statusMessage: errorMessage,
//     });
//   }
// };
</script>
