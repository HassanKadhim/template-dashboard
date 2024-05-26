interface SideBarItem {
  title: string;
  icon?: string;
  route: string;
  badge?: string;
  children?: SideBarItem[];
}
export default SideBarItem;
