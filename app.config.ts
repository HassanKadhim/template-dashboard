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
      title: "Articles",
      route: "/articles",
      icon: "book-open",
    },

  ] as SideBarItem[],
});
