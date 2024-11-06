import React, { useState } from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
// import adStart from "../assets/adstarts.png";
// import adAfter from "../assets/adAfter.jpg";
// import adEnd from "../assets/adEnds.jpg";
import adStart from "../assets/adstarts.png";
import cover_two from "../assets/cover-2.jpg";
import cover_one from "../assets/cover-1.jpg";
import cover_three from "../assets/cover-3.jpg";


import cover_four from "../assets/cover-5.jpg";
import cover_five from "../assets/cover-6.png";
import cover_six from "../assets/cover_oct_24.jpg";
import { FaChevronRight } from "react-icons/fa";

// Helper function to truncate content
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

// Helper function to truncate description at 18 words
const truncateDescription = (text, wordLimit = 13) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};
const truncateDescriptionTwo = (text, wordLimit = 9) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};
function truncateTitle(title, wordLimit = 9) {
  if (!title) return ""; // Return an empty string if title is undefined or null
  const words = title.split(" ");
  return words.length > wordLimit
    ? `${words.slice(0, wordLimit).join(" ")}...`
    : title;
}
function truncateSubtitle(text, wordLimit = 9) {
  if (!text) return ""; // Return an empty string if text is undefined or null
  const words = text.split(" ");
  return words.length > wordLimit
    ? `${words.slice(0, wordLimit).join(" ")}...`
    : text;
}

