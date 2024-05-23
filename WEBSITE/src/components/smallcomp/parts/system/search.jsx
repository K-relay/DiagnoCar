import React, { useState } from "react";
import axios from "axios";
import { getCookieValue } from "../../../../assets/js/userauth";
import { codeTypeAnalyze,getCodeDescribe,getCodeType,getError,manufactorerDetec,setCode,setError, setManufacture } from "../../../../assets/js/codeValidation";

export default function Search() {
  const [Loding, setLoding] = useState(false);
  const [componentRender, setComponentRender] = useState(null);
  const [componentRenderGeneric, setcomponentRenderGeneric] = useState(null);
  const [error, SetErrorONscreen] = useState(null);
  


  function NewFucForGeneric(parameters) {
   setcomponentRenderGeneric(parameters);
  }
  function newfuc(parameters) {
    setComponentRender(parameters);
  }

  const [formData, setFormData] = useState({
    code: "",
    manifacture: "0",
  });

  const access = getCookieValue("access");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoding(true);
    setCode(formData["code"]);
    setManufacture(formData["manifacture"]);
   

   if ( codeTypeAnalyze(formData["code"].toUpperCase()) &&  manufactorerDetec(formData["manifacture"])) {
var options;

    if(getCodeType()==="گشتی"){
     options = {
      method: 'GET',
      url: `http://51.20.138.46/code/${formData["code"].toUpperCase()}`,
      headers: {
        Authorization: `Bearer ${access}`
      }
    };
    axios
    .request(options)
    .then(function (response) {
      const values = response.data;

    
      if (Object.keys(values).length > 0) {
     
       setError(null);
       NewFucForGeneric(response.data);
       setLoding(false);
      } else {
        setError(" ببورە ئەم کۆدە نەدۆزرایەوە لە سیستمی داتا بەیسدا");
        setLoding(false);
        SetErrorONscreen(getError());
      }
    })
    .catch(function (error) {
      setError("ببورە کێشەیەک هەیە لە سیستمەکەدا تکایە دوبارە هەوڵ بدەوە");
      setLoding(false);
      SetErrorONscreen(getError());
    });
    SetErrorONscreen(getError());
   }
    else {
     options = {
      method: "POST",
      url: "http://51.20.138.46/code/manifacture/",
      headers: {
       Authorization: `Bearer ${access}`,
      },
      data: {code: formData['code'].toUpperCase(), manifacture: formData['manifacture']}
     };
     axios
      .request(options)
      .then(function (response) {
        const values = response.data;
      
        if (values.length > 0) {
       
         setError(null);
         newfuc(response.data);
         setLoding(false);
        } else {
          setError(" ببورە ئەم کۆدە نەدۆزرایەوە لە سیستمی داتا بەیسدا");
          setLoding(false);
          SetErrorONscreen(getError());
        }
      })
      .catch(function (error) {
        setError("ببورە کێشەیەک هەیە لە سیستمەکەدا تکایە دوبارە هەوڵ بدەوە");
        setLoding(false);
        SetErrorONscreen(getError());
      });
      SetErrorONscreen(getError());
     } 
    
    } else {
    setError(getError());
    setLoding(false);
    SetErrorONscreen(getError());
}
   
  };

  return (
    <div className="bg-base-200 text-base-content" dir="rtl">
      <h4 className="text-center text-4xl mb-3">گەڕان</h4>

      <div sx={{ display: "flex" }}>
        <form onSubmit={handleSubmit} className="flex">
          <select
            name="manifacture"
            onChange={handleChange}
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0  z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            <option value="0" selected disabled>
              جۆری ئۆتۆمبێل
            </option>
            <option value="Acura">Acura</option>
  <option value="Audi">Audi</option>
  <option value="BMW">BMW</option>
  <option value="Chevy">Chevy</option>
  <option value="Jeep">Chrysler & Jeep</option>
  <option value="Dodge">Dodge</option>
  <option value="Ford">Ford</option>
  <option value="GM">GM</option>
  <option value="GMC">GMC</option>
  <option value="Honda">Honda</option>
  <option value="Hyundai">Hyundai</option>
  <option value="Nissan">Nissan & Infinity</option>
  <option value="Kia">Kia</option>
  <option value="Mazda">Mazda</option>
  <option value="Mitsubishi">Mitsubishi</option>
  <option value="Ram">Ram</option>
  <option value="Toyota">Toyota</option>
  <option value="VW">VW</option>
          </select>

          <div className="relative flex-grow">
            <input
              name="code"
              onChange={handleChange}
              type="search"
              id="search_code"
              className="block p-2.5  w-full z-20 text-sm  rounded-e-lg  border-s-2 border  focus:ring-blue-500 focus:border-blue-500 dark:bg-primary-content dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
              placeholder="کۆدەکەت لێرە بنوسە"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  trokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>

      {Loding ? (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : null}
      {componentRender &&
        error === null &&
        typeof componentRender === "object" && (
          <div className="h-screen">
           
            <div></div>
            <div className="w-80 mt-5 m-auto lg:mt-5 max-w-sm">
              <img
                src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
                alt=""
                className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
              />
              <div className="bg-white shadow-2xl rounded-b-3xl pb-3">
                <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
                  {componentRender[0].code}{" "}
                </h2>
                <div className="w-5/6 m-auto">
                  <p className="text-center text-gray-500 pt-5">
                    {componentRender[0].description}
                  </p>
                </div>
                <div className=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl text-center">
                  {componentRender[0].manifacture} {getCodeDescribe()}
                </div>
              </div>
            </div>
          </div>
        )}


{componentRenderGeneric && error === null && (
          <div className="h-screen">
            
            <div></div>
            <div className="w-80 mt-5 m-auto lg:mt-5 max-w-sm">
              <img
                src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
                alt=""
                className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
              />
              <div className="bg-white shadow-2xl rounded-b-3xl pb-3">
                <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
                  {componentRenderGeneric.code}{" "}
                </h2>
                <div className="w-5/6 m-auto">
                  <p className="text-center text-gray-500 pt-5">
                    {componentRenderGeneric.description}
                  </p>
                </div>
                <div className=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl text-center">
                   {getCodeDescribe()}
                </div>
              </div>
            </div>
          </div>
        )}
      {error ? (
        <div className="text-danger mt-4">
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
