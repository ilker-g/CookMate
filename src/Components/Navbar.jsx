import React, { useState } from "react";
// import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#fdf2e9] shadow-md fixed top-0 left-0 w-full z-50 p-6 mb-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <img
          className="w-[14rem] cursor-pointer"
          src="/images/cookmate.png"
          alt="logo"
          onClick={() => {
            window.location = "/";
            
          }}
        />
        <div className="flex items-center gap-8 space-x-10">
          {/* nav items */}
          <ul className="hidden lg:flex lg:gap-8 space-x-10 text-gray-800 font-medium">
            <li
              className="hover:text-[#ff914e] cursor-pointer text-xl"
              onClick={() => {
                window.location.hash = "#About";
              }}
            >
              Hakkımızda
            </li>
            <li
              className="hover:text-[#ff914e] cursor-pointer text-xl"
              onClick={() => {
                window.location.hash = "#Howitworks";
              }}
            >
              Nasıl Çalışır
            </li>
            <li
              className="hover:text-[#ff914e] cursor-pointer text-xl"
              onClick={() => {
                window.location.hash = "#Meals";
              }}
            >
              Türler
            </li>
          </ul>

          {/* giriş yap butonu */}
          <button
            className="font-semibold hidden lg:block bg-[#ff914e] text-white px-8 py-3 rounded-lg  transition duration-300 ease-in-out hover:shadow-lg shadow-[#ff914e]/50 hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Giriş Yap
          </button>
        </div>
        {/* bar icon */}
        <button
          className="lg:hidden text-[#ff914d] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* açılır menü */}
      {isOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-orange-200 text-gray-800 text-center py-4 space-y-6 shadow-md">
          <li
            className="hover:text-[#ff914e] cursor-pointer"
            onClick={() => {
              {
                window.location.hash = "#About";
              }
              setIsOpen(false);
            }}
          >
            Hakkımızda
          </li>
          <li
            className="hover:text-[#ff914e] cursor-pointer"
            onClick={() => {
              {
                window.location.hash = "#Howitworks";
              }
              setIsOpen(false);
            }}
          >
            Nasıl Çalışır
          </li>
          <li
            className="hover:text-[#ff914e] cursor-pointer"
            onClick={() => {
              {
                window.location.hash = "#Meals";
              }
              setIsOpen(false);
            }}
          >
            Türler
          </li>
          <li>
            <button
              className="bg-[#ff914e] text-white px-6 py-2 rounded-lg hover:bg-[#e6833d] transition"
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
            >
              Giriş Yap
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
