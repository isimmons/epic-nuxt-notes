<template>
  <div class="mt-36">
    <h1 class="text-h1">{{ user.name ?? user.username }}</h1>
    <NuxtLink :to="`/users/${user.username}/notes`">Notes</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import { db } from '~/utils/db.server';

const {
  params: { username },
} = useRoute();

if (typeof username !== 'string')
  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid username in request URL.',
  });

type User = {
  name?: string | null;
  username: string;
  email: string;
};

const { data, error }: { data: Ref<User>; error: Ref<NuxtError | null> } =
  await useAsyncData(`user.${username}`, async () => {
    const user = db.user.findFirst({
      where: {
        username: { equals: username },
      },
    });

    if (!user)
      throw createError({ statusCode: 404, statusMessage: 'User not found' });

    return {
      username: user.username,
      email: user.email,
      name: user.name,
    };
  });

if (error.value) throw createError(error.value);

const user = data.value;
</script>
