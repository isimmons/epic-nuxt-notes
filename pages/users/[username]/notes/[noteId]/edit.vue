<template>
  <form
    method="POST"
    class="flex h-full flex-col gap-y-4 overflow-x-hidden px-10 pb-28 pt-12"
  >
    <div class="flex flex-col gap-1">
      <div>
        <UiLabel for="title">Title</UiLabel>
        <UiInput name="title" id="title" :default-value="note.title" />
      </div>
      <div>
        <UiLabel for="content">Content</UiLabel>
        <UiTextarea
          name="content"
          id="content"
          :default-value="note.content"
          class="min-h-[400px]"
        />
      </div>
    </div>
    <FloatingToolbar>
      <UiButton type="reset" variant="destructive">Reset</UiButton>
      <UiButton type="submit">Submit</UiButton>
    </FloatingToolbar>
  </form>
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
