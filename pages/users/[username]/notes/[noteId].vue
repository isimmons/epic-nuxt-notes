<template>
  <div class="absolute inset-0 flex flex-col px-10">
    <h2 class="mb-2 pt-12 text-h2 lg:mb-6">{{ note.title }}</h2>
    <div class="overflow-y-auto px-3 pb-24">
      <p class="whitespace-break-spaces text-sm md:text-lg">
        {{ note.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const {
  params: { noteId },
} = useRoute();

if (typeof noteId !== 'string')
  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid note id in request URL.',
  });

type Note = {
  title: string;
  content: string;
};

const { data, error }: { data: Ref<Note>; error: Ref<NuxtError | null> } =
  await useAsyncData(`note.${noteId}`, async () => {
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

const note = data.value;
</script>
