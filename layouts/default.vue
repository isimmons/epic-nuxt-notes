<template>
  <div>
    <header class="container h-[100px] py-6 mx-auto">
      <nav class="flex justify-between">
        <NuxtLink to="/">
          <div class="font-light">epic</div>
          <div class="font-bold">notes</div>
        </NuxtLink>
      </nav>
    </header>

    <div class="flex min-h-[calc(100vh-148px)] "><slot /></div>

    <div class="container flex justify-between mx-auto">
      <NuxtLink to="/">
        <div class="font-light">epic</div>
        <div class="font-bold">notes</div>
      </NuxtLink>
      <p>Built with ♥️ by</p>
    </div>
  </div>
</template>
