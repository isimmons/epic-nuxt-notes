<template>
  <div class="flex h-full px-0 pb-12 md:px-8">
    <div
      class="grid w-full grid-cols-4 pl-2 bg-muted md:container md:mx-2 md:rounded-3xl md:pr-0"
    >
      <div class="relative col-span-1">
        <div class="absolute inset-0 flex flex-col">
          <NuxtLink
            :to="`/users/${data.owner.username}`"
            class="pt-12 pb-4 pl-8 pr-4"
          >
            <h1
              className="text-base font-bold md:text-lg lg:text-left lg:text-2xl"
            >
              {{ data.owner.name ?? data.owner.username }}&apos;s Notes
            </h1>
          </NuxtLink>

          <ul class="pb-12 overflow-x-hidden overflow-y-auto">
            <li v-for="note in data.notes" :key="note.id">
              <NuxtLink
                :to="`/users/${data.owner.username}/notes/${note.id}`"
                :class="navLinkDefaultClassName"
                >{{ note.title }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="relative col-span-3 bg-accent md:rounded-r-3xl">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { invariantResponse } from '~/utils/misc';

const navLinkDefaultClassName =
  'line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl';

const {
  params: { username },
} = useRoute();

invariantResponse(typeof username === 'string');

const getNotes = async (username: string) => {
  const owner = db.user.findFirst({
    where: {
      username: { equals: username },
    },
  });

  invariantResponse(owner !== null);

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
};

const { data } = useAsyncData(() => getNotes(username));
</script>
