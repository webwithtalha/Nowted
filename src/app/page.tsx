import { IoSearch, IoArchiveOutline } from "react-icons/io5";
import { MdOutlineFolder } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { LuTrash } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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
              <li className="flex items-center gap-2">
                <MdOutlineFolder className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Personal
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineFolder className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Work
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineFolder className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Travel
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineFolder className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Events
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineFolder className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Finances
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-sm text-gray-400 font-poppins font-semibold mb-4">
              More
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <IoMdStarOutline className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Favorites
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LuTrash className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Trash
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoArchiveOutline className="text-xl text-gray-400" />
                <a
                  href="#"
                  className="text-gray-400 cursor-pointer hover:text-white font-poppins font-medium text-sm"
                >
                  Archived Notes
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Note Content */}
      <main className="flex-1 bg-customBg p-6">
        <h1 className="text-3xl text-white font-bold mb-4">Select a Note</h1>
        <p className="text-gray-400">
          Here is where the content of the selected note will appear.
        </p>
      </main>
    </div>
  );
}
