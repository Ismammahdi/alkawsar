import React from "react";
import mosque from "../../assets/mosque.svg";
import bannerImage from "../../assets/alkawsar-banner-230px.png";
import coverOne from "../../assets/cover-1.jpg";
import coverTwo from "../../assets/cover-2.jpg";
import coverThree from "../../assets/cover-3.jpg";
import coverFour from "../../assets/cover-4.jpg";
import coverFive from "../../assets/cover-5.jpg";
import coverSix from "../../assets/cover-6.png";
const articles = [
  {
    date: "রবিউল আউয়াল ১৪৪৬",
    title: "বিশেষ সম্পাদকীয়",
    description:
      "সংক্ষিপ্ত। রাষ্ট্রসংস্কারের কাজ নবীজী সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের সীরাত থেকে শুরু করে ড. মুহাম্মাদ ইকবালের নেতৃত্বে অন্তর্বর্তীকালীন সরকার দাবির নিবেদন।",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    title: "দ্বিতীয় স্বাধীনতা । একে সুসংহত করতে হবে",
    description:
      "অবতরণিকার সংক্ষিপ্ত বর্ণনা। দেশের শিক্ষা, সংস্কৃতি, অর্থনীতি সকল ক্ষেত্রের মধ্যে জাতীয় শক্তি সঞ্চার করতে হবে।",
  },
  {
    date: "শাবান ১৪৪৪",
    title: "কোটা বিরোধী আন্দোলনে শিক্ষক হত্যাকাণ্ডের ঘটনা",
    description:
      "ছাত্র সমাজের কোটা বিরোধী আন্দোলনের কেন্দ্র করে যে সহিংসতা তৈরি হয়, তা জাতীয় স্বার্থের বিরোধী।",
  },
  {
    date: "মুহাররম ১৪৪৪",
    title:
      "কুরবানী । কোন সংখ্যা বা কসাইকে মূল পরিকল্পনা করতে হবে, যাতে জনগণ নিজ ব্যবস্থাপনায় পরিচালিত",
    description:
      "কুরবানির পরিকল্পনা সম্পর্কে বিবরণ। জনগণ নিজেদের ব্যবস্থাপনায় কুরবানির কাজ পরিচালনা করতে সক্ষম হবে।",
  },
  {
    date: "মুহাররম ১৪৪৬",
    title:
      "কুরবানী : কোনো সংস্থা বা কসাইকে মূল্য পরিশোধ করে নয়, কুরবানী করুন নিজ ব্যবস্থাপনায় পরিপূর্ণ আন্তরিকতার সাথে",
    description:
      "১৪৪৫ হিজরীর ঈদুল আযহা তথা কুরবানীর ঈদ সম্পন্ন হয়েছে। পুরো বিশ্বের মতো বাংলাদেশেও ধর্মপ্রাণ মুসলিমগণ আল্লাহর সন্তুষ্টি অর্জনের উদ্দেশ্যে লক্ষ লক্ষ পশু কুরবানী করেছে। যদিও নতুন করে বেড়ে ওঠা",
  },
  {
    date: "যিলহজ্ব ১৪৪৫",
    title: "কার্যকর হয়ে উঠছে বয়কট অস্ত্র ‖ প্রয়োজন আরো ব্যাপক ও কঠোর প্রয়োগ",
    description:
      "গত বছর অক্টোবর থেকে দখলদার ইসরাইল কর্তৃক নিরীহ ফিলিস্তিনী জনগণের ওপর গণহত্যা ও জাতি নিধনের একটি ছোট্ট প্রতিবাদ হিসেবে ‘বয়কট’ অস্ত্রটির প্রয়োগ শুরু হয়েছিল। যদিও পৃথিবীতে অর্ধ শতাধিক মুস…",
  },
  {
    date: "যিলকদ ১৪৪৫",
    title:
      "প্রচণ্ড দাবদাহ ॥ প্রয়োজন জুলুম ও জোরজবরদস্তি বন্ধ করা প্রকাশ্য পাপাচার পরিহার করা",
    description:
      "বিগত কয়েক সপ্তাহ ধরে দেশে চলছে প্রচণ্ড দাবদাহ। অস্বাভাবিক গরমে চরম কষ্ট যাচ্ছে এই অঞ্চলের মানুষ ও প্রাণীকুলের। বলা হচ্ছে, বিগত পঁচাত্তর বছরের মধ্যে এটি রেকর্ড সর্বোচ্চ তাপমাত্রা। এই ধরনের ক…",
  },
  {
    date: "শাওয়াল ১৪৪৫",
    title:
      "ইফতারে বাধা ও হামলা ॥ সাধারণ ধর্মীয় আয়োজনগুলোও গায়ের কাঁটা হয়ে উঠছে ইসলাম-বিদ্বেষীদের",
    description:
      "১৪৪৫ হিজরীর রমযানুল মোবারক শেষ হওয়ার পথে। এই পত্রিকা যখন পাঠকের হাতে যাবে তখন শাওয়াল মাস। বিশ্বব্যাপী ধর্মপ্রাণ মুসলমানেরা অন্যবারের মতো এবারও সিয়াম ও কিয়ামের মাধ্যমে রমযানুল মোবারক…",
  },
  {
    date: "শাওয়াল ১৪৪৫",
    title: "মাহে রমযান কুরআন ও তাকওয়ার পথে অগ্রসর হওয়ার মৌসুম",
    description:
      "বছর ঘুরে আবারো বিশ্বের মুসলমানদের দোরগোড়ায় উপস্থিত হয়েছে রমযানুল মোবারক। রহমত ও মাগফিরাত, সহমর্মিতা ও ভ্রাতৃত্ববোধসহ অসংখ্য বৈশিষ্ট্যমণ্ডিত এ মাসের জন্য বছর জুড়ে অপেক্ষায় থাকে প্রতিটি মু",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "শিক্ষা কারিকুলাম : ভাবনার বিষয়!",
    description:
      "শিক্ষা জাতির মেরুদণ্ড কথাটি চিরসত্য ও সর্বজনবিদিত হলেও বর্তমানে যেন এ বাক্য তার গুরুত্ব হারাচ্ছে। রাষ্ট্রের সবচেয়ে অবহেলিত ও গুরুত্বহীন বিভাগে পরিণত হচ্ছে এখন শিক্ষা বিভাগ। আওয়ামী লীগের গ",
  },
  {
    date: "রজব ১৪৪৫",
    title: "প্রফেসর হযরত রাহিমাহুল্লাহ : বিশেষ আয়োজন",
    description:
      "গত ১৭ রবিউল আখির ১৪৪৫ হিজরী মোতাবেক ২ নভেম্বর ২০২৩ ঈসাব্দে ইন্তেকাল করেছেন সর্বজন শ্রদ্ধেয় দ্বীনী ব্যক্তিত্ব হযরত প্রফেসর হামীদুর রহমান রাহমাতুল্লাহি আলাইহি। যিনি ছিলেন অসংখ্য মানুষের আলো",
  },
  {
    date: "জুমাদাল উলা-জুমাদাল আখিরাহ ১৪৪৫",
    title: "গাজায় ইসরাইলের বর্বরতা ॥ মুসলিম দেশগুলোর কলঙ্কজনক ভূমিকা!",
    description:
      "প্রায় দুই মাস হতে চলেছে, ফিলিস্তিনী মুসলমানদের ওপর ইসরাইলের হত্যাযজ্ঞ ও বর্বরতা থামার নাম নেই। নিষ্পাপ নারী-শিশু, হাসপাতালের রোগীÑ কেউ রেহাই পাচ্ছে না। মনে হচ্ছে শিশু ও হাসপাতালগুলোক",
  },
  {
    date: "রবিউল আখির ১৪৪৫",
    title: "গাজায় ইসরাইলের বর্বরতা গাজাবাসীর জন্য দুফোঁটা অশ্রু!",
    description:
      "মাসের শুরুতেই পাঠকের হাতে আলকাউসার তুলে দিতে আগের মাসের ২১ তারিখেই পত্রিকা প্রেসে চলে যায়। মাঝে মাঝে এর ব্যত্যয় ঘটলেও সাধারণত এই নিয়ম রক্ষার চেষ্টা করা হয়। সেই হিসেবে অক্টোবরের শু",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    title: "দ্রব্যমূল্যের ঊর্ধগতি এ দুঃসময়ে দরকার ব্যাপক সরকারি পদক্ষেপ",
    description:
      "দ্রব্যমূল্য ক্রমেই আমজনতার নাগালের বাইরে চলে যাচ্ছে। মধ্যবিত্তের একরকম সমস্যা, নিম্নবিত্তের আরেক রকম সমস্যা। বাচ্চাদের মাদরাসা-স্কুল ফি, বাসা ভাড়া, বিদ্যুৎ বিল, গ্যাস সিলিন্ডার ও নিত্য প্রয়োজন",
  },
  {
    date: "সফর ১৪৪৫",
    title: "মাদরাসা ছাত্র হত্যাকাণ্ড : এ নৃসংশতার কি কোনো প্রতিকার নেই?",
    description:
      "মাদরাসার ছাত্র রেজাউল করিম হত্যার পর তো অনেক দিন পার হয়ে গেল। কোনো বিচার শুরু হয়েছে বলে শোনা যায়নি। কাউকে গ্রেফতার করা হয়েছে বলেও খবর পাওয়া যায়নি। ইতিমধ্যে পাঠকবৃন্দ জেনে গেছেন-‘র",
  },
  {
    date: "মুহাররম ১৪৪৫",
    title: "রাজনীতি : সংঘাত নয় সমাধানের পথ খুঁজুন",
    description:
      "আগামী জাতীয় সংসদ নির্বাচনের সময় যতই ঘনিয়ে আসছে ততই রাজনীতির ময়দান উত্তপ্ত হয়ে উঠছে। দেশের প্রধান দুটি রাজনৈতিক দল মুখোমুখি অবস্থানে। একবার এই দল কর্মসূচি দিচ্ছে, আরেকবার ওই দল কর্মসূ",
  },
];

