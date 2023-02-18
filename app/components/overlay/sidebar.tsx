import Link from "next/link";
import { ChartPieIcon, UserIcon } from "@heroicons/react/24/solid";

export default function Sidebar({ toggle }: { toggle: boolean }) {
  return (
    <div>
      {toggle && (
        <div>
          <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <ChartPieIcon className="h-6 w-6 fill-gray-500" />
                    <span className="ml-3">Nothing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <UserIcon className="h-6 w-6 fill-gray-500" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Nothing
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