const Agost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const articles = [
    {
      subtitle:
        "কোটা বিরোধী আন্দোলনে ব্যাপক হতাহতের ঘটনা এজাতীয় বিপর্যয়ে প্রয়ো",
      content:
        "চলতি জুলাই মাসে বাংলাদেশ সম্মুখীন হয়েছে চরম বিপর্যয়কর পরিস্থিতির। ছাত্র সমাজের কোটা বিরোধী আন্দোলনকে কেন্দ্র করে যে সহিংসতা তৈরি হয়, তাতে ঝরে গেছে অসংখ্য শিশু-কিশোর, ছাত্র-ছাত্রী ও সাধারণ মানুষের প্রাণ। এমনকি এ…",
      hasButton: true, // Indicate that this article should have a button
    },
    {
      subtitle: "কোটা আন্দোলনে ব্যাপক প্রাণহানি একটি নিরীহ দাবিকে কেন সহিংস ও",
      content:
        "ছেলের লাশেও গুলি লাগে, বললেন বাবা’, ‘আমার ছেলেকে কারা মারল? কার কাছে বিচার দেব?’, ‘হাসপাতাল ঘুরলে মৃত্যুর সংখ্যা বাড়ছে’, ‘বেটা তো আর ফিরে আসবে না, এখন ওর বউ-ছোওয়ালপালের দিখবি কিডা?’, ‘পিয়! বাবাবে ফোন",
      author: "মুফতি আবুল হাসান মুহাম্মাদ আব্দুল্লাহ",
    },
    {
      title: "নামায পড়তে জানলে পড়াতে জানব না কেন?",
      content:
        "গত জুমার আগের জুমাটি ছিল ঈদের পরের জুমা। সে জুমায় আমাকে আলোচনা করতে হয়েছিল। সেদিন যে কথা বলা হয়েছিল, মূলকথাটা আজও আবার বলছি- ঈদের পরে সংগত কারণেই ইমাম সাহেবগণের বাড়িতে যেতে হয়। কারণ অধিকাংশ ইমাম সাহ",
      author: "মাওলানা মুহাম্মাদ আব্দুল মালেক",
    },
    {
      title: "ঈমান-আকীদা বিনষ্টকারী বিভিন্ন চিন্তা ও কথা ॥ একটি প্রশ্ন ও তার",
      content:
        "প্রশ্ন : بسم الله الرحمن الرحيم বিষয় : স্থানীয় এক ব্যক্তির আকীদা-বিশ্বাস, চিন্তা-চেতনা ও কর্মকাণ্ড সম্পর্কে শরয়ী সমাধান জানার আবেদন। মুহতারাম! السلام عليكم ورحمة الله وبركاته আমরা নোয়াখালীর ... উপজেলার ...…",
      author: "মাওলানা মুহাম্মাদ সাজিদুল ইসলাম",
    },
  ];
  const anotherArticles = [
    {
      title:
        "হযরত মাওলানা আবদুল হাই পাহাড়পুরী হুজুর রাহ. ॥ সংক্ষিপ্ত জীবনালেখ্য",
      description:
        "[সুফিয়ান ইবনে উয়াইনা রাহ. বলেছেন- عِنْدَ ذِكْرِ الصَّالِحِيْنَ تَنْزِلُ الرَّحْمَةُ সালিহীনের আলোচনায় রহমত নাযিল হয়। -হ",
    },
    {
      title:
        "জাতীয় জাদুঘরে কাদিয়ানীদের কুরআন প্রদর্শনী ॥ এটি কি কুরআন-প্রেম, নাকি মুসলমানদের কুরআনের বিকৃতি?",
      description:
        "গত ২৮ জুন ২০২৪ বাংলাদেশের আহমদীয়া জামাত তথা কাদিয়ানী সম্প্রদায় শাহবাগ জাদুঘরের শেখ ফজিলাতুন্নিসা মুজিব",
    },
    {
      title: "এক টুকরো জমি",
      description:
        "সে রাতে আকাশে চাঁদ ছিল। স্নিগ্ধ আলোয় গোটা কুরাইশ নগর যেন ভেসে যাচ্ছিল। এই গ্রামের এত সুন্দর নাম কীভাবে হ",
    },
    {
      title:
        "আলওয়ারা‘সন্দেহপূর্ণ বিষয় থেকে বেঁচে থাকা ॥ মুত্তাকীদের বিশেষ গুণ",
      description:
        "আতিয়্যা সা‘দী রা. বলেন, রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন- لَا يَبْلُغُ العَبْدُ أَنْ يَكُوْنَ مِنَ المُ",
    },
    {
      title: "দাঈদের প্রতি, সকলের প্রতি পুনর্যাত্রার প্রস্তুতি এখনই শুরু হোক",
      description:
        "চারদিকে অনাচার-অবিচার দেখতে দেখতে আমরা হাঁপিয়ে উঠেছি। মানুষের মনুষ্যত্ব আজ কোথায় গিয়ে পৌঁছেছে! নিয়ম-ন",
    },
  ];
  const articlesTwo = [
    {
      title:
        "একটি কুরআনী উপমা ॥ জালেমের ঔদ্ধত্য ও নিরাপত্তা বলয় এবং মাকড়সার জাল",
    },
    {
      title: "দলীল জেনে নিন ॥সালামের জবাবে বাড়িয়ে বলা",
    },
    {
      title: "কুরআনে বর্ণিত বাগানের মালিক দুই ব্যক্তির ঘটনা",
    },
    {
      title: "আনওয়ারুল কুরআন : প্রশ্নোত্তর",
    },
    // Add more items if necessary
  ];
  const articlesThree = [];
  const articlesFour = [
    {
      title:
        "কুরআন কারীম থেকে সর্বপ্রথম নিজে হেদায়েত গ্রহণ করুন (তাফসীর ও উলূমুল কুরআন বিভাগে ইফতিতাহী আলোচনা)",
    },
    // Add more items if necessary
  ];

  const topics = [
    "ঈমান-আক্বিদ",
    "একটি ভুল নাম",
    "শিক্ষা/সিলেবাস",
    "আলকুদস সংস্থা",
    "নামায-সালাত",
    "তাহারাত",
    "রমযান প্রসঙ্গ",
    "হজ্জ",
    "যাকাত",
    "মুয়ামালাত-লেনদেন",
    "তাসাউফ-আত্মশুদ্ধি",
    "ইসলামী অর্থনীতি",
    "দাওয়াত ও তাবলীগ",
    "শেয়ার ব্যবসা",
    "শবে বরাত",
    "শবে মিরাজ",
    "ঈদ",
    "নারী অধিকার",
    "বিদায়াত",
    "সীরাত",
  ];

  return (
    <div className="pt-24">
      {/* Banner Section */}
      <div
        className="relative min-w-full bg-cover bg-top w-full h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between md:space-x-4">
              {/* Left Section with text and border */}
              <div className="w-full md:w-[40%] font-bengali text-center md:text-left">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <h2 className="text-3xl text-white font-bold pb-1 md:pb-[10px] border-b border-yellow-500">
                    বর্ষ: ২০, <span className="ml-1 md:ml-4">সংখ্যা: ০৮</span>
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-6 h-auto mt-2 md:mt-0 md:w-12 md:ml-4 hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
                <p className="mt-2 md:mt-4 text-2xl">সফর ১৪৪৬ || আগস্ট ২০২৪</p>
              </div>

              {/* Right Section with institution text */}
              <div className="w-full md:w-[50%] font-bengali hidden md:block text-white text-center md:text-left">
                <p className=" text-center text-xl font-medium">
                  গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান
                </p>
                <h2 className="text-center text-4xl font-bold">
                  মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা
                </h2>
                <p className="text-center text-lg">এর মুখপত্র</p>
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
              className="bg-white hover:bg-gray-100 border-l border-gray-200 p-6 "
            >
              {article.hasButton && (
                <button className="mb-3 px-2 py-1 bg-yellow-600 text-white font-semibold  hover:bg-yellow-700">
                  সম্পাদকীয়
                </button>
              )}
              <h2 className="text-xl hover:text-yellow-700 font-bold text-black mb-2">
                {truncateTitle(article.title)}
              </h2>
              <h3 className="text-lg font-semibold mb-4 hover:text-yellow-700">
                {truncateSubtitle(article.subtitle)}
              </h3>
              <p className="text-gray-700 mb-4">
                {truncateText(article.content, 35)}
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

      <div className="">
        <div className="container mx-auto px-3 py-3 md:p-0   font-bengali">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="col-span-2">
              <div className="grid  space-x-6 md:grid-cols-1 lg:grid-cols-2">
                {/* First Column - Other Articles */}
                <div className="w-full p-6">
                  <div className="flex items-center">
                    <h2 className="text-xl hover:text-green-600 text-gray-700  font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      অন্যান্য প্রবন্ধসমূহ »
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>
                  {/* ycsagcuahdeuchudevhuhuvhushsu */}
                  <div className="item-section space-y-4">
                    <div className="item-map1">
                      {anotherArticles.map((article, index) => (
                        <div
                          key={index}
                          className="pb-4 pt-4 border-b border-dashed border-gray-300"
                        >
                          <div className="flex items-start space-x-2">
                            <FaChevronRight className="text-yellow-500 mt-1" />
                            <div>
                              <h3 className="hover:text-green-600 text-lg text-gray-800">
                                {article.title}
                              </h3>
                              <p className="text-gray-600">
                                {truncateDescription(article.description)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Column - Quran Section */}
                <div className="w-full p-6">
                  <div className="flex items-center">
                    <h2 className="text-xl hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      আনওয়ারুল কুরআন »
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>
                  {/* bcjsaiscijaejeicjic */}
                  <div className="item-map2 space-y-4">
                    {articlesTwo.map((article, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-dashed border-gray-300"
                      >
                        <div className="flex  space-x-2">
                          <FaChevronRight className="text-yellow-500 mt-1" />
                          <h3 className="hover:text-green-600  text-lg text-gray-800">
                            {article.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                      আপনি যা জানতে চেয়েছেন »
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-[30px]"
                    />
                  </div>
                  {/* chuasxihccihsacijicsnjxi */}
                  <div className="item-map3 space-y-4">
                    {articlesThree.map((article, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-dashed border-gray-300"
                      >
                        <div className="flex items-start space-x-2">
                          <FaChevronRight className="text-yellow-500 mt-1" />
                          <div>
                            <h3 className="hover:text-green-600 text-lg text-gray-800">
                              {article.title}
                            </h3>
                            <p className="text-gray-800 text-xl">
                              {truncateDescriptionTwo(article.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex items-center">
                      <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                        শিক্ষার্থীদের পাতা »
                      </h2>
                      <img
                        src={mosque}
                        alt="mosque"
                        className="w-8 h-auto -ml-[30px]"
                      />
                    </div>
                    {/* mascnacmcqeimvrembemgmmmmmm */}
                    <div className="item-map4 space-y-4">
                      {articlesFour.map((article, index) => (
                        <div
                          key={index}
                          className="pb-4 border-b border-dashed border-gray-300"
                        >
                          <div className="flex  space-x-2">
                            <FaChevronRight className="text-orange-500 mt-1" />
                            <h3 className=" text-lg hover:text-green-600 text-gray-800">
                              {article.title}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Add section starts */}
              <div className="mt-8">
                <img
                  src={adStart}
                  alt="adstart"
                  className="w-full bg-contain"
                />
                {/* <div className="mt-8">
                  <img
                    src={adAfter}
                    alt="adAfter"
                    className="w-full bg-contain"
                  />
                </div>
                <img src={adEnd} alt="adEnd" className="w-full bg-contain" /> */}
              </div>
            </div>

            {/* Third Column - Images, Ads, and Hajj Articles */}
            <div className="space-y-6 border-l border-gray-200  p-3">
              <div className="flex items-center">
                <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                  প্রচ্ছদ
                </h2>
                <img
                  src={mosque}
                  alt="mosque"
                  className="w-8 h-auto -ml-[30px]"
                />
              </div>
              <div>
                {/* Image Thumbnail */}
                <div className="cover">
                  <img
                    src={cover_three} // replace with your image path
                    alt="Cover"
                    className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover border mx-auto cursor-pointer"
                    onClick={handleModalOpen}
                  />
                </div>

                {/* Modal */}
                {isModalOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={handleModalClose} // Close modal on background click
                  >
                    <div
                      className="relative w-full max-w-sm bg-white p-4"
                      onClick={(e) => e.stopPropagation()} // Prevent background click when clicking on content
                    >
                      {/* Close button */}
                      <button
                        onClick={handleModalClose}
                        className="absolute top-2 right-2 text-black text-xl font-bold"
                      >
                        &times;
                      </button>
                      {/* Large image in modal */}
                      <img
                        src={cover_three} // replace with your image path
                        alt="Cover Large"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Hajj Articles */}

              {/* topic section */}
              <div>
                <div className="flex items-center">
                  <h2 className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                    প্রসঙ্গসমূহ »
                  </h2>
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-8 h-auto -ml-[30px]"
                  />
                </div>
                <div className="item">
                  {/* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz */}
                  <div className="item-map5 flex flex-wrap gap-3 border-b border-gray-200 pb-3">
                    {topics.map((topic, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-gray-200 text-gray-700  text-sm font-medium  hover:bg-gray-400"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                  <div>
                    <button className="px-4 py-3 mt-5 bg-green-600 hover:bg-green-700 text-white ">
                      আরও »
                    </button>
                  </div>
                </div>
              </div>
              {/* simple image grid section */}
              <div>
                {/* importent */}
                <div className="flex items-center">
                  <h2 className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                    সাম্প্রতিক সংখ্যা »
                  </h2>
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-8 h-auto -ml-[30px]"
                  />
                </div>
                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="relative">
                    <img
                      src={cover_one}
                      alt="image1"
                      className="w-full h-auto"
                    ></img>
                    <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={cover_two}
                      alt="cover_two"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={cover_three}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={cover_four}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={cover_five}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={cover_six}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for cover image */}
        </div>
      </div>
    </div>
  );
};

export default Agost;
