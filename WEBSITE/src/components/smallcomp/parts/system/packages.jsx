import React from "react";

function Packages() {
  return (
    <section>
      <div className="container max-w-full mx-auto py-12 px-6">
        <h1 className="text-center text-4xl  font-medium leading-snug tracking-wider">
          پاکێجەکانمان
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6">
          پاکێجەکانمان و نرخەکانیان ، بۆ تۆی بەکارهێنەری بەشی گەڕانی کۆدەکان و
          بینینی واتای کۆدەکان بە زمانی کوردی
        </p>
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />
        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative block flex flex-col md:flex-row items-center">
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
              <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    مانگانە
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    10$
                  </h2>
                  ئۆفەری مانگانە ماوەی سی ڕۆژ دەتوانی تەواوی زانیاریەکان
                  دەربارەی کۆدەکانی ئۆتۆمبێل ببینینی
                </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        بینینی کۆدەکان
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        جۆرە جیاوزەکانی ئۆتۆمبێل
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        وەڵامدانەوەی ئیـمێڵ و پەیوەندی
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="block flex items-center p-8  uppercase">
                  <button
                    className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                    onClick={() => {
                      window.location.href =
                        "https://forms.gle/HQx1W7hSbp69Z1iD9";
                    }}
                  >
                    دیاریکردن
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
              <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                زۆرترین خواست
              </div>
              <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  ٦مانگ{" "}
                </h1>
                <h2 className="text-sm text-gray-500 text-center pb-6">
                  <span className="text-3xl">$8</span> /mo
                </h2>
                ئەم ئۆفەرە بۆ ماوەی شەش مانگ بەردەوام دەبێت و داواکار لە کاتی
                هەبوونی پرسیار دەتوانێت پەیوەندی بکات
              </div>
              <div className="flex pl-12 justify-start sm:justify-start mt-3">
                <ul>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      {" "}
                      20% داشکاندن
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      بینینی کۆدەکان
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      جۆرە جیاوزەکانی ئۆتۆمبێل
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      وەڵامدانەوەی ئیـمێڵ و پەیوەندی
                    </span>
                  </li>
                </ul>
              </div>
              <div className="block flex items-center p-8  uppercase">
                <button
                  className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                  onClick={() => {
                    window.location.href =
                      "https://forms.gle/HQx1W7hSbp69Z1iD9";
                  }}
                >
                  دیاریکردن
                </button>
              </div>
            </div>
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
              <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    ساڵێک
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    €5 /mo
                  </h2>
                  بەکارهێەر هەموو تایبەتمەندیەکی دەبێت لە ناو سیستمەکەدا و لە
                  نوێترین بێتا ڤێرژنەکاندا دەتوانێت ببێت بە بەکاربەر{" "}
                </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        50% داشکاندن
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        بینینی کۆدەکان
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        جۆرە جیاوزەکانی ئۆتۆمبێل
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        وەڵامدانەوەی ئیـمێڵ و پەیوەندی
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="block flex items-center p-8  uppercase">
                  <button
                    className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                    onClick={() => {
                      window.location.href =
                        "https://forms.gle/HQx1W7hSbp69Z1iD9";
                    }}
                  >
                    دیاریکردن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7ikYqzy5_wOlkq_Pbyx1YtUOZxZLLjoKhnrZ5-IyL1Kp3Ug/viewform?embedded=true" width="640" height="1201" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </section>
  );
}

export default Packages;
