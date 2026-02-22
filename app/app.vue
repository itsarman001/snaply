<template>
  <NuxtLayout :name="isAuthenticated ? 'auth' : 'guest'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { isAuthenticated } = useAuth();
</script>
