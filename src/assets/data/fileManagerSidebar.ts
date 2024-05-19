import { BiSolidDashboard } from "react-icons/bi";
import { BsWindowFullscreen } from "react-icons/bs";

const sidebar = [
  {
    id: 1,
    title: "Main",
    children: [
      {
        id: 0,
        url: "/",
        title: "Your Dashboard",
        icon: BiSolidDashboard,
      },
      {
        id: 0,
        url: "/",
        title: "Root",
        icon: BiSolidDashboard,
      },
    ],
  },
  {
    id: 2,
    title: "More",
    children: [
      {
        id: 21,
        url: "/",
        title: "Recent",
        icon: BsWindowFullscreen,
      },
      {
        id: 22,
        url: "/",
        title: "Favourites",
        icon: BsWindowFullscreen,
      },
    ],
  },
  {
    id: 3,
    title: "Others",
    children: [
      {
        id: 31,
        url: "/",
        title: "Quarantine",
        icon: BsWindowFullscreen,
      },
      {
        id: 32,
        url: "/",
        title: "Trash",
        icon: BsWindowFullscreen,
      },
      {
        id: 33,
        url: "/",
        title: "Storage",
        icon: BsWindowFullscreen,
      },
    ],
  },
];

export default sidebar;
