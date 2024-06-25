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
const {
  params: { noteId },
} = useRoute();

if (typeof noteId !== 'string')
  throw createError({
    statusCode: 404,
    statusMessage: 'User not found.',
  });

const getNote = async (noteId: string) => {
  const note = db.note.findFirst({
    where: { id: { equals: noteId } },
  });

  if (!note)
    throw createError({
      statusCode: 404,
      statusMessage: 'Note not found.',
    });

  return { id: note.id, title: note.title, content: note.content };
};

const { data } = await useAsyncData(() => getNote(noteId));

if (!data.value)
  throw createError({
    statusCode: 400,
    statusMessage: 'Problem finding note',
  });

const note = data.value;
</script>
