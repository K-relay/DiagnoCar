import React, { useState } from "react";
import { getCookieValue } from "../../../../assets/js/userauth";
import axios from "axios";
//to create new fil ein react write rfce

function Account() {
  const access = getCookieValue("access");
  const [Loding, setLoding] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [Errorpass, setErrorpass] = useState(null);
  const [success, setsuccess] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "oldPassword") {
      setOldPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmNewPassword") {
      setConfirmNewPassword(value);
    }
  };

  const handleSubmit = (e) => {
    setErrorpass(null);
    setsuccess(null);
    setLoding(true)
    e.preventDefault();
    if(!newPassword || !confirmNewPassword || !oldPassword){
      setErrorpass("دڵنیا ببەوە کە هیچ خانەیەک بەتاڵ نیە");
      setLoding(false);
    }
    else if (newPassword !== confirmNewPassword ) {
      setErrorpass("وشەی تێپەڕی نوێ و دوبارەکردنەوەکەیت هەڵەیە");
    setLoding(false);

    } else {
      setErrorpass(null);
      const options = {
        method: "POST",
        url: "http://51.20.138.46/account/change_password/",
        headers: {
          Authorization: `Bearer ${access}`,
        },
        data: {
          old_password: oldPassword,
          new_password: newPassword,
          new_password1: confirmNewPassword,
        },
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
          if (response.data["message"] === "Password changed successfully.") {
            setsuccess("بەسەرکەوتووی گۆڕدرا");
    setLoding(false);

          } else {
            setErrorpass("کێشەیەک ڕویدا دوبارەی بکەوە");
    setLoding(false);

          }
        })
        .catch(function (error) {
          setErrorpass("کێشەیەک ڕویدا دوبارەی بکەوە");
    setLoding(false);

          // console.log(error);
          
        });
    }
  };

  return (
    <div>
      <div className="flex items-start justify-center h-screen " dir="rtl">
        <div className="w-full max-w-sm">
          <h1 className=" mb-3 text-xl text-center"> گۆڕینی وشەی نهێنی</h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="currentPassword"
              >
                وشەی نهێنی ئێستا 
              
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="currentPassword"
                type={showPassword? 'text' : 'password'}
                name="oldPassword"
                value={oldPassword}
                onChange={handleChange}
                placeholder="وشەی نهێنی ئێستا"
              />
                       
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="newPassword"
              >
                وشەی نهێنی نوێ
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                                type={showPassword? 'text' : 'password'}

                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                placeholder="وشەی نهێنی نوێ"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmNewPassword"
              >
                دوبارەکردنەوەی وشەی نهێنی نوێ
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmNewPassword"
                                type={showPassword? 'text' : 'password'}

                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={handleChange}
                placeholder="دوبارەکردنەوەی وشەی نهێنی نوێ"
              />
            </div>
            <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Show"> <g id="Vector"> <path d="M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>   </svg>
              </button>
            {success ? (
              <div className="text-danger mt-4 mb-3">
                <div role="alert" className="alert alert-success">
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
                  <span>{success}</span>
                </div>
              </div>
            ) : null}
            {Errorpass ? (
              <div className="text-danger mt-4 mb-3">
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
                  <span>{Errorpass}</span>
                </div>
              </div>
            ) : null}
              {Loding ? (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : null}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                گۆڕینی وشەی نهێنی
              </button>
           
            </div>
          </form>
       
        </div>
      </div>
    </div>
  );


}

export default Account;
