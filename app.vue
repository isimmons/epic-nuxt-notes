<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import favicon from "~/assets/favicon.svg";

useHead({
  link: [{ rel: "icon", type: "image/svg+xml", href: favicon }],
  bodyAttrs: {
    class: "flex h-screen flex-col justify-between bg-background text-foreground",
  },
  // htmlAttrs: {
  //   class: "h-screen overflow-x-hidden",
  // },
});
</script>
