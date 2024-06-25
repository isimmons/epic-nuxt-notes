<template>
  <div class="flex h-full px-0 pb-12 md:px-8">
    <div
      class="grid w-full grid-cols-4 bg-muted pl-2 md:container md:mx-2 md:rounded-3xl md:pr-0"
    >
      <div class="relative col-span-1">
        <div class="absolute inset-0 flex flex-col">
          <NuxtLink
            :to="`/users/${owner.username}`"
            class="pb-4 pl-8 pr-4 pt-12"
          >
            <h1
              className="text-base font-bold md:text-lg lg:text-left lg:text-2xl"
            >
              {{ owner.name ?? owner.username }}&apos;s Notes
            </h1>
          </NuxtLink>

          <ul
            v-if="notes.length > 0"
            class="overflow-y-auto overflow-x-hidden pb-12"
          >
            <li v-for="note in notes" :key="note.id">
              <NuxtLink
                :to="`/users/${owner.username}/notes/${note.id}`"
                :class="navLinkDefaultClassName"
                >{{ note.title }}</NuxtLink
              >
            </li>
          </ul>
          <p v-else>No notes for user</p>
        </div>
      </div>

      <div class="relative col-span-3 bg-accent md:rounded-r-3xl">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const navLinkDefaultClassName =
  'line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl';

const {
  params: { username },
} = useRoute();

if (typeof username !== 'string')
  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid username in request URL.',
  });

type UserNotes = {
  owner: {
    name: string | null;
    username: string;
  };
  notes: {
    id: string;
    title: string;
  }[];
};

const { data, error }: { data: Ref<UserNotes>; error: Ref<NuxtError | null> } =
  await useAsyncData(`user.${username}.notes`, async () => {
    const owner = db.user.findFirst({
      where: {
        username: { equals: username },
      },
    });

    if (!owner)
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found.',
      });

    const notes = db.note.findMany({
      where: {
        owner: {
          username: { equals: username },
        },
      },
    });

    return {
      owner: { name: owner.name, username: owner.username },
      notes: notes.map((note) => ({ id: note.id, title: note.title })),
    };
  });

if (error.value) throw createError(error.value);

const { owner, notes } = data.value;
</script>
