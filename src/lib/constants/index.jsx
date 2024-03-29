import { ArrowRightLeft } from "lucide-react";
import { Settings } from "lucide-react";
import { Info } from "lucide-react";
import { User } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import ShippingPage from "../../pages/admins/ShippingPage";
import { Truck } from "lucide-react";
import { Tag } from "lucide-react";

export const DASHBOARD_SIDEBAR_LINKS = [
  // {
  //   key: "home",
  //   label: "home",
  //   path: "/admin",
  //   icon: <LayoutGrid />,
  // },
  {
    key: "brand",
    label: "brand",
    path: "/admin",
    icon: <Tag />,
  },
  {
    key: "products",
    label: "products",
    path: "/admin/products",
    icon: <PackageSearch />,
  },
  {
    key: "inventory",
    label: "inventory",
    path: "/admin/inventory",
    icon: <ArrowRightLeft />,
  },
  {
    key: "shipping",
    label: "shipping",
    path: "/admin/shipping",
    icon: <Truck />,
  },
  {
    key: "users",
    label: "users",
    path: "/admin/users",
    icon: <User />,
  },
];

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
//   {
//     key: "settings",
//     label: "Settings",
//     path: "/settings",
//     icon: <Settings />,
//   },
//   {
//     key: "support",
//     label: "Help & Support",
//     path: "/support",
//     icon: <Info />,
//   },
// ];
