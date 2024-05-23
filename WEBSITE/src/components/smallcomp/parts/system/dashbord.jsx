import * as React from "react";
import { Typography } from "@mui/material";
import images from "./../../../../assets/images/aboutcodes/og-image.jpg";
import images1 from "./../../../../assets/images/aboutcodes/aa.jpg";
import dayjs from './../../../../../node_modules/dayjs/esm/index';

const Dashbord = ({ username, mainData }) => {

  const startDate = dayjs(mainData['start_date']);
const endDate = dayjs(mainData['expire_date']);
const currentDate = dayjs();
const totalDuration = endDate.diff(startDate, 'day'); // Total duration in days
const elapsedDuration = endDate.diff(currentDate, 'day'); // Elapsed duration in days
const percentageUsed = Math.round((elapsedDuration+1) / totalDuration) * 100; // Calculate and round percentage
const myArray = [
  ["10$ مانگانە"],
  [" 48$ شەش مانگی"], 
  [" 60$ یەک ساڵی "]
];
// console.log(totalDuration+"  "+elapsedDuration);

  return (
    <div className="bg-base-200 text-base-content" dir="rtl">

      <div>
      
      <Typography paragraph>
        ئێمە وەک تیمی دایاگنۆ کار ماڵپەڕی دایاگنۆ کارمان بەکارخستوە لە ژێر
        ڕۆشنایی کارکردنمان لەسەر بابەتی کێشەکانی ئۆتۆمبێل ئەم بەشە تایبەتە
        بەوانەی ئەکاونتی چالاککراویان هەیە، کە خۆی دەبینێتەوە لە خزمەتگوزاری
        وەرگێڕانی کۆدەکانی ئۆتۆمبێل
      </Typography>
      <Typography>
      
      <div class="flex justify-center text-xl mb-3">
             

  <div class="flex flex-col lg:flex-row border-4 border-primary rounded-lg md:flex-row bg-primary text-primary-content">
    <div class="p-4">
      <div class="text-white">پاکێجی</div>
      <div class="text-lg"> {myArray[mainData['package']-1]}</div>
      <div>
        <button class="btn btn-sm" onClick={()=>{window.location.href = '/Packages' }}>نوێکردنەوەی پاکێج</button>
      </div>
    </div>

    <div class="p-4">
      <div class="text-white">بە ڕێژەی سەدی</div>
      <div class="text-sm">
        <div class="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": percentageUsed }}>{percentageUsed}%</div>
      </div>
    </div>

    <div class="p-4">
      <div class="text-white">ڕۆژی ماوە</div>
      <div class="text-lg">{elapsedDuration}</div>
    </div>
    <div class="p-4">
      <div class="text-white">ڕۆژی دەستپێک</div>
      <div class="text-lg">{startDate.format('DD/MM/YYYY')}</div>
    </div>
    <div class="p-4">
      <div class="text-white">ڕۆژی کۆتایی</div>
      <div class="text-lg">{endDate.format('DD/MM/YYYY')}</div>
    </div>
    
  </div>
</div>

      </Typography>
      </div>

      <div class="p-4 ">
        <img src={images} alt="" class="rounded-xl" />
        <h1 class="text-5xl font-bold mb-4 text-center mt-3">
          کۆدەکانی ئۆتۆمبێل چیە؟
        </h1>
        <p class="mb-2">
          obd2 بریتیە لە ڤێرژنی نوێی ئەو کۆدانەی کە ئۆتۆمبێلەکان لە کاتی هەبوونی
          گرفت و کێشە دەیگەڕێنەوە لە ڕێگەی ئەقڵی ئۆتۆمبێلەکەوە.
        </p>

        <p class="mb-2">
          لەم شوێنەوە ئامێری obd2 card code scanner لە ئۆتۆمبێل دەبەسترێ
          پەیوەندی لەگەڵ ئۆتۆمبێلەکە دروست دەکرێت. لەپاش پەیواندی کردن بە
          ئۆتۆمبێلەکەوە، ئەو کێشانەی کە هەیە لەڕێگەی کۆدەوە پیشانی بەکارهێنەری
          جیازەکە دەدرێت بەم شێوازەی خوارەوە.
        </p>
        <img src={images1} alt="" class="rounded-xl " />
        <p class="mb-2">
          کۆدەکان لە ستانداردا چەند شێوازێکیان هەیە بەم شێوەیە دەناسرێتەوە.
        </p>
        <p class="mb-2">بە گشتی دوو شێوازی سەرەکی کۆدمان هەیە:</p>
        <ul class="list-disc ml-6 mb-4">
          <li class="mb-2">
            کۆدەگشتیەکان: هەموو ئەو کۆدانە دەگرێتەوە کە لە ئۆتۆمبێلەکاندا وەک و
            یەکن بە واتایەکی تر لە کاتی هەبوونی کێشەدا لە هەموو .
          </li>
          <li class="mb-2">
            کۆدە تایبەتەکان: ئەو کۆدانە دەگرێتەوە کە هەر شەریکەیەک (نیسان،
            فۆرد،مارسیدز...) مانای جیاوازیان هەیە بۆیان بە واتایایەکی تر. مانای
            ژمارە ١ دێت.
          </li>
        </ul>
        <p class="mb-2">پیتەکان ماناکانیان بەم شێوازەیە:</p>
        <ul class="list-disc ml-6 mb-4">
          <li class="mb-2">
            <strong>p:</strong> پاوەرتراین (بزوێنەر و گێڕ)
          </li>
          <li class="mb-2">
            <strong>b:</strong> جەستە (مۆدیۆلی کۆنترۆڵکردنی جەستە، ئەیرباگ و
            هتد)
          </li>
          <li class="mb-2">
            <strong>c:</strong> شاسی (ABS، کۆنترۆڵی ڕاکێشان و هتد)
          </li>
          <li class="mb-2">
            <strong>U:</strong> تۆڕ (پەیوەندی لە نێوان مۆدیولەکانی کۆنترۆڵکردنی
            جۆراوجۆر)
          </li>
        </ul>
        <p class="mb-2">
          لە دوای ئەوەوە بەم شێوازە ژمارەکان دێن و جیا دەکرێنەوە.
        </p>
        <p class="mb-2">
          ئێمە لە دایاگنۆ کار تەنیا بە پێدانی کۆدەکان کێشەکان شیدەکەینەوە و زۆر
          جار کارئاسانی دەکەین بۆ دۆزینەوەی بە شێوازێکی خێرا و وە پێشنیار کردنی
          نزیکترین وەستا و شوێنی خزمەتگوزاری بۆ تۆی بەکارهێنەر.
        </p>
      </div>
    </div>
  );
};

export default Dashbord;
