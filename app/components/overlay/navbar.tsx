import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar({
  changeShowSidebar,
  toggle,
}: {
  changeShowSidebar: Function;
  toggle: boolean;
}) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button onClick={() => changeShowSidebar()}>
              {toggle ? (
                <XMarkIcon className="h-6 w-6 fill-gray-500" />
              ) : (
                <Bars3Icon className="h-6 w-6 fill-gray-500" />
              )}
            </button>
            <span className="self-center text-xl font-semibold ml-4 sm:text-2xl whitespace-nowrap">
              Change&nbsp;State&nbsp;between&nbsp;Components&nbsp;Example
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
