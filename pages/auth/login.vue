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
          <Input
            v-model="form.email"
            id="email"
            type="text"
            placeholder="email or user name"
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input v-model="form.password" id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button @click="handleLogin()" class="w-full">
          <IconSpinner v-if="isLoading" class="w-8 h-8" />
          <span v-else> Login </span>
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

//function to handle the login form submission
const {
  data: authData,
  error,
  execute,
} = await useAsyncData(async (nuxtApp) => {
  // fetch and return all "example" records...
  const records = await nuxtApp.$pb.collection("users").authWithPassword(
    form.value.email,
    form.value.password
  );
  return structuredClone(records);
});

const handleLogin = async () => {
  isLoading.value = true;
  if (!form.value.email || !form.value.password) {
    isLoading.value = false;
    return;
  }

  try {
    //call the login function
    await execute();
  } catch (error) {
    isLoading.value = false;
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style></style>
