import React from 'react';
import '../assets/css/font.css';
import '../assets/css/tail.css';
import PrimarySearchAppBar from './smallcomp/smallcompindashbord/appbar';
import Dashbord from './smallcomp/parts/web/dashbord';
import { themfromcockie } from '../assets/js/theme'
import { getValueFromAccsess } from '../assets/js/userauth';
import Services from './smallcomp/parts/web/Services';
import AlertComponent from './smallcomp/smallcompindashbord/alert';
import { useLocation,  } from 'react-router-dom';
import Aboutus from './smallcomp/parts/web/Aboutus';
import Posts from './smallcomp/parts/web/posts';
import OnePost from './smallcomp/parts/web/onepost';

themfromcockie();
var usernameProfile = getValueFromAccsess('username');



function Home(param) {
  const id = param.part;
  let componentToRender;
  var stateOfAlert;


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  if(username){
    stateOfAlert=true;
  }else{
    stateOfAlert=false;
  }




  
  
  switch (id) {
    case '1':
      componentToRender = <Dashbord />;
      break;
    case '2':
      componentToRender = <Services  />;
      break;
    case '3':
      componentToRender = <Aboutus  />;
      break;
    case '4':
      componentToRender = <Posts  />;
      break;
    case '5':
      componentToRender = <OnePost  />;
      break;
    default:
      componentToRender = <div className='text-5xl text-center'> <h1 style={{ paddingTop: '150px' }}> نەدۆزرایەوە بگەڕێوە بۆ  <a href='/' className='link text-info' > پەڕەی سەرەتا </a> </h1> </div>;
      break;
  }


  return (



    <div className='bg-base-200 text-base-content'>
      <div style={{ position: 'fixed', top: '0px', width: '100%', zIndex: '20', }}>

        <PrimarySearchAppBar parameterName={usernameProfile} />


        <AlertComponent text={`  داخڵبونەکەت سەرکەوتوبوو بەخێربێیت  ${username} `  } state={stateOfAlert} />


      </div>
      <div  >
        {componentToRender}
      </div>


      
    </div>
  );
}

export default Home;
