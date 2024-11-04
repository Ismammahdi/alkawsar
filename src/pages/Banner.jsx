import React from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";

// Helper function to truncate content
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

const Banner = () => {
  const articles = [
    {
      subtitle: "বিশেষ সম্পাদকীয়",
      content:
        "সংখ্যার। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের সিরাত থেকে যুগের দ্র. মুহাম্মদ ইলিয়াসের দৃষ্টিতে ও তাঁরই দায়িত্বের দায়িত্ব নিবরনে দৃষ্টিগ্রহন করিতেন। ভেতো পাতা আইহ।",
      hasButton: true, // Indicate that this article should have a button
    },
    {
      title: "মতান্দোলন",
      subtitle: "দ্বীন ও শরীয়তের আধুনিকীকরণের আলোকে বিকৃতিসাধন",
      content:
        "বিশ্ব খলিফার ইসলামী বিশ্ব নামা ফেকারা  ও আধুনিকতার প্রসারের সাথে ইসলামী পরিসরে যে সকল খারিজী ও ইসমায়েলের  কোরান। যে একলা ফেকারা বিদ্বেষের।",
    },
    {
      title: "নামাজের খুশু হাসিল হবে যেভাবে",
      content:
        "হাদার ও সালাতের পর... তো কোরক ফোকলিয়ে খুশু সংক্রান্ত আলোচনা হয়েছে। বলা হয়েছে, খুশু কেনের বিশেষ কোন আনলিক বৈশিষ্ট নয়, বরং খুশু মুসলিমের বৈশিষ্ট। rtyuxij xayuicbsnkc  cuascnka csaicnk cslhhcipocichuhacsiscn csoncjsaojc csaajcjasi",
      author: "মাওলানা মুহাম্মাদ আব্দুল মালেক",
    },
    {
      title: "কাদিয়ানী সম্প্রদায় অমুসলিম হওয়ার কারণ",
      content:
        "ভুমিকা আচার তওবহ লেনিক। একমাতর মসলীর জন্য। ইসলামী মদলিক্য কাফ্র। ইসলামী মুং আল্লাহ। অগার তারুরিক রনেপর।",
      author: "মাওলানা মুহাম্মাদ সাজিদুল ইসলাম",
    },
  ];

  return (
    <div className="">
      {/* Banner Section */}
      <div
        className="relative min-w-full bg-cover bg-top w-full h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-4 md:px-8 w-full">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
              {/* Left Section with text and border */}
              <div className="w-[40%] text-left font-bengali">
                <div className="flex items-center">
                  <h2 className="text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
                    বর্ষ: ২০,<span className="ml-4"></span> সংখ্যা: ১০
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto -ml-[44px] hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
                <p className="mt-4 text-2xl">
                  রবিউল আউয়াল ১৪৪৬ || অক্টোবর ২০২৪
                </p>
              </div>

              {/* Right Section with institution text */}
              <div className="w-[50%] font-bengali hidden md:block">
                <p className="text-xl font-medium">
                  গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান
                </p>
                <h2 className="text-4xl font-bold ">
                  মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা
                </h2>
                <p className="text-lg">এর মুখপত্র</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Below Banner */}
      <div className="mt-4 font-bengali">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 py-8 font-bengali">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-100 border-l border-gray-200 p-6"
            >
              {article.hasButton && (
                <button className="mb-3 px-2 py-1 bg-yellow-600 text-white font-semibold  hover:bg-yellow-700">
                  সম্পাদকীয়
                </button>
              )}
              <h2 className="text-xl font-bold text-black mb-2">
                {article.title}
              </h2>
              <h3 className="text-lg font-semibold mb-4">{article.subtitle}</h3>
              <p className="text-gray-700 mb-4">
                {truncateText(article.content, 20)}
              </p>
              {article.author && (
                <p className="text-gray-500 text-sm font-medium">
                  {article.author}
                </p>
              )}
              {/* Render button if hasButton is true */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
