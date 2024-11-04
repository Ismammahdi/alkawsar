import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import LogoImg from "../../../assets/alkawsar_logo.svg"; // Adjust the path to your actual logo

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(null); // Sidebar dropdown state
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", name: "মূলপাতা" },
    { path: "/all-issues", name: "সকল সংখ্যা", hasDropdown: "allIssues" },
    { path: "/category", name: "বিভাগ", hasDropdown: "bivag" },
    { path: "/authors", name: "লেখকবৃন্দ", hasDropdown: "authors" },
    {
      path: "/your-questions",
      name: "আপনার জিজ্ঞাসা",
      hasDropdown: "apnarZiggasa",
    },
    { path: "/intro", name: "পরিচিতি" },
    { path: "/contact", name: "যোগাযোগ", hasDropdown: "zogajog" },
  ];

  const dropdownItems = [
    { name: "রবিউল আউয়াল ১৪৪৬ / অক্টোবর ২০২৪" ,path:"/allIssues" },
    { name: "রবিউল আউয়াল ১৪৪৬ / সেপ্টেম্বর ২০২৪" },
    { name: "সফর ১৪৪৬ / আগস্ট ২০২৪" },
    { name: "মুহাররম ১৪৪৬ / জুলাই ২০২৪" },
    { name: "জিলহজ্ব ১৪৪৫ / জুন ২০২৪" },
    { name: "আরও" },
  ];

  const dropdownItemsforlekhok = [
    { name: "মুফতি আবুল হাসান মুহাম্মাদ আব্দুল্লাহ" },
    { name: "মাওলানা মুহাম্মাদ আব্দুল মালেক" },
    { name: "মাওলানা আবুল বাশার মুহাম্মাদ সাইফুল ইসলাম" },
    { name: "মাওলানা আব্দুল মতিন" },
    { name: "মাওলানা মুহাম্মাদ যাকারিয়া আব্দুল্লাহ" },
    { name: "মাওলানা শফিক মুহাম্মাদ" },
    { name: "মুহাম্মাদ আসিফ বিনার তানজিম" },
    { name: "মাওলানা মুহাম্মাদ তাওহীদুল ইসলাম তাওহিদ" },
    { name: "মাওলানা মুহাম্মাদুল্লাহ মাসুম" },
    { name: "ওয়ালীউল্লাহ আব্দুল জলীল" },
    { name: "আরও" },
  ];

  const bivag = [
    { name: "সম্পাদকীয়", path: "/ismam" },
    { name: "আনওয়ারুল কুরআন", path: "/anwarul-quran" },
    { name: "প্রচলিত ভুল", path: "/common-mistakes" },
    { name: "আপনি যা জানতে চেয়েছেন", path: "/faq" },
    { name: "শিক্ষার্থীদের পাতা", path: "/student-page" },
    { name: "আরও", path: "/more" },
  ];

  const apnarZiggasa = [
    { name: "আপনি যা জানতে চেয়েছেন" },
    { name: "শিক্ষা পরামর্শ" },
    { name: "আপনার জিজ্ঞাসা" },
  ];

  const zogajog = [
    { name: "গ্রাহক ও এজেন্ট হস্তান্তর নিয়মাবলী" },
    { name: "যোগাযোগ" },
  ];

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(timerRef.current);
    setDropdownOpen(dropdownName);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  const toggleSidebarDropdown = (dropdownName) => {
    setSidebarDropdownOpen((prev) =>
      prev === dropdownName ? null : dropdownName
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 font-bengali transition-colors duration-300 ${
        isScrolled ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav className="container relative mx-auto px-4 py-6 sm:py-6 md:py-6 md:px-6 lg:px-24">
        <div className="flex items-center justify-between">
          {!searchOpen && (
            <div className="flex items-center space-x-4">
              <div
                className="text-2xl cursor-pointer text-green-600 md:block lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <MdOutlineMenu />
              </div>
              <div className="flex items-center">
                <img src={LogoImg} alt="Logo" className="w-[150px] h-auto" />
              </div>
            </div>
          )}

          <div
            className={`hidden lg:flex flex-wrap space-x-8 items-center ${
              searchOpen ? "hidden" : ""
            }`}
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.hasDropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className="hover:text-green-600 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && <span className="ml-1 text-lg">▾</span>}
                </Link>
                {item.hasDropdown && dropdownOpen === item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-black text-white shadow-lg p-4 z-50">
                    {(item.hasDropdown === "allIssues"
                      ? dropdownItems
                      : item.hasDropdown === "bivag"
                      ? bivag
                      : item.hasDropdown === "authors"
                      ? dropdownItemsforlekhok
                      : item.hasDropdown === "apnarZiggasa"
                      ? apnarZiggasa
                      : item.hasDropdown === "zogajog"
                      ? zogajog
                      : []
                    ).map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.path}
                        className="block py-1 hover:text-gray-300"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-gray-700 hover:text-yellow-600 text-xl cursor-pointer md:text-yellow-600">
            {!searchOpen ? (
              <FaSearch onClick={() => setSearchOpen(true)} />
            ) : (
              <div
                className={`absolute inset-0 flex items-center px-4 md:px-6 lg:px-24 ${
                  isScrolled ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <input
                  type="text"
                  placeholder="বাংলায় খুঁজুন"
                  className={`border ${
                    isScrolled
                      ? "border-gray-700 bg-gray-800 text-white"
                      : "border-gray-300 bg-white text-black"
                  } rounded-l px-4 py-2 flex-grow`}
                />
                <button
                  className={`${
                    isScrolled ? "bg-gray-800" : "bg-gray-100"
                  } px-3 py-3 border ${
                    isScrolled ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <FaSearch
                    className={
                      isScrolled ? "text-yellow-500" : "text-yellow-600"
                    }
                  />
                </button>
                <button
                  className={`${
                    isScrolled
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-600"
                  } px-3 py-3 border ${
                    isScrolled ? "border-gray-700" : "border-gray-300"
                  }`}
                  onClick={() => setSearchOpen(false)}
                >
                  <IoCloseSharp />
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`absolute top-20 left-0 w-64 bg-black text-white shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <Link
                  to={item.path}
                  className="text-white hover:text-gray-300"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <button
                    onClick={() => toggleSidebarDropdown(item.hasDropdown)}
                    className="text-white focus:outline-none"
                  >
                    ▾
                  </button>
                )}
              </div>
              {item.hasDropdown === sidebarDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {(item.hasDropdown === "allIssues"
                    ? dropdownItems
                    : item.hasDropdown === "bivag"
                    ? bivag
                    : item.hasDropdown === "authors"
                    ? dropdownItemsforlekhok
                    : item.hasDropdown === "apnarZiggasa"
                    ? apnarZiggasa
                    : item.hasDropdown === "zogajog"
                    ? zogajog
                    : []
                  ).map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      to="#"
                      className="block text-gray-300 hover:text-white"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
