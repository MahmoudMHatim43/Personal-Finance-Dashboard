import { useSelector, useDispatch } from "react-redux";
import {
  selectIsSideBarOpen,
  selectPages,
  toggleSideBar,
} from "../../store/slices/navSlice";
import { NavLink, useLocation } from "react-router-dom";
// icons
import { MdSettings } from "react-icons/md";
function SideBar() {
  const pages = useSelector(selectPages);
  const isOpen = useSelector(selectIsSideBarOpen);
  const dispatch = useDispatch();
  const currActivePage = useLocation().pathname.slice(1);
  const userName = "Mahmoud Mohamed";
  const userImage =
    "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png";
  return (
    <div className="flex flex-col gap-8 p-4 h-[95%] w-[97%] mx-auto my-[2.5svh] side-bar-bg rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-big-header text-blue-400 font-bree font-bold tracking-wider">
          iFinance
        </h1>
        <hr className="w-full border-t-2 border-zinc-300 dark:border-zinc-700" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <img
          src={userImage}
          alt="User profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <span className="text-md text-nowrap font-semibold">{userName}</span>
        <button className="flex items-center gap-2 text-sm text-blue-500 dark:text-blue-300">
          <MdSettings size={18} />
          Settings
        </button>
        <hr className="w-full border-t-2 border-zinc-300 dark:border-zinc-700" />
      </div>

      <div>
        <ul className="flex flex-col gap-3">
          {pages.map((page, idx) => (
            <NavLink
              onClick={() => dispatch(toggleSideBar())}
              to={`/${page.name.toLowerCase()}`}
              key={idx}
              className={`flex items-center gap-3 p-2 text-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 ${
                page.name.toLowerCase() === currActivePage
                  ? "bg-zinc-300 dark:bg-zinc-800"
                  : ""
              } rounded-lg cursor-pointer transition duration-300`}>
              <page.icon size={22} />
              <span>{page.name}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
