<template>
  <button :disabled="disabled || loading" :class="buttonClass">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  label?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
}>();

const buttonClass = computed(() => {
  const base = "transition-all duration-300 outline-none";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover text-background-dark font-bold rounded-full hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(241,191,39,0.3)]",
    secondary: "font-medium text-slate-300 hover:text-white",
    outline:
      "border border-slate-600 hover:border-primary text-white hover:text-primary rounded-full",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 h-14 text-base",
  };

  return [
    base,
    variants[props.variant || "primary"],
    sizes[props.size || "md"],
    props.disabled || props.loading ? "opacity-50 cursor-not-allowed" : "",
  ].join(" ");
});
</script>
