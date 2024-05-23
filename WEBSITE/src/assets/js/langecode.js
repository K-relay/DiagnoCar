import translations from "./../jsons/language.json";
var langCode = lange();


function lange() {
  if (getLanguageFromCookie() === null) {
    return "ku";
  } else {
    return getLanguageFromCookie();
  }
}


const getTranslatedText = (langecode, key) => {
  return translations[langecode][key] || key; // Return translation or key if not found
};


function getLanguageFromCookie() {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "selectedLanguage") {
      return value;
    }
  }
  return null;
}

function setLanguageCookie(lang) {
  document.cookie = `selectedLanguage=${lang}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
  langCode = lang;
}

var languageOptions = [
  { code: "ku", label: "زمانی کوردی" },
  { code: "ar", label: " العربیە" },
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
];

function changeTo(data) {
  langCode = data;
  setLanguageCookie(data);
}

function getLang() {
  return langCode;
}

function getLangeoptions() {
  return languageOptions;
}

export { changeTo, getLang, getLangeoptions,getTranslatedText };
