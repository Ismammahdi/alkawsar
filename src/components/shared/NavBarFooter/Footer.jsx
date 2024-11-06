import React, { useState, useEffect } from "react";
import mosque from "../../../assets/mosque.svg"; // Adjust the path if needed
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to handle scroll and show/hide icon
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Add event listener for scroll on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[rgb(18,18,18)] text-white py-6 mt-28 relative font-bengali">
      <div className="mx-auto flex justify-between items-center px-16">
        <div className="text-sm text-gray-400">
          <p>
            কপিরাইট © ২০২৪ মাসিক আলকাউসার। সম্পাদক ও প্রকাশক: আবুল হাসান
            মুহাম্মাদ আবদুল্লাহ। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p>
            ঠিকানা: ৩০/১২, পঞ্চবটী, মিরপুর-১২, ঢাকা-১২২১, মোবাইল: ০১৯৮৪ ৯৮ ৮৮
            ২২, ইমেইল: info@alkawsar.com
          </p>
        </div>
      </div>

      {/* Mosque Icon positioned absolutely */}
      <div className="absolute right-0 bottom-0 transform hidden md:block">
        <img src={mosque} alt="Mosque Icon" className="w-1/2 h-auto" />
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <div
          className="text-gray-200 fixed right-4 bottom-5 px-2 py-3 bg-[#00000080] roundedcursor-pointer hover:bg-[#000000b3] transition-colors duration-200"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </footer>
  );
};

export default Footer;
