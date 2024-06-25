<template>
  <div class="mt-36">
    <h1 class="text-h1">{{ user.name ?? user.username }}</h1>
    <NuxtLink :to="`/users/${user.username}/notes`">Notes</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { db } from '~/utils/db.server';

const {
  params: { username },
} = useRoute();

if (typeof username !== 'string')
  throw createError({ statusCode: 404, statusMessage: 'User not found' });

const getUser = async (username: string) => {
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
};

const { data } = await useAsyncData(() => getUser(username));

if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'User not found' });

const user = data.value;
</script>
