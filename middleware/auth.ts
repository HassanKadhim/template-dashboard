export default defineNuxtRouteMiddleware(async () => {
   if (process.server) return;
   const isUserLoggedIn =  pb()?.authStore?.isValid;
   if (!isUserLoggedIn) {
     return navigateTo("/auth/login");
   }
});

