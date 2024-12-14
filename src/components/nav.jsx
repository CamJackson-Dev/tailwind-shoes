import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileShown] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center z-10 relative">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* Burger btn */}
      <button
        onClick={() => setIsMobileShown(!isMobileMenuShown)}
        className="rounded-lg p-2 focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div
        className={`${!isMobileMenuShown === false && "hidden"} w-full lg:w-auto lg:block `}
      >
        <ul className="bg-gray-50 text-lg border lg:space-x-8 border-gray-100 lg:border-none rounded-lg lg:bg-transparent flex flex-col lg:flex-row dark:text-white">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 py-2 px-3 cursor-pointer rounded lg:hover:bg-transparent ${i === 0 ? "bg-blue-500 lg:bg-transparent lg:text-blue-500 text-white" : "hover:bg-gray-100 "} ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="h-12 w-12 rounded-full bg-white shadow-md flex-center cursor-pointer ">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
