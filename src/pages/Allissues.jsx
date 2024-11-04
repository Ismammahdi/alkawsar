import React from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
// import adStart from "../assets/adstarts.png";
// import adAfter from "../assets/adAfter.jpg";
// import adEnd from "../assets/adEnds.jpg";
import cover from "../assets/cover-1.jpg";
import cover_one from "../assets/cover-2.jpg";
import cover_two from "../assets/cover-3.jpg";
import cover_three from "../assets/cover-4.jpg";
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
const truncateDescription = (text, wordLimit = 15) => {
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

const Allissues = () => {
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
  const anotherArticles = [
    {
      title: "শৈরাতন্ত্রের পতন জাতিকে যে বার্তা দিল",
      description:
        "৫ই আগস্ট ২০২৪ বাংলাদেশের ইতিহাসে সংযোজিত হয় এক নতুন অধ্যায়। ছাত্র-জনতার অভ্যুত্থান অব্যাহত এবং তাদের ব",
    },
    {
      title: "জর্জ বার্নার্ড শ’র ভবিষ্যদ্রষ্টা",
      description:
        "শিল্পপতির পর জর্জ বার্নার্ড শ-কে (George Bernard Shaw) ইংরেজির দ্বিতীয় বড় উপন্যাসিক ও সাহিত্যিক মনে করা",
    },
  ];
  const articlesTwo = [
    {
      title: "অন্ধ ও চক্ষুষ্মান বরাবর নয়",
    },
    // Add more items if necessary
  ];
  const articlesThree = [
    {
      title: "একটি বিদ্বেষহীন বর্ণনা",
      description:
        "জামাতের নামাযে সুরা ফাতেহাহ শুরু থেকে শরীক হওয়ার নির্দেশ ফযীলত",
    },
    {
      title: "একটি বিদ্বেষহীন কাহিনী",
      description:
        "বেলাল রা.-কে মেরে আল্লাহর পরীক্ষা নিয়েছেন, যেমন হাঁড়ি কেমন সময়...",
    },
    {
      title: "একটি বিদ্বেষহীন দুআ",
      description: "খাওয়ার শুরুতে লবণ মুখে দেওয়ার দুআ",
    },
  ];
  const articlesFour = [
    {
      title: "খবর ... অতঃপর ...",
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
                        <div className="flex items-center space-x-2">
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
                      প্রচলিত ভুল »
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
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                        খবর ... অতঃপর ... »
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
                          <div className="flex items-center space-x-2">
                            <FaChevronRight className="text-orange-500 mt-1" />
                            <h3 className="font-bold text-lg text-gray-800">
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
              {/* <div className="mt-8">
                <img
                  src={adStart}
                  alt="adstart"
                  className="w-full bg-contain"
                />
                <div className="mt-8">
                  <img
                    src={adAfter}
                    alt="adAfter"
                    className="w-full bg-contain"
                  />
                </div> 
                <img src={adEnd} alt="adEnd" className="w-full bg-contain" />
              </div> */}
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
              <div className="cover">
                <img
                  src={cover}
                  alt="Cover"
                  className=" w-full md:w-3/4 lg:w-1/2   h-auto object-cover border mx-auto cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />
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
                  <div>
                    <img
                      src={cover_one}
                      alt="image1"
                      className="w-full h-auto"
                    ></img>
                  </div>
                  <div>
                    <img
                      src={cover_two}
                      alt="cover_two"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src={cover_three}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src={cover_four}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src={cover_five}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <img
                      src={cover_six}
                      alt="cover_three"
                      className="w-full h-auto"
                    />
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

export default Allissues;
