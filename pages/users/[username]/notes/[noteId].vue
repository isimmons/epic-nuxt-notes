<template>
  <div class="absolute inset-0 flex flex-col px-10">
    <h2 class="pt-12 mb-2 text-h2 lg:mb-6">{{ data.note.title }}</h2>
    <div class="px-3 pb-24 overflow-y-auto">
      <p class="text-sm whitespace-break-spaces md:text-lg">
        {{ data.note.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { invariantResponse } from '~/utils/misc';

const {
  params: { noteId },
} = useRoute();

invariantResponse(typeof noteId === 'string');

const getNote = async (noteId: string) => {
  const note = db.note.findFirst({
    where: { id: { equals: noteId } },
  });

  invariantResponse(note !== null);

  return {
    note: { id: note.id, title: note.title, content: note.content },
  };
};

const { data } = useAsyncData(() => getNote(noteId));
</script>
