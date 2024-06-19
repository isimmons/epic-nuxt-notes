# Epic Nuxt Notes

This is going to be the Nuxt version of the Epic Notes app.

Having a few issues figuring out NuxtPage and nested routes but working through
it. Make it work by any means possible, then make it better.

Well that's nice. The production build is currently working correctly. Even the
svg favicon. Notice this one is Nuxt green :-)

# Nuxt style change

Because of the extra #nuxt div thrown in to the mix, the full height has to also
be added to the #nuxt div and the flex classes need to be on a content
containing div wrapped around page content. See css main #\_\_nuxt {} and also
added content div in the main layout.

Technically I think the content div should have been in the styles from the
start. This makes the styles more portable (able to be directly copy/pasted from
one project to another, independant of the framework). Adding the change to the
other projects.
