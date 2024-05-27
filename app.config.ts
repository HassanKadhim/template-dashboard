import SideBarItem from "./types/sideBarItem";

export default defineAppConfig({
  appName: "Admin Dashboard",
  sideBarItems: [
    {
      title: "Dashboard",
      route: "/",
      icon: "book-open",
    },
    {
      title: "Components",
      route: "/components",
      icon: "collection",
      badge: "New",
    },
  ] as SideBarItem[],
});
