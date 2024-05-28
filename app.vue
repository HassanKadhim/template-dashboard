<template>
  <div>
    <Toaster />
    <NuxtLayout
      :name="router.fullPath != '/auth/login' ? 'auth' : 'default'"
    >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { Toaster } from "@/components/ui/sonner";
const router = useRoute();
</script>

<style></style>
