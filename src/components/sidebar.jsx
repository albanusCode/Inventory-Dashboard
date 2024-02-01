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

const Sidebar = ({ togglePartnersTable }) => {
  const [open, setOpen] = useState(false);

  const handlePartnersClick = () => {
    togglePartnersTable();
  };

  const [inventoryOpen, setInventoryOpen] = useState(false);

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    {
      name: "Inventory",
      link: "/",
      icon: MdOutlineInventory,
      items: ["Materials", "Accessories"],
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
    <div className="flex fixed flex-col md:flex-row gap-6 h-[100vh] mt-16">
      <div
        className={`bg-[#4664fd] overflow-y-scroll min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4 sticky top-0 custom-scrollbar`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* {open && (
          <ChevronsRight
            size={26}
            className="cursor-pointer rounded-full border border-white bg-orange-400 absolute top-4 right-0 text-white -mr-2 z-10"
            onClick={() => setOpen(!open)}
          />
        )} */}
        <div className="mt-4 top-8 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div key={i}>
              {menu.name === "Inventory" ? (
                <div
                className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer relative`}
                onClick={() => setInventoryOpen(!inventoryOpen)}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre duration-500 ${
                    !open ? "opacity-0 translate-x-16" : ""
                  }`}
                >
                  {menu.name}
                </h2>
                <ChevronDown size={16} className="ml-10 text-gray-300" />
              </div>
              
              ) : (
                <Link
                  to={menu?.link}
                  key={i}
                  onClick={
                    menu.name === "Partners" ? handlePartnersClick : null
                  }
                  className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                    menu?.margin ? "mt-4" : ""
                  }`}
                  open={open}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre duration-500 ${
                      !open ? "opacity-0 translate-x-28 overflow-hidden" : ""
                    }`}
                  >
                    {menu?.name}
                  </h2>
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
              )}
              {menu.name === "Inventory" &&
                inventoryOpen &&
                menu.items.map((item, index) => (
                  <Link
                    to={`/inventory/${item.toLowerCase()}`}
                    key={index}
                    className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ml-6 transition duration-500 ease-in-out"
                    >
                    <div></div>
                    <h2>{item}</h2>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;