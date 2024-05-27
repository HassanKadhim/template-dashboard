<template>
  <div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
  >
    <div class="hidden border-e bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <AppSidebar />
        <div class="mt-auto p-4">
          <Button size="sm" class="w-full"> logout </Button>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <AppHeader />
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-vue-next";
</script>

<style></style>
