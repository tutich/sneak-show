import { navItems } from "constants";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative flex flex-col py-4 lg:py-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img
                src="/images/icon-menu.svg"
                alt="menu"
                onClick={handleClick}
                className="cursor-pointer lg:hidden"
              />
            </div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="hidden lg:flex gap-6 text-blue-300 font-[12px]">
            {navItems.map((item, id) => (
              <div key={id} className="">
                <h4 className="text-[14px] font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center lg:gap-8 gap-4 right-0">
          <img src="/images/icon-cart.svg" alt="cart" />
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            width={28}
            height={28}
            className="object-cover"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-black opacity-50 z-10"
          style={{ width: "30%" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full shadow-lg bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-20`}
        style={{ width: "70%" }}
      >
        <div className="p-6">
          <img
            src="/images/icon-close.svg"
            alt="close"
            className="cursor-pointer mb-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="flex flex-col gap-4 text-blue-300 font-[12px]">
            {navItems.map((item, id) => (
              <div key={id}>
                <a href={item.link} onClick={handleLinkClick}>
                  <h4 className="text-[14px] text-black-100 font-semibold cursor-pointer">{item.title}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 hidden lg:block">
        <hr className="h-[3px]" />
      </div>
    </nav>
  );
};

export default Navbar;
