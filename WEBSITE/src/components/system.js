import React, { useEffect, useState } from 'react';
import '../assets/css/font.css';
import { themfromcockie } from '../assets/js/theme';
import { getValueFromAccsess,getCookieValue } from '../assets/js/userauth';
import Dashbord from './smallcomp/parts/system/dashbord';
import Search from './smallcomp/parts/system/search';
import PersistentDrawerRight from './smallcomp/smallcomponentserch/appbarAndDrawer';
import { styled } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';
import Account from './smallcomp/parts/system/account';
import axios from 'axios';

themfromcockie();


  
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: "relative",
  })
);

function SearchcodeSystem(param) {
 
  const [mainData, setMainData] = useState([]);
  var usernameProfile = getValueFromAccsess('username');
  var access = getCookieValue('access');
   
  useEffect(() => {
    if (usernameProfile) {
      const options = {
        method: 'GET',
        url: 'http://51.20.138.46/subscription/info',
        headers: {
          Authorization: `Bearer ${access}`
        }
      };

      axios.request(options)
        .then(function (response) {
          setMainData(response.data);
        })
        .catch(function (error) {
          window.location.href = '/packages';
        });
    } else {
      window.location.href = '/packages';
    }
  }, [access, usernameProfile]); // Empty dependency array means this effect will run only once on mount

  const id = param.part;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let componentToRender;

  switch (id) {
    case '1':
      componentToRender = <Dashbord username={usernameProfile} mainData={mainData}  />;
      break;
    case '2':
      componentToRender = <Search username={usernameProfile}  />;
      break;
    case '3':
      componentToRender = <Account />;
      break;
    default:
      componentToRender = <div class="text-center text-2xl">ئەم بەشە نەدۆزرایەوە بگەڕێوە بۆ پەڕەی  <a href='./' class="link text-info">سەرەتا </a></div>;
      break;
  }

  return (


    
    <Box sx={{ display: "flex" }} className='bg-base-200 text-base-content'>
    <CssBaseline />
   
   <Main open={open} sx={{marginTop:'80px'}}>
    
      {componentToRender}
   </Main>

      <PersistentDrawerRight username={usernameProfile} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}  />
    

  </Box>
  );
}

export default SearchcodeSystem;
