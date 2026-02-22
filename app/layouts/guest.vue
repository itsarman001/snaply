<template>
  <div class="min-h-screen bg-blue-300 text-gray-100 flex item justify-center">
    <div class="flex items-center gap-4">
      <button
        @click="login"
        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all active:scale-95 shadow-lg shadow-blue-900/20"
      >
        Sign In
      </button>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth();
</script>
