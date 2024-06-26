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
            v-if="data && data.notes.length > 0"
            class="overflow-y-auto overflow-x-hidden pb-12"
          >
            <li v-for="note in data.notes" :key="note.id">
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
        <NuxtPage @note-deleted="() => refreshNuxtData()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { assertNotNot } from '~/utils/misc';

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

const { data } = await useAsyncData(`user.${username}.notes`, () =>
  $fetch('/api/notes'),
);

assertNotNot(data.value);
const owner = data.value.owner;
</script>
