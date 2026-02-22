<template>
  <div
    class="min-h-screen bg-red-300 text-gray-100 flex items-center justify-center gap-4"
  >
    <div class="flex items-center justify-end gap-4">
      <button
        class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-full transition-all active:scale-95 shadow-lg shadow-blue-900/20 flex items-center gap-2"
        @click="logout"
      >
        <LucideLogOut /> Sign Out
      </button>
    </div>
  </div>
</template>

<script setup>
const { logout } = useAuth();
import { LucideLogOut } from "lucide-vue-next";
</script>
