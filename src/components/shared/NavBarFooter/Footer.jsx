import React from "react";
import mosque from "../../../assets/mosque.svg"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="bg-black opacity-90 text-white py-6 mt-28  relative">
      <div className=" mx-auto flex justify-between items-center px-16 ">
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
      <div className="absolute right-0 bottom-0 transform hidden md:block ">
        <img src={mosque} alt="Mosque Icon" className="w-1/2 h-auto" />
      </div>
    </footer>
  );
};

export default Footer;
