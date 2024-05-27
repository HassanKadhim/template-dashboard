<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <Card>
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl">Login an account</CardTitle>
        <CardDescription>
          Enter your email below to login your account
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
              continue with
            </span>
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input v-model="form.email" id="email" type="email" placeholder="m@example.com" />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input v-model="form.password" id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "guest",
});

//variables for the login form
const isLoading = ref(false);
const form = ref({
  email: "",
  password: "",
});
</script>

<style></style>
