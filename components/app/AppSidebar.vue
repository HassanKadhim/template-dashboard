<template>
  <div class="flex-1">
    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
      <NuxtLink class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" >
         <Home class="h-4 w-4" />
        لوحة التحكم
         <Badge
          class="ms-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        >
          6
        </Badge>
      </NuxtLink>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-vue-next'
</script>

<style></style>
