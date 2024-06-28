<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { Label, type LabelProps } from 'radix-vue';
import { cn } from '~/utils/misc';
import { cva } from 'class-variance-authority';

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const labelDefaultClasses =
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
</script>

<template>
  <Label v-bind="delegatedProps" :class="cn(labelDefaultClasses, props.class)">
    <slot />
  </Label>
</template>
