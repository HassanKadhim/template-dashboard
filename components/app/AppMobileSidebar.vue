<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline" size="icon" class="shrink-0 md:hidden">
        <Menu class="h-5 w-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="flex flex-col">
      <nav class="grid gap-2 text-lg font-medium">
        <a href="#" class="flex items-center gap-2 text-lg font-semibold">
          <NuxtImg src="/favicon.svg" class="h-6 w-6" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Home class="h-5 w-5" />
          Dashboard
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
        >
          <ShoppingCart class="h-5 w-5" />
          Orders
          <Badge
            class="ms-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
          >
            6
          </Badge>
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Package class="h-5 w-5" />
          Products
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Users class="h-5 w-5" />
          Customers
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <LineChart class="h-5 w-5" />
          Analytics
        </a>
      </nav>
      <div class="mt-auto">
        <Button size="sm" class="w-full"> Upgrade </Button>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script lang="ts" setup>
import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-vue-next";
</script>

<style></style>
