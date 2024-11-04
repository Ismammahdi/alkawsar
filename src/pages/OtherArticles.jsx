import React, { useState } from "react";

import mosque from "../assets/mosque.svg";
import adStart from "../assets/adstarts.png";
import adAfter from "../assets/adAfter.jpg";
import adEnd from "../assets/adEnds.jpg";
import cover from "../assets/cover_oct_24.jpg";
import sishuad from "../assets/sishu.jpg";
import nari from "../assets/nari.png";
import sample from "../assets/sample.png";
import cover_one from "../assets/cover-1.jpg";
import cover_two from "../assets/cover-2.jpg";
import cover_three from "../assets/cover-3.jpg";
import cover_four from "../assets/cover-4.jpg";
import cover_five from "../assets/cover-5.jpg";
import cover_six from "../assets/cover-6.png";

const OtherArticles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "বৈশাখের পলে জাতীয় যে বার্তা দিল",
      description: "এই প্রবন্ধে ২০২৩ এর বাংলাদেশ ঐতিহাসিক পর্যালোচনায়...",
    },
    {
      title: "জর্জ বার্নার্ড শ’র ভবিষ্যদ্বাণী",
      description:
        "শেরাশিয়ারের পর জর্জ বার্নার্ড শ-কে (George Bernard Shaw)...",
    },
  ];

  const quranArticles = [
    {
      title:
        "একটি ভিত্তিহীন বর্ণনা ॥ জামাতের নামাযে সূরা ফাতেহার শুরু থেকে শরীক হওয়ার নির্দিষ্ট ফযীলত",
    },
    {
      title:
        "একটি ভিত্তিহীন কাহিনী ॥ বেলাল রা.-কে মেরে মেরে আল্লাহ পরীক্ষা নিয়েছেন, যেমন হাঁড়ি কেনার সময়...",
    },
    {
      title: "একটি ভিত্তিহীন দুআ ॥ খাওয়ার শুরুতে লবণ মুখে দেওয়ার দুআ",
    },
  ];

  const alQuran = [{ title: "অন্ধ ও চক্ষুষ্মান বরাবর নয়" }];
  const Quran = [{ title: "খবর ... অতঃপর ..." }];

  const hajjArticles = [
    {
      number: "1",
      month: "মুহাররম ১৪৪০",
      title: "হজ্বের পর : হজ্ব-পরবর্তী জীবনের আলোক-প্রদীপ",
    },
    {
      number: "2",
      month: "মুহাররম ১৪৩৭",
      title: "হজ্বের পরে নতুন জীবন",
    },
    {
      number: "3",
      month: "শাওয়াল ১৪৩০",
      title: "হজ্ব : যা দান করে আত্মত্যাগ ও আত্মনিবেদনের শিক্ষা",
    },
  ];
  const topics = [
    "ঈমান-আকাইদ",
    "একটি ভুল নাম",
    "শিক্ষা/সিলেবাস",
    "আলহুদুদ সংখা",
    "নামায-সালাত",
    "তাহারাত",
    "রমযান প্রসঙ্গ",
    "হজ্জ",
    "যাকাত",
    "মুয়ামালাত-লেনদেন",
    "তাওহীদ-আক্বিদা",
    "ইসলামী অর্থনীতি",
    "দাওয়াত ও তাবলীগ",
    "শেয়ার ব্যবসা",
    "শবে বরাত",
    "শবে মিরাজ",
    "ঈদ",
    "নারী অধিকার",
    "বিদআত",
    "সীরাত",
  ];

  return (
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
                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>

              <div className="item-section space-y-4">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 py-6 pb-4 flex items-start"
                  >
                    <span className="mr-2 mt-1 text-yellow-700">&gt;</span>
                    <div>
                      <a
                        href="#"
                        className="font-medium text-lg hover:text-green-600"
                      >
                        {article.title}
                      </a>
                      <p className="text-gray-700">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Column - Quran Section */}
            <div className="w-full p-6">
              <div className="flex items-center">
                <h2 className="text-xl hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                  আনওয়ারুল কুরআন »
                </h2>
                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>
              <div className="item-map space-y-4">
                {alQuran.map((quran, index) => (
                  <div
                    key={index}
                    className="border-b hover:text-green-600 border-gray-200 py-6 pb-4 flex items-start"
                  >
                    <span className="mr-2 mt-1 text-yellow-700">&gt;</span>
                    <div className="text-xl">{quran.title}</div>
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
              <div className="item-map space-y-4">
                {quranArticles.map((article, index) => (
                  <div
                    key={index}
                    className="pt-4 text-base border-b border-gray-200 pb-4"
                  >
                    <div className="flex items-start">
                      <span className="mr-2 text-yellow-700">&gt;</span>
                      <div>
                        <a href="#" className="hover:text-green-600">
                          {article.title}
                        </a>
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
                <div className="item-map space-y-4">
                  {Quran.map((article, index) => (
                    <div
                      key={index}
                      className="pt-4 text-base border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-start">
                        <span className="mr-2 text-yellow-700">&gt;</span>
                        <div>
                          <a href="#" className="hover:text-green-600">
                            {article.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Add section starts */}
          <div className="mt-8">
            <img src={adStart} alt="adstart" className="w-full bg-contain" />
            <div className="mt-8">
              <img src={adAfter} alt="adAfter" className="w-full bg-contain" />
            </div>
            <img src={adEnd} alt="adEnd" className="w-full bg-contain" />
          </div>
        </div>

        {/* Third Column - Images, Ads, and Hajj Articles */}
        <div className="space-y-6 border-l border-gray-200  p-3">
          <div className="flex items-center">
            <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
              প্রচ্ছদ
            </h2>
            <img src={mosque} alt="mosque" className="w-8 h-auto -ml-[30px]" />
          </div>
          <div className="cover">
            <img
              src={cover}
              alt="Cover"
              className=" w-full md:w-3/4 lg:w-1/2   h-auto object-cover border mx-auto cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <img
            src={sishuad}
            alt="Second Ad"
            className="w-full h-auto object-cover border"
          />
          <img
            src={nari}
            alt="Third Ad"
            className="w-full h-auto object-cover border"
          />

          {/* Hajj Articles */}
          <div className="">
            <div className="flex items-center">
              <h2 className="text-2xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                হজ্ব পরবর্তী জীবন »
              </h2>
              <img
                src={mosque}
                alt="mosque"
                className="w-8 h-auto -ml-[30px]"
              />
            </div>
            <div className="map-item space-y-6">
              {hajjArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 border-b"
                >
                  <span className="text-2xl font-bold border-b-4 border-gray-400 text-gray-700 p-3">
                    {article.number}
                  </span>
                  <div className="flex flex-col space-y-1 py-4">
                    <div className="bg-yellow-600 text-white px-3 py-2 text-xs w-24 text-center inline-block">
                      {article.month}
                    </div>

                    <div>
                      <a
                        href="#"
                        className="font-semibold text-lg text-gray-800 hover:text-green-600"
                      >
                        {article.title}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <button className="bg-green-600 text-white px-4 py-3  mt-4">
                আরও »
              </button>
            </div>
          </div>
          {/* sample ad section */}
          <div>
            <img src={sample} alt="sample" className="w-full" />
          </div>
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
              <div className=" flex flex-wrap gap-3 border-b border-gray-200 pb-3">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-500 hover:text-white bg-gray-200 text-gray-800 text-sm  px-4 py-1   "
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
                প্রসঙ্গসমূহ »
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={cover}
              alt="Cover Large"
              className="max-w-full max-h-screen"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherArticles;
