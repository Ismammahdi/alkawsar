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

import cover_four from "../assets/cover-4.jpg";
import cover_five from "../assets/cover-5.jpg";
import cover_six from "../assets/cover-6.png";
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

const June = () => {
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
        "কার্যকর হয়ে উঠছে বয়কট অস্ত্র ‖ প্রয়োজন আরো ব্যাপক ও কঠোর প্রয়োগ",
      content:
        "গত বছর অক্টোবর থেকে দখলদার ইসরাইল কর্তৃক নিরীহ ফিলিস্তিনী জনগণের ওপর গণহত্যা ও জাতি নিধনের একটি ছোট্ট প্রতিবাদ হিসেবে ‘বয়কট’ অস্ত্রটির প্রয়োগ শুরু হয়েছিল। যদিও পৃথিবীতে অর্ধ শতাধিক মুসলিম রাষ্ট্র রয়েছে। পৃথিবীর ",
      hasButton: true, // Indicate that this article should have a button
    },
    {
      subtitle: "জুলুমের পরিণতি : স্বদেশ ও বিদেশ",
      content:
        "প্রতি মাসে আলকাউসার প্রেসে যাওয়ার সময় ঘনিয়ে এলে সহকর্মীদের থেকে আবদার বাড়তে থাকে- চলমান ইস্যুতে আপনি কিছু বলুন। মূল কাজ যেহেতু লেখালেখি নয় এবং অন্যান্য চৌকিদারি করে হাতে সময়ও থাকে না, তাই প্রতিবারই না লিখে",
      author: "মুফতি আবুল হাসান মুহাম্মাদ আব্দুল্লাহ",
    },
    {
      title: "ট্রান্সজেন্ডারবাদ একটি কুফরী মতবাদ",
      content:
        "[আল-হাইআতুল উলয়া লিল-জামি‘আতিল কাওমিয়া বাংলাদেশ-এর জাতীয় মুফতি বোর্ড কর্তৃক প্রণীত ‘শরীয়তের দৃষ্টিতে ট্রান্সজেন্ডার ও ট্রান্সজেন্ডার মতবাদ, একটি প্রামাণ্য ফতোয়া’ শিরোনামের বিস্তারিত ফতোয়া গত ১২ যিলকদ ১৪৪৫ হিজরী ম",
      author: "মাওলানা মুহাম্মাদ আব্দুল মালেক",
    },
    {
      title: "হজ্ব ও উমরা : উদ্দেশ্য, ফায়েদা ও প্রেরণা",
      content:
        "الحمد لله وكفى وسلام على عباده الذين اصطفى. সর্বপ্রথম আমি আপনাদেরকে এই মহা নিআমত ও দৌলত প্রাপ্তির ওপর মুবারকবাদ জানাচ্ছি যে, আল্লাহ রাব্বুল আলামীন আপনাদেরকে অত্যন্ত মর্যাদাপূর্ণ একটি সফরের সৌভাগ্য দান করেছেন। হ",
      author: "মাওলানা মুহাম্মাদ সাজিদুল ইসলাম",
    },
  ];
  const anotherArticles = [
    {
      title: "কুরবানী : ইতিহাস, গুরুত্ব ও শিক্ষা",
      description:
        "কুরবানী ইসলামের গুরুত্বপূর্ণ বিধান ও  বিশেষ ইবাদত। হযরত আদম আলাইহিস সালামের যুগ থেকে তা চলে আসছে। তবে",
    },
    {
      title: "জুমাপূর্ব বয়ান ‖ আমানত ও খেয়ানত",
      description:
        "لْحَمْدُ لِلهِ، الْحَمْدُ لِله نحمده ونستعينه، ونستغفره ونؤمن به ونتوكل عليه، ونعوذ بالله من شرور أنفسنا ومن",
    },
    {
      title:
        "ফিলিস্তিন পরিস্থিতি ‖ শাইখুল ইসলাম তাকী উসমানী দামাত বারাকাতুহুম-এর দুটি বয়ান",
      description:
        "‘ফিলিস্তিনের জন্য আপনার প্রতিদিনের চব্বিশ ঘণ্টা থেকে ১০ মিনিট বরাদ্দ করুন!’   সম্মানিত উপস্থিতি! আপনাদের",
    },
    {
      title: "আত্মপ্রচার : ধ্বংস করে ঈমান ও আমল",
      description:
        "কিছুদিন আগে এক দস্তরখানে শরীক হয়েছিলাম। দস্তরখানে অন্যান্য মেহমানও ছিলেন। যখন আমাদের সামনে দস্তরখান পেশ",
    },
    {
      title: "দুআ কবুল হওয়ার বিশেষ কিছু মুহূর্ত",
      description:
        "প্রতি মুহূর্তে, প্রতিটি কর্মে বান্দা আল্লাহর সাহায্যের মুখাপেক্ষী। তাঁর সাহায্য ছাড়া বান্দার কোনো কাজই সফলতার",
    },
    {
      title: "হযরত মাওলানা শাহ্ হাফেজ মুহাম্মাদ কাছেম রাহ.",
      description:
        "হযরত মুফতীয়ে আযম ফয়যুল্লাহ রাহ.-এর বিশিষ্ট শাগরেদ ও একনিষ্ঠ খাদেম, হযরত মাওলানা আবরারুল হক হারদুয়ী রাহ",
    },
    {
      title: "নরেন্দ্র মোদি ভগবানের অবতার থেকে ভগবান হওয়ার অপেক্ষায়",
      description:
        "নির্বাচনের ধাপগুলো শেষ দিকে গড়ানোর সাথে সাথে মোদি তোষণে মত্ত ভারতীয় মিডিয়াগুলোও ধীরে ধীরে স্বীকার করছে",
    },
    {
      title: "ফিরে আসার গল্প কাদিয়ানী চক্রান্তের শিকার এক নারীর কথা",
      description:
        "ফেতনার যামানা। নিত্য নতুন ফেতনা জন্ম নিচ্ছে। যত দিন যাচ্ছে আরো ভয়ংকর হয়ে উঠছে। বাতিলপন্থীরা মুসলমানদের ও",
    },
    {
      title: "নামাযের কাতার : কিছু কথা কিছু নিবেদন",
      description:
        "নামায; ঈমানের পর যার স্থান এবং ঈমানের সাথে যার গভীর সেতুবন্ধন। তাই কুরআন কারীমের যেখানে ঈমানের আদেশ এ",
    },
  ];
  const articlesTwo = [
    {
      title: "কুরআনের ভাষায় শাসকের কয়েকটি গুণ",
    },
    {
      title: "কুরআনের বার্তা ‖ অশালীনতা ও অশ্লীলতা ছড়ানোর পরিণাম খুবই ভয়াবহ",
    },
    {
      title: "দলীল জেনে নিন ‖ যানবাহনে আরোহণের দুআ",
    },

    // Add more items if necessary
  ];
  const articlesThree = [];
  //   const articlesFour = [
  //     {
  //       title: "",
  //     },
  //     // Add more items if necessary
  //   ];

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
                    বর্ষ: ২০, <span className="ml-1 md:ml-4">সংখ্যা: ০৬</span>
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-6 h-auto mt-2 md:mt-0 md:w-12 md:ml-4 hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
                <p className="mt-2 md:mt-4 text-2xl">
                  যিলহজ্ব ১৪৪৫ || জুন ২০২৪
                </p>
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
                {truncateText(article.content, 30)}
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
                    src={cover_five} // replace with your image path
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
                        src={cover_five} // replace with your image path
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

export default June;
