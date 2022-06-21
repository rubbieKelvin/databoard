import { Menu } from "~/types/menu";
import { Project } from "~/packages/types";

export const sideBarMenu = (project: Project): Menu[] => [
  {
    name: "Projects",
    icon: "CollectionIcon",
    children: project.pages.map((page) => ({
      name: page.name,
      icon: "TableIcon",
    })),
  },
  {
    name: "Dashboard",
    children: [
      { name: "Overview" },
      { name: "Notifications" },
      {
        name: "Trade History",
        children: [
            { name: "2022" },
            { name: "2021" },
            { name: "2020" }],
      },
      { name: "Settings" },
    ],
  },
];
