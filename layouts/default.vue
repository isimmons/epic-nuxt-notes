<script setup type="ts">
import favicon from "~/assets/favicon.svg";

useHead({
  htmlAttrs: {
    class: "h-full overflow-x-hidden",
  },
  bodyAttrs: {
    class: "h-full",
  },
});
</script>

<template>
  <Head>
    <Title>foobar</Title>
    <Meta name="description" content="fochizzle" />
    <Link rel="icon" type="image/svg+xml" :href="favicon" sizes="any" />
  </Head>
  
  <div id="content" class="flex h-full flex-col justify-between bg-background text-foreground">
    <header class="container py-6 mx-auto">
      <nav class="flex justify-between">
        <NuxtLink to="/">
          <div class="font-light">epic</div>
          <div class="font-bold">notes</div>
        </NuxtLink>
      </nav>
    </header>

    
    <div class="flex-1 container">
      <slot />
    </div>
    

    <div class="container flex justify-between mx-auto">
      <NuxtLink to="/">
        <div class="font-light">epic</div>
        <div class="font-bold">notes</div>
      </NuxtLink>
      <p>Built with ♥️ by</p>
    </div>
  </div>
</template>
