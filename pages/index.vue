<template>
  <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
    <Card v-for="card in 4">
      <CardHeader
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <CardTitle class="text-sm font-medium"> Total Revenue </CardTitle>
        <DollarSign class="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">$45,231.89</div>
        <p class="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
    
  </div>
  <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <Card class="xl:col-span-2">
      <CardHeader class="flex flex-row items-center">
        <div class="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>
            Recent transactions from your store.
          </CardDescription>
        </div>
        <Button as-child size="sm" class="ml-auto gap-1">
          <a href="#">
            View All
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead class="hidden xl:table-column"> Type </TableHead>
              <TableHead class="hidden xl:table-column"> Status </TableHead>
              <TableHead class="hidden xl:table-column"> Date </TableHead>
              <TableHead class="text-right"> Amount </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="item in 8">
              <TableCell>
                <div class="font-medium">Liam Johnson</div>
                <div class="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell class="hidden xl:table-column"> Sale </TableCell>
              <TableCell class="hidden xl:table-column">
                <Badge class="text-xs" variant="outline"> Approved </Badge>
              </TableCell>
              <TableCell class="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-23
              </TableCell>
              <TableCell class="text-right"> $250.00 </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-8">
        <div v-for="recent in 5" class="flex items-center gap-4">
          <Avatar class="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div class="grid gap-1">
            <p class="text-sm font-medium leading-none">Olivia Martin</p>
            <p class="text-sm text-muted-foreground">olivia.martin@email.com</p>
          </div>
          <div class="ml-auto font-medium">+$1,999.00</div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
