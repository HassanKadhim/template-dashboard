<template>
  <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
    <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
      <NuxtImg src="/favicon.svg" class="h-8 w-8" />
      <span class="">
        {{ appName }}
      </span>
    </NuxtLink>
    <Button variant="outline" size="icon" class="ms-auto h-8 w-8">
      <Bell class="h-4 w-4" />
      <span class="sr-only">Toggle notifications</span>
    </Button>
  </div>
  <div class="flex-1">
    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
      <NuxtLink v-for="item in sideBarItems" :to="item.route"
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
        <Home class="h-4 w-4" />
        {{ item.title }}
        <Badge v-if="item.badge" class="ms-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-xl">
          {{ item.badge }}
        </Badge>
      </NuxtLink>
    </nav>
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
const { sideBarItems, appName } = useAppConfig();
</script>

<style></style>
