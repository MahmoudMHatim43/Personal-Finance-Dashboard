import { FaBell } from "react-icons/fa";
function HeaderBar() {
  return (
    <header className="col-span-12 flex items-center justify-between px-4 h-14">
      <h1 className="hidden sm:block text-4xl font-bree font-bold tracking-wider">
        iFinance
      </h1>
      <div className="flex items-center justify-end gap-2 md:gap-4 lg:gap-6 w-full h-full mx-auto p-2">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow sm:flex-none h-full p-2 rounded-xl
          text-black shadow shadow-purple-500 outline-none border-none
          bg-white-b1 dark:bg-black-b1"
        />
        <FaBell />
        <div className="bg-gray-500 w-10 h-10 rounded-full">{/* Avatar */}</div>
      </div>
    </header>
  );
}

export default HeaderBar;
