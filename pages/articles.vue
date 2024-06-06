<template>
  <div>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="flex items-center">
        <div class="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="sm" class="h-7 gap-1">
                <ListFilter class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem checked>
                Active
              </DropdownMenuItem>
              <DropdownMenuItem>Draft</DropdownMenuItem>
              <DropdownMenuItem>
                Archived
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" class="h-7 gap-1">
            <File class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" class="h-7 gap-1">
            <PlusCircle class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <PocketList :fields="fields" name="Articles" descreption="things" />
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  File,
  ListFilter,
  PlusCircle,
} from 'lucide-vue-next'



const fields = [
  {
    name: 'cover',
    type: 'text',
    label: 'Cover',
  },
  // {
  //   name: 'contentAr',
  //   type: 'text',
  //   label: 'Arabic Content',
  // },
  // {
  //   name: 'contentEn',
  //   type: 'text',
  //   label: 'English Content',
  // },
  {
    name: 'title',
    type: 'json',
    label: 'Title',
  }
];



</script>

<style></style>