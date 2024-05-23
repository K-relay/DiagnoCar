import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../assets/js/Signupvalidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    username: '',
    phoneNumber: '',
    Lastname: '',
    Firstname: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values)); // Assuming Validation function is correctly defined

    try {
      if (!errors.username && !errors.password && !errors.email) {
        const options = {
          method: 'POST',
          url: 'http://51.20.138.46/account/register/',
          data: {username: values.username, email: values.email, password: values.password, phoneNumber: values.phoneNumber,first_name:values.Firstname,last_name:values.Lastname }
        };
        
        axios.request(options).then(function (response) {
        console.log(response.data);
        navigate('/login'); 

        }).catch(function (error) {
          console.error(error);
        });



      } else {
        console.log('Validation errors:', errors);
        // Handle validation errors or display error messages to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors or display error messages to the user
    }
  };

  return (<div className="max-w-xs mx-auto flex justify-center items-center min-h-screen">
  <form onSubmit={handleSubmit} className="w-80 md:w-96 p-4 border rounded-md shadow-md">
    <h1 className="text-4xl text-center mb-4">Sign-Up</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <input
        required
          name="username"
          onChange={handleInput}
          type="text"
          placeholder="بەکاربەر(یوزەرنەیم)"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {/* Add error handling UI here */}
      </div>
      <div>
        <input
        required
          name="phoneNumber"
          onChange={handleInput}
          type="tel"
          placeholder="ژمارەی موبایل "
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {/* Add error handling UI here */}
      </div>
      <div>
        <input
        required
          name="password"
          onChange={handleInput}
          type="password"
          placeholder="وشەی تێپەڕ"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {/* Add error handling UI here */}
      </div>
      <div>
        <input
        required
          name="Firstname"
          onChange={handleInput}
          type="Firstname"
          placeholder=" ناوی یەکەم"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {/* Add error handling UI here */}
      </div>
      <div>
        <input
        required
          name="Lastname"
          onChange={handleInput}
          type="Lastname"
          placeholder=" ناوی دووەم"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {/* Add error handling UI here */}
      </div>
      <div>
        <input
        required
          name="email"
          onChange={handleInput}
          type="email"
          placeholder="ئیمەیڵ"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        {/* Add error handling UI here */}
      </div>
    </div>

    <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-md hover:bg-blue-600" type="submit">
      دروستکردنی هەژمار
    </button>

    <p className="text-sm text-gray-500 text-center mt-2">
     ئامادەی بۆ  <Link to={'/Login'} className="font-bold">داخڵبوون</Link>
    </p>
  </form>
</div>

  
  );
}

export default Signup;
