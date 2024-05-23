import React, { useEffect, useState } from "react";
import Footerdashbord from "../../smallcompindashbord/footerdashbord";
import image from './../../../../assets/images/aboutusimage.jpg'
import questionsData  from './../../../../assets/jsons/questions.json'
import { getLang,getTranslatedText } from "../../../../assets/js/langecode";
import Packages from "../system/packages";
import Buttons from "../../smallcompindashbord/appdownlode";



const langecode=getLang();

function Aboutus() {

  const [questions, setQuestions] = useState([]);
  const [language] = useState(getLang); // Default language is English
  useEffect(() => {
    setQuestions(questionsData[language]);
  }, [language]);



    
  

  return (
    <div
      className="bg-base-200   "
      dir= {language === 'ku' ? "rtl" :("ltr") }  
    >
   


      <div className="hero min-h-screen text-white " style={{backgroundImage: `url(${image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">سڵاو ...</h1>
      <p className="mb-5  bg-base-200 bg-sky-500/20 rounded-lg p-7">
      {getTranslatedText(langecode, "Aboutus")}
      </p>
      <button className="btn btn-primary" > <a href="#info"> زانیاری لەسەر پڕۆژەکە  </a> </button>
    </div>
  </div>
</div>



<div className="pt-5 pb-5">

      <h1 className="text-center text-2xl " id="info" >
      {getTranslatedText(langecode, "Questions")}     </h1>

        {Object.keys(questions).map((key, index) => (
      

<div className="collapse collapse-arrow bg-base-200">
<input type="radio" name="my-accordion-2" defaultChecked /> 
<div className="collapse-title text-xl font-medium">
{questions[key].Question}
</div>
<div className="collapse-content"> 
  <p>{questions[key].Answer}</p>
</div>
</div>
        ))}

</div>
<div dir="ltr">

<Packages/>
{Buttons()}

</div>
      <footer>
        <Footerdashbord />
      </footer>
    </div>
  );
}

export default Aboutus;
