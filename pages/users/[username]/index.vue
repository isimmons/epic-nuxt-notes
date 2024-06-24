<template>
  <div class="mt-36">
    <h1 class="text-h1">{{ data.user.name ?? data.user.username }}</h1>
    <NuxtLink :to="`/users/${data.user.username}/notes`">Notes</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { db } from '~/utils/db.server';
import { invariantResponse } from '~/utils/misc';

const {
  params: { username },
} = useRoute();

invariantResponse(typeof username === 'string');

const getUser = async (username: string) => {
  const user = db.user.findFirst({
    where: {
      username: { equals: username },
    },
  });

  invariantResponse(user !== null);

  return {
    user: {
      username: user.username,
      email: user.email,
      name: user.name,
    },
  };
};

const { data } = await useAsyncData(() => getUser(username));
</script>
