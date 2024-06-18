<template>
  <NuxtLayout>
  <Head>
    <Title>foobar</Title>
    <Meta name="description" content="fochizzle" />
    <Link rel="icon" type="image/svg+xml" :href="favicon" sizes="any" />
  </Head>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import favicon from "~/assets/favicon.svg";

useHead({
  bodyAttrs: {
    class: "flex h-screen flex-col justify-between bg-background text-foreground",
  },
  // htmlAttrs: {
  //   class: "h-screen overflow-x-hidden",
  // },
});
</script>
