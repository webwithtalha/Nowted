"use client";

import React, { useState, useEffect } from "react";
import { IoSearch, IoArchiveOutline } from "react-icons/io5";
import { MdOutlineFolder } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { LuTrash } from "react-icons/lu";

const Sidebar = () => {
  const [folders, setFolders] = useState<string[]>([]);
  const [moreOptions, setMoreOptions] = useState<
    { label: string; icon: JSX.Element }[]
  >([]);

  useEffect(() => {
    setFolders(["Personal", "Work", "Travel", "Events", "Finances"]);
    setMoreOptions([
      {
        label: "Favorites",
        icon: <IoMdStarOutline className="text-xl text-gray-400" />,
      },
      {
        label: "Trash",
        icon: <LuTrash className="text-xl text-gray-400" />,
      },
      {
        label: "Archived Notes",
        icon: <IoArchiveOutline className="text-xl text-gray-400" />,
      },
    ]);
  }, []);

  return (
    <aside className="w-64 bg-customBlack text-white flex flex-col p-4">
      <div className="flex items-center justify-between mb-8">
        <span className="text-2xl font-bold cursor-pointer text-white font-yuji">
          Nowted
        </span>

        {/* Search Icon */}
        <IoSearch className="text-xl text-gray-400 cursor-pointer hover:text-white" />
      </div>

      {/* Buttons */}
      <button className="bg-customDark text-white font-poppins font-semibold py-2 px-4 rounded-md mb-4 hover:bg-blue-600">
        + New Note
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <h2 className="text-gray-400 text-sm font-semibold font-poppins">
          Recents
        </h2>

        <div className="mt-4">
          <h2 className="text-sm text-gray-400 font-poppins font-semibold mb-4">
            Folders
          </h2>
          <ul className="space-y-4">
            {folders.map((folder) => (
              <li className="flex items-center gap-2" key={folder}>
                <MdOutlineFolder className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  {folder}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-sm text-gray-400 font-poppins font-semibold mb-4">
            More
          </h2>
          <ul className="space-y-4">
            {moreOptions.map((item) => (
              <li className="flex items-center gap-2" key={item.label}>
                {item.icon}
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
