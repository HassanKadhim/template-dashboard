export default defineNuxtRouteMiddleware((to, from) => {
  if (pb()?.authStore.isValid) {
    return navigateTo("/");
  }
});