// Helper function to truncate description
const truncateDescription = (text, wordLimit = 18) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};

// Helper function to limit title to 5 words with line break if needed
const formatTitle = (text, wordLimit = 8) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return (
      <>
        {words.slice(0, wordLimit).join(" ")}
        <br />
        {words.slice(wordLimit).join(" ")}
      </>
    );
  }
  return text;
};

const NewComponent = () => {
  return (
    <div className="font-bengali">
      {/* Banner Section */}
      <div
        className="relative min-w-full bg-cover bg-top w-full h-60 flex items-center font-bengali"
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
                    বিভাগ
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto -ml-[44px] hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
                <p className="mt-4 text-3xl">সম্পাদকীয়</p>
              </div>

              {/* Right Section with institution text */}
              <div className="w-[50%] font-bengali"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {/* Left Column with Articles and Right Border */}
        <div className="md:col-span-2 space-y-6 border-r border-gray-200 pr-4">
          {/* Map through articles data */}
          {articles.map((article, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 p-3">
              <h3 className="text-white text-sm inline-block px-3 py-2 bg-yellow-600">
                {article.date}
              </h3>
              <h4 className="text-lg my-5 hover:text-green-600">
                {formatTitle(article.title)}
              </h4>
              <p className="text-gray-700">
                {truncateDescription(article.description)}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column with Recent Covers */}
        <div>
          <div className="flex items-center">
            <h2 className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
              প্রসঙ্গসমূহ »
            </h2>
            <img src={mosque} alt="mosque" className="w-8 h-auto -ml-[30px]" />
          </div>

          <div className="grid grid-cols-2  lg:grid-cols-3  gap-4">
            {[
              coverOne,
              coverTwo,
              coverThree,
              coverFour,
              coverFive,
              coverSix,
            ].map((cover, index) => (
              <div key={index} className="relative group">
                {/* Image */}
                <img
                  src={cover}
                  alt={`Cover ${index + 1}`}
                  className="w-full h-auto"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
