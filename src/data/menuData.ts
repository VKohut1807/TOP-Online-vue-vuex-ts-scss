import {Ref, ref} from "vue";
import {LinksType, NavLinksType} from "@/types/links-types";

export const navLinks: Ref<LinksType[]> = ref([
  {
    route: "home",
    title: "Home",
  },
  {
    route: "global-posts",
    title: "All Posts",
  },
]);

export const navigationDrawers: Ref<NavLinksType[]> = ref([
  {
    title: "Dashboard",
    icon: "HomeCircleOutline",
  },
  {
    title: "Images",
    icon: "ImageSearchOutline",
  },
  {
    title: "Files",
    icon: "FileDocumentOutline",
  },
  {
    title: "Games",
    icon: "GamepadVariantOutline",
  },
  {
    title: "Books",
    icon: "BookOpenVariantOutline",
  },
  {
    title: "Notifications",
    icon: "BellRingOutline",
  },
  {
    title: "Settings",
    icon: "CogOutline",
  },
  {
    title: "Profile",
    icon: "AccountCircleOutline",
  },
]);
