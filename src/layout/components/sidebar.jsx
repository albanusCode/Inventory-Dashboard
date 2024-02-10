import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { FaBarcode } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { ChevronsRight } from "lucide-react";
import { GrDeliver } from "react-icons/gr";
import { CiReceipt } from "react-icons/ci";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";

const Sidebar = ({ toggleMaterialTable, toggleHome, isOpen }) => {
  const [open, setOpen] = useState(false);

  // const handleMaterialClick = () => {
  //   toggleMaterialTable();
  // };
  // const handleHomeClick = () => {
  //   toggleHome();
  // };

  // const [inventoryOpen, setInventoryOpen] = useState(false);

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    {
      name: "Inventory",
      link: "/inventory",
      icon: MdOutlineInventory,
      // items: ["Materials", "Accessories"],
    },
    { name: "Products", link: "/", icon: IoBagAdd },
    { name: "Print Barcode", link: "/", icon: FaBarcode },
    { name: "Sales", link: "/", icon: FcSalesPerformance },
    { name: "Purchases", link: "/", icon: BiSolidPurchaseTag },
    { name: "Purchase Order", link: "/", icon: CiReceipt },
    { name: "Expenses", link: "/", icon: BsCashCoin },
    { name: "Suppliers", link: "/", icon: GrDeliver },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
    { name: "Profile", link: "/", icon: CgProfile, margin: true },
  ];

  return (
    <div className={`md:flex fixed flex-col md:flex-row gap-6 h-[100vh] mt-[60px] ${isOpen ? 'md:block' : 'hidden' }`}>
      <div
        className={`bg-[#f1f1f1] overflow-y-scroll min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-800 px-4 sticky top-0 custom-scrollbar`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="mt-4 top-8 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div key={i}>
              <Link
                to={menu?.link}
                key={i}
                onClick={() => {
                  if (menu.name === "Dashboard") toggleHome();
                  else if (menu.name === "Inventory") toggleMaterialTable();
                }}
                className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:text-white hover:bg-gray-800 rounded-md ${
                  menu?.margin ? "mt-4" : ""
                }`}
                open={open}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2 className={`whitespace-pre duration-500 ${!open ? "opacity-0 translate-x-28 overflow-hidden" : ""}`}>{menu?.name}</h2>
                <h2
                  className={`${
                    open
                      ? "hidden"
                      : `absolute left-14 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;